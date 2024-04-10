
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "CTF Theory: Uncover the Intriguing Concepts of Capture The Flag",
                desc: "Enhance your understanding of programming and CTF theory with our in-depth guide. Advance your tech skills and immerse yourself in a world of intriguing challenges. Click now to embark on your programming journey.",
                codetype: "CTF | Concepts",
                // cardimage: "_url_"
            },
            {
                link: "lab/",
                title: "CTF Practicals: Boost Your Programming Skills with Hands-on Capture The Flag Challenges",
                desc: "Elevate your programming knowledge with our comprehensive guide that covers all essential practical aspects of CTF. Accept the challenges and level up your tech skills. Click now to start your practical adventure.",
                codetype: "CTF | Lab"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CTF`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            semester = _data.semester || null;
            cardimage = _data.cardimage || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_theory(def_date, def_author) {
        const arr = [
            {
                title: "Basic Concepts of CTF",
                desc: "Learn the basic concepts of Capture The Flag",
                codetype: "Introduction",
                readtime: r(5),
                link: "ctf",
            },
            // {
            //     title: "Section B: Electricity and Magnetism",
            //     desc: "Get ready to explore Electricity & Magnetism! Learn about electric field & potential, dielectric polarization, displacement current, Maxwell's equations, velocity of EM waves, electromagnetic spectrum, magnetic materials, superconductivity, ultrasonic waves, Type I & Type II superconductors and more. Get ready to electrify your knowledge!"
            // }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CTF | ${_data.codetype}` : `CTF | Theory`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_practical(def_date, def_author) {
        const arr = [
            {
                title: "CTF Challenge 1",
                desc: "Solve this exciting CTF challenge",
                date: "Fri March 3, 2023",
                author: "CTF Master",
                link: "ctf-challenge-1",
                // cardimage: "_url_"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CTF | ${_data.codetype}` : `CTF | Misc`;
            readtime = _data.readtime || r(5);
            cardimage = _data.cardimage || null;
            author = _data.author || def_author;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_assignment(def_date, def_author) {
        const arr = [
            {
                title: "Assignment 1: Application of Fundamental Mechanics on Saturn V Rocket",
                desc: "This assignment is based on the fundamental mechanics of Saturn V Rocket"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `a${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `Physics | ${_data.codetype}` : `CTF | Quiz`;
            readtime = _data.readtime || r(6);
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
    function r(t) { return Math.floor(Math.random() * 10) + t }
    var title, desc, codetype, readtime, author = 1, link, semester, cardimage;
    const functions = {
        theory: get_theory,
        practical: get_practical,
        // assignment: get_assignment,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}