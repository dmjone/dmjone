const API_URL = 'https://dmj.one/api/attendance/?view_history=true&download_history_csv=true';

async function loadAttendance() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
        const text = await res.text();
        const lines = text.trim().split(/\r?\n/).filter(l => l);

        // parse CSV
        const [headerLine, ...dataLines] = lines;
        const headers = headerLine.split(',');

        // build table header
        const thead = document.querySelector('thead');
        const trHead = document.createElement('tr');
        headers.forEach((h, idx) => {
            const th = document.createElement('th');
            th.textContent = h;
            if (idx < 2) th.style.minWidth = '140px';
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);

        // build table body
        const tbody = document.querySelector('tbody');
        dataLines.forEach(line => {
            const cols = line.split(',');
            const tr = document.createElement('tr');

            cols.forEach((cell, idx) => {
                const td = document.createElement('td');
                if (idx >= 2) {
                    const badge = document.createElement('span');
                    badge.classList.add('badge');
                    badge.textContent = cell || '';
                    if (cell === 'P') badge.classList.add('bg-success');
                    else if (cell === 'A') badge.classList.add('bg-danger');
                    else badge.classList.add('bg-secondary');
                    td.appendChild(badge);
                } else {
                    td.textContent = cell;
                }
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });

        // show table, hide loader
        document.getElementById('loading').style.display = 'none';
        document.getElementById('table-container').style.display = 'block';
    } catch (err) {
        document.getElementById('loading').innerHTML =
            `<div class="alert alert-danger">Error loading data: ${err.message}</div>`;
    }
}

loadAttendance();