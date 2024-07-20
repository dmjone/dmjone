
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "matrix/",
                title: "Matrix",
                desc: "Dive into the exciting world of matrices! Discover how these powerful mathematical tools are used to solve linear equations, analyze data, and more. Explore basic and advanced concepts, including matrix properties, operations, and applications. Get ready to transform your understanding of mathematics!",
                codetype: "Matrix",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu951/img/logo.webp"
            },
            /* {
                link: "seminar/",
                title: "Seminars",
                desc: "Stay Ahead of the Game with Our In-Depth Collection of Classroom Seminars! Get a Firsthand Look at the Latest Developments and Techniques in Your Field. Brush Up on Your Knowledge and Take Your Skills to the Next Level - Let's Get Inspired!",
                codetype: "Seminar"
            },
            {
                link: "assignment/",
                title: "Assignments",
                desc: "Put Your Skills to the Test with Our Challenging Classroom Assignments! From Basic Concepts to Advanced Problems, We've Got You Covered. Get Ready to Hone Your Abilities, Improve Your Understanding, and Prove Your Worth. Let's Get to Work!",
                codetype: "Assignment"
            } */
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_matrix(def_date, def_author) {
        const arr = [
            {
                title: "Concepts of Matrices",
                desc: "Step into the world of matrices! Discover the fundamental tools used in fields like engineering, physics, and computer science. This topic covers everything from basic operations to advanced concepts like eigenvalues and eigenvectors. Unleash the power of matrices and unlock new dimensions in problem-solving. Get ready to matrix your way to success!",
                link: "concepts",
                author: "Divya Mohan"
            },
            /* {
                title: "Section B: Electricity and Magnetism",
                desc: "Get ready to explore Electricity & Magnetism! Learn about electric field & potential, dielectric polarization, displacement current, Maxwell's equations, velocity of EM waves, electromagnetic spectrum, magnetic materials, superconductivity, ultrasonic waves, Type I & Type II superconductors and more. Get ready to electrify your knowledge!"
            } */
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }

    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;

    const functions = {
        matrix: get_matrix,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}
