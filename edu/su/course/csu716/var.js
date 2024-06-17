
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Life Skills Training Course CSU716: Mastering Essential Skills for Personal and Professional Growth",
                desc: "Embark on a journey to develop crucial life skills with our comprehensive CSU716 course. Dive into a world where personal development meets professional excellence. Click to explore key techniques and strategies for effective communication, time management, and decision-making.",
                codetype: "CSU716 | Essential Skills"
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
                readtime: 6,
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