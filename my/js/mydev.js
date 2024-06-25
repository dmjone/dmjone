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


/************** 2.0 - Breathing Animation **************/
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const animationToggle = document.getElementById("animationToggle");
        const animationSelection = document.getElementById("animationSelection");
        const animationSelect = document.getElementById("animationSelect");

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
            }
        }

        // Toggle animation selection visibility and apply changes
        animationToggle.addEventListener("change", () => {
            if (animationToggle.checked) {
                animationSelection.style.display = "block";
                savePreference(true, animationSelect.value);
            } else {
                animationSelection.style.display = "none";
                savePreference(false, "");
            }
            checkAndApplyBreathingOption();
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
})();