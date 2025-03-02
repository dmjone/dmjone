
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Intrusion Detection System (IDS)",
                desc: "Learn about Intrusion Detection Systems (IDS) and their role in network security. This section covers the fundamentals of IDS, including types, components, and detection techniques. Click to explore the theory behind IDS and enhance your understanding of network security concepts.",
                codetype: "CSU1288 | Intrusion Detection System (IDS)",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu1288/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            // {
            //     link: "lab/",
            //     title: "Lab: Hands-On Practice and Exercises",
            //     desc: "Description of the topic. This section offers practical exercises and interactive tools to help you apply the concepts learned in the theory section. Click to access hands-on labs, coding exercises, and simulations that will enhance your understanding of the topic.",
            //     codetype: "CSUCODE | Course",
            // },
            // {
            //     link: "practice/",
            //     title: "Practice Operating Systems Concepts: Strengthen Your Knowledge",
            //     desc: "Reinforce your understanding of Operating Systems with practice exercises and interactive tools. This section offers a range of resources to help you master operating system concepts, including sorting algorithms, virtual machine installation, and more. Click to access hands-on exercises that will enhance your comprehension of operating system principles and prepare you for advanced topics in computer science.",
            //     codetype: "Practice | Operating Systems",                
            // }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    // function get_class(def_date, def_author) {
    //     const arr = [
    //         {
    //             title: "Topic Name",
    //             desc: "Description of the topic.",
    //             codetype: "Concepts",
    //             readtime: 5,
    //             link: "link-to-the-topic"
    //         },            
    //     ];
    //     body_genmenu.processData(arr, def_date, def_author);
    // }
    // function get_lab(def_date, def_author) {
    //     const arr = [
    //         // {
    //         //     title: "Interactive Sorting Algorithms Visualizer",
    //         //     desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
    //         //     author: "Divya Mohan",
    //         //     link: "https://colab.research.google.com/drive/1goYusw-6vB2d2qZtxo4V1kt4mmLBrN11?usp=sharing",
    //         //     // cardimage: "_url_"
    //         // },
    //         {
    //             title: "Practical 1: Procedure for VirtualBox Installation and Configuration",
    //             desc: "Learn to set up your operating system lab environment with VirtualBox, a powerful virtualization tool for creating and managing virtual machines. This practical exercise will guide you through the installation and configuration of VirtualBox, enabling you to create a virtualized environment for hands-on learning and experimentation.",
    //             codetype: "Installation",
    //             readtime: 2,
    //             date: "Wed February 07, 2024",
    //             link: "installing-virtualbox"              
    //         },            
    //     ];
    //     body_genmenu.processData(arr, def_date, def_author);
    // }


    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        // theory: get_class,
        // lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}