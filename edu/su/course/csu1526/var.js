
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
            //     "link": "lab/",
            //     "title": "Practical: Elevate Your Microprocessor and Microcontroller Skills: A Comprehensive Guide for Lab Enthusiasts",
            //     "desc": "Unleash your potential in the Microprocessor and Microcontroller lab with our comprehensive guide covering all the essential concepts. Discover the intricacies of hardware and take your skills to the next level. Click now to embark on your journey.",
            //     "codetype": "CSU1526P | Lab"
            // },
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [          
            {
                title: "Practice Questions - Unit 1",
                desc: "Practice questions based on the topics and lectures by the faculty for the Unit 1.",
                codetype: "Practice Questions - U1",
                readtime: 10,
                link: "practice-questions"
            },
            {
                title: "Practice Questions - Unit 2",
                desc: "Practice questions based on the topics and lectures by the faculty for the Unit 2.",
                codetype: "Practice Questions - U2",
                readtime: 10,
                link: "practice-questions-unit-2"
            },
            {
                title: "Assignment 1",
                desc: "Assignment 1 on the questions given by the faculty for the Assignment 1.",
                codetype: "Practice Questions - U2",
                readtime: 7,
                link: "assignment"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}