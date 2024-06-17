
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "lecture/",                
                title: "Lectures",
                desc: "All the important lectures"
            },
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_lecture(def_date, def_author) {
        const arr = [            
            {
                title: "Paragraph",                
                link: 'lec14'
            },
            {
                title: "Inductive Order",
                link: 'lec15'
            },
            {
                title: "Deductive Order",
                link: 'lec16'
            },
            {
                title: "Comparision and Contrast",
                link: 'lec17'
            },
            {
                title: "Time and Space Order",
                link: 'lec18'
            },
            {
                title: "Capitalization and Punctuation I",
                link: 'lec20'
            },
            {
                title: "Vocabulary",
                desc: "Some of the words of vocabulary with its meaning from comprehension.",
                link: 'lec23'
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }

    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        lecture: get_lecture,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}