
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {		
        const arr = [
            {
                link: "theory/",                
                title: "Mastering Python Programming",
                desc: "Dive into the world of Python programming with Shoolini University's CSU1162 Python Programming course, detailed on dmj.one. Unravel the power of Python for software development, data analysis, and automation. Click to explore foundational concepts, advanced techniques, and practical applications that empower you to solve real-world problems efficiently. Discover how to enhance your coding skills, develop sophisticated programs, and significantly boost your career prospects.",
                codetype: "CSU1162 | Python Programming",
                cardimage: "//cdn.dmj.one/img/csu1162.webp",
                cardimage_dark: "//cdn.dmj.one/img/csu1162_dark.webp"
            },
            {
                link: "lab/",
                title: `Practical Python Programming Lab: Sharpen Your Coding Skills`,
                desc: "<strong>The link will open inside Google Colaboratory.</strong><br>Elevate your programming expertise in the Python Lab with code CSU1162P. This hands-on lab course is designed to immerse you in the practical aspects of Python programming. From basic syntax to complex problem-solving, you'll learn to write efficient and effective Python code. Click to dive into interactive sessions that will bolster your coding proficiency, enhance your algorithm design capabilities, and prepare you for real-world programming challenges.",
                codetype: "CSU1162P | Lab with Google Colab",
                cardimage: "//cdn.dmj.one/img/colab.webp",
                cardimage_dark: "//cdn.dmj.one/img/colab.webp"
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
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
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
            },            

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
    let title, link, date, desc, codetype, readtime, author, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}