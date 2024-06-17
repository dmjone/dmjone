
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/faq",
                title: "FAQ's of Aptitude Development",
                desc: "All the FAQ's of the Aptitude Development!",
                codetype: "SEA-AP002 | FAQ's"
            }            
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    
    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}