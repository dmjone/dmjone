function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "details"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `Life | ${_data.codetype}` : `Life`;
            readtime = _data.readtime || r(14); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }

    function get_course(def_date, def_author) {
        let arr = [
            {
                link: "csu1128/",
                // date: "Mon January 2, 2023",
                title: "Logic Building with Computer Prgramming and its Lab",
                desc: "Step into the World of C Programming with Semester 1's Dynamic Duo: CSU1128 and CSU1128P. Get Ready to Build Your Logical Skills and Master Computer Programming in No Time. This Section Has Everything You Need for a Successful Semester - Let's Get Coding!",
                codetype: "CSU1128 | CSU1128P",
                semester: 1
            },
            {
                link: "csu953/",
                title: "Front End Development Lab",
                desc: "Step into the Web Development Arena with Semester 1's CSU953: HTML Coding! Get Ready to Create Stunning Front-End Designs and Master the Art of Web Development. This Section Has Everything You Need for a Cutting-Edge Semester - Let's Get HTMLing!",
                codetype: "CSU953",
                semester: 1
            },
            {
                link: "fsu030/",
                title: "Engineering Physics",
                desc: "Get Ready to Dive into the Fascinating World of Physics and Discover Its Real-World Applications with Semester 1's FSU030: Engineering Physics. This Section Has Everything You Need for an Eye-Opening Semester. Let's Get Ready to Explore the Reality of Physics!",
                codetype: "FSU030",
                semester: 1
            },
            {
                link: "csu730/",
                title: "Functional English",
                desc: "Master the Art of Effective Communication with Semester 1's CSU730: Functional English by Rajesh Williams. Get Ready to Enhance Your Language Skills and Make a Lasting Impression. This Section Has Everything You Need for a Fluent Semester - Let's Get Englishing!",
                codetype: "CSU730",
                semester: "Semester 1"
            },
            {
                link: "csu951/",
                title: "Engineering Mathematics",
                desc: "Unlock your potential in mathematics and excel in your academic pursuits with Engineering Mathematics by Dr. Ravinder Thakur. This course will equip you with the fundamental concepts of mathematics and provide you with the tools necessary to succeed in the subject.",
                codetype: "CSU951",
                semester: 1
            },
            {
                link: "csu585/",
                title: "Design Thinking",
                desc: "Approach problems with a new perspective in CSU585: Design Thinking by Dr. Namita Gandotra. Develop an innovative, creative and problem-solving mindset.",
                codetype: "CSU585",
                semester: 2,
                date: "Fri February 24, 2023"
            },
            // {
            //     link: "csu1287/",
            //     title: "OOPS Using C++ Language",
            //     desc: "Approach problems with a new perspective in CSU585: Design Thinking by Dr. Namita Gandotra. Develop an innovative, creative and problem-solving mindset.",
            //     codetype: "CSU1287 | CSU1287(P)",
            //     semester: 2,
            //     date: "Tue February 28, 2023"
            // },
            // {
            //     link: "fsu013/",
            //     title: "Engineering Mathematics 2",
            //     desc: "Unlock your potential in mathematics and excel in your academic pursuits with Engineering Mathematics by Dr. Ravinder Thakur. This course will equip you with the fundamental concepts of mathematics and provide you with the tools necessary to succeed in the subject.",
            //     codetype: "FSU013",
            //     semester: 2
            // },
        ];

        arr.reverse(); // For semester to come at top. 
        // // Fisher-Yates shuffle algorithm to randomly shuffle an array
        // arr = (function (array) {
        //     for (let i = array.length - 1; i > 0; i--) {
        //         const j = Math.floor(Math.random() * (i + 1));
        //         [array[i], array[j]] = [array[j], array[i]];
        //     }
        //     return array;
        // })(arr);

        for (let i = 0; i < arr.length; i++) { // display in ascendening order
            // for (let i = arr.length - 1; i >= 0; i--) { // display in reverse order. 
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `s${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? _data.codetype : `Course`;
            readtime = _data.readtime || r(60); readtime = null;    // Null readtime - Special Case
            author = _data.author || def_author; author = null;     // Null author - Special Case
            semester = /^\d+$/.test(_data.semester) ? `Semester ${_data.semester}` : _data.semester;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester);
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
    var title, desc, codetype, readtime, author = 1, link, semester;
    const functions = {
        course: get_course,
        // seminar: get_seminar,
        // assignment: get_assignment,
        default: get_main
    };
    (functions[window.urlpart3] || functions.default)(datetogen, author);
}