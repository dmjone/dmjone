divyamohan1993_gmail_com@fast-vm-quick-delete-20250912-20251012-214402:~$ sudo bash -lc 'curl -fsSL https://raw.githubusercontent.com/divyamohan1993/dmj-one-pdf-authenticator/refs/heads/main/one-click-deployment/static/autoconfig.sh?nocache=$(date +%s) | sudo bash -s -- 0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0'
[+] Running Part 1 installer...
[+] Updating apt and installing base packages...
Hit:1 https://deb.nodesource.com/node_22.x nodistro InRelease
Hit:2 http://security.ubuntu.com/ubuntu questing-security InRelease                                           
Hit:3 http://asia-south2-c.gce.clouds.archive.ubuntu.com/ubuntu questing InRelease                            
Hit:4 http://asia-south2-c.gce.clouds.archive.ubuntu.com/ubuntu questing-updates InRelease
Hit:5 http://asia-south2-c.gce.clouds.archive.ubuntu.com/ubuntu questing-backports InRelease
Reading package lists... Done
[+] Node: v22.21.1; npm: 10.9.4
[+] Wrangler: 4.43.0
usermod: no changes
[+] Removing legacy/duplicate nginx site links to avoid 'conflicting server name' ...
[+] Waiting 2 seconds...
[+] Create minimal stub HTTP blocks for Let's Encrypt if they don't already exist
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
[i] Generating ocsp, signer, tsa and pki domain's LetsEncrypt Certificate
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Certificate not yet due for renewal
Deploying certificate
Successfully deployed certificate for ocsp.dmj.one to /etc/nginx/sites-enabled/ocsp.dmj.one.conf
Congratulations! You have successfully enabled HTTPS on https://ocsp.dmj.one

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Certificate not yet due for renewal
Deploying certificate
Successfully deployed certificate for pki.dmj.one to /etc/nginx/sites-enabled/pki.dmj.one.conf
Congratulations! You have successfully enabled HTTPS on https://pki.dmj.one

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Certificate not yet due for renewal
Deploying certificate
Successfully deployed certificate for signer.dmj.one to /etc/nginx/sites-enabled/signer.dmj.one.conf
Congratulations! You have successfully enabled HTTPS on https://signer.dmj.one

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Certificate not yet due for renewal
Deploying certificate
Successfully deployed certificate for tsa.dmj.one to /etc/nginx/sites-enabled/tsa.dmj.one.conf
Congratulations! You have successfully enabled HTTPS on https://tsa.dmj.one

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
[+] Installing dmj-fetch-fresh helper...
[+] Checking Wrangler auth (service acct: dmjsvc)...
[✓] Wrangler already authenticated (service user). You can proceed to Part 2.
[+] Checking Wrangler for 'dmjsvc'...
[✓] Wrangler is logged in as Virtual WildHogs. Proceeding to Part 2.
[+] Running Part 2...
######################################################################## 100.0%
######################################################################## 100.0%
Hard reset confirmed. Everything Deleted. Proceeding with full PKI reissuance...
[i] Verbose logging enabled. Log: /var/log/dmj/part2-20251031T082706.log
trap _dmj_trace_fail ERR
trap 'say "[!] SIGPIPE at ${BASH_SOURCE[1]:-${BASH_SOURCE[0]}}:${BASH_LINENO[0]:-$LINENO} running: ${BASH_COMMAND}"' PIPE
WR=/usr/local/bin/dmj-wrangler
'[' '!' -x /usr/local/bin/dmj-wrangler ']'
'[' -z /usr/local/bin/dmj-wrangler ']'
echo '[+] Verifying Wrangler auth...'
[+] Verifying Wrangler auth...
/usr/local/bin/dmj-wrangler whoami
echo '[+] Resolving D1 database name for id 0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0 ...'
[+] Resolving D1 database name for id 0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0 ...
+/usr/local/bin/dmj-wrangler d1 list --json
D1_LIST_JSON='[
  {
    "uuid": "f568c6bc-87c8-4619-9fbf-1f322860d2c3",
    "name": "rbacblog-db",
    "created_at": "2025-02-08T11:50:19.184Z",
    "version": "production",
    "num_tables": 4,
    "file_size": 380928,
    "jurisdiction": null
  },
  {
    "uuid": "0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0",
    "name": "dmjone",
    "created_at": "2024-11-01T20:04:25.280Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 94208,
    "jurisdiction": null
  },
  {
    "uuid": "ca2f621a-255b-485f-b880-fef0d661a263",
    "name": "medicine-tracker-db",
    "created_at": "2024-10-31T13:51:16.398Z",
    "version": "production",
    "num_tables": 2,
    "file_size": 24576,
    "jurisdiction": null
  },
  {
    "uuid": "91c2f64a-7c2e-465b-8bb6-5bb358a92ec1",
    "name": "broad-star-043b-db",
    "created_at": "2024-10-18T12:23:06.455Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 24576,
    "jurisdiction": null
  },
  {
    "uuid": "5fcf024a-8213-46bc-9f62-3a000e496081",
    "name": "self-checkin-attendance-db",
    "created_at": "2024-10-08T20:17:11.518Z",
    "version": "production",
    "num_tables": 4,
    "file_size": 303104,
    "jurisdiction": null
  },
  {
    "uuid": "610926e3-83f0-4632-9b2b-1fdeb54914fa",
    "name": "google_log",
    "created_at": "2024-07-27T11:00:43.907Z",
    "version": "production",
    "num_tables": 3,
    "file_size": 5947392,
    "jurisdiction": null
  },
  {
    "uuid": "fca04616-7d5c-4a22-8bf5-9d8bdb4032b0",
    "name": "broken-smoke-aaa5-db",
    "created_at": "2024-05-09T12:42:25.901Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 24576,
    "jurisdiction": null
  }
]'
'[' -z '[
  {
    "uuid": "f568c6bc-87c8-4619-9fbf-1f322860d2c3",
    "name": "rbacblog-db",
    "created_at": "2025-02-08T11:50:19.184Z",
    "version": "production",
    "num_tables": 4,
    "file_size": 380928,
    "jurisdiction": null
  },
  {
    "uuid": "0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0",
    "name": "dmjone",
    "created_at": "2024-11-01T20:04:25.280Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 94208,
    "jurisdiction": null
  },
  {
    "uuid": "ca2f621a-255b-485f-b880-fef0d661a263",
    "name": "medicine-tracker-db",
    "created_at": "2024-10-31T13:51:16.398Z",
    "version": "production",
    "num_tables": 2,
    "file_size": 24576,
    "jurisdiction": null
  },
  {
    "uuid": "91c2f64a-7c2e-465b-8bb6-5bb358a92ec1",
    "name": "broad-star-043b-db",
    "created_at": "2024-10-18T12:23:06.455Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 24576,
    "jurisdiction": null
  },
  {
    "uuid": "5fcf024a-8213-46bc-9f62-3a000e496081",
    "name": "self-checkin-attendance-db",
    "created_at": "2024-10-08T20:17:11.518Z",
    "version": "production",
    "num_tables": 4,
    "file_size": 303104,
    "jurisdiction": null
  },
  {
    "uuid": "610926e3-83f0-4632-9b2b-1fdeb54914fa",
    "name": "google_log",
    "created_at": "2024-07-27T11:00:43.907Z",
    "version": "production",
    "num_tables": 3,
    "file_size": 5947392,
    "jurisdiction": null
  },
  {
    "uuid": "fca04616-7d5c-4a22-8bf5-9d8bdb4032b0",
    "name": "broken-smoke-aaa5-db",
    "created_at": "2024-05-09T12:42:25.901Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 24576,
    "jurisdiction": null
  }
]' ']'
'[' '[
  {
    "uuid": "f568c6bc-87c8-4619-9fbf-1f322860d2c3",
    "name": "rbacblog-db",
    "created_at": "2025-02-08T11:50:19.184Z",
    "version": "production",
    "num_tables": 4,
    "file_size": 380928,
    "jurisdiction": null
  },
  {
    "uuid": "0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0",
    "name": "dmjone",
    "created_at": "2024-11-01T20:04:25.280Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 94208,
    "jurisdiction": null
  },
  {
    "uuid": "ca2f621a-255b-485f-b880-fef0d661a263",
    "name": "medicine-tracker-db",
    "created_at": "2024-10-31T13:51:16.398Z",
    "version": "production",
    "num_tables": 2,
    "file_size": 24576,
    "jurisdiction": null
  },
  {
    "uuid": "91c2f64a-7c2e-465b-8bb6-5bb358a92ec1",
    "name": "broad-star-043b-db",
    "created_at": "2024-10-18T12:23:06.455Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 24576,
    "jurisdiction": null
  },
  {
    "uuid": "5fcf024a-8213-46bc-9f62-3a000e496081",
    "name": "self-checkin-attendance-db",
    "created_at": "2024-10-08T20:17:11.518Z",
    "version": "production",
    "num_tables": 4,
    "file_size": 303104,
    "jurisdiction": null
  },
  {
    "uuid": "610926e3-83f0-4632-9b2b-1fdeb54914fa",
    "name": "google_log",
    "created_at": "2024-07-27T11:00:43.907Z",
    "version": "production",
    "num_tables": 3,
    "file_size": 5947392,
    "jurisdiction": null
  },
  {
    "uuid": "fca04616-7d5c-4a22-8bf5-9d8bdb4032b0",
    "name": "broken-smoke-aaa5-db",
    "created_at": "2024-05-09T12:42:25.901Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 24576,
    "jurisdiction": null
  }
]' = null ']'
+echo '[
  {
    "uuid": "f568c6bc-87c8-4619-9fbf-1f322860d2c3",
    "name": "rbacblog-db",
    "created_at": "2025-02-08T11:50:19.184Z",
    "version": "production",
    "num_tables": 4,
    "file_size": 380928,
    "jurisdiction": null
  },
  {
    "uuid": "0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0",
    "name": "dmjone",
    "created_at": "2024-11-01T20:04:25.280Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 94208,
    "jurisdiction": null
  },
  {
    "uuid": "ca2f621a-255b-485f-b880-fef0d661a263",
    "name": "medicine-tracker-db",
    "created_at": "2024-10-31T13:51:16.398Z",
    "version": "production",
    "num_tables": 2,
    "file_size": 24576,
    "jurisdiction": null
  },
  {
    "uuid": "91c2f64a-7c2e-465b-8bb6-5bb358a92ec1",
    "name": "broad-star-043b-db",
    "created_at": "2024-10-18T12:23:06.455Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 24576,
    "jurisdiction": null
  },
  {
    "uuid": "5fcf024a-8213-46bc-9f62-3a000e496081",
    "name": "self-checkin-attendance-db",
    "created_at": "2024-10-08T20:17:11.518Z",
    "version": "production",
    "num_tables": 4,
    "file_size": 303104,
    "jurisdiction": null
  },
  {
    "uuid": "610926e3-83f0-4632-9b2b-1fdeb54914fa",
    "name": "google_log",
    "created_at": "2024-07-27T11:00:43.907Z",
    "version": "production",
    "num_tables": 3,
    "file_size": 5947392,
    "jurisdiction": null
  },
  {
    "uuid": "fca04616-7d5c-4a22-8bf5-9d8bdb4032b0",
    "name": "broken-smoke-aaa5-db",
    "created_at": "2024-05-09T12:42:25.901Z",
    "version": "production",
    "num_tables": 1,
    "file_size": 24576,
    "jurisdiction": null
  }
]'
+jq -r --arg ID 0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0 '
  .[] | select((.uuid==$ID) or (.id==$ID) or (.database_id==$ID)) | .name // .database_name'
+head -n1
D1_NAME=dmjone
'[' -z dmjone ']'
'[' dmjone = null ']'
echo '[✓] D1: name=dmjone, id=0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0'
[✓] D1: name=dmjone, id=0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0
SECRETS_FILE=/etc/dmj/dmj-worker.secrets
'[' '!' -f /etc/dmj/dmj-worker.secrets ']'
source /etc/dmj/dmj-worker.secrets
+SIGNING_GATEWAY_HMAC_KEY=zH4oAdsfIQCVl6lrWKc0PLa1vfZj1NUVmKuC6AsqrO0=
+SESSION_HMAC_KEY=gpA6Te4qHnHa1hkMI4pgY8cL//qdbJLxU+vQtvb38AE=
+TOTP_MASTER_KEY=V56/iY8NkfHTzM5VsUbMVmnruSs/oEd7TJ9A401izQU=
'[' 1 = 1 ']'
'[' 1 = 1 ']'
say '[i] Rotating SESSION_HMAC_KEY to invalidate existing admin sessions...'
printf '%s\n' '[i] Rotating SESSION_HMAC_KEY to invalidate existing admin sessions...'
[i] Rotating SESSION_HMAC_KEY to invalidate existing admin sessions...
+openssl rand -base64 32
SESSION_HMAC_KEY=uDNjBdU6AWecIj7TD3Ar7Mj6PhTUsxfbcMAqXrIkTDg=
sudo tee /etc/dmj/dmj-worker.secrets
sudo chmod 600 /etc/dmj/dmj-worker.secrets
source /etc/dmj/dmj-worker.secrets
+SIGNING_GATEWAY_HMAC_KEY=zH4oAdsfIQCVl6lrWKc0PLa1vfZj1NUVmKuC6AsqrO0=
+SESSION_HMAC_KEY=uDNjBdU6AWecIj7TD3Ar7Mj6PhTUsxfbcMAqXrIkTDg=
+TOTP_MASTER_KEY=V56/iY8NkfHTzM5VsUbMVmnruSs/oEd7TJ9A401izQU=
+openssl rand -hex 6
ADMIN_PATH=admin-a86dd6f6bb9f
ADMIN_PATH_FILE=/var/lib/dmj/admin-path.txt
printf '%s\n' admin-a86dd6f6bb9f
sudo tee /var/lib/dmj/admin-path.txt
sudo chmod 600 /var/lib/dmj/admin-path.txt
say '[i] Admin portal path for this deploy: /admin-a86dd6f6bb9f'
[i] Admin portal path for this deploy: /admin-a86dd6f6bb9f
printf '%s\n' '[i] Admin portal path for this deploy: /admin-a86dd6f6bb9f'
for v in SIGNING_GATEWAY_HMAC_KEY SESSION_HMAC_KEY TOTP_MASTER_KEY
'[' -z zH4oAdsfIQCVl6lrWKc0PLa1vfZj1NUVmKuC6AsqrO0= ']'
for v in SIGNING_GATEWAY_HMAC_KEY SESSION_HMAC_KEY TOTP_MASTER_KEY
'[' -z uDNjBdU6AWecIj7TD3Ar7Mj6PhTUsxfbcMAqXrIkTDg= ']'
for v in SIGNING_GATEWAY_HMAC_KEY SESSION_HMAC_KEY TOTP_MASTER_KEY
'[' -z V56/iY8NkfHTzM5VsUbMVmnruSs/oEd7TJ9A401izQU= ']'
ADMIN_KEY_FILE=/var/lib/dmj/admin-key.txt
'[' 1 = 1 ']'
say '[i] Rotating admin portal key for this deploy...'
printf '%s\n' '[i] Rotating admin portal key for this deploy...'
[i] Rotating admin portal key for this deploy...
+openssl rand -hex 14
ADMIN_PORTAL_KEY=caeb1f1e9ce7f6ebd5c2bd128647
printf '%s\n' caeb1f1e9ce7f6ebd5c2bd128647
sudo tee /var/lib/dmj/admin-key.txt
sudo chmod 600 /var/lib/dmj/admin-key.txt
echo '[+] Deriving PBKDF2 hash for admin portal key...'
[+] Deriving PBKDF2 hash for admin portal key...
+node -e 'const c=require("node:crypto");const key=process.argv[1];const iters=100000;const salt=c.randomBytes(16);const dk=c.pbkdf2Sync(Buffer.from(key,"utf8"),salt,iters,32,"sha256");console.log(`pbkdf2$sha256$${iters}$${salt.toString("base64")}$${dk.toString("base64")}`);' caeb1f1e9ce7f6ebd5c2bd128647
ADMIN_HASH='pbkdf2$sha256$100000$ObrGcVg2ltWMG1mg1sPUwQ==$GdPzFnPQg4Ri2q5WsxU2MVaiSqoR017nD7E0HCc8kcQ='
echo '[+] Preparing signer microservice at /opt/dmj/signer-vm ...'
[+] Preparing signer microservice at /opt/dmj/signer-vm ...
sudo mkdir -p /opt/dmj/signer-vm/src/main/java/one/dmj/signer
sudo tee /opt/dmj/signer-vm/pom.xml
sudo tee /opt/dmj/signer-vm/src/main/java/one/dmj/signer/SignerServer.java
fix_perms
set -e
local u=dmjsvc
paths=('/opt/dmj' '/opt/dmj/worker' '/opt/dmj/signer-vm' '/opt/dmj/pki' '/var/log/dmj')
local paths
sudo chown -R dmjsvc:dmjsvc /opt/dmj /opt/dmj/worker /opt/dmj/signer-vm /opt/dmj/pki /var/log/dmj
sudo find /opt/dmj -type d -exec chmod 0751 '{}' +
sudo find /opt/dmj -type d -exec chmod g+s '{}' +
sudo chmod 0711 /opt
sudo find /opt/dmj -type f -exec chmod 0640 '{}' +
sudo find /opt/dmj/pki/pub -type d -exec chmod 0755 '{}' +
sudo find /opt/dmj/pki/pub -type f -exec chmod 0644 '{}' +
sudo find /usr/local/bin/ -type f -exec chmod 0755 '{}' +
'[' -f /opt/dmj/pki/tsa/tsa.key ']'
sudo chmod 0600 /opt/dmj/pki/tsa/tsa.key
'[' -f /opt/dmj/signer-vm/keystore.pass ']'
sudo chmod 0600 /opt/dmj/signer-vm/keystore.pass
'[' -f /opt/dmj/signer-vm/keystore.p12 ']'
sudo chmod 0600 /opt/dmj/signer-vm/keystore.p12
'[' -f /opt/dmj/signer-vm/signer.key ']'
sudo chmod 0600 /opt/dmj/signer-vm/signer.key
'[' -f /opt/dmj/pki/ica/ica.key ']'
sudo chmod 0600 /opt/dmj/pki/ica/ica.key
'[' -f /opt/dmj/pki/ocsp/ocsp.key ']'
sudo chmod 0600 /opt/dmj/pki/ocsp/ocsp.key
'[' -f /opt/dmj/signer-vm/target/dmj-signer-1.0.0.jar ']'
sudo chmod 0644 /opt/dmj/signer-vm/target/dmj-signer-1.0.0.jar
command -v setfacl
say '[+] Preparing dmj.one PKI under /opt/dmj/pki ...'
printf '%s\n' '[+] Preparing dmj.one PKI under /opt/dmj/pki ...'
[+] Preparing dmj.one PKI under /opt/dmj/pki ...
sudo mkdir -p /opt/dmj/pki/root/certs /opt/dmj/pki/root/newcerts /opt/dmj/pki/root/private /opt/dmj/pki/ica/certs /opt/dmj/pki/ica/newcerts /opt/dmj/pki/ica/private /opt/dmj/pki/ocsp /opt/dmj/pki/pub
sudo touch /opt/dmj/pki/root/index.txt /opt/dmj/pki/ica/index.txt
sudo tee /opt/dmj/pki/ica/index.txt.attr
'[' -f /opt/dmj/pki/root/serial ']'
'[' -f /opt/dmj/pki/root/crlnumber ']'
'[' -f /opt/dmj/pki/ica/serial ']'
'[' -f /opt/dmj/pki/ica/crlnumber ']'
sudo tee /opt/dmj/pki/root/openssl.cnf
sudo tee /opt/dmj/pki/ica/openssl.cnf
'[' 1 = 1 ']'
say '[i] HARD RESET. REISSUE ALL is True. All certificates will be reissued...'
printf '%s\n' '[i] HARD RESET. REISSUE ALL is True. All certificates will be reissued...'
[i] HARD RESET. REISSUE ALL is True. All certificates will be reissued...
'[' '!' -f /opt/dmj/pki/root/root.crt ']'
'[' 1 = 1 ']'
say '[+] Creating Root CA ...'
[+] Creating Root CA ...
printf '%s\n' '[+] Creating Root CA ...'
openssl genrsa -out /opt/dmj/pki/root/root.key 4096
openssl req -new -x509 -days 3650 -sha256 -subj '/C=IN/O=dmj.one Trust Services/CN=dmj.one Root CA R1' -key /opt/dmj/pki/root/root.key -out /opt/dmj/pki/root/root.crt -config /opt/dmj/pki/root/openssl.cnf -extensions v3_ca
openssl ca -config /opt/dmj/pki/root/openssl.cnf -gencrl -out /opt/dmj/pki/root/root.crl
Using configuration from /opt/dmj/pki/root/openssl.cnf
'[' -s /opt/dmj/pki/ica/index.txt ']'
'[' '!' -f /opt/dmj/pki/ica/ica.crt ']'
'[' 1 = 1 ']'
say '[+] Creating Issuing CA ...'
printf '%s\n' '[+] Creating Issuing CA ...'
[+] Creating Issuing CA ...
openssl genrsa -out /opt/dmj/pki/ica/ica.key 4096
openssl req -new -sha256 -subj '/C=IN/O=dmj.one Trust Services/OU=Public CA/CN=dmj.one Issuing CA R1' -key /opt/dmj/pki/ica/ica.key -out /opt/dmj/pki/ica/ica.csr
openssl ca -batch -config /opt/dmj/pki/root/openssl.cnf -extensions v3_intermediate_ca -in /opt/dmj/pki/ica/ica.csr -out /opt/dmj/pki/ica/ica.crt -days 1825 -md sha256 -notext
Using configuration from /opt/dmj/pki/root/openssl.cnf
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
countryName           :PRINTABLE:'IN'
organizationName      :ASN.1 12:'dmj.one Trust Services'
organizationalUnitName:ASN.1 12:'Public CA'
commonName            :ASN.1 12:'dmj.one Issuing CA R1'
Certificate is to be certified until Oct 30 08:27:15 2030 GMT (1825 days)

Write out database with 1 new entries
Database updated
cat /opt/dmj/pki/ica/ica.crt /opt/dmj/pki/root/root.crt
openssl ca -config /opt/dmj/pki/ica/openssl.cnf -gencrl -out /opt/dmj/pki/ica/ica.crl
Using configuration from /opt/dmj/pki/ica/openssl.cnf
'[' '!' -f /opt/dmj/pki/ocsp/ocsp.crt ']'
'[' 1 = 1 ']'
say '[+] Issuing OCSP responder cert ...'
[+] Issuing OCSP responder cert ...
printf '%s\n' '[+] Issuing OCSP responder cert ...'
openssl genrsa -out /opt/dmj/pki/ocsp/ocsp.key 4096
openssl req -new -sha256 -subj '/C=IN/O=dmj.one Trust Services/CN=dmj.one OCSP Responder R1' -key /opt/dmj/pki/ocsp/ocsp.key -out /opt/dmj/pki/ocsp/ocsp.csr
openssl ca -batch -config /opt/dmj/pki/ica/openssl.cnf -extensions ocsp -in /opt/dmj/pki/ocsp/ocsp.csr -out /opt/dmj/pki/ocsp/ocsp.crt -days 825 -md sha256 -notext
Using configuration from /opt/dmj/pki/ica/openssl.cnf
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
countryName           :PRINTABLE:'IN'
organizationName      :ASN.1 12:'dmj.one Trust Services'
commonName            :ASN.1 12:'dmj.one OCSP Responder R1'
Certificate is to be certified until Feb  3 08:27:15 2028 GMT (825 days)

Write out database with 1 new entries
Database updated
'[' '!' -f /opt/dmj/pki/tsa/tsa.crt ']'
'[' 1 = 1 ']'
say '[+] Issuing TSA certificate ...'
[+] Issuing TSA certificate ...
printf '%s\n' '[+] Issuing TSA certificate ...'
openssl genrsa -out /opt/dmj/pki/tsa/tsa.key 4096
openssl req -new -sha256 -subj '/C=IN/O=dmj.one Trust Services/CN=dmj.one TSA R1' -key /opt/dmj/pki/tsa/tsa.key -out /opt/dmj/pki/tsa/tsa.csr
openssl ca -batch -config /opt/dmj/pki/ica/openssl.cnf -extensions tsa -in /opt/dmj/pki/tsa/tsa.csr -out /opt/dmj/pki/tsa/tsa.crt -days 825 -md sha256 -notext
Using configuration from /opt/dmj/pki/ica/openssl.cnf
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
countryName           :PRINTABLE:'IN'
organizationName      :ASN.1 12:'dmj.one Trust Services'
commonName            :ASN.1 12:'dmj.one TSA R1'
Certificate is to be certified until Feb  3 08:27:15 2028 GMT (825 days)

Write out database with 1 new entries
Database updated
sudo chmod 0600 /opt/dmj/pki/tsa/tsa.key
sudo tee /opt/dmj/pki/tsa/ts.cnf
'[' -f /opt/dmj/pki/tsa/tsa-serial ']'
'[' '!' -f /opt/dmj/signer-vm/keystore.p12 ']'
'[' 1 = 1 ']'
sudo rm -f /opt/dmj/signer-vm/signer.crt /opt/dmj/signer-vm/signer.csr /opt/dmj/signer-vm/keystore.p12 /opt/dmj/signer-vm/keystore.pass
say '[+] Issuing Document Signer leaf and building PKCS#12 ...'
printf '%s\n' '[+] Issuing Document Signer leaf and building PKCS#12 ...'
[+] Issuing Document Signer leaf and building PKCS#12 ...
openssl genrsa -out /opt/dmj/signer-vm/signer.key 3072
openssl req -new -sha256 -subj '/C=IN/O=dmj.one Trust Services/OU=Document Signing/CN=dmj.one Signer' -key /opt/dmj/signer-vm/signer.key -out /opt/dmj/signer-vm/signer.csr
openssl ca -batch -config /opt/dmj/pki/ica/openssl.cnf -extensions usr_cert -in /opt/dmj/signer-vm/signer.csr -out /opt/dmj/signer-vm/signer.crt -days 730 -md sha256 -notext
Using configuration from /opt/dmj/pki/ica/openssl.cnf
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
countryName           :PRINTABLE:'IN'
organizationName      :ASN.1 12:'dmj.one Trust Services'
organizationalUnitName:ASN.1 12:'Document Signing'
commonName            :ASN.1 12:'dmj.one Signer'
Certificate is to be certified until Oct 31 08:27:16 2027 GMT (730 days)

Write out database with 1 new entries
Database updated
openssl pkcs12 -export -name dmj-one -inkey /opt/dmj/signer-vm/signer.key -in /opt/dmj/signer-vm/signer.crt -certfile /opt/dmj/pki/ica/ica.crt -passout pass:747cca2e0bb80d9bfd920cee822cdd8bd259ce7bdb83f5d3 -out /opt/dmj/signer-vm/keystore.p12
echo 747cca2e0bb80d9bfd920cee822cdd8bd259ce7bdb83f5d3
sudo tee /opt/dmj/signer-vm/keystore.pass
sudo chmod 600 /opt/dmj/signer-vm/keystore.p12 /opt/dmj/signer-vm/keystore.pass /opt/dmj/signer-vm/signer.key
openssl x509 -in /opt/dmj/signer-vm/signer.crt -noout -text
awk '/X509v3 Key Usage/ {p=1;print;next} /X509v3/ && p {p=0} p; /X509v3 Extended Key Usage/ {p=1;print;next} /X509v3/ && p {p=0} p'
            X509v3 Key Usage: critical
                Digital Signature, Non Repudiation
                Digital Signature, Non Repudiation
            X509v3 Extended Key Usage: 
                E-mail Protection, Code Signing, 1.3.6.1.4.1.311.10.3.12, 1.3.6.1.5.5.7.3.36
                E-mail Protection, Code Signing, 1.3.6.1.4.1.311.10.3.12, 1.3.6.1.5.5.7.3.36
openssl verify -CAfile /dev/fd/63 /opt/dmj/signer-vm/signer.crt
+cat /opt/dmj/pki/ica/ica.crt /opt/dmj/pki/root/root.crt
/opt/dmj/signer-vm/signer.crt: OK
say '[+] Publishing chain & CRL at http://pki.dmj.one/ ...'
printf '%s\n' '[+] Publishing chain & CRL at http://pki.dmj.one/ ...'
[+] Publishing chain & CRL at http://pki.dmj.one/ ...
sudo tee /usr/local/bin/dmj-pki-heal
sudo chmod 0755 /usr/local/bin/dmj-pki-heal
/usr/local/bin/dmj-pki-heal
Using configuration from /opt/dmj/pki/ica/openssl.cnf
sudo install -m 0644 /opt/dmj/pki/root/root.crl /opt/dmj/pki/pub/dmj-one-root-ca-r1.crl
sudo install -m 0644 /opt/dmj/pki/ica/ica.crl /opt/dmj/pki/pub/dmj-one-issuing-ca-r1.crl
cat /opt/dmj/pki/ica/ica.crt /opt/dmj/pki/root/root.crt
sudo tee /opt/dmj/pki/pub/dmj-one-ica-chain-r1.pem
sudo install -m 0644 /opt/dmj/pki/root/root.crt /opt/dmj/pki/pub/dmj-one-root-ca-r1.crt
sudo install -m 0644 /opt/dmj/pki/ica/ica.crt /opt/dmj/pki/pub/dmj-one-issuing-ca-r1.crt
openssl x509 -in /opt/dmj/pki/root/root.crt -outform der -out /opt/dmj/pki/pub/dmj-one-root-ca-r1.cer
openssl x509 -in /opt/dmj/pki/ica/ica.crt -outform der -out /opt/dmj/pki/pub/dmj-one-issuing-ca-r1.cer
TRUST_KIT_ZIP=/opt/dmj/pki/pub/dmj-one-trust-kit-r1.zip
'[' '!' -f /opt/dmj/pki/pub/dmj-one-trust-kit-r1.zip ']'
'[' 1 = 1 ']'
dmj-fetch-fresh https://raw.githubusercontent.com/divyamohan1993/dmj-one-pdf-authenticator/refs/heads/main/one-click-deployment/static/docs/dmj-one-trust-kit-README.txt /opt/dmj/pki/pub/dmj-one-trust-kit-README.txt -chmod 0644
dmj-fetch-fresh https://raw.githubusercontent.com/divyamohan1993/dmj-one-pdf-authenticator/refs/heads/main/one-click-deployment/static/docs/install-dmj-certificates.bat /opt/dmj/pki/pub/install-dmj-certificates.bat -chmod 0644
dmj-fetch-fresh https://raw.githubusercontent.com/divyamohan1993/dmj-one-pdf-authenticator/refs/heads/main/one-click-deployment/static/docs/dmj-one-trust-kit-README.html /opt/dmj/pki/pub/dmj-one-trust-kit-README.html -chmod 0644
cd /opt/dmj/pki/pub
sha256sum dmj-one-root-ca-r1.cer dmj-one-root-ca-r1.crt dmj-one-issuing-ca-r1.crt dmj-one-ica-chain-r1.pem install-dmj-certificates.bat
cd /opt/dmj/pki/pub
zip -q -r dmj-one-trust-kit-r1.zip dmj-one-root-ca-r1.cer dmj-one-root-ca-r1.crt dmj-one-issuing-ca-r1.crt dmj-one-ica-chain-r1.pem dmj-one-trust-kit-README.txt dmj-one-trust-kit-README.html dmj-one-trust-kit-SHA256SUMS.txt install-dmj-certificates.bat
sudo chmod 0644 /opt/dmj/pki/pub/dmj-one-trust-kit-r1.zip
cd /opt/dmj/pki/pub
sudo rm -f dmj-one-trust-kit.zip
sudo cp -f dmj-one-trust-kit-r1.zip dmj-one-trust-kit.zip
sudo chmod 0644 dmj-one-trust-kit.zip
sudo rm -f /opt/dmj/pki/pub/ica.crt /opt/dmj/pki/pub/root.crt /opt/dmj/pki/pub/ica.crl /opt/dmj/pki/pub/root.crl
sudo install -m 0644 /opt/dmj/pki/ica/ica.crt /opt/dmj/pki/pub/ica.crt
sudo install -m 0644 /opt/dmj/pki/root/root.crt /opt/dmj/pki/pub/root.crt
sudo install -m 0644 /opt/dmj/pki/ica/ica.crl /opt/dmj/pki/pub/ica.crl
sudo install -m 0644 /opt/dmj/pki/root/root.crl /opt/dmj/pki/pub/root.crl
sudo tee /usr/local/bin/dmj-rotate-tsa-creds
sudo chmod +x /usr/local/bin/dmj-rotate-tsa-creds
sudo tee /usr/local/bin/dmj-refresh-crl
sudo chmod +x /usr/local/bin/dmj-refresh-crl
sudo tee /usr/local/bin/dmj-tsa.js
sudo chmod 0755 /usr/local/bin/dmj-tsa.js
say '[+] Building Java signer...'
printf '%s\n' '[+] Building Java signer...'
[+] Building Java signer...
cd /opt/dmj/signer-vm
mvn -q -DskipTests clean package
SBOM_BASE=/opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom
for ext in json xml
'[' -f /opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom.json ']'
sudo chmod 0644 /opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom.json
echo '[i] SBOM generated: /opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom.json'
[i] SBOM generated: /opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom.json
for ext in json xml
'[' -f /opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom.xml ']'
sudo chmod 0644 /opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom.xml
echo '[i] SBOM generated: /opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom.xml'
[i] SBOM generated: /opt/dmj/signer-vm/target/dmj-signer-1.0.0-sbom.xml
fix_perms
set -e
local u=dmjsvc
paths=('/opt/dmj' '/opt/dmj/worker' '/opt/dmj/signer-vm' '/opt/dmj/pki' '/var/log/dmj')
local paths
sudo chown -R dmjsvc:dmjsvc /opt/dmj /opt/dmj/worker /opt/dmj/signer-vm /opt/dmj/pki /var/log/dmj
sudo find /opt/dmj -type d -exec chmod 0751 '{}' +
sudo find /opt/dmj -type d -exec chmod g+s '{}' +
sudo chmod 0711 /opt
sudo find /opt/dmj -type f -exec chmod 0640 '{}' +
sudo find /opt/dmj/pki/pub -type d -exec chmod 0755 '{}' +
sudo find /opt/dmj/pki/pub -type f -exec chmod 0644 '{}' +
sudo find /usr/local/bin/ -type f -exec chmod 0755 '{}' +
'[' -f /opt/dmj/pki/tsa/tsa.key ']'
sudo chmod 0600 /opt/dmj/pki/tsa/tsa.key
'[' -f /opt/dmj/signer-vm/keystore.pass ']'
sudo chmod 0600 /opt/dmj/signer-vm/keystore.pass
'[' -f /opt/dmj/signer-vm/keystore.p12 ']'
sudo chmod 0600 /opt/dmj/signer-vm/keystore.p12
'[' -f /opt/dmj/signer-vm/signer.key ']'
sudo chmod 0600 /opt/dmj/signer-vm/signer.key
'[' -f /opt/dmj/pki/ica/ica.key ']'
sudo chmod 0600 /opt/dmj/pki/ica/ica.key
'[' -f /opt/dmj/pki/ocsp/ocsp.key ']'
sudo chmod 0600 /opt/dmj/pki/ocsp/ocsp.key
'[' -f /opt/dmj/signer-vm/target/dmj-signer-1.0.0.jar ']'
sudo chmod 0644 /opt/dmj/signer-vm/target/dmj-signer-1.0.0.jar
command -v setfacl
say '[+] Writing environment file for the stack...'
[+] Writing environment file for the stack...
printf '%s\n' '[+] Writing environment file for the stack...'
DMJ_ENV_FILE=/etc/dmj/dmj-signer.env
sudo tee /etc/dmj/dmj-signer.env
sudo chmod 0640 /etc/dmj/dmj-signer.env
say '[+] Creating dmj-stack supervisor...'
printf '%s\n' '[+] Creating dmj-stack supervisor...'
[+] Creating dmj-stack supervisor...
sudo tee /usr/local/bin/dmj-stack
sudo chmod 0755 /usr/local/bin/dmj-stack
say '[+] Creating single hardened systemd unit (dmj.service)...'
[+] Creating single hardened systemd unit (dmj.service)...
printf '%s\n' '[+] Creating single hardened systemd unit (dmj.service)...'
sudo tee /etc/systemd/system/dmj-signer.service
curl -fsS --max-time 2 http://127.0.0.1:9090/healthz
NEW_TSA_URL=http://127.0.0.1:9090/
sudo sed -i 's|^DMJ_TSA_URL=.*|DMJ_TSA_URL=http://127.0.0.1:9090/|' /etc/dmj/dmj-signer.env
sudo systemctl daemon-reload
sudo systemctl enable --now dmj-signer.service
sudo systemctl restart dmj-signer
sudo systemctl status dmj-signer --no-pager
● dmj-signer.service - dmj.one stack (Signer OCSP)
     Loaded: loaded (/etc/systemd/system/dmj-signer.service; enabled; preset: enabled)
     Active: active (running) since Fri 2025-10-31 08:27:27 UTC; 16ms ago
 Invocation: e2f6c9e8c21640f89895e53b2486abc0
    Process: 2866 ExecStartPre=/usr/local/bin/dmj-pki-heal (code=exited, status=0/SUCCESS)
   Main PID: 2899 ((bash))
      Tasks: 1 (limit: 19109)
     Memory: 3.1M (peak: 4.1M)
        CPU: 122ms
     CGroup: /system.slice/dmj-signer.service
             └─2899 "(bash)"

Oct 31 08:27:27 fast-vm-quick-delete-20250912-20251012-214402 systemd[1]: Starting dmj-signer.service - dmj.one stack (Signer OCSP)...
Oct 31 08:27:27 fast-vm-quick-delete-20250912-20251012-214402 dmj-signer[2895]: Using configuration from /opt/dmj/pki/ica/openssl.cnf
Oct 31 08:27:27 fast-vm-quick-delete-20250912-20251012-214402 systemd[1]: Started dmj-signer.service - dmj.one stack (Signer OCSP).
[+] Creating dmj-signer nginx config...
say '[+] Creating dmj-signer nginx config...'
printf '%s\n' '[+] Creating dmj-signer nginx config...'
sudo tee /etc/nginx/sites-available/dmj-signer
sudo ln -sf /etc/nginx/sites-available/dmj-signer /etc/nginx/sites-enabled/dmj-signer
sudo nginx -t
2025/10/31 08:27:27 [warn] 2949#2949: conflicting server name "signer.dmj.one" on 0.0.0.0:80, ignored
2025/10/31 08:27:27 [warn] 2949#2949: conflicting server name "signer.dmj.one" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
sudo systemctl reload nginx
say '[+] Signer at https://signer.dmj.one/healthz'
[+] Signer at https://signer.dmj.one/healthz
printf '%s\n' '[+] Signer at https://signer.dmj.one/healthz'
say '[+] Removing legacy/duplicate nginx site links to avoid '\''conflicting server name'\'' ...'
printf '%s\n' '[+] Removing legacy/duplicate nginx site links to avoid '\''conflicting server name'\'' ...'
[+] Removing legacy/duplicate nginx site links to avoid 'conflicting server name' ...
sudo rm -f /etc/nginx/sites-enabled/default
sudo rm -f /etc/nginx/sites-enabled/pki.dmj.one.conf /etc/nginx/sites-enabled/ocsp.dmj.one.conf
sudo rm -f '/etc/nginx/sites-enabled/*pki*' '/etc/nginx/sites-enabled/*ocsp*'
sudo rm -f '/etc/nginx/sites-enabled/*pki*' '/etc/nginx/sites-enabled/*ocsp*' /etc/nginx/sites-enabled/tsa.dmj.one.conf
sudo tee /etc/nginx/sites-available/dmj-pki
sudo tee /etc/nginx/sites-available/dmj-ocsp
sudo tee /etc/nginx/sites-available/dmj-tsa
sudo ln -sf /etc/nginx/sites-available/dmj-pki /etc/nginx/sites-enabled/dmj-pki
sudo ln -sf /etc/nginx/sites-available/dmj-ocsp /etc/nginx/sites-enabled/dmj-ocsp
sudo ln -sf /etc/nginx/sites-available/dmj-tsa /etc/nginx/sites-enabled/dmj-tsa
sudo nginx -t
2025/10/31 08:27:28 [warn] 3035#3035: conflicting server name "signer.dmj.one" on 0.0.0.0:80, ignored
2025/10/31 08:27:28 [warn] 3035#3035: conflicting server name "signer.dmj.one" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
sudo systemctl reload nginx
sudo -u www-data test -r /opt/dmj/pki/pub/ica.crt
echo 'WWW ZIP FAIL:nginx can read ica.crt'
WWW ZIP FAIL:nginx can read ica.crt
sudo tee /usr/local/bin/dmj-fix-perms
sudo chmod 0755 /usr/local/bin/dmj-fix-perms
[+] Adding Cron Job...
say '[+] Adding Cron Job...'
printf '%s\n' '[+] Adding Cron Job...'
echo '[+] Adding Cron Job...'
[+] Adding Cron Job...
CRON_JOB1='0 2 * * * find /opt/dmj/pki/pub/dl -type f -mtime +1 -delete'
CRON_JOB2='0 */6 * * * /usr/local/bin/dmj-refresh-crl'
CRON_JOB3='*/15 * * * * /usr/local/bin/dmj-fix-perms'
CRON_JOB4='0 */6 * * * /usr/local/bin/dmj-rotate-tsa-creds'
+sudo crontab -u dmjsvc -l
existing_cron='
0 2 * * * find /opt/dmj/pki/pub/dl -type f -mtime +1 -delete
0 */6 * * * /usr/local/bin/dmj-refresh-crl
*/15 * * * * /usr/local/bin/dmj-fix-perms
0 */6 * * * /usr/local/bin/dmj-rotate-tsa-creds'
+echo '
0 2 * * * find /opt/dmj/pki/pub/dl -type f -mtime +1 -delete
0 */6 * * * /usr/local/bin/dmj-refresh-crl
*/15 * * * * /usr/local/bin/dmj-fix-perms
0 */6 * * * /usr/local/bin/dmj-rotate-tsa-creds'
+grep -Fv /usr/local/bin/dmj-rotate-tsa-creds
+grep -Fv /opt/dmj/pki/pub/dl
+grep -Fv /usr/local/bin/dmj-fix-perms
+grep -Fv /usr/local/bin/dmj-refresh-crl
clean_cron=
sudo crontab -u dmjsvc -
printf '%s\n%s\n%s\n%s\n%s\n' '' '0 2 * * * find /opt/dmj/pki/pub/dl -type f -mtime +1 -delete' '0 */6 * * * /usr/local/bin/dmj-refresh-crl' '*/15 * * * * /usr/local/bin/dmj-fix-perms' '0 */6 * * * /usr/local/bin/dmj-rotate-tsa-creds'
say '[+] Preparing Cloudflare Worker at /opt/dmj/worker ...'
printf '%s\n' '[+] Preparing Cloudflare Worker at /opt/dmj/worker ...'
[+] Preparing Cloudflare Worker at /opt/dmj/worker ...
sudo mkdir -p /opt/dmj/worker/src
sudo chown -R dmjsvc:dmjsvc /opt/dmj/worker
sudo tee /opt/dmj/worker/src/index.ts
SIGNER_PROTO=https
curl -fsS --max-time 5 https://signer.dmj.one/healthz
curl -fsS --max-time 5 http://signer.dmj.one/healthz
SIGNER_PROTO=http
PKI_PROTO=https
curl -fsS --max-time 5 https://pki.dmj.one/root.crt
grep -q '^DMJ_TSA_USER=' /etc/dmj/dmj-signer.env
as_dmj tee /opt/dmj/worker/wrangler.jsonc
sudo -u dmjsvc -H tee /opt/dmj/worker/wrangler.jsonc
as_dmj tee /opt/dmj/worker/schema.sql
sudo -u dmjsvc -H tee /opt/dmj/worker/schema.sql
[+] Applying schema to remote D1...
say '[+] Applying schema to remote D1...'
printf '%s\n' '[+] Applying schema to remote D1...'
cd /opt/dmj/worker
/usr/local/bin/dmj-wrangler d1 execute dmjone --remote --file ./schema.sql

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
▲ [WARNING] ⚠️ This process may take some time, during which your D1 database will be unavailable to serve queries.


🌀 Executing on remote database dmjone (0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0):
🌀 To execute on your local development database, remove the --remote flag from your wrangler command.
Note: if the execution fails to complete, your DB will return to its original state and you can safely retry.
├ Checking if file needs uploading
│
🌀 File already uploaded. Processing.
🌀 Starting import...
🌀 Processed 9 queries.
🚣 Executed 9 queries in 0.00 seconds (0 rows read, 0 rows written)
   Database is currently at bookmark 0000011a-00000004-00004fa8-87e5b179dfd01101f8f3a6e59ef7216e.
[
  {
    "results": [
      {
        "Total queries executed": 9,
        "Rows read": 0,
        "Rows written": 0,
        "Database size (MB)": "0.09"
      }
    ],
    "success": true,
    "finalBookmark": "0000011a-00000004-00004fa8-87e5b179dfd01101f8f3a6e59ef7216e",
    "meta": {
      "served_by": "v3-prod",
      "served_by_region": "APAC",
      "served_by_primary": true,
      "timings": {
        "sql_duration_ms": 2.4825
      },
      "duration": 2.4825,
      "changes": 1,
      "last_row_id": 0,
      "changed_db": true,
      "size_after": 94208,
      "rows_read": 0,
      "rows_written": 0,
      "num_tables": 7,
      "total_attempts": 1
    }
  }
]
cd /opt/dmj/worker
/usr/local/bin/dmj-wrangler d1 execute dmjone --remote --command 'CREATE UNIQUE INDEX IF NOT EXISTS documents_documents_uniq_issuer_serial ON documents_documents(issuer_fp, cert_serial);'

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Executing on remote database dmjone (0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0):
🌀 To execute on your local development database, remove the --remote flag from your wrangler command.
🚣 Executed 1 command in 0.1803ms
[
  {
    "results": [],
    "success": true,
    "meta": {
      "served_by": "v3-prod",
      "served_by_region": "APAC",
      "served_by_primary": true,
      "timings": {
        "sql_duration_ms": 0.1803
      },
      "duration": 0.1803,
      "changes": 0,
      "last_row_id": 0,
      "changed_db": false,
      "size_after": 94208,
      "rows_read": 0,
      "rows_written": 0,
      "total_attempts": 1
    }
  }
]
cd /opt/dmj/worker
/usr/local/bin/dmj-wrangler d1 execute dmjone --remote --command 'CREATE INDEX IF NOT EXISTS documents_documents_signed_at_idx ON documents_documents(signed_at DESC);'

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Executing on remote database dmjone (0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0):
🌀 To execute on your local development database, remove the --remote flag from your wrangler command.
🚣 Executed 1 command in 0.1761ms
[
  {
    "results": [],
    "success": true,
    "meta": {
      "served_by": "v3-prod",
      "served_by_region": "APAC",
      "served_by_primary": true,
      "timings": {
        "sql_duration_ms": 0.1761
      },
      "duration": 0.1761,
      "changes": 0,
      "last_row_id": 0,
      "changed_db": false,
      "size_after": 94208,
      "rows_read": 0,
      "rows_written": 0,
      "total_attempts": 1
    }
  }
]
cd /opt/dmj/worker
/usr/local/bin/dmj-wrangler d1 execute dmjone --remote --command 'CREATE INDEX IF NOT EXISTS documents_documents_revoked_idx ON documents_documents(revoked_at);'

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Executing on remote database dmjone (0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0):
🌀 To execute on your local development database, remove the --remote flag from your wrangler command.
🚣 Executed 1 command in 0.1872ms
[
  {
    "results": [],
    "success": true,
    "meta": {
      "served_by": "v3-prod",
      "served_by_region": "APAC",
      "served_by_primary": true,
      "timings": {
        "sql_duration_ms": 0.1872
      },
      "duration": 0.1872,
      "changes": 0,
      "last_row_id": 0,
      "changed_db": false,
      "size_after": 94208,
      "rows_read": 0,
      "rows_written": 0,
      "total_attempts": 1
    }
  }
]
'[' 1 = 1 ']'
say '[i] Purging server-side session rows...'
printf '%s\n' '[i] Purging server-side session rows...'
[i] Purging server-side session rows...
cd /opt/dmj/worker
/usr/local/bin/dmj-wrangler d1 execute dmjone --remote --command 'DELETE FROM documents_sessions;'

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Executing on remote database dmjone (0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0):
🌀 To execute on your local development database, remove the --remote flag from your wrangler command.
🚣 Executed 1 command in 0.3564ms
[
  {
    "results": [],
    "success": true,
    "meta": {
      "served_by": "v3-prod",
      "served_by_region": "APAC",
      "served_by_primary": true,
      "timings": {
        "sql_duration_ms": 0.3564
      },
      "duration": 0.3564,
      "changes": 0,
      "last_row_id": 0,
      "changed_db": false,
      "size_after": 94208,
      "rows_read": 0,
      "rows_written": 0,
      "total_attempts": 1
    }
  }
]
say '[+] Storing one-time admin portal key for first GUI access...'
[+] Storing one-time admin portal key for first GUI access...
printf '%s\n' '[+] Storing one-time admin portal key for first GUI access...'
cd /opt/dmj/worker
/usr/local/bin/dmj-wrangler d1 execute dmjone --remote --command 'INSERT OR REPLACE INTO documents_bootstrap(k,v,consumed,created_at) VALUES('\''ADMIN_PORTAL_KEY'\'','\''caeb1f1e9ce7f6ebd5c2bd128647'\'',0,1761899262);'

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Executing on remote database dmjone (0d5c8792-2cb0-4d5b-926c-aa70bd1d69c0):
🌀 To execute on your local development database, remove the --remote flag from your wrangler command.
🚣 Executed 1 command in 0.3076ms
[
  {
    "results": [],
    "success": true,
    "meta": {
      "served_by": "v3-prod",
      "served_by_region": "APAC",
      "served_by_primary": true,
      "timings": {
        "sql_duration_ms": 0.3076
      },
      "duration": 0.3076,
      "changes": 1,
      "last_row_id": 1,
      "changed_db": true,
      "size_after": 94208,
      "rows_read": 0,
      "rows_written": 2,
      "total_attempts": 1
    }
  }
]
say '[+] Pushing Worker secrets to Cloudflare...'
printf '%s\n' '[+] Pushing Worker secrets to Cloudflare...'
[+] Pushing Worker secrets to Cloudflare...
cd /opt/dmj/worker
+set +o
+grep xtrace
_xtrace_state='set -o xtrace'
set +x

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Creating the secret for the Worker "document-signer" 
✨ Success! Uploaded secret SIGNING_GATEWAY_HMAC_KEY

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Creating the secret for the Worker "document-signer" 
✨ Success! Uploaded secret SESSION_HMAC_KEY

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Creating the secret for the Worker "document-signer" 
✨ Success! Uploaded secret TOTP_MASTER_KEY

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
🌀 Creating the secret for the Worker "document-signer" 
✨ Success! Uploaded secret ADMIN_PASS_HASH
fix_perms
set -e
local u=dmjsvc
paths=('/opt/dmj' '/opt/dmj/worker' '/opt/dmj/signer-vm' '/opt/dmj/pki' '/var/log/dmj')
local paths
sudo chown -R dmjsvc:dmjsvc /opt/dmj /opt/dmj/worker /opt/dmj/signer-vm /opt/dmj/pki /var/log/dmj
sudo find /opt/dmj -type d -exec chmod 0751 '{}' +
sudo find /opt/dmj -type d -exec chmod g+s '{}' +
sudo chmod 0711 /opt
sudo find /opt/dmj -type f -exec chmod 0640 '{}' +
sudo find /opt/dmj/pki/pub -type d -exec chmod 0755 '{}' +
sudo find /opt/dmj/pki/pub -type f -exec chmod 0644 '{}' +
sudo find /usr/local/bin/ -type f -exec chmod 0755 '{}' +
'[' -f /opt/dmj/pki/tsa/tsa.key ']'
sudo chmod 0600 /opt/dmj/pki/tsa/tsa.key
'[' -f /opt/dmj/signer-vm/keystore.pass ']'
sudo chmod 0600 /opt/dmj/signer-vm/keystore.pass
'[' -f /opt/dmj/signer-vm/keystore.p12 ']'
sudo chmod 0600 /opt/dmj/signer-vm/keystore.p12
'[' -f /opt/dmj/signer-vm/signer.key ']'
sudo chmod 0600 /opt/dmj/signer-vm/signer.key
'[' -f /opt/dmj/pki/ica/ica.key ']'
sudo chmod 0600 /opt/dmj/pki/ica/ica.key
'[' -f /opt/dmj/pki/ocsp/ocsp.key ']'
sudo chmod 0600 /opt/dmj/pki/ocsp/ocsp.key
'[' -f /opt/dmj/signer-vm/target/dmj-signer-1.0.0.jar ']'
sudo chmod 0644 /opt/dmj/signer-vm/target/dmj-signer-1.0.0.jar
command -v setfacl
say '[+] Deploying Worker...'
printf '%s\n' '[+] Deploying Worker...'
[+] Deploying Worker...
cd /opt/dmj/worker
/usr/local/bin/dmj-wrangler deploy

 ⛅️ wrangler 4.43.0 (update available 4.45.3)
─────────────────────────────────────────────
Total Upload: 70.70 KiB / gzip: 17.08 KiB
Your Worker has access to the following bindings:
Binding                                                     Resource                  
env.DB (dmjone)                                             D1 Database               
env.ISSUER ("dmj.one")                                      Environment Variable      
env.SIGNER_API_BASE ("http://signer.dmj.one")               Environment Variable      
env.DB_PREFIX ("documents_")                                Environment Variable      
env.PKI_BASE ("https://pki.dmj.one")                        Environment Variable      
env.BUNDLE_TRUST_KIT ("1")                                  Environment Variable      
env.ADMIN_PATH ("admin-a86dd6f6bb9f")                       Environment Variable      
env.WORKER_HMAC_HEADER ("x-worker-hmac")                    Environment Variable      
env.WORKER_HMAC_TS_HEADER ("x-worker-ts")                   Environment Variable      
env.WORKER_HMAC_NONCE_HEADER ("x-worker-nonce")             Environment Variable      

Uploaded document-signer (9.78 sec)
Deployed document-signer triggers (3.27 sec)
  https://document-signer.dmjone.workers.dev
Current Version ID: 0781aa8e-b9d3-4f51-b99c-31765f44e452
+/usr/local/bin/dmj-wrangler deployments list --format=json
+jq -r '.[0].url'
✘ [ERROR] Unknown argument: format


jq: parse error: Invalid numeric literal at line 2, column 9
🪵  Logs were written to "/var/lib/dmjsvc/.wrangler/logs/wrangler-2025-10-31_08-28-24_880.log"
+true
WORKER_URL=
echo ------------------------------------------------------------------
------------------------------------------------------------------
echo '[✓] Done.'
[✓] Done.
echo 'URL: https://documents.dmj.one'
URL: https://documents.dmj.one
echo 'Signer URL (nginx): https://signer.dmj.one/healthz'
Signer URL (nginx): https://signer.dmj.one/healthz
echo

echo 'NEXT STEPS:'
NEXT STEPS:
echo '1) Visit your workers.dev URL/admin-a86dd6f6bb9f   — you will see the admin key ONCE.'
1) Visit your workers.dev URL/admin-a86dd6f6bb9f   — you will see the admin key ONCE.
echo '2) In Cloudflare Dashboard, add a Route to bind this Worker to your domain (e.g. https://documents.dmj.one/*).'
2) In Cloudflare Dashboard, add a Route to bind this Worker to your domain (e.g. https://documents.dmj.one/*).
echo ------------------------------------------------------------------
------------------------------------------------------------------
say '[i] Admin Access: https://documents.dmj.one/admin-a86dd6f6bb9f'
printf '%s\n' '[i] Admin Access: https://documents.dmj.one/admin-a86dd6f6bb9f'
[i] Admin Access: https://documents.dmj.one/admin-a86dd6f6bb9f
[✓] Done.
say '[✓] Done.'
printf '%s\n' '[✓] Done.'
echo '[+] Running post-deploy verification ...'
[+] Running post-deploy verification ...
dmj-fetch-fresh https://raw.githubusercontent.com/divyamohan1993/dmj-one-pdf-authenticator/refs/heads/main/one-click-deployment/static/modules/dmj-verify.sh.tmpl /usr/local/bin/dmj-verify.sh -chmod 0755
sudo tee /etc/systemd/system/dmj-worker-tail.service
sudo systemctl enable --now dmj-worker-tail.service
sleep 10
[✓] Both parts executed successfully.
divyamohan1993_gmail_com@fast-vm-quick-delete-20250912-20251012-214402:~$ 