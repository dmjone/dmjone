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
        
        // 1) After you finish counting presentCounts/absentCounts and before showing the table:
        const summaryDiv = document.getElementById('attendance-summary');
        const totalStudents = dataLines.length;
        const totalDays = headers.length - 2;

        // 2) Build a small card for overall stats
        const cards = [
            `<div class="card me-3 mb-3" style="min-width:120px">
              <div class="card-body p-2 text-center">
                <h6 class="card-title mb-1">Students</h6>
                <p class="mb-0">${totalStudents}</p>
              </div>
            </div>`,
            `<div class="card me-3 mb-3" style="min-width:120px">
              <div class="card-body p-2 text-center">
                <h6 class="card-title mb-1">Days</h6>
                <p class="mb-0">${totalDays}</p>
              </div>
            </div>`
        ];

        // 3) One card per date with P/A counts
        headers.slice(2).forEach((date, idx) => {
            cards.push(`
              <div class="card me-3 mb-3" style="min-width:100px">
                <div class="card-body p-2 text-center">
                  <h6 class="card-title mb-1">${date}</h6>
                  <p class="mb-0 text-success">P: ${presentCounts[idx + 2]}</p>
                  <p class="mb-0 text-danger">A: ${absentCounts[idx + 2]}</p>
                </div>
              </div>
            `);
        });

        // 4) Render them
        summaryDiv.innerHTML = cards.join('');

        // show table, hide loader
        document.getElementById('loading').style.display = 'none';
        document.getElementById('table-container').style.display = 'block';

    } catch (err) {
        document.getElementById('loading').innerHTML =
            `<div class="alert alert-danger">Error loading data: ${err.message}</div>`;
    }
}

loadAttendance();