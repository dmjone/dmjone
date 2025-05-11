
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
            {
                link: "lab/",
                title: "Lab: Hands-On Practice",
                desc: "Explore the practical applications of PhP and MySQL through hands-on exercises and coding challenges. This section offers a range of labs and coding exercises to help you apply the concepts learned in the theory section.",
                codetype: "CSU2101P | Lab",
            },
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
            },
            {
                title: "Term 1 Answers",
                desc: "Explore the answers to the Term 1 exam questions for the CSU2101 course. This resource provides detailed explanations and solutions to help you understand the concepts covered in the exam.",
                codetype: "Answers",
                readtime: 5,
                link: "term-1-answers"
            },
            {
                title: "Term 2 Answers",
                desc: "Explore the answers to the Term 2 exam questions for the CSU2101 course. This resource provides detailed explanations and solutions to help you understand the concepts covered in the exam.",
                codetype: "Answers",
                readtime: 5,
                link: "term-2-answers"
            },
            
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_lab(def_date, def_author) {
        const arr = [            
            {
                title: "Practical 1: SQL Basics and Queries",
                desc: "An introductory explanation of SQL commands designed for beginners, covering essential operations such as updating records, retrieving data, filtering, pattern matching, sorting, grouping, aggregation, joining tables, and using subqueries.",
                codetype: "SQL Basics",
                readtime: 2,
                date: "Mon March 17, 2025",
                link: "sql-basics-beginner-guide"              
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