
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Concepts of Compiler Design",
                desc: "Learn the fundamentals of Compiler Design, including lexical analysis, parsing, intermediate code generation, optimization, debugging, and real-world applications. This section provides a comprehensive guide to Compiler Design, covering essential concepts and advanced topics in Compiler Design.",
                codetype: "CSU086 | Compiler Design",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu086/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },            
            // {
            //     link: "practice/",
            //     title: "Practice Compiler Design Concepts",
            //     desc: "Reinforce your understanding of Compiler Design concepts with practice exercises and interactive tools. This section offers a range of resources to help you master Compiler Design principles, including lexical analysis, parsing, intermediate code generation, optimization, and more. Click to access hands-on exercises that will enhance your comprehension of Compiler Design principles and prepare you for advanced topics in computer science.",
            //     codetype: "Practice | Compiler Design",                
            // }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Language Processing System & Compiler Design",
                desc: "Comprehensive guide on Compiler Design and Language Processing Systems, covering lexical analysis, parsing, intermediate code generation, optimization, AI-powered compilers, debugging, and real-world applications.",
                codetype: "Concepts",
                readtime: 30,
                date: "Mon February 03, 2025",
                link: "language-processing-system-compiler-design"
            },    
            {
                title: "Lexical Analysis (Scanning) in Compiler Design",
                desc: "Understand the process of lexical analysis in Compiler Design, including tokenization, regular expressions, finite automata, and real-world applications.",
                codetype: "Phase 1",
                readtime: 20,
                date: "Tue February 04, 2025",
                link: "lexical-analysis-scanning-compiler-design"
            },
            {
                title: "Parse Tree",
                desc: "Understand the concept of Parse Trees in Compiler Design, including syntax trees, abstract syntax trees, and real-world applications.",
                codetype: "Supporting Concepts",
                readtime: 5,
                date: "Tue February 04, 2025",
                link: "parse-tree"
            },
            {
                title: "Associativity and Precedence",
                desc: "Learn about associativity and precedence in Compiler Design, including operator precedence parsing, shift-reduce parsing, and real-world applications.",
                codetype: "Supporting Concepts",
                readtime: 5,
                date: "Wed February 05, 2025",
                link: "associativity-precedence"
            },
            {
                title: "Ambiguous Grammar and Its Violations",
                desc: "Explore ambiguous grammar and its violations in Compiler Design, including left recursion, left factoring, and real-world applications.",
                codetype: "Supporting Concepts",
                readtime: 20,
                date: "Wed February 05, 2025",
                link: "ambiguous-grammar-violations"
            },
            {
                title: "Syntax Analysis (Parsing) in Compiler Design",
                desc: "Learn about parsing in Compiler Design, including top-down parsing, bottom-up parsing, LR parsing, LALR parsing, and real-world applications.",
                codetype: "Phase 2",
                readtime: 20,
                date: "Wed February 05, 2025",
                link: "syntax-analysis-parsing-compiler-design"
            },           
            {
                title: "Assignment 1: Recursive Descent Parser",
                desc: "Learn about recursive descent parsing in Compiler Design, including top-down parsing, backtracking, and real-world applications.",
                codetype: "Assignment",
                readtime: 20,
                date: "Thu April 03, 2025",
                link: "assignment-1-recursive-descent-parser"
            },
            // {
            //     title: "Intermediate Code Generation in Compiler Design",
            //     desc: "Understand the process of intermediate code generation in Compiler Design, including syntax trees, abstract syntax trees, three-address code, quadruples, and real-world applications.",
            //     codetype: "Concepts",
            //     readtime: 20,
            //     date: "Thu February 06, 2024",
            //     link: "intermediate-code-generation-compiler-design"
            // },
            // {
            //     title: "Code Optimization in Compiler Design",
            //     desc: "Explore the process of code optimization in Compiler Design, including peephole optimization, loop optimization, constant folding, and real-world applications.",
            //     codetype: "Concepts",
            //     readtime: 20,
            //     date: "Fri February 07, 2024",
            //     link: "code-optimization-compiler-design"
            // },
            // {
            //     title: "AI-Powered Compilers & Debugging",
            //     desc: "Learn about AI-powered compilers and debugging tools in Compiler Design, including static analysis, dynamic analysis, symbolic execution, and real-world applications.",
            //     codetype: "Concepts",
            //     readtime: 20,
            //     date: "Sat February 08, 2024",
            //     link: "ai-powered-compilers-debugging"
            // }
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_lab(def_date, def_author) {
        const arr = [
            // {
            //     title: "Interactive Sorting Algorithms Visualizer",
            //     desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
            //     author: "Divya Mohan",
            //     link: "https://colab.research.google.com/drive/1goYusw-6vB2d2qZtxo4V1kt4mmLBrN11?usp=sharing",
            //     // cardimage: "_url_"
            // },
            {
                title: "Practical 1: Procedure for VirtualBox Installation and Configuration",
                desc: "Learn to set up your operating system lab environment with VirtualBox, a powerful virtualization tool for creating and managing virtual machines. This practical exercise will guide you through the installation and configuration of VirtualBox, enabling you to create a virtualized environment for hands-on learning and experimentation.",
                codetype: "Installation",
                readtime: 2,
                date: "Wed February 07, 2024",
                link: "installing-virtualbox"              
            },            
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}