
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory of Web Technology",
                desc: "Explore the web technology, including web development tools, programming languages, and web design principles. This course covers essential concepts such as HTML, CSS, JavaScript, and responsive web design, providing a solid foundation for building modern websites and web applications. Click to learn more about web technology and enhance your skills in web development.",
                codetype: "CSU677 | Web Technology",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu677/img/logo.webp"
            },
            {
                link: "#",
                title: "Hands-on Web Development Lab [WIP]",
                desc: "Practice web development concepts and techniques with hands-on lab exercises. This section offers a range of practical activities to help you apply your knowledge of HTML, CSS, JavaScript, and other web technologies. Click to access interactive coding challenges, projects, and tutorials that will enhance your skills in web development and design.",
                codetype: "CSU677P | Web Technology Lab",
            },
            {
                link: "#",
                title: "Practice MCQs and Quizzes [WIP]",
                desc: "Test your knowledge of web technology with practice quizzes and multiple-choice questions. This section offers a variety of quizzes covering essential topics such as HTML, CSS, JavaScript, and responsive web design. Click to take quizzes and assess your understanding of web development concepts.",
                codetype: "Practice | Web Technology",
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Introduction to Web Technology",
                desc: "Explore the fundamentals of web technology, including the history of the internet, web development tools, and the role of web technologies in modern society. This introductory class provides an overview of essential concepts such as HTML, CSS, JavaScript, and responsive web design, setting the foundation for further exploration of web development principles and practices.",
                codetype: "Concepts",
                readtime: 5,
                link: "web-technology-concepts"
            },
            {
                title: "Number Utilities Made with JavaScript",
                desc: "Explore essential number utilities in JavaScript, including leap year detection, prime number checking, odd or even determination, factorial calculation, and more. This guide provides a comprehensive overview of working with numbers in JavaScript, covering concepts such as number conversion, rounding, precision, and practical algorithms.",
                codetype: "JavaScript",
                readtime: 5,
                link: "number-utilities"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_lab(def_date, def_author) {
        const arr = [
            // {
            //     title: "Interactive Sorting Algorithms Visualizer",
            //     desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
            //     author: "Divya Mohan",
            //     link: "https://colab.research.google.com/drive/1goYusw-6vB2d2qZtxo4V1kt4mmLBrN11?usp=sharing",
            //     // cardimage: "_url_"
            // },
            {
                title: "Practical 1: Procedure for VirtualBox Installation and Configuration",
                desc: "Learn to set up your operating system lab environment with VirtualBox, a powerful virtualization tool for creating and managing virtual machines. This practical exercise will guide you through the installation and configuration of VirtualBox, enabling you to create a virtualized environment for hands-on learning and experimentation.",
                codetype: "Installation",
                readtime: 2,
                date: "Wed February 07, 2024",
                link: "installing-virtualbox"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}