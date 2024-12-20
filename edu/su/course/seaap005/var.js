
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/all-in-one",
                title: "All in One: Concepts, and Questions",
                desc: "This section provides a comprehensive overview of the topic, including key concepts, definitions, and examples. Click to access detailed explanations, practice questions, and interactive tools that will help you master the fundamentals of Operating Systems.",
                codetype: "SEAAP005 | Aptitude Development",
                cardimage: "https://cdn.dmj.one/edu/su/course/ap/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            {
                link: "practice/",
                title: "Practice Aptitude Development 5: Strengthen Your Knowledge",
                desc: "Reinforce your understanding of Operating Systems with practice exercises and interactive tools. This section offers a range of resources to help you master operating system concepts, including sorting algorithms, virtual machine installation, and more. Click to access hands-on exercises that will enhance your comprehension of operating system principles and prepare you for advanced topics in computer science.",
                codetype: "Practice | Aptitude Development",                
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Topic Name",
                desc: "Description of the topic.",
                codetype: "Concepts",
                readtime: 5,
                link: "link-to-the-topic"
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