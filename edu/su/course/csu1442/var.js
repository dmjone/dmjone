
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Forensic Psychology",
                desc: "Explore the field of forensic psychology, which combines psychology and criminal justice to understand criminal behavior and the legal system. This course covers topics such as criminal profiling, eyewitness testimony, and mental health assessments in legal settings. Click to learn more about forensic psychology and its applications in law enforcement and the justice system.",
                codetype: "CSU1442 | Forensic Psychology",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu1442/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            
            {
                link: "practice/",
                title: "Practice Concepts",
                desc: "Practice your understanding of forensic psychology concepts with interactive quizzes, case studies, and real-world scenarios. These practice exercises will test your knowledge and help you apply key concepts to practical situations. Click to explore forensic psychology practice exercises and enhance your learning experience.",
                codetype: "Practice | Forensic Psychology",                
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Topic Name",
                desc: "Description of the topic.",
                codetype: "Concepts",
                readtime: 5,
                link: "link-to-the-topic"
            },            
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