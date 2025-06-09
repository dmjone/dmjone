let absenteeData = [];
// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const subjectCode = urlParams.get('subject') || 'CSUXXXX'; // Default subject code

// Function to show messages in the HTML
function showMessage(type, message) {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}

document.getElementById("termsCheckbox").addEventListener("change", function () {
    const label = this.parentElement; // Get the parent label of the checkbox
    if (this.checked) {
        label.classList.add("bg-success", "bg-opacity-25");
        label.classList.remove("bg-auto");
    } else {
        label.classList.remove("bg-success", "bg-opacity-25");
        label.classList.add("bg-auto");
    }
});

// Function to mark attendance
document.getElementById("attendanceForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const userRoll = document.getElementById("rollInput").value;
    const userEmail = localStorage.getItem('userEmail');
    const termsCheckbox = document.getElementById("termsCheckbox").checked;
    const userTime = new Date().toISOString();

    // Check Email
    if (!userEmail) {
        showMessage('danger', "You must be logged in to mark attendance.");
        return;
    }

    // Validate terms agreement
    if (!termsCheckbox) {
        showMessage('danger', "You must agree to the terms to mark attendance.");
        return;
    }

    // Send request to the Worker to mark attendance
    fetch(`https://dmj.one/api/attendance/?userRoll=${encodeURIComponent(userRoll)}&userEmail=${encodeURIComponent(userEmail)}&userTime=${encodeURIComponent(userTime)}`)
        .then(response => response.text())
        .then(result => {
            showMessage('success', result); // Display the success message in the HTML
            loadAbsentees(); // Reload absentee list after attendance is marked
        })
        .catch(error => {
            showMessage('danger', 'Error: ' + error); // Display the error message in the HTML
            console.error('Error:', error);
        });
});

// Function to load the absentee list
function loadAbsentees() {
    fetch("https://dmj.one/api/attendance/?view_absentees=true")
        .then(response => response.json())
        .then(data => {
            const absenteesList = document.getElementById("absentees");
            const namecontainer = document.getElementById("name-container");

            absenteeData = data.results || []; // Save data to be used in the clipboard function
            absenteesList.innerHTML = ''; // Clear current list

            if (absenteeData.length > 0) {
                document.getElementById('absenteeblock').classList.remove('d-none');
                document.getElementById('attendanceFormBlock').classList.toggle('d-none');
                document.getElementById('helpnote').classList.toggle('d-none');

                try {
                    namecontainer.classList.remove('page-center', 'flex-column');
                    document.getElementById('customcontent-kajdio479eaugd371u2').innerHTML = ''; // Use '' instead of null for clearing innerHTML
                } catch (e) { }


                absenteeData.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${item.name} (${item.roll})`;
                    listItem.classList.add('list-group-item');
                    absenteesList.appendChild(listItem);
                });
            } else {
                absenteesList.innerHTML = '<li class="list-group-item text-danger fw-bold fs-4"><i class="bi bi-lock"></i> Portal Locked!</li>';
                namecontainer.classList.add('page-center', 'flex-column');

                namecontainer.innerHTML += `
                <div id="customcontent-kajdio479eaugd371u2">
                    <div class="d-flex justify-content-center align-items-center my-3">
                      <div class="text-center p-4">
                        <i class="bi bi-lock-fill display-1 text-danger"></i>
                        <h1 class="mt-3 fw-bold text-primary">Portal Locked!</h1>
                        <p class="text-muted mt-2 d-none">Please come back and refresh in 2 minutes.</p>                        
                      </div>
                    </div>
                </div>
                `;
            }
        })
        .catch(error => {
            showMessage('danger', 'Error loading absentees list: ' + error);
            console.error('Error:', error);
        });

}

// Copy absentees to clipboard function
function copyAbsenteesToClipboard() {
    const datetime = new Date().toLocaleString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    const absentees = absenteeData.map(item => `- ${item.name} _${item.roll}_`).join('\n');

    const totalAbsent = absenteeData.length;
    const totalPresent = 68 - totalAbsent; // Assuming 68 students in total

    let messageHeader = `Dear Professor,\n\nI hope this message finds you well. Please find the absentee list taken through semi-automatic attendance system https://go.dmj.one/self-checkin for *${subjectCode}* on *${datetime}* below:\n\n`;
    let messageFooter = `\n\n> Total Present: *${totalPresent}*\n> Total Absent: *${totalAbsent}*\n\nKindly let me know if further details are needed.\n\nThank you. 🙏\nDivya Mohan\n_Make the world yours at_ *dmj.one*\nStudent/CR - CSE 2026\nShoolini University, 🇮🇳`;

    let finalMessage = messageHeader + absentees + messageFooter;

    navigator.clipboard.writeText(finalMessage).then(() => {
        showMessage('success', 'Absentees list successfully copied to clipboard.');
    }, err => {
        showMessage('danger', 'Failed to copy absentees list: ' + err);
        console.error('Failed to copy text: ', err);
    });
}

// function takeattendance() {
//     fetch('https://dmj.one/api/attendance/?take_attendance=true')
//         .then(response => response.text())
//         .then(result => {
//             showMessage('success', result); // Display the success message in the HTML
//             loadAbsentees(); // Reload absentee list after attendance is marked
//         })
//         .catch(error => {
//             showMessage('danger', 'Error: ' + error); // Display the error message in the HTML
//             console.error('Error:', error);
//         });
// }
// document.getElementById("takeattendance").addEventListener("click", takeattendance);


// Attach functions to the button
document.getElementById("copyAbsenteesButton").addEventListener("click", copyAbsenteesToClipboard);

// Show "Copy Absentees" button if user is Divya Mohan
// function checkUserEmail() {
//     const userEmail = localStorage.getItem('userEmail').toLowerCase();
//     const copyButton = document.getElementById("copyAbsenteesButton");
//     const takeattendance = document.getElementById("takeattendance");

//     if (userEmail === atob('ZGl2eWFtb2hhbjE5OTNAZ21haWwuY29t')) {
//         copyButton.style.display = 'block'; // Show the button
//         takeattendance.style.display = 'block'; // Show the button
//     } else {
//         copyButton.style.display = 'none'; // Hide the button
//         takeattendance.style.display = 'none'; // Hide the button
//     }
// }

function checkUserEmail() {
    const userEmail = localStorage.getItem('userEmail')?.toLowerCase();    
    const buttons = ['copyAbsenteesButton', 'takeattendance', 'simulate', 'allabsent', 'allpresent', 'lockportal', 'lockportalandsave', 'downloadcsv'];

    const allowedEmails = [
        atob('ZGl2eWFtb2hhbjE5OTNAZ21haWwuY29t'),
        atob('aHNoYXJtYWhhcnNoaXRjcjdAZ21haWwuY29t'),        
    ].map(email => email.toLowerCase());

    const isAllowed = allowedEmails.includes(userEmail);

    buttons.forEach(id => {
        const button = document.getElementById(id);
        button.style.display = isAllowed ? 'block' : 'none';
    });

    if (isAllowed) {
        document.getElementById('attendanceoptions').classList.toggle('d-none');
        document.getElementById('attendanceAccordion').classList.toggle('d-none');

        function getURLparams(params) {
            const url = new URL('https://dmj.one/api/attendance/');
            Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

            fetch(url)
                .then(response => response.text())
                .then(result => {
                    showMessage('success', result);
                    loadAbsentees();
                })
                .catch(error => {
                    showMessage('danger', 'Error: ' + error);
                    console.error('Error:', error);
                });
        }

        const paramMap = {
            takeattendance: { take_attendance: 'true' },
            simulate: { simulate: 'true' },
            allabsent: { all_absent: 'true' },
            allpresent: { all_present: 'true' },
            lockportal: { lock_portal: 'true' },
            lockportalandsave: { lock_portal_and_save: 'true' },
            downloadcsv: { download_csv: 'true' }
        };
        
        delete paramMap.downloadcsv;

        document.getElementById('downloadcsv').addEventListener('click', () => {
            const url = new URL('https://dmj.one/api/attendance/');
            url.searchParams.set('download_csv', 'true');

            fetch(url)
                .then(res => {
                    if (!res.ok) throw new Error(res.statusText);
                    return res.blob();
                })
                .then(blob => {
                    const filename = `attendance_${new Date().toISOString().slice(0, 10)}.csv`;
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = filename;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(link.href);
                })
                .catch(err => showMessage('danger', 'CSV download failed: ' + err.message));
        });


        Object.keys(paramMap).forEach(id => {
            document.getElementById(id).addEventListener('click', () =>
                getURLparams(paramMap[id])
            );
        });
    }
}

// function controlVisibility() {
//     const userEmail = localStorage.getItem('userEmail')?.toLowerCase();
//     const allowedEmails = [
//         atob('ZGl2eWFtb2hhbjE5OTNAZ21haWwuY29t'),
//     ];

//     console.log("inside")
//     if (!allowedEmails.includes(userEmail)) {
//         const mainElement = document.querySelector('main');
//         if (mainElement) {
//             mainElement.innerHTML = '<div class="text-danger text-center display-1 page-center justify-content-center">401: Unauthorized</div>';
//             mainElement.classList.remove('d-none');
//             mainElement.style.display = 'block';
//         }
//     } else {
//         const mainElement = document.querySelector('main');
//         if (mainElement) {
//             mainElement.classList.remove('d-none');
//             mainElement.style.display = 'block';
//         }
//     }
//     return;
// }

// Check email and load absentee list on page load
document.addEventListener("DOMContentLoaded", function () {
    cL();
    // controlVisibility();
    checkUserEmail();
    loadAbsentees();
});