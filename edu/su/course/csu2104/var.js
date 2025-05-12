
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Digital Forensics",
                desc: "Learn about Digital Forensics and its role in cybersecurity. This section covers the fundamentals of digital forensics, including tools, techniques, and best practices. Click to explore the theory behind digital forensics and enhance your understanding of cybersecurity concepts.",
                codetype: "CSU2104 | Digital Forensics",                
                cardimage: "https://cdn.dmj.one/edu/su/course/csu2104/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            // {
            //     link: "lab/",
            //     title: "Digital Forensics Lab",
            //     desc: "This section offers practical exercises and interactive tools to help you apply the concepts learned in the theory section. Click to access hands-on labs, coding exercises, and simulations that will enhance your understanding of digital forensics and prepare you for real-world scenarios.",
            //     codetype: "CSU1288 | Digital Forensics Lab",
            // },
            // {
            //     link: "practice/",
            //     title: "Practice Digital Forensics Concepts",
            //     desc: "Reinforce your understanding of Digital Forensics with practice exercises and interactive tools. This section offers a range of resources to help you master digital forensics concepts, including data recovery, evidence collection, and more. Click to access hands-on exercises that will enhance your comprehension of digital forensics principles and prepare you for advanced topics in cybersecurity.",
            //     codetype: "Practice | Practice Digital Forensics",                
            // }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Introduction to Computer Forensics",
                desc: "Explore the fundamentals of computer forensics, including the history, scope, and importance of digital forensics in cybersecurity. This topic covers the basic concepts and principles of computer forensics, providing a foundation for understanding the role of digital forensics in investigating cybercrimes and security incidents.",
                codetype: "Concepts",
                readtime: 5,
                link: "introduction-to-computer-forensics",
            },       
            {
                title: "Comprehensive Computer Forensics & Incident Response",
                desc: "Learn about the comprehensive process of computer forensics and incident response, including the steps involved in investigating cybercrimes and security incidents. This topic covers the various phases of computer forensics and incident response, from evidence collection and analysis to reporting and legal considerations.",
                codetype: "Concepts",
                readtime: 5,
                link: "comprehensive-computer-forensics-incident-response",
            },
            {
                title: "Whitepaper: Analysis of Blockchain-Based Homomorphic Voting Systems",
                desc: "Explore the analysis of blockchain-based homomorphic voting systems in this whitepaper. This document covers the concept of homomorphic encryption, its application in blockchain-based voting systems, and the benefits and challenges of using homomorphic voting systems for secure and transparent elections.",
                codetype: "Whitepaper",
                readtime: 60,
                date: "Wed March 26, 2025",
                link: "analysis-of-blockchain-based-homomorphic-voting-systems",
            },
            {
                title: "Understanding the Computer Forensic Process",
                desc: "Learn about the computer forensic process, including the steps involved in collecting, preserving, and analyzing digital evidence. This topic covers the various phases of the computer forensic process, from initial investigation to reporting and legal considerations.",
                codetype: "Concepts",
                readtime: 5,
                link: "understanding-the-computer-forensic-process",
                date: "Wed April 09, 2024",
            },
            {
                title: "Terminal 3 Revision",
                desc: "This section provides a comprehensive revision of Terminal 3 concepts, including the key topics and principles covered in the course. This revision is designed to help you reinforce your understanding of Terminal 3 concepts and prepare for assessments.",
                codetype: "Revision",
                readtime: 5,
                link: "t3-revision",
            }
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
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
        theory: get_class,
        // lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}