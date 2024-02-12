
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",                
                title: "Mastering Python Programming",
                desc: "Dive into the world of Python programming with Shoolini University's CSU1162 Python Programming course, detailed on dmj.one. Unravel the power of Python for software development, data analysis, and automation. Click to explore foundational concepts, advanced techniques, and practical applications that empower you to solve real-world problems efficiently. Discover how to enhance your coding skills, develop sophisticated programs, and significantly boost your career prospects.",
                codetype: "CSU1162 | Python Programming"
            },
            {
            link: "lab/",
            title: "Practical Python Programming Lab: Sharpen Your Coding Skills",
            desc: "Elevate your programming expertise in the Python Lab with code CSU1162P. This hands-on lab course is designed to immerse you in the practical aspects of Python programming. From basic syntax to complex problem-solving, you'll learn to write efficient and effective Python code. Click to dive into interactive sessions that will bolster your coding proficiency, enhance your algorithm design capabilities, and prepare you for real-world programming challenges.",
            codetype: "CSU1162P | Lab"
            },

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
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Exploring Python: A Deep Dive into Its Universe",
                desc: "Embark on a comprehensive exploration of Python, from its inception to its pivotal role in today's tech landscape. Understand the 'why' behind its creation, its evolutionary journey, key advantages, and the challenges it faces. Discover its applications, influence on technology, and what the future holds. This article offers a holistic view of Python, providing readers with a strong foundation and motivation for further exploration.",
                codetype: "Why Python",
                readtime: 5,
                link: "why-python"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1162 | ${_data.codetype}` : `CSU1162 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Interactive Sorting Algorithms Visualizer",
                desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
                author: "Divya Mohan",
                link: "interactive-sorting-visualizer",
                // cardimage: "_url_"
            },
            {
                title: "Practical 1: Selection Sort in C",
                desc: "Delve into the implementation of the Selection Sort algorithm using C and C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                author: "Shreshth Srivastav",
                link: "selection-sort",
                date: "Thursday, August 17, 2023",
                //author: "Divya Mohan"
                // "cardimage": "_url_"
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
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
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
    function r(t) { return Math.floor(Math.random() * 10) + t };
    var title, desc, codetype, readtime, author = 1, link, semester, cardimage;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}