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



/************** 1.0 - Memory Machine **************/
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        let divid = document.querySelector('#sr-learning-block').id;
        document.querySelector(".username-given-name").textContent = JSON.parse(localStorage.getItem('google_user')).given_name || 'Guest';


        function calculateNextReviewDate(lastReviewDate, reviewCount) {
            const intervalDays = Math.min(Math.pow(2, reviewCount), 60);
            const nextReviewDate = new Date(lastReviewDate);
            nextReviewDate.setDate(nextReviewDate.getDate() + intervalDays);
            return nextReviewDate;
        }

        function getArticlesToReview() {
            const articles = [];
            const today = new Date();
            const urlPattern = /^\/edu\/su\/course\/\w+\/(theory|lab)\/\w+/;

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('pageLoadTime-')) {
                    const url = key.replace('pageLoadTime-', '');
                    if (!urlPattern.test(url)) continue;

                    const lastReviewDate = new Date(parseInt(localStorage.getItem(key)));
                    const reviewCount = parseInt(localStorage.getItem(`spacedReviewCount-${url}`)) || 0;
                    const nextReviewDate = calculateNextReviewDate(lastReviewDate, reviewCount);
                    articles.push({ url, lastReviewDate, nextReviewDate, reviewCount, isDue: nextReviewDate <= today });
                }
            }
            return articles;
        }

        function updateReviewList() {
            const reviewList = document.getElementById(divid);
            reviewList.innerHTML = '';

            const articles = getArticlesToReview();
            const dueArticles = articles.filter(a => a.isDue);
            const futureArticles = articles.filter(a => !a.isDue);

            if (!dueArticles.length && !futureArticles.length) {
                reviewList.innerHTML = `<div class="text-center text-muted">No articles to review at the moment. Check back later.</div>`;
                return;
            }

            if (dueArticles.length) addArticleSection("Articles to Review", dueArticles, true);
            if (futureArticles.length) addArticleSection("Scheduled for Later", futureArticles, false);
        }


        function addArticleSection(title, articles, isDue) {
            const reviewList = document.getElementById(divid);
            reviewList.insertAdjacentHTML('beforeend', `
                    <div class="">
                        <div class="py-5 mb-5 display-4 bg-black text-warning text-center text-warning-glow-on-hover fw-bold">${title}</div>
                        <div class="container">                        
                            <div class="mb-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                ${articles.map(article => createArticleCardHTML(article, isDue)).join('')}
                            </div>                                
                        </div>
                    </div>
                `);
        }


        function createArticleCardHTML(article, isDue) {
            const title = getFormattedTitle(article.url, isDue);
            const subText = isDue
                ? `Last visited: ${article.lastReviewDate.toDateString()}`
                : `Next review: ${article.nextReviewDate.toDateString()}`;
            const cardBadge = isDue
                ? `<span class="badge bg-danger top-2 start-50  shadow-sm">Due Today</span>`
                : `<span class="badge bg-success top-2 start-50 shadow-sm">Upcoming</span>`;
            const icon = isDue ? "bi bi-calendar-x" : "bi bi-calendar-check";

            return `<div class="col">
                        <a href="${article.url}" target="_blank" class="text-decoration-none">
                            <div class="card h-100 border-0 shadow-on-hover scale-2 rounded-4 overflow-hidden position-relative bg-auto">
                                <!-- Badge -->
                                ${cardBadge}
                                <!-- Card Body -->
                                <div class="card-body d-flex flex-column justify-content-between text-center p-4">
                                    <div class="mb-3">
                                        <i class="${icon} text-primary fs-1 mb-3"></i>
                                        <h5 class="card-title fw-bold">${title}</h5>
                                    </div>
                                    <p class="text-muted small mx-auto mb-0">${subText}</p>
                                </div>
                                <!-- Decorative Footer -->
                                <div class="card-footer border-0 p-0">
                                    <div class="bg-opacity-10 py-2 text-center fw-semibold ${isDue ? 'text-danger bg-random' : 'text-secondary bg-secondary'}">
                                        ${isDue ? "Review Now" : "Scheduled for Later"}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>`;
        }

        function getFormattedTitle(url, isDue) {
            const parts = url.split('/');
            const course = parts[4]?.toUpperCase() || 'Unknown Course';
            const type = capitalize(parts[5] || 'Unknown Type');
            const title = (parts[6] || 'Unknown Title')
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
            // return isDue ? `${course} - ${type} - ${title}` : `${title}`;
            return `${title}`;
        }

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        updateReviewList();
    });
})();