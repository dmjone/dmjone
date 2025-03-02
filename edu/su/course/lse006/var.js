
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
                link: "theory/syllabus",
                title: "Syllabus",
                desc: "The syllabus for the course is designed to provide a comprehensive overview of the topics covered in the English Communication course. This section outlines the course structure, learning objectives, and assessment criteria to help you understand the key concepts and principles of English Communication. Click to access the syllabus and prepare for the course effectively.",
                codetype: "Syllabus | English Communication",
            },       
            // {
            //     link: "practice/",
            //     title: "Practice English Communication Skills: Strengthen Your Knowledge",
            //     desc: "Reinforce your understanding of English Communication with practice exercises and interactive tools. This section offers a range of resources to help you master language skills, including grammar exercises, vocabulary building, and more. Click to access hands-on exercises that will enhance your comprehension of English Communication principles and prepare you for advanced topics in language studies.",
            //     codetype: "Practice | English Communication",
            // }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }    
   

    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {        
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}