
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            // {
            //     link: "#",
            //     title: "Concepts and Principles of English Communication Seminar",
            //     desc: "Explore the fundamental concepts and principles of English Communication in this section. Learn about the importance of effective communication, the elements of language, and the role of communication in various contexts. Click to delve into the basics of English Communication and enhance your language skills.",
            //     codetype: "LSE005 | English Communication",
            //     cardimage: "https://cdn.dmj.one/edu/su/course/cs/img/logo.webp",                
            //     // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
            //     // continuereading: " Click here to reach out to Faculty directly through email"
            // },     
            {
                link: "theory/rising-again",
                title: "Rising Again: A Tale of Resilience and Redemption",
                desc: "Dive into an inspiring narrative of resilience, betrayal, and redemption. Follow the journey of overcoming immense challenges, reclaiming strength, and standing for one's values. This story, written by Divya Mohan, is part of the Story Writing Series published on dmj.one. Be inspired to rise against all odds.",
                codetype: "Story | Inspirational"
            },       
            {
                link: "practice/",
                title: "Practice English Communication Skills: Strengthen Your Knowledge",
                desc: "Reinforce your understanding of English Communication with practice exercises and interactive tools. This section offers a range of resources to help you master language skills, including grammar exercises, vocabulary building, and more. Click to access hands-on exercises that will enhance your comprehension of English Communication principles and prepare you for advanced topics in language studies.",
                codetype: "Practice | English Communication",
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
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}