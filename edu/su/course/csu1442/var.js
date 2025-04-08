
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Forensic Psychology",
                desc: "Explore the field of forensic psychology, which combines psychology and criminal justice to understand criminal behavior and the legal system. This course covers topics such as criminal profiling, eyewitness testimony, and mental health assessments in legal settings. Click to learn more about forensic psychology and its applications in law enforcement and the justice system.",
                codetype: "CSU1442 | Forensic Psychology",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu1442/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            
            // {
            //     link: "practice/",
            //     title: "Practice Concepts",
            //     desc: "Practice your understanding of forensic psychology concepts with interactive quizzes, case studies, and real-world scenarios. These practice exercises will test your knowledge and help you apply key concepts to practical situations. Click to explore forensic psychology practice exercises and enhance your learning experience.",
            //     codetype: "Practice | Forensic Psychology",                
            // }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Unit 2: Criminal Behavior and Psychological Profiling",
                desc: "Delve into the psychological aspects of criminal behavior and the techniques used in psychological profiling. This unit covers the theories and methods used to understand criminal minds, including the role of personality traits, mental disorders, and environmental factors in shaping criminal behavior.",
                codetype: "Concepts",
                readtime: 5,
                link: "criminal-behavior-and-psychological-profiling",
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