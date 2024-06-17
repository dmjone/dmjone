(function () {

    // const local_login_page_path = '/test/google/signin/alogin';
    // const local_account_page_path = '/test/google/signin/account';
    const local_login_page_path = '/login';
    const local_account_page_path = '/my/';

    function setCookie(name, value, expiryTime) {
        const expires = new Date(expiryTime).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
    }

    function getCookie(name) {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
    }

    function createSession(userData) {
        const expiryTime = userData.exp * 1000; // Convert exp to milliseconds                 
        localStorage.setItem('google_user', JSON.stringify(userData));
        localStorage.setItem('userName', userData.name);
        setCookie('sid', 'true', expiryTime);
    }

    function destroySession() {
        localStorage.removeItem('google_user');
        localStorage.removeItem('userName');
        document.cookie = 'sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        const timeoutExpiry = Date.now() + 5 * 60 * 1000;
        setCookie('logout_timeout', 'true', timeoutExpiry);
    }

    function signOut() {
        destroySession();
        window.location.reload(true);
    }

    window.handleCredentialResponse = function (response) {
        const userObject = JSON.parse(atob(response.credential.split('.')[1]));
        userObject.timestamp = Date.now();
        createSession(userObject);
        displayLogin();
    };

    function checkLogin() {
        const userData = localStorage.getItem('google_user');
        const skipPromptCookie = getCookie('sid');

        if (!userData || !skipPromptCookie) {
            destroySession();
            return false;
        }

        if (userData && skipPromptCookie) {
            try {
                const parsedUserData = JSON.parse(userData);
                const currentTime = Date.now();
                const expiryTime = parsedUserData.exp * 1000;

                if (currentTime >= expiryTime) {
                    destroySession();
                    return false;
                } else {
                    return true;
                }
            } catch (e) {
                destroySession();
                return false;
            }
        } else {
            return false;
        }
    }

    console.log(checkLogin());

    function getRedirectUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        let redirectto = urlParams.get('redirect');
        if (redirectto) {
            // Ensure that the redirect path begins with a '/' to prevent unintended URLs
            if (!redirectto.startsWith('/')) {
                redirectto = '/' + redirectto;
            }
            // Prepend the origin if it's a relative path
            if (!redirectto.startsWith('http') && !redirectto.startsWith('https')) {
                redirectto = window.location.origin + redirectto;
            }
        }
        console.log('Redirect to: ', redirectto);
        return redirectto;
    }

    function displayLogin() {
        const redirectto = getRedirectUrl();
        const isloggedin = checkLogin();

        if (!isloggedin) {
            console.log('User not logged in from displayLogin');
            // Redirect to login page if not logged in and currently on the account page
            if (window.location.pathname === local_account_page_path) {
                window.location.href = local_login_page_path + '?redirect=' + encodeURIComponent(window.location.pathname);
            }
        } else {
            console.log('User logged in');
            // If there's a valid redirect URL, navigate there
            if (redirectto) {
                window.location.href = redirectto;
            } else {
                // Redirect to the account page if no specific redirect provided and currently on the login page
                if (window.location.pathname === local_login_page_path) {
                    window.location.href = local_account_page_path;
                }
            }
            displayUserLoggedInNav(); // Assuming this function updates the navigation for logged-in users
        }
    }


    function displayUserLoggedInNav() {
        isloggedin = checkLogin();
        if (!isloggedin) {
            console.log('User not logged in from displayUserLoggedInNav');
            return;
        }
        if (isloggedin && localStorage.getItem('google_user')) {
            try {
                const userDetails = JSON.parse(localStorage.getItem('google_user'));
                const userMenu = document.getElementById('userMenu');
                userMenu.innerHTML = `<li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="${userDetails.picture}" alt="User Picture" class="rounded-circle" width="25" height="25" id="userPic">
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="${local_login_page_path}">My Account</a>
                        </li>
                            <!-- <a class="dropdown-item" href="#">${userDetails.name}</a>                
                            <a class="dropdown-item" href="#">${userDetails.email}</a> -->
                        <li>                
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item signOutButton">Logout</button>
                        </li>        
                    </ul>
                    </li>`;
                const signOutButtons = document.querySelectorAll('.signOutButton');
                signOutButtons.forEach(button => {
                    button.addEventListener('click', signOut);
                });
            } catch (e) {
                console.log('Could not parse user details from localStorage');
            }
        }
    }
    document.addEventListener('DOMContentLoaded', displayLogin);
})();