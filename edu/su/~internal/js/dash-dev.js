// dashboard.js

const API_URL = 'https://dmj.one/api/attendance/?view_history=true&download_history_csv=true';

async function loadAttendance() {
    try {
        // 1) Fetch and parse CSV
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const text = await res.text();
        const lines = text.trim().split(/\r?\n/).filter(l => l);
        if (lines.length < 2) throw new Error('No attendance data.');

        const [headerLine, ...dataLines] = lines;
        const headers = headerLine.split(',');

        // 2) Prepare counters
        const presentCounts = new Array(headers.length).fill(0);
        const absentCounts = new Array(headers.length).fill(0);

        // 3) Render summary cards
        const summaryDiv = document.getElementById('attendance-summary');
        const totalStudents = dataLines.length;
        const totalDays = headers.length - 2;

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

        headers.slice(2).forEach((date, i) => {
            cards.push(`
        <div class="card me-3 mb-3" style="min-width:100px">
          <div class="card-body p-2 text-center">
            <h6 class="card-title mb-1">${date}</h6>
            <p class="mb-0 text-success">P: <span id="p${i}">0</span></p>
            <p class="mb-0 text-danger">A: <span id="a${i}">0</span></p>
          </div>
        </div>
      `);
        });

        summaryDiv.innerHTML = cards.join('');

        // 4) Build table header
        const thead = document.querySelector('#table-container thead');
        const trHead = document.createElement('tr');
        headers.forEach((h, idx) => {
            const th = document.createElement('th');
            th.textContent = h;
            if (idx < 2) th.style.minWidth = '140px';
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);

        // 5) Build table body and count P/A
        const tbody = document.querySelector('#table-container tbody');
        dataLines.forEach(line => {
            const cols = line.split(',');
            const tr = document.createElement('tr');

            cols.forEach((cell, idx) => {
                const td = document.createElement('td');

                if (idx >= 2) {
                    const badge = document.createElement('span');
                    badge.classList.add('badge');
                    badge.textContent = cell || '';

                    if (cell === 'P') {
                        badge.classList.add('bg-success');
                        presentCounts[idx]++;
                    } else if (cell === 'A') {
                        badge.classList.add('bg-danger');
                        absentCounts[idx]++;
                    } else {
                        badge.classList.add('bg-secondary');
                    }

                    td.appendChild(badge);
                } else {
                    td.textContent = cols[idx];
                }

                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });

        // 6) Update summary counts
        headers.slice(2).forEach((_, i) => {
            document.getElementById(`p${i}`).textContent = presentCounts[i + 2];
            document.getElementById(`a${i}`).textContent = absentCounts[i + 2];
        });

        // 7) Show table, hide loader
        document.getElementById('loading').style.display = 'none';
        document.getElementById('table-container').style.display = 'block';

    } catch (err) {
        document.getElementById('loading').innerHTML =
            `<div class="alert alert-danger">Error: ${err.message}</div>`;
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadAttendance);
