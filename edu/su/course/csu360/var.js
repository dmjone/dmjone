
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