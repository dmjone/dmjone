#!/usr/bin/env bash
# -*- bash -*-
# backup2way.sh — CPU-aware, deadline-safe, two-way backup with batching & parallelism
# Guided by Prashant Singh
# (c) 2025, Divya Mohan
# Runs daily at 02:55 via cron.
# Waits for CPU usage < 50% before starting (but won’t miss the 04:00 hard deadline).
# Batch size = 50 files, processed with multithreading; dynamically reduces the batch/threads if CPU > 80%.
# Two-way:
# From source → backup: copies new/updated files and writes as actualfilename_TIMESTAMP.ext, preserving directory structure.
# From backup → source: only copies files whose base doesn’t exist in source (prevents echoing your own backup artifacts back).
# Priority escalation: starts at lowest (nice/ionice), jumps to max (and tries chrt if root) when < 30 minutes remain.
# Integrity: fsync + optional SHA-256 verification + retries.
# No overlaps: uses flock.
# Detailed logs: /var/log/backup2way.log.

# 55 2 * * * /usr/local/sbin/backup2way.sh >> /var/log/backup2way.log 2>&1


set -Eeuo pipefail
IFS=$'\n\t'

##### CONFIG #####
SRC="/home/dmj/incomingdata"
DST="/cloud/backup"
LOG="/var/log/backup2way.log"
LOCK="/var/run/backup2way.lock"

# Batching / parallelism
INITIAL_BATCH=50           # target batch size
MIN_BATCH=5
INITIAL_THREADS=10         # workers per batch
MAX_THREADS=24             # cap to avoid fork bombs

# CPU policy (percent busy)
CPU_START_THRESHOLD=50     # wait until busy% < 50 to begin (unless deadline risk)
CPU_THROTTLE_HIGH=80       # if busy% > 80, downshift batch/threads
CPU_POLL_SECS=15

# Deadlines (local time of the server)
DEADLINE_TIME="04:00"      # must finish before 04:00
ESCALATE_REMAIN_SECS=$((30*60))  # escalate when <= 30m remain

# Copy / verify
RETRIES=3
RETRY_BACKOFF_SECS=5
VERIFY_SHA256=1            # 1 = verify checksum; 0 = skip (faster)
PRESERVE="--preserve=timestamps"
CP_OPTS=(--reflink=auto)   # cheap copy if FS supports

# File selection
FIND_OPTS=(-type f)        # include everything that's a file

##### UTIL #####
log() { printf "[%s] %s\n" "$(date '+%Y-%m-%d %H:%M:%S%z')" "$*" | tee -a "$LOG" >&2; }

# Acquire non-overlapping lock
mkdir -p "$(dirname "$LOCK")" "$(dirname "$LOG")"
exec 9>"$LOCK"
if ! flock -n 9; then
  log "Another run is active. Exiting."
  exit 0
fi

# Trap errors
on_err() { log "ERROR at line $1. Exiting with failure."; }
trap 'on_err $LINENO' ERR

# Deadline helpers
now_epoch() { date +%s; }
deadline_epoch() {
  local d
  d="$(date -d "today $DEADLINE_TIME" +%s)"
  # If already past today's deadline, consider tomorrow's (manual runs)
  if (( $(now_epoch) >= d )); then
    date -d "tomorrow $DEADLINE_TIME" +%s
  else
    echo "$d"
  fi
}
remain_secs() { echo $(( $(deadline_epoch) - $(now_epoch) )); }

# CPU busy percent (integer 0..100) using /proc/stat two-sample method
cpu_busy_pct() {
  read -r _ u n s i io irq si st _ _ < /proc/stat
  local idle1=$((i+io)); local total1=$((u+n+s+i+io+irq+si+st))
  sleep 1
  read -r _ u2 n2 s2 i2 io2 irq2 si2 st2 _ _ < /proc/stat
  local idle2=$((i2+io2)); local total2=$((u2+n2+s2+i2+io2+irq2+si2+st2))
  local id=$((idle2-idle1)); local td=$((total2-total1))
  if (( td == 0 )); then echo 100; else echo $(( (100*(td-id)) / td )); fi
}

# Priority controls
CURRENT_NICE=19
IONICE_ARGS=(-c3)  # idle
CHRT_CMD=()        # empty unless escalated

set_low_priority() {
  CURRENT_NICE=19
  IONICE_ARGS=(-c3)
  CHRT_CMD=()
}

set_high_priority() {
  # Try to max out if root; otherwise do best effort
  if (( EUID == 0 )); then
    CURRENT_NICE=-20
    IONICE_ARGS=(-c1 -n0)
    if command -v chrt >/dev/null 2>&1; then
      CHRT_CMD=(chrt -f 99)
    fi
  else
    # Non-root cannot decrease niceness; keep neutral CPU, best IO
    CURRENT_NICE=0
    IONICE_ARGS=(-c2 -n0)
    CHRT_CMD=()
    log "Not running as root; high-priority escalation is limited."
  fi
}

# Timestamp helpers
ts_now() { date +"%Y%m%dT%H%M%S"; }

# Strip trailing _YYYYmmddTHHMMSS from a base name (no extension)
strip_ts_suffix() {
  # input: base (no extension)
  sed -E 's/_[0-9]{8}T?[0-9]{6}$//'
}

# Build dest name with timestamp
with_ts() {
  # args: "name_without_ext" "ext_maybe_empty"
  local name="$1" ext="$2" stamp; stamp="$(ts_now)"
  if [[ -n "$ext" ]]; then
    printf "%s_%s.%s" "$name" "$stamp" "$ext"
  else
    printf "%s_%s" "$name" "$stamp"
  fi
}

# Split filename to base + ext (ext may be empty)
split_name() {
  # echoes "<base>|<ext>"
  local fn="$1" base ext
  if [[ "$fn" == *.* ]]; then
    base="${fn%.*}"; ext="${fn##*.}"
  else
    base="$fn"; ext=""
  fi
  printf "%s|%s" "$base" "$ext"
}

# Safe mkdir -p for a path's directory
mkparent() { mkdir -p "$(dirname "$1")"; }

##### Worker (copy + verify + retries) #####
# We'll emit a temporary worker to avoid xargs function scoping pitfalls.
WORKER="/tmp/backup2way_worker.$$"
cat > "$WORKER" <<'EOS'
#!/usr/bin/env bash
set -Eeuo pipefail
src="$1"
dst="$2"
preserve="$3"
verify="$4"
retries="$5"
backoff="$6"

mkdir -p "$(dirname "$dst")"
tmp="$dst.__tmp__$$"

attempt=0
while (( attempt <= retries )); do
  if cp ${preserve} --reflink=auto "$src" "$tmp"; then
    sync -f "$(dirname "$tmp")" || true
    if [[ "$verify" == "1" ]]; then
      # fast size check first
      if [[ "$(stat -c%s "$src")" != "$(stat -c%s "$tmp")" ]]; then
        ok=0
      else
        srcsum="$(sha256sum "$src" | awk '{print $1}')"
        dstsum="$(sha256sum "$tmp" | awk '{print $1}')"
        [[ "$srcsum" == "$dstsum" ]] && ok=1 || ok=0
