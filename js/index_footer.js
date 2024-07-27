///////////////// Footer //////////////////
////////// Generate Course Cards //////////

async function fetchCourses() {
    const response = await fetch('js/courselist.json');
    const courses = await response.json();
    return courses;
}

function createCourseCard(course) {
    let classdata, styledata;
    switch (course.difficulty) {
        case "Hard":
            classdata = "text-danger";
            break;
        case "Easy":
            classdata = "text-success";
            break;
        default:
            styledata = `style="color:#FF7F50"`;
            break;
    }
    GLOBAL_accessurl = () => {
        if (course.details.program.toLowerCase() === 'professional') {
            return `/edu/professional/course/${course.id}/`;
        } else {
            return `/edu/su/course/${course.id}/`;
        }
    }
    index_coursecode = () => {
        if (course.details.program.toLowerCase() === 'professional') {
            return course.details.certification_organization;
        } else {
            return course.id.toUpperCase();
        }
    }
    return `
        <div class="col-lg-4 d-flex align-items-stretch justify-content-center py-4">
            <a href="${GLOBAL_accessurl()}">
                <div class="card rounded hoverable border-0 border-danger border-top border-opacity-50 border-bottom">
                    <div class="card-header m-0 p-0 justify-content-center align-items-center ">
                        <img src="${course.image}" class="card-img-top img-fluid vw-100" alt="${course.title}" style="height: 200px; object-fit: cover;">
                        <!-- <h2 class="p-3 d-none d-sm-block"><strong>${course.title}</strong></h2> -->
                    </div>
                    <div class="card-body justify-content-center align-items-center">
                        <div class="d-flex flex-column text-center ">
                            <div class="flex-grow-1 my-3">
                                <h2 class="pt-0"><strong>${course.title}</strong></h2>
                                <div class="py-1 text-center">
                                    <i class="fas fa-building d-none"></i>
                                    <strong class="text-muted d-none"> Course Details:</strong>
                                    <div class="badge-box">
                                        <span class="badge bg-warning-subtle bg-gradient bg-opacity-25 shadow p-2 m-1 fw-normal text-auto" style="letter-spacing:0.02rem"><i class="fas fa-graduation-cap"></i> &nbsp;${course.details.semester}</span>
                                        <span class="badge bg-warning-subtle bg-gradient bg-opacity-25 shadow p-2 m-1 fw-normal text-auto" style="letter-spacing:0.02rem"><i class="fas fa-briefcase"></i> &nbsp;${course.details.program}</span>
                                    </div>
                                </div>
                                <!-- <h5 class="card-text flex-fill text-reset" style="color:black !important"><strong>${course.id.toUpperCase()}</strong></h5> -->
                                <div class="my-3">                                
                                    <div class="h5 text-muted"><strong>${index_coursecode()}</strong></div>
                                </div>                                
                                <div class="p-0 mb-1 text-center d-none d-sm-block pt-3 ">
                                        <div class="mb-2">
                                            <i class="fas fa-user-tie" style="var(--text-color) !important"></i> &nbsp;Skills Acquired:
                                        </div>
                                        <div class="badge-box">
                                            ${course.competencies.map(comp => `<span class="badge fw-normal rounded-pill bg-primary bg-opacity-25 p-2 m-1" style="color: var(--text-color); letter-spacing:0.01rem">${comp}</span>`).join('')}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ${(course.details.program.toLowerCase() !== 'professional') ?
            `<div class="card-footer py-0 border-top border-1 border-dark bg-opacity-10 bg-dark bg-gradient d-none d-sm-block">
                        <div class="row text-center justify-content-center align-items-center">
                            <div class="col p-3">
                                <h4 class="fs-5 mb-1 pt-3 ${classdata}" ${styledata}><i class="fas fa-tachometer-alt"></i></h4>
                                <h4 class="fs-5 mb-1 ${classdata}" ${styledata}> ${course.difficulty}</h4>
                                <span class="d-block font-size-sm text-muted pb-3">Difficulty Level</span>
                            </div>

                            <div class="col p-3">
                                <h4 class="fs-5 mb-1"><i class="fas fa-clock"></i></h4>
                                <h4 class="fs-5 mb-1"> ${course.hours}</h4>
                                <span class="d-block font-size-sm text-muted">Hours Required</span>
                            </div>

                            <div class="col-sm p-3 d-none d-sm-block">
                                <h4 class="fs-5 mb-1 text-black"><i class="fas fa-book"></i></h4>
                                <h4 class="fs-5 mb-1 text-black"> ${course.topics}</h4>
                                <span class="d-block font-size-sm text-muted">Topics & Articles</span>
                            </div>
                        </div>
                    </div>` : ''}
                </div>
            </a>
        </div>
                                                                    `;
}




function renderCourses(courses) {
    const container = document.querySelector('.row.fadein-13.justify-content-center');
    container.innerHTML = courses.map(createCourseCard).join('');
    styleCards(); // Call the function to style cards right after rendering them
}

/* function sortCourses(courses, criteria) {
    if (criteria === 'semester') {
        return courses.sort((a, b) => {
            return parseInt(a.details.semester.match(/\d+/)[0], 10) - parseInt(b.details.semester.match(/\d+/)[0], 10);
        });
    } else if (criteria === 'topics') {
        return courses.sort((a, b) => a[criteria] - b[criteria]);
    } else {
        return courses.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
} */

/* function sortCourses(courses, criteria) {
    if (criteria.startsWith('semester')) {
        courses.sort((a, b) => {
            let semesterA = parseInt(a.details.semester.match(/\d+/)[0], 10);
            let semesterB = parseInt(b.details.semester.match(/\d+/)[0], 10);
            return criteria.endsWith('asc') ? semesterA - semesterB : semesterB - semesterA;
        });
    } else if (criteria.startsWith('difficulty')) {
        const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        courses.sort((a, b) => {
            let diffA = difficultyOrder[a.difficulty];
            let diffB = difficultyOrder[b.difficulty];
            return criteria.endsWith('asc') ? diffA - diffB : diffB - diffA;
        });
    } else if (criteria === 'topics') {
        return courses.sort((a, b) => a[criteria] - b[criteria]);
    } else {
        return courses.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
    return courses;
} */

/* function sortCourses(courses, criteria) {
    if (criteria.startsWith('semester')) {
        courses.sort((a, b) => {
            let semesterA = parseInt(a.details.semester.match(/\d+/)[0], 10);
            let semesterB = parseInt(b.details.semester.match(/\d+/)[0], 10);
            return criteria.endsWith('asc') ? semesterA - semesterB : semesterB - semesterA;
        });
    } else if (criteria.startsWith('difficulty')) {
        const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        courses.sort((a, b) => {
            let diffA = difficultyOrder[a.difficulty];
            let diffB = difficultyOrder[b.difficulty];
            return criteria.endsWith('asc') ? diffA - diffB : diffB - diffA;
        });
    } else if (criteria.startsWith('topics')) {
        courses.sort((a, b) => {
            let topicsA = typeof a.topics === 'string' ? parseInt(a.topics.replace(/[^\d]/g, ''), 10) : a.topics;
            let topicsB = typeof b.topics === 'string' ? parseInt(b.topics.replace(/[^\d]/g, ''), 10) : b.topics;
            return criteria.endsWith('asc') ? topicsA - topicsB : topicsB - topicsA;
        });
    } else if (criteria === 'code') {
        courses.sort((a, b) => a.id.localeCompare(b.id));
    } else {
        courses.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
    return courses;
} */

function sortCourses(courses, criteria) {
    const skipSorting = (course) => course.details.program.toLowerCase() === 'professional';

    courses.sort((a, b) => {
        if (skipSorting(a) || skipSorting(b)) {
            return 0; // Skip sorting for professional courses
        }

        if (criteria.startsWith('semester')) {
            let semesterA = parseInt(a.details.semester.match(/\d+/)[0], 10);
            let semesterB = parseInt(b.details.semester.match(/\d+/)[0], 10);
            return criteria.endsWith('asc') ? semesterA - semesterB : semesterB - semesterA;
        }

        if (criteria.startsWith('difficulty')) {
            const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            let diffA = difficultyOrder[a.difficulty];
            let diffB = difficultyOrder[b.difficulty];
            return criteria.endsWith('asc') ? diffA - diffB : diffB - diffA;
        }

        if (criteria.startsWith('topics')) {
            let topicsA = typeof a.topics === 'string' ? parseInt(a.topics.replace(/[^\d]/g, ''), 10) : a.topics;
            let topicsB = typeof b.topics === 'string' ? parseInt(b.topics.replace(/[^\d]/g, ''), 10) : b.topics;
            return criteria.endsWith('asc') ? topicsA - topicsB : topicsB - topicsA;
        }

        if (criteria === 'code') {
            return a.id.localeCompare(b.id);
        }

        return a[criteria].localeCompare(b[criteria]);
    });

    return courses;
}




function getRandomLightColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function getRandomDarkColor() {
    var letters = '012345'.split(''); // Use darker hex values
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function styleCards() {
    var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var cards = document.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
        var randomColor1, randomColor2;

        if (prefersDarkMode) {
            randomColor1 = getRandomDarkColor();
            randomColor2 = getRandomDarkColor();
        } else {
            randomColor1 = getRandomLightColor();
            randomColor2 = getRandomLightColor();
        }

        cards[i].style.background = `linear-gradient(270deg, ${randomColor1}, ${randomColor2})`;
    }
}

// Call styleCards to apply the styles
styleCards();

// Optionally, listen for changes in the color scheme preference to re-apply styles
window.matchMedia('(prefers-color-scheme: dark)').addListener(styleCards);
window.matchMedia('(prefers-color-scheme: light)').addListener(styleCards);


document.addEventListener('DOMContentLoaded', async () => {
    let courses = await fetchCourses();
    // Initially sort courses by semester in descending order
    const sortedCourses = sortCourses([...courses], 'semester-desc');
    renderCourses(sortedCourses);

    document.getElementById('sortCourses').addEventListener('change', function () {
        if (this.value) {
            const sortedCourses = sortCourses([...courses], this.value);
            renderCourses(sortedCourses);
        }
    });
});




////////////// Generate Nav Menu //////////////
document.addEventListener("DOMContentLoaded", function () {
    fetch('/js/courselist.json')
        .then(response => response.json())
        .then(data => {
            const coursesBySemester = data.reduce((acc, course) => {
                const semester = course.details.semester;
                if (!acc[semester]) {
                    acc[semester] = [];
                }
                acc[semester].push(course);
                return acc;
            }, {});

            const navbarContainer = document.getElementById('navbar-container');
            navbarContainer.innerHTML = generateNavbarHTML(coursesBySemester);

            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    $(".nav-transparent").addClass("window-scrolled shadow-lg");
                } else {
                    $(".nav-transparent").removeClass("window-scrolled shadow-lg");
                }
            });

            $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
                if (!$(this).next().hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
                }
                var $subMenu = $(this).next('.dropdown-menu');
                $subMenu.toggleClass('show');
                $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    $('.dropdown-submenu .show').removeClass('show');
                });
                return false;
            });

            function openSearchModal() {
                $('#searchbox').modal('show');
            }
        })
        .catch(error => console.error('Error fetching courses:', error));
});

function generateNavbarHTML(coursesBySemester) {
    let navbarHTML = `
                <div class="container-fluid">
                    <div class="d-flex align-items-center justify-content-between">
                        <a class="navbar-brand" href="/">
                            <img src="/logo.png" alt="dmj.one Logo" style="height: 32px;">
                        </a>
                    </div>
                    <div class="d-flex align-items-center justify-content-between align-items-center">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon text-auto"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse dropdown-center justify-content-center" id="navbar">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item"><a class="nav-link active" href="/">Home</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
                                <ul class="mt-2 dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="navbarDropdown">
                                    `;

    for (const [semester, courses] of Object.entries(coursesBySemester)) {
        navbarHTML += `
                    <li class="dropdown-submenu">
                        <a class="dropdown-item dropdown-toggle" href="#">${semester}</a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                `;

        courses.forEach(course => {
            GLOBAL_accessurl = () => {
                if (course.details.program.toLowerCase() === 'professional') {
                    return `/edu/professional/course/${course.id}/`;
                } else {
                    return `/edu/su/course/${course.id}/`;
                }
            }
            navbarHTML += `<li><a class="dropdown-item" href="${GLOBAL_accessurl()}">${course.title}</a></li>`;
        });

        navbarHTML += `
                                </ul>
                            </li>
                            `;
    }

    navbarHTML += `
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Initiatives</a>
                        <ul class="dropdown-menu mt-2">
                            <li><a class="dropdown-item" href="/about" data-toggle="tooltip" data-placement="top" title="Visit our Educational Initiative." data-original-title="Visit our Educational Initiative.">Educational</a></li>
                            <li><a class="dropdown-item" href="/binarybattles/" data-toggle="tooltip" data-placement="top" title="An Annual Event Where Bits and Brains Collide" data-original-title="An Annual Event Where Bits and Brains Collide.">Binary Battles</a></li>
                        </ul>
                    </li>
                        <li class="nav-item"><a class="nav-link" href="#contact-us-button-logical-href">Contact</a></li>
                        <div id="userMenu">
                            <li class="nav-item">
                                <a class="nav-link" href="${GLOBAL_login_page_path}?redirect=${encodeURIComponent(window.location.pathname)}">
                                    Login
                                </a>
                            </li>
                        </div>
                    </ul>
                    <button id="search-button" type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#searchbox"><i class="bi bi-search"></i></button>
                    </div>
                    </div >
                `;

    return navbarHTML;
}



document.addEventListener('DOMContentLoaded', function () {
    const blurElements = document.querySelectorAll('.blur-8');

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.addEventListener('scroll', function () {
            blurElements.forEach(element => {
                if (window.scrollY > 0) {
                    element.classList.remove('blur-8');                    
                } else {                    
                    element.classList.add('blur-8');
                }
            });
        });
    }
});

