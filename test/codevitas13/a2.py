import sys

raw_lines = [ln.rstrip("\n") for ln in sys.stdin.read().splitlines() if ln.strip()]
first = raw_lines[0].split()
row_count, column_count = int(first[0]), int(first[1])

grid = []
p = 1
while len(grid) < row_count and p < len(raw_lines):
    line = raw_lines[p].replace(" ", "")
    if len(line) >= column_count:
        grid.append(line[:column_count])
    p += 1

def inside(r, c):
    return 0 <= r < row_count and 0 <= c < column_count

vertical_axes, horizontal_axes = set(), set()
for r in range(row_count):
    for c in range(column_count):
        if grid[r][c] == 'R':
            if (r > 0 and grid[r-1][c] == 'R') or (r+1 < row_count and grid[r+1][c] == 'R'):
                vertical_axes.add(c)
            if (c > 0 and grid[r][c-1] == 'R') or (c+1 < column_count and grid[r][c+1] == 'R'):
                horizontal_axes.add(r)

def is_cable(r, c):
    return inside(r, c) and grid[r][c] == 'C'

def flips_needed(seq):
    s = []
    for ch in seq:
        if s and s[-1] == ch:
            s.pop()
        else:
            s.append(ch)
    return len(s) // 2

answer = 0

for c in vertical_axes:
    sequence = []
    for r in range(row_count):
        if is_cable(r, c-1) and is_cable(r, c+1) and grid[r][c] in ('R', 'C'):
            sequence.append(grid[r][c])
    if sequence:
        answer += flips_needed(sequence)

for r in horizontal_axes:
    sequence = []
    for c in range(column_count):
        if is_cable(r-1, c) and is_cable(r+1, c) and grid[r][c] in ('R', 'C'):
            sequence.append(grid[r][c])
    if sequence:
        answer += flips_needed(sequence)

print(answer)
