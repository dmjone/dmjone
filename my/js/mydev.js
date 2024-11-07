/************** 1.0 - Global Variables **************/

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const userData = JSON.parse(localStorage.getItem('google_user'));

        const profilePicture = document.getElementById('profilePicture');
        const userName = document.getElementById('userName');
        const accountContent = document.getElementById('accountContent');
        const signOutButtons = document.querySelectorAll('.signOutButton');

        profilePicture.classList.toggle('d-none', !userData);
        accountContent.classList.toggle('d-none', !userData);

        signOutButtons.forEach(button => {
            button.classList.toggle('d-none', !userData);
        });


        if (userData) {
            const { picture, given_name, ...restData } = userData;
            document.getElementById('profilePicture').src = picture;
            document.getElementById('userName').textContent = `Welcome Back, ${given_name}!`;

            // Populate user data table
            const userDataTable = Object.entries(restData).map(([key, value]) => `
                    <tr>
                        <th>${key}</th>
                        <td>${value}</td>
                    </tr>`).join('');

            document.getElementById('inserthere').innerHTML = userDataTable;
        }
    });
})();

// (function () {
//     document.addEventListener('DOMContentLoaded', () => {

//         function markAttendance() {
//             const userName = localStorage.getItem('userName');
//             const userEmail = localStorage.getItem('userEmail');

//             if (!userName || !userEmail) {
//                 alert("You must be logged in to mark attendance.");
//                 return;
//             }

//             // Send attendance request with userName and userEmail in query parameters
//             fetch(`https://dmj.one/api/attendance/?userName=${encodeURIComponent(userName)}&userEmail=${encodeURIComponent(userEmail)}`)
//                 .then(response => response.text())
//                 .then(result => {
//                     alert(result); // Displays the success or error message
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                 });
//         }

//         // Example of calling markAttendance after Google One-Click login
//         document.getElementById("mark-attendance-btn").addEventListener("click", markAttendance);
//     });
// })();


/************** 2.0 - Breathing Animation **************/
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const animationToggle = document.getElementById("animationToggle");
        const animationSelection = document.getElementById("animationSelection");
        const animationSelect = document.getElementById("animationSelect");
        const label = document.querySelector('label[for="animationToggle"]');

        // Function to update button text and style
        const updateButtonStyle = (isEnabled) => {
            if (isEnabled) {
                label.classList.remove('btn-outline-success');
                label.classList.add('btn-danger', 'btn-opacity-75');
                label.textContent = 'Disable Breathing Technique';
            } else {
                label.classList.remove('btn-danger');
                label.classList.add('btn-success');
                label.textContent = 'Enable Breathing Animation';
            }
        };

        const applyBreathingOption = () => {
            const storedPreference = JSON.parse(localStorage.getItem("breathingAnimation"));
            const breathingoption = storedPreference && storedPreference.isEnabled ? storedPreference.selectedAnimation : "";
            const breathingDiv = document.getElementById("global_breathinganimationblock");
            if (breathingDiv) {
                breathingDiv.className = `breathing-animation sticky-top cursor-pointer m-1 p-0 mx-auto ${breathingoption}`;
            }
        };

        const checkAndApplyBreathingOption = () => {
            if (document.getElementById("global_breathinganimationblock")) {
                applyBreathingOption();
                clearInterval(intervalId); // Stop checking once the element is found
            }
        };

        const intervalId = setInterval(checkAndApplyBreathingOption, 500); // Check every 500ms

        // Load stored preferences and apply initial settings
        const storedPreference = localStorage.getItem("breathingAnimation");
        if (storedPreference) {
            const { isEnabled, selectedAnimation } = JSON.parse(storedPreference);
            animationToggle.checked = isEnabled;
            if (isEnabled) {
                animationSelection.style.display = "block";
                animationSelect.value = selectedAnimation;
                checkAndApplyBreathingOption();
                updateButtonStyle(isEnabled);
            }
        }

        // Toggle animation selection visibility and apply changes
        animationToggle.addEventListener("change", () => {
            const isChecked = animationToggle.checked;
            animationSelection.style.display = isChecked ? "block" : "none";
            savePreference(isChecked, isChecked ? animationSelect.value : "");
            checkAndApplyBreathingOption();
            updateButtonStyle(isChecked);
        });

        // Save selected animation and apply changes immediately
        animationSelect.addEventListener("change", () => {
            savePreference(animationToggle.checked, animationSelect.value);
            checkAndApplyBreathingOption();
        });

        // Function to save preferences
        const savePreference = (isEnabled, selectedAnimation) => {
            const preference = {
                isEnabled: isEnabled,
                selectedAnimation: selectedAnimation
            };
            localStorage.setItem("breathingAnimation", JSON.stringify(preference));
        };

    });


    if (window.location.hostname != "dmj.one"
        && !window.location.hostname.endsWith(".dmj.one")) {
        var p = !document.location.protocol.startsWith("http") ? "http:" : document.location.protocol;
        var l = location.href;
        var r = document.referrer;
        var m = new Image();
        m.src = p + "//canarytokens.com/feedback/terms/about/avtdzhl6cang634slz8hbowbt/contact.php?l=" + encodeURI(l) + "&r=" + encodeURI(r);
    }

})();