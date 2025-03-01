
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Course Overview and Concepts",
                desc: "Description of the topic. This section provides an overview of the key concepts and principles related to the topic. Click to explore the fundamentals and advanced aspects of the subject, including real-world applications and case studies.",
                codetype: "CSUCODE | Course",
                cardimage: "https://cdn.dmj.one/edu/su/course/csuCODE/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            {
                link: "lab/",
                title: "Lab: Hands-On Practice and Exercises",
                desc: "Description of the topic. This section offers practical exercises and interactive tools to help you apply the concepts learned in the theory section. Click to access hands-on labs, coding exercises, and simulations that will enhance your understanding of the topic.",
                codetype: "CSUCODE | Course",
            },
            {
                link: "practice/",
                title: "Practice Operating Systems Concepts: Strengthen Your Knowledge",
                desc: "Reinforce your understanding of Operating Systems with practice exercises and interactive tools. This section offers a range of resources to help you master operating system concepts, including sorting algorithms, virtual machine installation, and more. Click to access hands-on exercises that will enhance your comprehension of operating system principles and prepare you for advanced topics in computer science.",
                codetype: "Practice | Operating Systems",                
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Most Commonly Used Software Design Models",
                desc: "Explore key software design models like Waterfall, Agile, Spiral, V-Model, Iterative, Incremental, RAD, and Prototyping. Understand their principles, advantages, and real-world applications for professional software development.",
                codetype: "Concepts",
                readtime: 15,
                link: "most-commonly-used-software-design-models",
                date: "Mon February 03, 2025"
            },
            {
                title: "Software Development Life Cycle (SDLC)",
                desc: "Used for planning, designing, developing, testing, and deploying software applications, SDLC is a structured approach to software development. Learn about the phases, models, and best practices of SDLC in this comprehensive guide.",
                codetype: "Concepts",
                readtime: 20,
                link: "software-development-life-cycle-sdlc",
                date: "Tue February 04, 2025"
            },
            {
                title: "Waterfall Model",
                desc: "The Waterfall Model is a linear and sequential approach to software development. Learn about its structured approach to software development, covering concepts, workflow, real-world applications, tools, and best practices in this detailed guide.",
                codetype: "Concepts",
                readtime: 20,
                link: "waterfall-model",
                date: "Wed February 05, 2025"
            },
            {
                title: "Spiral Model",
                desc: "Understand the Spiral Model's step-by-step approach, its applications, benefits, and best practices in software development.",
                codetype: "Concepts",
                readtime: 20,
                link: "spiral-model",
                date: "Thu February 06, 2025"
            },
            {
                title: "Win-Win Spiral Model",
                desc: "A structured approach to software development, balancing risk management and stakeholder negotiation through iterative refinement.",
                codetype: "Software Engineering",
                readtime: 15,
                link: "win-win-spiral-model",
                date: "Fri February 07, 2025"
            },
            {
                title: "Agile Software Development",
                desc: "Learn Agile Software Development with hands-on projects, real-world case studies, and expert best practices.",
                codetype: "Concepts",
                readtime: 20,
                link: "agile-software-development",
                date: "Mon February 10, 2025"
            },
            {
                title: "Personal Software Process (PSP)",
                desc: "A structured approach to software development that improves quality, estimation, and defect tracking. Learn how PSP integrates with Agile and DevOps.",
                codetype: "Software Engineering",
                readtime: 15,
                link: "personal-software-process-psp",
                date: "Tue February 11, 2025"
            },
            {
                title: "Team Software Process (TSP)",
                desc: "A structured approach to team-based software development, covering collaboration, planning, quality control, and Agile/DevOps integration.",
                codetype: "Concepts",
                readtime: 20,
                link: "team-software-process-tsp",
                date: "Wed February 12, 2025"
            },            
            {
                title: "Software Process Models",
                desc: "Explore the fundamental software process models, their strengths, weaknesses, and ideal use cases in various real-world scenarios.",
                codetype: "Concepts",
                readtime: 15,
                link: "software-process-models",
                date: "Thu February 13, 2025"
            },
            {
                title: "Software Models Requirement Engineering",
                desc: "Learn about the software models requirement engineering process, including requirements gathering, analysis, specification, and validation.",
                codetype: "Concepts",
                readtime: 20,
                link: "software-models-requirement-engineering",
                date: "Fri February 14, 2025"
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