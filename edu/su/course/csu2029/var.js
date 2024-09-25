
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Thinking Unboxed: Strategies for Critical Analysis",
                desc: "Theoretical concepts and principles related to Thinking Unboxed: Strategies for Critical Analysis. Click to explore the fundamentals and advanced aspects of the subject, including real-world applications and case studies.",
                codetype: "Theory | CSU2029",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu2029/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            {
                link: "practice/",
                title: "Practice Thinking Unboxed: Strategies for Critical Analysis Concepts with MCQ's",
                desc: "Reinforce your understanding of Thinking Unboxed: Strategies for Critical Analysis with practice exercises and MCQ's. Click to access hands-on exercises that will enhance your comprehension of Thinking Unboxed: Strategies for Critical Analysis principles and prepare you.",
                codetype: "Practice | CSU2029",                
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Problem",
                desc: "Defining what constitutes a problem and the processes involved in problem identification.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 6, 2024",
                link: "problem"
            },
            {
                title: "Extent of a Problem",
                desc: "Understanding how to measure and assess the magnitude of a problem.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 6, 2024",
                link: "extent-of-a-problem"
            },
            {
                title: "Symptoms of a Problem",
                desc: "Identifying the signs and indicators that a problem exists.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 7, 2024",
                link: "symptoms-of-problem"
            },
            {
                title: "Problem Solving",
                desc: "An overview of techniques and strategies for effectively solving problems.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 7, 2024",
                link: "problem-solving"
            },
            {
                title: "Select, Organize, Interpret",
                desc: "A framework for processing information and making decisions.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 7, 2024",
                link: "select-organize-interpret"
            },
            {
                title: "Critical Thinking",
                desc: "A deep dive into the process of objectively analyzing facts to form a judgment.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 8, 2024",
                link: "critical-thinking"
            },
            {
                title: "Anchoring Bias",
                desc: "Understanding the cognitive bias where individuals rely heavily on the first piece of information encountered when making decisions.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 8, 2024",
                link: "anchoring-bias"
            },
            {
                title: "Occam's Razor",
                desc: "A problem-solving principle that suggests the simplest explanation is usually the correct one.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 8, 2024",
                link: "occams-razor"
            },
            {
                title: "Carpenter's Rule",
                desc: "A principle emphasizing the importance of measuring carefully before cutting, metaphorically applied to decision-making.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 8, 2024",
                link: "carpenters-rule"
            },
            {
                title: "Kaizen Principle",
                desc: "A Japanese business philosophy of continuous improvement through small, incremental changes.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 11, 2024",
                link: "kaisen-principle"
            },
            {
                title: "Efficiency vs. Effectiveness",
                desc: "Comparing the differences between doing things right and doing the right things.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 14, 2024",
                link: "efficiency-effectiveness"
            },
            {
                title: "EROI, AROI, and ROTI (Estimated Return on Investment, Actual Return on Investment, and Return on Time Invested)",
                desc: "An economic measure set that includes EROI (Estimated Return on Investment), AROI (Actual Return on Investment), and ROTI (Return on Time Invested) to assess the effectiveness of resources and time invested in achieving returns.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 14, 2024",
                link: "eroi-aroi-roti"
            },
            {
                title: "Null Hypothesis",
                desc: "A fundamental concept in statistics that serves as a starting point for hypothesis testing.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 15, 2024",
                link: "null-hypothesis"
            },
            {
                title: "Synergy and Negergy",
                desc: "Exploring the concepts of synergy and negergy in collaborative efforts and systems.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 15, 2024",
                link: "synergy-negergy"
            },
            {
                title: "Apathy, Sympathy, Empathy",
                desc: "Exploring the differences between apathy, sympathy, and empathy, and their impact on human interactions.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 15, 2024",
                link: "apathy-sympathy-empathy"
            },
            {
                title: "Ten Core Life Skills",
                desc: "A discussion on the essential life skills that contribute to personal and professional success.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 15, 2024",
                link: "ten-core-life-skills"
            },
            {
                title: "The Mystery of sqrt Function",
                desc: "Exploring the mathematical function sqrt(x) and how its calculated in the backend when you call that function from within the code.",
                codetype: "Concepts",
                readtime: 5,
                date: "Wed August 15, 2024",
                link: "mystery-of-sqrt-function"
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