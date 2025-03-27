
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: PhP and MySQL",
                desc: "Explore the fundamentals of PhP programming, MySQL database design, and the integration of PhP and MySQL to create dynamic web applications. Click to access the theory section and learn the core concepts of PhP and MySQL.",
                codetype: "CSU2101 | Concepts",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu2101/img/logo.webp",                
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",               
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            // {
            //     link: "lab/",
            //     title: "Lab: Hands-On Practice and Exercises",
            //     desc: "Description of the topic. This section offers practical exercises and interactive tools to help you apply the concepts learned in the theory section. Click to access hands-on labs, coding exercises, and simulations that will enhance your understanding of the topic.",
            //     codetype: "CSUCODE | Course",
            // },
            // {
            //     link: "practice/",
            //     title: "Practice Operating Systems Concepts: Strengthen Your Knowledge",
            //     desc: "Reinforce your understanding of Operating Systems with practice exercises and interactive tools. This section offers a range of resources to help you master operating system concepts, including sorting algorithms, virtual machine installation, and more. Click to access hands-on exercises that will enhance your comprehension of operating system principles and prepare you for advanced topics in computer science.",
            //     codetype: "Practice | Operating Systems",                
            // },
            {
                "link": "project-1/",
                "title": "ThryVexis - A Dynamic Blog System",
                "desc": "<strong>Academic Project</strong><br />Explore our flagship project, ThryVexis - a dynamic blog system that utilizes modern, enterprise-grade SQL solutions while maintaining the classic PHP/MySQL spirit. Discover its innovative features, design decisions, and performance optimizations.",
                "codetype": "Project | Dynamic Blog System"
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Database Transactions, MIS, DSS, and SQL Optimization for Business Intelligence & Analytics",
                desc: "Learn about database transactions, management information systems (MIS), decision support systems (DSS), and SQL optimization for business intelligence and analytics. This course covers the fundamentals of database transactions, MIS, and DSS, and explores SQL optimization techniques to enhance the performance of database queries for business intelligence and analytics applications.",
                codetype: "Concepts",
                readtime: 5,
                link: "database-transactions-mis-dss-sql-optimization-business-intelligence-analytics"
            },            
            {
                title: "SQL Joins",
                desc: "Explore the concept of SQL joins and learn how to use them to combine data from multiple tables in a relational database. This topic covers the different types of SQL joins, including inner joins, outer joins, and self-joins, and provides examples to help you understand how SQL joins work.",
                codetype: "Concepts",
                readtime: 15,
                link: "sql-joins"
            },
            {
                title: "Subqueries, Correlated Queries, and Views",
                desc: "Learn about subqueries, correlated queries, and views in SQL. This topic covers the use of subqueries to retrieve data from multiple tables, correlated queries to compare values across different tables, and views to create virtual tables in a database.",
                codetype: "Concepts",
                readtime: 10,
                link: "subqueries-correlated-queries-views"
            }
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