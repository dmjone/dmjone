let absenteeData = [];
// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const subjectCode = urlParams.get('subject') || 'CSUXXXX'; // Default subject code

// Function to show messages in the HTML
function showMessage(type, message) {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}

// Function to mark attendance
document.getElementById("attendanceForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const userRoll = document.getElementById("rollInput").value;
    const userEmail = localStorage.getItem('userEmail');

    if (!userEmail) {
        showMessage('danger', "You must be logged in to mark attendance.");
        return;
    }

    // Send request to the Worker to mark attendance
    fetch(`https://dmj.one/api/attendance/?userRoll=${encodeURIComponent(userRoll)}&userEmail=${encodeURIComponent(userEmail)}`)
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
                absenteeData.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${item.name} (${item.roll})`;
                    listItem.classList.add('list-group-item');
                    absenteesList.appendChild(listItem);
                });
            } else {
                absenteesList.innerHTML = '<li class="list-group-item">No absentees found!</li>';
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

    let messageHeader = `Dear Professor,\n\nI hope this message finds you well. Please find the absentee list for *${subjectCode}* on *${datetime}* below:\n\n`;
    let messageFooter = `\n\n> Total Present: *${totalPresent}*\n> Total Absent: *${totalAbsent}*\n\nKindly let me know if further details are needed.\n\nThank you. 🙏\nDivya Mohan\n_Make the world yours at_ *dmj.one*\nStudent/CR - CSE 2026\nShoolini University, 🇮🇳`;

    let finalMessage = messageHeader + absentees + messageFooter;

    navigator.clipboard.writeText(finalMessage).then(() => {
        showMessage('success', 'Absentees list successfully copied to clipboard.');
    }, err => {
        showMessage('danger', 'Failed to copy absentees list: ' + err);
        console.error('Failed to copy text: ', err);
    });
}

function takeattendance() {
    fetch('https://dmj.one/api/attendance/?take_attendance=true')
        .then(response => response.text())
        .then(result => {
            showMessage('success', result); // Display the success message in the HTML
            loadAbsentees(); // Reload absentee list after attendance is marked
        })
        .catch(error => {
            showMessage('danger', 'Error: ' + error); // Display the error message in the HTML
            console.error('Error:', error);
        });
}

// Attach functions to the button
document.getElementById("copyAbsenteesButton").addEventListener("click", copyAbsenteesToClipboard);
document.getElementById("takeattendance").addEventListener("click", takeattendance);

// Show "Copy Absentees" button if user is Divya Mohan
function checkUserEmail() {
    const userEmail = localStorage.getItem('userEmail').toLowerCase();
    const copyButton = document.getElementById("copyAbsenteesButton");
    const takeattendance = document.getElementById("takeattendance");

    if (userEmail === atob('ZGl2eWFtb2hhbjE5OTNAZ21haWwuY29t')) {
        copyButton.style.display = 'block'; // Show the button
        takeattendance.style.display = 'block'; // Show the button
    } else {
        copyButton.style.display = 'none'; // Hide the button
        takeattendance.style.display = 'none'; // Hide the button
    }
}

// Check email and load absentee list on page load
document.addEventListener("DOMContentLoaded", function () {
    checkUserEmail();
    loadAbsentees();
    cL();
});