
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
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Intrusion Detection and Prevention: An Overview",
                desc: "Explore the fundamentals of intrusion detection and prevention, including the types, components, and techniques used to detect and prevent network attacks. This topic covers the basic concepts and principles of intrusion detection and prevention, providing a foundation for understanding the role of IDS in network security.",
                codetype: "Concepts",
                readtime: 5,
                date: "Mon February 03, 2025",
                link: "intrusion-detection-and-prevention-overview",
            },            
            {
                title: "Threats to Data: Internal and External",
                desc: "Learn about the various threats to data security, including internal and external threats that can compromise the confidentiality, integrity, and availability of data. This topic covers the different types of threats, attack vectors, and security measures to protect data from unauthorized access and manipulation.",
                codetype: "Concepts",
                readtime: 5,
                date: "Tue February 04, 2025",
                link: "threats-to-data-internal-external",
            },
            {
                title: "Types of Attacks: An Overview",
                desc: "Explore the different types of cyber attacks, including malware, phishing, DDoS, and more. This topic covers the common attack vectors used by cybercriminals to compromise systems and networks, highlighting the impact and consequences of cyber attacks on organizations and individuals.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed February 05, 2025",
                link: "types-of-attacks-overview",
            },
            {
                title: "Types of Intrusion Detection Systems",
                desc: "Learn about the different types of Intrusion Detection Systems (IDS), including network-based, host-based, and hybrid IDS. This topic covers the features, advantages, and limitations of each IDS type, helping you understand the role of IDS in network security and threat detection.",
                codetype: "Concepts",
                readtime: 5,
                date: "Thu February 06, 2025",
                link: "types-of-intrusion-detection-systems",
            },
            {
                title: "Information Sources for IDS",
                desc: "Explore the information sources used by Intrusion Detection Systems (IDS) to detect and prevent network attacks. This topic covers the various data sources, including logs, packets, and alerts, that IDS tools analyze to identify suspicious activities and security incidents.",
                codetype: "Concepts",
                readtime: 5,
                date: "Fri February 07, 2025",
                link: "information-sources-for-ids",
            },
            {
                title: "Revision for Term 1",
                desc: "Review the key concepts and topics covered in Term 1 of the course. This revision session will help you consolidate your understanding of intrusion detection and prevention, data threats, attack types, IDS types, and information sources for IDS.",
                codetype: "Revision",
                readtime: 5,
                date: "Thu March 6, 2025",
                link: "revision-for-term-1",
            },
            {
                title: "Intrusion Prevention Systems (IPS)",
                desc: "Learn about Intrusion Prevention Systems (IPS) and their role in network security. This topic covers the features, benefits, and deployment options of IPS, highlighting the differences between IDS and IPS in detecting and preventing network attacks.",
                codetype: "Concepts",
                readtime: 5,
                date: "Mon February 10, 2025",
                link: "intrusion-prevention-systems-ips",
            },            
            {
                title: "IDS Analysis Models and Techniques",
                desc: "Explore the various models and techniques used in Intrusion Detection Systems (IDS) analysis. This topic covers the different approaches to analyzing network traffic and identifying suspicious activities, including signature-based, anomaly-based, and hybrid detection methods.",
                codetype: "Concepts",
                readtime: 5,
                date: "Mon March 10, 2025",
                link: "ids-analysis-models-and-techniques",
            },
            {
                title: "Process Models for Intrusion Detection",
                desc: "Learn about the process models used in Intrusion Detection Systems (IDS) for analyzing network traffic and detecting intrusions. This topic covers the different stages of the intrusion detection process, including data collection, analysis, and response.",
                codetype: "Concepts",
                readtime: 5,
                date: "Tue March 11, 2025",
                link: "process-models-for-intrusion-detection",
            },
            {
                title: "Analysis Schemes - Credentialed vs Non-credentialed Vulnerability Analysis",
                desc: "Explore the differences between credentialed and non-credentialed vulnerability analysis schemes. This topic covers the advantages and disadvantages of each approach, helping you understand how to effectively assess vulnerabilities in systems and networks.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed March 12, 2025",
                link: "credentialed-vs-non-credentialed-vulnerability-analysis",
            },
            {
                title: "Practice Sets Based on L6, L7, L8, L9",
                desc: "Test your knowledge and understanding of the concepts covered in Lectures 6, 7, 8, and 9. This practice set includes questions and exercises to reinforce your learning and prepare you for assessments.",
                codetype: "Practice",
                readtime: 5,
                date: "Wed April 9, 2025",
                link: "practice-sets-l6-l7-l8-l9",
            },
            {
                title: "Mapping Intrusion Responses to Security Policies",
                desc: "Learn about the process of mapping responses to security policies in Intrusion Detection Systems (IDS). This topic covers the importance of aligning IDS responses with organizational security policies and procedures to effectively manage security incidents.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed May 13, 2025",
                link: "mapping-intrusion-responses-to-security-policies",
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