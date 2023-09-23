
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                "link": "theory/",
                "title": "Theory: Dive into the World of Microprocessors and Microcontrollers: A Comprehensive Guide",
                "desc": "Unlock the full potential of Microprocessors and Microcontrollers with our in-depth guide to all the concepts. Take your hardware skills to the next level and discover a world of endless possibilities in embedded systems. Click now to embark on your journey.",
                "codetype": "CSU1526 | Concepts"                
            },
            // {
            //     "link": "practical/",
            //     "title": "Practical: Elevate Your Microprocessor and Microcontroller Skills: A Comprehensive Guide for Lab Enthusiasts",
            //     "desc": "Unleash your potential in the Microprocessor and Microcontroller lab with our comprehensive guide covering all the essential concepts. Discover the intricacies of hardware and take your skills to the next level. Click now to embark on your journey.",
            //     "codetype": "CSU1526P | Practical"
            // },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1291`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            // {
            //     title: "The Digital Revolution: A Thrilling Introduction to Digital Electronics",
            //     desc: "Join the revolution and discover the magic of digital electronics with our exciting introduction to the world of digital circuits and systems. From binary code to microprocessors, our guide covers all the essentials. Click now to embark on an electrifying journey into the digital realm!",
            //     codetype: "Introduction",
            //     readtime: r(15)
            // },
            {
                title: "Practice Questions",
                desc: "Practice questions based on the topics and lectures by the faculty.",
                codetype: "Practice Questions",
                readtime: r(10),
                link: "practice-questions"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1291 | ${_data.codetype}` : `CSU1291 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            // {
            //     title: "Practical 1: Verify truth table of all logic gates in Proteus",
            //     desc: "This lab will provide a verification of truth table of logic gates using Proteus software.",
            //     date: "Fri March 3, 2023",
            //     author: "Divya Mohan",
            //     link: "verification-of-logic-gates-in-proteus",
            //     // cardimage: "_url_"
            // },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1291P | ${_data.codetype}` : `CSU1291P | Lab`;
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
        practical: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}