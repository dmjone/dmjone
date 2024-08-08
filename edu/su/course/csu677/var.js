
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Understanding Operating Systems",
                desc: "Explore the intricacies of Operating Systems with Shoolini University's CSU360 Operating Systems course, detailed on dmj.one. Delve into the core functions of modern operating systems, including process management, memory management, file systems, and security. Click to uncover the principles and practices that underpin efficient and secure computer operations. Learn how operating systems serve as the backbone of software development and computing, preparing you for advanced topics in computer science and enhancing your problem-solving skills.",
                codetype: "CSU360 | Operating Systems",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu360/img/logo.webp"
            },
            {
                link: "lab/",
                title: "Hands-on Operating Systems Lab: Enhance Your System Management Skills",
                desc: "Advance your understanding of Operating Systems in the practical lab with code CSU360P. This lab course offers a hands-on approach to learning about operating system concepts, including process synchronization, scheduling algorithms, and memory allocation techniques. Click to engage in interactive sessions that will improve your technical skills in managing and optimizing operating systems, preparing you for the complexities of real-world IT environments.",
                codetype: "CSU360P | Operating Systems Lab",
            },
            {
                link: "practice/",
                title: "Practice Operating Systems Concepts: Strengthen Your Knowledge",
                desc: "Reinforce your understanding of Operating Systems with practice exercises and interactive tools. This section offers a range of resources to help you master operating system concepts, including sorting algorithms, virtual machine installation, and more. Click to access hands-on exercises that will enhance your comprehension of operating system principles and prepare you for advanced topics in computer science.",
                codetype: "Practice | Operating Systems",                
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Exploring Operating Systems: Fundamentals to Advanced Concepts",
                desc: "A comprehensive guide on operating systems, covering essential functions, types, and process management to advanced networking and memory concepts.",
                codetype: "Concepts",
                readtime: 45,
                link: "operating-system-concepts"
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