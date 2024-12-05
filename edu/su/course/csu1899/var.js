
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Overview and Concepts",
                desc: "Theoretical concepts and principles related to Ethical Hacking. Click to explore the fundamentals and advanced aspects of the subject, including real-world applications and case studies.",
                codetype: "CSU1899 | Ethical Hacking",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu1899/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            {
                link: "lab/",
                title: "Lab: Hands-On Practice and Exercises [WIP]",
                desc: "Hands-on practice and exercises related to Ethical Hacking. Click to explore practical applications and case studies, including real-world scenarios and challenges.",
                codetype: "CSU1899P | Ethical Hacking",
            },
            {
                link: "practice/",
                title: "Practice Ethical Hacking Concepts: Strengthen Your Knowledge",
                desc: "Reinforce your understanding of Ethical Hacking with practice exercises and interactive tools. This section offers a range of resources to help you master Ethical Hacking Concepts, including coding challenges, quizzes, and more.",
                codetype: "Practice | Ethical Hacking",                
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "First Occurrence of Events",
                desc: "The first occurrence of events in Ethical Hacking. This module covers the key events and milestones in the history of Ethical Hacking, highlighting the evolution of hacking techniques, tools, and practices over time.",
                codetype: "Trivia",
                readtime: 5,
                link: "first-occurrence-events"
            },
            {
                title: "Lecture 1 - Ethical Hacking Overview",
                desc: "Explore the fundamentals of Ethical Hacking, including key concepts, principles, and practices. This introductory module provides an overview of Ethical Hacking, its applications, and the role of Ethical Hackers in safeguarding digital assets and information.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "ethical-hacking-overview"
            },      
            {
                title: "Lecture 2: Terminologies, Tools, and Software",
                desc: "Learn about the essential terminologies, tools, and software used in Ethical Hacking. This module covers the key terms, technologies, and applications that are integral to the field of Ethical Hacking, providing you with a solid foundation for further exploration.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "terminologies-tools-software"
            },
            {
                title: "Lecture 3: Hacker - Types of Hackers",
                desc: "Understand the different types of hackers and their roles in the digital landscape. This module explores the various categories of hackers, including White Hat, Black Hat, and Grey Hat hackers, and their distinct characteristics, motivations, and methodologies.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "hacker-types"                
            },
            {
                title: "Lecture 4: Hacktivism: Role of Security and Penetration Tester",
                desc: "Discover the concept of hacktivism and the role of security and penetration testers in safeguarding digital systems. This module delves into the ethical considerations, responsibilities, and practices of security professionals in identifying vulnerabilities and securing networks.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "hacktivism-security-penetration-tester"                
            },
            {
                title: "Lecture 5: Penetration Testing Methodology, Foot Printing",
                desc: "Learn about the penetration testing methodology and the process of foot printing in Ethical Hacking. This module provides an in-depth exploration of the steps involved in penetration testing, including reconnaissance, scanning, enumeration, and vulnerability assessment.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "penetration-testing-foot-printing"
            },
            {
                title: "Lecture 6: Google Hacking, Scanning, Windows Hacking",
                desc: "Explore advanced hacking techniques, including Google hacking, scanning, and Windows hacking. This module covers the tools, methods, and strategies used by hackers to exploit vulnerabilities and gain unauthorized access to systems and networks.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "google-hacking-scanning-windows-hacking"
            },
            {
                title: "Lecture 7: Linux Hacking, Wireless Hacking, Social Engineering",
                desc: "Learn about Linux hacking, wireless hacking, and social engineering in Ethical Hacking. This module explores the techniques and practices used by hackers to compromise systems, networks, and individuals, highlighting the importance of security awareness and best practices.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "linux-hacking-wireless-hacking-social-engineering"
            },
            {
                title: "Lecture 8: Proxy & Packet Filtering",
                desc: "Understand the concepts of proxy and packet filtering in Ethical Hacking. This module provides an overview of the technologies and methods used to monitor and control network traffic, ensuring data security and integrity in digital communications.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "proxy-packet-filtering"
            },
            {
                title: "Lecture 9: Denial of Service, Sniffer",
                desc: "Explore the concepts of denial of service attacks and network sniffers in Ethical Hacking. This module delves into the techniques and tools used by hackers to disrupt network operations and intercept data, highlighting the risks and vulnerabilities associated with digital communications.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "denial-of-service-sniffer"
            },
            {
                title: 'Lecture 10: Social Engineering System and Network Vulnerability and Threats to Security',
                desc: "Learn about social engineering, system and network vulnerabilities, and threats to security in Ethical Hacking. This module explores the human and technical aspects of security breaches, providing insights into the strategies and tactics used by hackers to exploit vulnerabilities and compromise systems.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "social-engineering-system-network-vulnerability-threats"
            },
            {
                title: "Lecture 11: Proxy Servers and VPNs",
                desc: "Understand the concepts of proxy servers and virtual private networks (VPNs) in Ethical Hacking. This module explores the technologies and methods used to secure network communications and protect data privacy, ensuring secure and anonymous online interactions.",
                codetype: "Faculty Lecture",
                readtime: 5,
                link: "proxy-servers-vpns"
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
                title: "Practical 1: Write the step-by-step procedure to install the Kali Linux and VM Ware.",
                desc: "Learn how to install Kali Linux and VM Ware on your system. This practical exercise provides a detailed guide on setting up the necessary tools and environments for Ethical Hacking, enabling you to practice and experiment with hacking techniques and tools.",
                codetype: "Practical Exercise",
                readtime: 5,
                link: "vmware-kali-setup"
            },            
            {
                title: "Practical 2: Write 30 important Linux commands useful in hacking with their name, syntax, purpose and relevant screenshot of output.",
                desc: "Explore 30 important Linux commands used in hacking and cybersecurity. This practical exercise provides a comprehensive list of commands, along with their syntax, purpose, and output, enabling you to familiarize yourself with the Linux environment and command-line interface.",
                codetype: "Practical Exercise",
                readtime: 5,
                link: "commands-in-linux"                
            },
            {
                title: "Practical 3: Write the step-by-step procedure to change the MAC address using Kali Linux.",
                desc: "Learn how to change the MAC address using Kali Linux. This practical exercise provides a detailed guide on modifying the MAC address of your network interface, enabling you to enhance your privacy and security while browsing the internet.",
                codetype: "Practical Exercise",
                readtime: 5,
                link: "change-mac-address"
            },
            {
                title: "Practical 4: Write the procedure/ways to hack the website.",
                desc: "Explore different methods and techniques on the website hacking. This practical exercise provides an overview of the strategies and tools used by hackers to compromise websites, highlighting the vulnerabilities and security risks associated with web applications.",
                codetype: "Practical Exercise",
                readtime: 5,
                link: "procedure-to-hack-website"
            }
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