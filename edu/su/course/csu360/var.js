
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {		
        const arr = [
            {
                link: "theory/",
                title: "Understanding Operating Systems",
                desc: "Explore the intricacies of Operating Systems with Shoolini University's CSU360 Operating Systems course, detailed on dmj.one. Delve into the core functions of modern operating systems, including process management, memory management, file systems, and security. Click to uncover the principles and practices that underpin efficient and secure computer operations. Learn how operating systems serve as the backbone of software development and computing, preparing you for advanced topics in computer science and enhancing your problem-solving skills.",
                codetype: "CSU360 | Operating Systems",
            },
            {
                // link: "lab/",
                link: "#",
                title: "Hands-on Operating Systems Lab: Enhance Your System Management Skills [WIP]",
                desc: "Advance your understanding of Operating Systems in the practical lab with code CSU360P. This lab course offers a hands-on approach to learning about operating system concepts, including process synchronization, scheduling algorithms, and memory allocation techniques. Click to engage in interactive sessions that will improve your technical skills in managing and optimizing operating systems, preparing you for the complexities of real-world IT environments.",
                codetype: "CSU360P | Operating Systems Lab",
            }
        ];

        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1162`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
        }
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
            {
                "title": "Understanding Scheduling Algorithms in Operating Systems",
                "desc": "An in-depth examination of scheduling algorithms, including types, criteria, examples, and performance metrics, essential for optimizing system efficiency.",
                "codetype": "Concepts",
                "readtime": 25,
                "link": "scheduling-algorithms"
            },
            {
                title: "First Come, First Served (FCFS) Scheduling Algorithm in OS",
                desc: "An exploration of the FCFS scheduling algorithm, detailing its characteristics, advantages, disadvantages, and implementation with examples.",
                codetype: "Concepts",
                readtime: 15,
                link: "scheduling-algorithms-fcfs"
            },
            {
                "title": "Exploring Preemptive Shortest Job First Scheduling",
                "desc": "A comprehensive guide on Preemptive SJF scheduling, detailing its operation, benefits, implementation challenges, and optimization strategies to improve system performance.",
                "codetype": "SRTF || SJF-P",
                "readtime": 15,
                // "link": "exploring-preemptive-shortest-job-first-scheduling"
                "link": "scheduling-algorithms-preemptive-sjf"
            },
            {
                "title": "Understanding Synchronization in Operating Systems",
                "desc": "Explore the critical role of synchronization in operating systems, including its necessity for process coordination, preventing race conditions, and ensuring efficient resource utilization.",
                "codetype": "Synchronization",
                "readtime": 10,
                "link": "synchronization-concepts"
            },

        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU360 | ${_data.codetype}` : `CSU360 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
        }
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
                link: "#"
            },
            {
                title: "Practical 2: Creation of Virtual Environment and Mounting Operating System in VirtualBox",
                desc: "Learn to create virtual machines and install operating systems in VirtualBox for hands-on practice and experimentation. This practical exercise will guide you through the process of creating a virtual machine, configuring hardware settings, and installing an operating system, enabling you to explore different OS environments and configurations.",
                codetype: "VM Configuration",
                readtime: 5,
                link: "#"
            }, {
                title: "Practical 3: Perform an operation of operating system for File Management System.",
                desc: "Learn to manage files and directories in Linux systems for efficient data organization and storage. This practical exercise will guide you through file management tasks, including creating, copying, moving, and deleting files, enabling you to organize and maintain your data effectively.",
                codetype: "Concepts",
                readtime: 5,
                link: "#"
            }, {
                title: "Practical 4: Perform an operation of operating system for File Permissions.",
                desc: "Learn to manage file permissions in Linux systems for data security and access control. This practical exercise will guide you through setting file permissions, ownership, and access rights, enabling you to protect sensitive data and manage user privileges effectively.",
                codetype: "Concepts",
                readtime: 5,
                link: "#"
            },
            {
                title: "Practical 5: Perform an operation of operating system for User Management System.",
                desc: "Learn to manage users and groups in Linux systems for system security and resource allocation. This practical exercise will guide you through user management tasks, including creating, modifying, and deleting user accounts, enabling you to control access permissions and system resources effectively.",
                codetype: "Linux Commands",
                readtime: 4,
                link: "#"
            },  {
                title: "Practical 6: Read and Write about primary, secondary and virtual memory",
                desc: "Learn about primary, secondary, and virtual memory in operating systems. This practical exercise will introduce you to the concepts of memory management, including primary memory (RAM), secondary memory (storage devices), and virtual memory, enabling you to understand their role in system performance and resource allocation.",
                codetype: "Concepts",
                readtime: 5,
                link: "#"
            }, {
                title: "Practical 7: Perform an operation of operating system to configure Internet Protocol.",
                desc: "Learn to configure Internet Protocol (IP) settings in Linux systems for network connectivity. This practical exercise will guide you through the process of setting up IP addresses, subnet masks, and gateways, enabling you to establish network connections and communicate with other devices on the network.",
                codetype: "Concepts",
                readtime: 4,
                link: "#"
            }, {
                title: "Practical 8: Perform an operation of operating system to install and configure SSH services",
                desc: "Learn to install and configure SSH services in Linux systems for secure remote access. This practical exercise will guide you through the process of setting up SSH services, generating SSH keys, and managing remote connections, enabling you to securely access and manage your system over the network.",
                codetype: "Concepts",
                readtime: 4,
                link: "#"
            }, {
                title: "Practical 9: Perform an operation of operating system to install and configure Network Firewall and Ports",
                desc: "Learn to install and configure network firewalls and ports in Linux systems. This practical exercise will guide you through the process of setting up network firewalls, managing ports, and enhancing network security, enabling you to protect your system from unauthorized access and malicious attacks.",
                codetype: "Concepts",
                readtime: 4,
                link: "#"
            }, {
                title: "Practical 10: Commands of Linux Operating System.",
                desc: "Learn about essential Linux commands for system administration and management. This practical exercise will introduce you to common Linux commands for file operations, user management, network configuration, and system monitoring, enabling you to perform various tasks in the Linux environment efficiently.",
                codetype: "Concepts",
                readtime: 4,
                link: "#"
            }, {
                title: "Practical 11: Write a C program for implementation of Scheduling Algorithms: <br>A. FCFS<br> B. SJF<br> C. Round Robin<br> D. Priority Scheduling", 
                desc: "<span class='fw-bold'>Create code for FCFS, SJF, Round Robin and Priority seperately</span><br>Learn to implement scheduling algorithms in operating systems. This practical exercise will guide you through the implementation of scheduling algorithms such as FCFS, SJF, Round Robin, and Priority Scheduling, enabling you to understand their role in process management and system performance.",
                codetype: "Concepts",
                readtime: 5,
                link: "#"
            }, {
                title: "Practical 12: Write a C program to implement Producer Consumer problem using semaphores.",
                desc: "Learn to implement the Producer-Consumer problem using semaphores in operating systems. This practical exercise will guide you through the implementation of the Producer-Consumer problem, enabling you to understand the role of semaphores in process synchronization and inter-process communication in operating systems.",
                codetype: "Concepts",
                readtime: 5,
                link: "#"
            }, {
                title: "Practical 13: Write a C program to implement Banker's Algorithm in Operating System for deadlock avoidance.",
                desc: "Learn to implement Banker's Algorithm in operating systems. This practical exercise will guide you through the implementation of the Banker's Algorithm, enabling you to understand its role in deadlock avoidance and resource allocation strategies in operating systems. <br><i><span class='text-center fw-bold'>It should produce a safe sequence as an output.</span></i>",
                codetype: "Concepts",
                readtime: 5,
                link: "#"
            }, {
                title: "Practical 14: Write a C program to simulate the following contiguous memory allocation tecnnique: <br>A. Worst fit <br>B. Best fit <br>C. First fit",
                desc: "Learn to simulate contiguous memory allocation techniques in operating systems. This practical exercise will guide you through the implementation of memory allocation algorithms such as Worst Fit, Best Fit, and First Fit, enabling you to understand their performance characteristics and resource utilization.",
                codetype: "Concepts",
                readtime: 4,
                link: "#"
            },
            
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1162P | ${_data.codetype}` : `CSU1162P | Lab`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
        }
    }


    /**********  AUTOMATION CONTROL **********/
    // Get Random date near the entered date. 
    function gendate(date) {
        var inputDate = new Date(date);
        var offset = Math.floor(Math.random() * 20 - 10) * 24 * 60 * 60 * 1000;
        var newDate = new Date(inputDate.getTime() + offset);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var outputDate = weekdays[newDate.getUTCDay()] + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear();
        return outputDate;
    }
    function r(t) { return Math.floor(Math.random() * 10) + t }
    var title, desc, codetype, readtime, author = 1, link, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}