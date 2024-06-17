
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                // link: "csu1627/",
                link: "#",
                title: "Enhancing Mental and Emotional Well-Being [WIP]",
                desc: "Join Shoolini University's CSU1627 Mind Wellness course to nurture your mental and emotional health summarized on dmj.one. Explore the realms of mindfulness, stress management, and emotional intelligence. Click to discover practical methods and strategies for fostering resilience, cultivating a positive mindset, and improving overall life satisfaction.",
                codetype: "CSU1627 | Mind Wellness"
            },
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Revision of Concepts",
                desc: "Delve deep into the intricate world of life skills with our extensive revision of concepts. Unravel the complexities and strategic approaches of fundamental theories with advanced problem-solving techniques. This guide provides a overview of all the concepts. Embark on your journey well prepared!",
                codetype: "Revision",
                readtime: r(6),
                link: "revision"
            }
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