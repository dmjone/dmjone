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

            absenteeData = data.results || []; // Save data to be used in the clipboard function
            absenteesList.innerHTML = ''; // Clear current list

            if (absenteeData.length > 0) {
                document.getElementById('absenteeblock').classList.toggle('d-none');
                document.getElementById('attendanceFormBlock').classList.toggle('d-none');
                absenteeData.forEach(item => {                
                    const listItem = document.createElement('li');
                    listItem.textContent = `${item.name} (${item.roll})`;
                    listItem.classList.add('list-group-item');
                    absenteesList.appendChild(listItem);
                });
            } else {                
                absenteesList.innerHTML = '<li class="list-group-item text-danger fw-bold fs-4"><i class="bi bi-lock"></i> Portal Locked!</li>';
                document.getElementById("attendanceFormBlock").innerHTML = `
                    <div class="d-flex justify-content-center align-items-center my-3">
                      <div class="text-center p-4 rounded shadow-lg bg-auto">
                        <i class="bi bi-lock-fill display-1 text-danger"></i>
                        <h1 class="mt-3 fw-bold text-primary">Portal Locked!</h1>
                        <p class="text-muted mt-2">Please come back and refresh in 2 minutes.</p>                        
                      </div>
                    </div>
                `;
                document.getElementById('attendanceFormBlock').classList.toggle('d-none');
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
    const allowedEmail = atob('ZGl2eWFtb2hhbjE5OTNAZ21haWwuY29t');
    const buttons = ['copyAbsenteesButton', 'takeattendance', 'simulate', 'allabsent', 'allpresent', 'lockportal'];    

    buttons.forEach(id => {
        const button = document.getElementById(id);
        button.style.display = userEmail === allowedEmail ? 'block' : 'none';
    });

    if (userEmail === allowedEmail) {
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
            lockportal: { lock_portal: 'true' }
        };

        Object.keys(paramMap).forEach(id => {
            document.getElementById(id).addEventListener('click', () =>
                getURLparams(paramMap[id])
            );
        });
    }
}

// Check email and load absentee list on page load
document.addEventListener("DOMContentLoaded", function () {
    checkUserEmail();
    loadAbsentees();
    cL();
});