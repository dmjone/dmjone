
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: `mailto:${window.GLOBAL_get_prof_href_}?subject=Referred%20from%20dmj.one&body=--%20Referred%20from%20the%20page%20${window.location.href}%20Please%20write%20below%20this%20line%20--%0D%0A%0D%0A`,
                title: `Need Help with ${window.GLOBAL_get_course_detail_}?`,
                desc: `<span class="fw-bold">Get help from Dr. Gaurav Gupta, the course creator himself.</span><br>Why worry when we are here to guide you? If you're encountering challenges or have questions regarding ${window.GLOBAL_get_course_detail_} course by Shoolini University, we encourage you to reach out directly to Shoolini University's faculty Dr. Gaurav Gupta. He is a very experienced instructor and is here to assist you through every step of your learning journey, ensuring you grasp the complexities effectively. Click to compose an email and seek guidance on ${window.GLOBAL_get_course_detail_}.`,
                codetype: `${window.GLOBAL_get_course_} | ${window.GLOBAL_get_course_detail_}`,
                date: "Updated: Mon February 26, 2024", // Null date - Special Case
                cardimage: "//cdn.dmj.one/img/needhelp.webp",
                cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",
                // cardimage_dark: "//cdn.dmj.one/img/needhelpperson.webp",
                continuereading: " Click here to reach out to Faculty directly through email"
            },
            {
                link: "theory/",
                title: "Understanding Database Management Systems",
                desc: "Explore the intricacies of Database Management Systems with Shoolini University's CSU357 DBMS course, detailed on dmj.one. Delve into the core principles, architectures, and applications of DBMS. Click to discover how DBMS serves as the foundation for storing, retrieving, and managing data across various industries. Learn about data models, database design, SQL, and more, to effectively manage and manipulate data. This course equips you with the knowledge to design robust databases and enhance your data management skills.",
                codetype: "CSU357 | DBMS Concepts",
                cardimage: "//cdn.dmj.one/img/csu357.webp",
                cardimage_dark: "//cdn.dmj.one/img/csu357_dark.webp"
            },
            {
                link: "lab/",
                title: "Hands-On Database Management System Lab: Enhancing Data Skills",
                desc: "Deepen your understanding of Database Management Systems in the CSU357P DBMS Lab. This practical lab course focuses on applying the theoretical concepts learned in CSU357 through hands-on exercises. Engage with SQL queries, database design, and data normalization practices. Click to participate in interactive labs that will improve your ability to design, implement, and manage databases effectively, preparing you for complex data challenges in the real world.",
                codetype: "CSU357P | DBMS Lab"
            }, 
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Decoding Database Management Systems",
                desc: "This guide explores the intricacies of Database Management Systems (DBMS), from basic definitions and key features to various types of DBMS and their real-world applications. Dive into the evolution from file-based systems to advanced DBMS, understanding the challenges of the former and the solutions offered by the latter. Learn about the characteristics and problems of file-based approaches and how the database approach overcomes these issues, enhancing data redundancy, accessibility, integrity, and security. Perfect for aspiring database professionals and students, this guide also covers the technical aspects and the impact of DBMS across multiple industries.",
                codetype: "DBMS Overview",
                readtime: 5,
                link: "introduction-to-database"
            },
            {
                title: "Exploring the Core of Database Management Systems",
                desc: "Unpack the essentials of Database Management Systems (DBMS), from the basics of databases, entities, attributes, and relationships to the intricacies of DBMS itself, including its components and the database approach. This guide delves into system catalogs, database application programs, DDL, DML, views, and the pivotal components of a DBMS, offering a comprehensive overview for developers, database administrators, and anyone interested in the foundational aspects of database management.",
                codetype: "DBMS Fundamentals",
                readtime: 5,
                link: "core-database-management-systems"
            },
            {
                title: "Exploring DBMS: Advantages and Challenges",
                desc: "An in-depth exploration of Database Management Systems, highlighting their advantages, challenges, and the evolving landscape of data management technologies.",
                codetype: "Database Systems",
                readtime: 7,
                link: "understanding-dbms-advantages-and-challenges"
            },
            {
                title: "Understanding the Three-Level Database Architecture",
                desc: "Exploring the ANSI/SPARC three-level database architecture, including its objectives, levels of abstraction, and SQL implementation examples.",
                codetype: "Database Architecture",
                readtime: 7,
                link: "understanding-three-level-database-architecture"
            },
            {
                title: "Exploring Data Models in Database Management",
                desc: "This comprehensive guide explores the fundamental concept of Data Models in Database Management Systems (DBMS), detailing the various types of data models and their significance in organizing, managing, and manipulating data within an organization. It covers Object-based, Record-based, and Physical data models, highlighting their roles in database design and implementation. Additionally, the guide delves into conceptual modeling, DBMS functions, data modeling techniques, SQL implementation methods, the evolution of data models, and the challenges faced in data modeling. This resource offers valuable insights for developers, database administrators, and students aiming to understand and apply data modeling principles effectively.",
                codetype: "Data Models",
                readtime: 5,
                link: "exploring-data-models"
            },
            {
                title: "Understanding Database Schemas and Instances",
                desc: "Explore the foundational concepts of database schemas and instances in DBMS, including their design, functionality, and management.",
                codetype: "Database Management",
                readtime: 7,
                link: "understanding-database-schemas-and-instances"
            },            
            {
                title: "Understanding Data Independence in DBMS",
                desc: "Dive into the crucial concept of Data Independence within Database Management Systems (DBMS), unraveling its significance for database design and operation. Learn about logical and physical data independence, their impact on database scalability and flexibility, and how they enable changes without affecting applications. This guide covers types of data independence, their implementation in DBMS architectures, and practical examples in SQL, offering invaluable insights for developers and database administrators.",
                codetype: "Data Independence",
                readtime: 7,
                link: "exploring-data-independence-dbms"
            },
            {
                title: "Exploring Database Languages",
                desc: "Embark on a journey through the essential database languages that power Database Management Systems (DBMS). This comprehensive guide covers everything from Data Definition Language (DDL) to Data Manipulation Language (DML), Data Control Language (DCL), Transaction Control Language (TCL), and the pivotal SQL Query Language. Understand their distinct roles, how they interconnect, and their practical applications in real-world database management. Perfect for beginners and seasoned professionals alike, this guide provides the foundation for mastering SQL and effectively managing databases.",
                codetype: "Database Languages",
                readtime: 8,
                link: "database-languages"
            },
            {
                title: "Data Modelling using ER Approach",
                desc: "Explore the essentials of data modelling using the Entity-Relationship (ER) Approach in database management systems (DBMS). This comprehensive guide covers database design, ER model basics, key constraints, cardinality, ternary relationships, participation constraints, weak entities, 'IS A' hierarchies, aggregation, and conceptual design using the ER model. Perfect for students and educators involved in computer science courses at Shoolini University, this resource simplifies complex concepts into understandable terms, linking theory with practical applications in DBMS.",
                codetype: "ER Modelling",
                readtime: 7,
                link: "data-modelling-using-er-approach"
            },
            {
                title: "ER Diagrams: Design & Application",
                desc: "Dive into ER Diagrams for DBMS: Learn design principles, entity relationships, and model limitations. Ideal for CSU357 at Shoolini University, this guide blends theory with practice for beginners and advanced learners.",
                codetype: "ER Model",
                readtime: 7,
                link: "er-model"
            },
            {
                title: "Relational Data Models",
                desc: "Unlock the essentials of Relational Data Models: From basic concepts to advanced RDBMS features, including SQL, data normalization, and integrity constraints. Perfect for CSU357 at Shoolini University, this article offers a thorough exploration for both novices and seasoned learners.",
                codetype: "Relational Data Model",
                readtime: 10,
                link: "relational-data-model"
            },
            {
                title: "Mastering Codd's 12 Rules for RDBMS",
                desc: "Embark on a journey through the fundamental principles of relational databases with our in-depth exploration of Codd's 12 Rules. Perfect for CSU357 at Shoolini University, this guide is meticulously designed to equip both novices and experienced learners with the knowledge to understand and apply these foundational rules. From ensuring data integrity to achieving database independence, learn how these rules lay the groundwork for advanced RDBMS features, including SQL, data normalization, and integrity constraints.",
                codetype: "Codd's 12 Rules",
                readtime: 7,
                link: "codds-12-rules"
            },
            {
                title: "Functional Dependencies and Normalization",
                desc: "Know the complexities of database design with our comprehensive guide on Advanced Database Normalization Techniques. Ideal for CSU357 at Shoolini University, this resource is crafted to bridge the gap for learners at all levels - from beginners to advanced enthusiasts. Explore beyond the basics into 4NF, 5NF, and the elusive DKNF, understanding their impact on reducing redundancy, and ensuring data integrity. Discover how these advanced techniques form the backbone of efficient RDBMS, supporting the principles of data normalization and integrity constraints, and setting the stage for optimized database performance and maintenance.",
                codetype: "Database Normalization",
                readtime: 5,
                link: "functional-dependency-and-normalization"
            },
            {
                title: "From Unnormalized to Excellence: The Journey to BCNF",
                desc: "Navigate the complexities of database normalization from Unnormalized Form (UNF) to Boyce-Codd Normal Form (BCNF) with our comprehensive guide. Tailored for students of CSU357 Database Systems at Shoolini University, this resource demystifies the step-by-step process of enhancing data integrity and reducing redundancy through meticulous normalization techniques. Ideal for both beginners and advanced learners, this guide illuminates the path to achieving optimal database design, ensuring a solid foundation for understanding relational databases and their operational efficiency.",
                codetype: "Normalization Process",
                readtime: 5,
                link: "normal-forms-1nf-2nf-3nf-bcnf"
            },
            {
                title: "From 4NF to 5NF: The Quest for Database Perfection",
                desc: "Embark on a journey through the advanced stages of database normalization with our comprehensive guide on Fourth Normal Form (4NF) and Fifth Normal Form (5NF). Tailored for students of CSU357 Database Systems at Shoolini University, this resource delves into the intricacies of data modeling, integrity constraints, and the normalization process. Ideal for beginners and advanced learners, this guide offers a step-by-step approach to achieving database perfection, ensuring optimal data management and operational efficiency.",
                codetype: "Database Normalization Techniques",
                readtime: 5,
                link: "4nf-5nf"
            },
            {
                title: "Understanding SQL Joins: A Comprehensive Guide",
                desc: "Master the art of SQL Joins with our comprehensive guide, tailored for students of CSU357 Database Systems at Shoolini University. From INNER JOIN to OUTER JOIN, LEFT JOIN to RIGHT JOIN, this resource covers the essentials of SQL Joins, their syntax, and practical applications in database management. Ideal for beginners and advanced learners, this guide offers a step-by-step approach to understanding the nuances of SQL Joins, ensuring optimal data retrieval and manipulation in relational databases.",
                codetype: "SQL Joins",
                readtime: 5,
                link: "sql-joins"
            },
            {
                title: "Transactions in DBMS",
                desc: "Explore the complexities of database transactions with our comprehensive guide on Transaction Management in Database Systems. This resource delves into the fundamentals of ACID properties, transaction states, and concurrency control mechanisms. From isolation levels to deadlock prevention, this guide offers a step-by-step approach to mastering transaction management, ensuring data integrity and consistency in relational databases.",
                codetype: "Transaction Management",
                readtime: 5,
                link: "transactions-in-dbms"
            },
            {
                title: "Concurrency Control Techniques in DBMS",
                desc: "Dive into the intricacies of Concurrency Control in Database Management Systems (DBMS) with our comprehensive guide. This resource explores the challenges of data concurrency, transaction isolation levels, and the mechanisms for ensuring data consistency and integrity. From lock-based protocols to timestamp ordering, this guide offers a step-by-step approach to mastering concurrency control, ensuring optimal database performance and reliability.",
                codetype: "Concurrency Control",
                readtime: 5,
                link: "concurrency-control-techniques"
            },
            {
                title: "Locking Mechanisms in DBMS",
                desc: "Unlock the complexities of Locking Mechanisms in Database Management Systems (DBMS) with our comprehensive guide. This resource delves into the fundamentals of lock-based protocols, their types, and practical applications in ensuring data integrity and consistency. From shared locks to exclusive locks, this guide offers a step-by-step approach to mastering locking mechanisms, ensuring optimal database performance and reliability.",
                codetype: "Locking Mechanisms",
                readtime: 5,
                link: "locking-mechanisms-in-dbms"
            },
            {
                title: "Timestamp Ordering in DBMS",
                desc: "Explore the intricacies of Timestamp Ordering in Database Management Systems (DBMS) with our comprehensive guide. This resource delves into the fundamentals of timestamp-based protocols, their implementation, and practical applications in ensuring data consistency and integrity. From timestamp generation to conflict resolution, this guide offers a step-by-step approach to mastering timestamp ordering, ensuring optimal database performance and reliability.",
                codetype: "Timestamp Ordering",
                readtime: 5,
                link: "timestamp-ordering-in-dbms"
            },
            {
                title: "Deadlock Handling in DBMS",
                desc: "Navigate the complexities of Deadlock Handling in Database Management Systems (DBMS) with our comprehensive guide. This resource explores the challenges of data concurrency, deadlock detection, and resolution mechanisms. From wait-die to wound-wait, this guide offers a step-by-step approach to mastering deadlock handling, ensuring optimal database performance and reliability.",
                codetype: "Deadlock Handling",
                readtime: 5,
                link: "deadlock-handling-in-dbms"
            },
            {
                title: "Recovery Techniques in DBMS",
                desc: "Discover the intricacies of Recovery Techniques in Database Management Systems (DBMS) with our comprehensive guide. This resource delves into the fundamentals of recovery mechanisms, their types, and practical applications in ensuring data consistency and integrity. From deferred updates to immediate updates, this guide offers a step-by-step approach to mastering recovery techniques, ensuring optimal database performance and reliability.",
                codetype: "Recovery Techniques",
                readtime: 5,
                link: "recovery-techniques-in-dbms"
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
                title: "MySQL Commands Cheat Sheet",
                desc: "Access a comprehensive cheat sheet of MySQL commands for quick reference and easy learning. This resource covers essential MySQL commands, syntax, and examples to help you navigate the world of database management with ease.",
                codetype: "MySQL Commands",
                readtime: 20,
                link: "mysql-commands",
            },
            {
                title: "Tables for Reference",                
                desc: "Access a collection of tables used in the lab practicals for quick reference and easy learning. This resource covers essential tables, their structures, and examples to help you practice and refine your database management skills effectively.",
                codetype: "Tables for Reference",
                readtime: 5,
                link: "tables-for-reference",
            },
            {        
                title: "Practical 1: Creating Tables",
                desc: "Learn how to create tables in a database with our step-by-step guide. This resource covers the process of creating tables, defining columns, setting constraints, and more, to help you design and manage databases effectively.",
                codetype: "Creating Table",
                readtime: 5,
                link: "create-table",
            },
            {
                title: "Practical 2: Inserting Data",
                desc: "Master the art of inserting data into tables with our practical guide. This resource covers the process of inserting data, setting values, and managing records effectively, helping you enhance your database management skills.",
                codetype: "Inserting Data",
                readtime: 5,
                link: "insert-data",
            },                                        
            {
                title: "Practical 3: Updating Data",
                desc: "Explore the process of updating data in tables with our practical guide. This resource covers the steps involved in updating data, setting conditions, and modifying records effectively, helping you refine your database management skills.",
                codetype: "Updating Data",
                readtime: 5,
                link: "update-data",
            },          
            {
                title: "Practical 4: Deleting Data",
                desc: "Learn how to delete data from tables with our practical guide. This resource covers the process of deleting data, setting conditions, and removing records effectively, helping you streamline your database management skills.",
                codetype: "Deleting Data",
                readtime: 5,
                link: "delete-data",
            },          
            {
                title: "Practical 5: Drop a Table",
                desc: "Discover how to drop a table in a database with our practical guide. This resource covers the process of dropping tables, removing data, and managing database structures effectively, helping you enhance your database management skills.",
                codetype: "Dropping a Table",
                readtime: 5,
                link: "drop-table",
            },          
            {
                title: "Practical 6: SELECT Statement",
                desc: "Master the art of selecting data from tables with our practical guide. This resource covers the SELECT statement, filtering data, and retrieving records effectively, helping you refine your database management skills.",
                codetype: "SELECT",
                readtime: 5,
                link: "select-statement",
            },
            {
                title: "Practical 7: Aggregrate Functions",
                desc: "Explore the world of aggregate functions in SQL with our practical guide. This resource covers the essential aggregate functions, including COUNT, SUM, AVG, MIN, and MAX, helping you analyze and summarize data effectively.",
                codetype: "Aggregrate Functions",
                readtime: 5,
                link: "aggregrate-functions",
            },
            {
                title: "Practical 8: GROUP BY Clause",
                desc: "Learn how to group data in SQL with our practical guide. This resource covers the GROUP BY clause, grouping data, and summarizing records effectively, helping you enhance your database management skills.",
                codetype: "GROUP BY Clause",
                readtime: 5,
                link: "group-by",
            },
            {
                title: "Practical 9: HAVING Clause",
                desc: "Discover how to filter grouped data in SQL with our practical guide. This resource covers the HAVING clause, setting conditions, and filtering grouped records effectively, helping you streamline your database management skills.",
                codetype: "HAVING Clause",
                readtime: 5,
                link: "having",
            },
            {
                title: "Practical 10: ORDER BY Clause",
                desc: "Master the art of sorting data in SQL with our practical guide. This resource covers the ORDER BY clause, sorting data, and arranging records effectively, helping you refine your database management skills.",
                codetype: "ORDER BY Clause",
                readtime: 5,
                link: "order-by",
            },
            {
                title: "Practical 11: Combining Conditions and Boolean Operators",
                desc: "Explore the world of combining conditions and Boolean operators in SQL with our practical guide. This resource covers the essential operators, including AND, OR, and NOT, helping you filter data and retrieve records effectively.",
                codetype: "ORDER BY Clause",
                readtime: 5,
                link: "combining-conditions",
            },
            {
                title: "Practical 12: IN BETWEEN",
                desc: "Learn how to filter data using the IN and BETWEEN clauses in SQL with our practical guide. This resource covers the essential clauses, setting conditions, and retrieving records effectively, helping you enhance your database management skills.",
                codetype: "IN BETWEEN Clause",
                readtime: 5,
                link: "in-between",
            },
            {
                title: "Practical 13: Mathematical Functions",
                desc: "Discover the power of mathematical functions in SQL with our practical guide. This resource covers the essential functions, including ROUND, CEIL, FLOOR, and more, helping you perform calculations and manipulate data effectively.",
                codetype: "Mathematical Functions",
                readtime: 5,
                link: "mathematical-functions",
            },
            {
                title: "Practical 14: Table Joins",
                desc: "Master the art of joining tables in SQL with our practical guide. This resource covers the essential join types, including INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN, helping you combine data and retrieve records effectively.",
                codetype: "Table Joins",
                readtime: 5,
                link: "table-joins",
            },
            {
                title: "Lab Practicals Consolidated List",
                desc: "Practice and refine your database management skills with our collection of lab practicals. This resource offers a range of hands-on exercises and SQL queries to help you master the art of database management effectively.",
                codetype: "Lab Practicals",
                readtime: 25,
                link: "lab-practicals",
            },                    
            // {
            //     title: "SQL Query Practice",
            //     desc: "Enhance your SQL skills with our interactive SQL query practice tool. This resource offers a range of SQL queries for practice, covering basic to advanced topics, to help you master the art of database management.",
            //     codetype: "SQL Query Practice",
            //     readtime: 20,
            //     link: "sql-query-practice",
            // },
            // {
            //     title: "Database Design Tool",
            //     desc: "Design and visualize your database schema with our interactive database design tool. This resource allows you to create, modify, and visualize database structures, helping you understand the principles of database design effectively.",
            //     codetype: "Database Design",
            //     readtime: 20,
            //     link: "database-design-tool",
            // },
            // {
            //     title: "SQL Query Builder",
            //     desc: "Build and execute SQL queries with our interactive SQL query builder tool. This resource offers a user-friendly interface to create, modify, and execute SQL queries, helping you practice and refine your SQL skills effectively.",
            //     codetype: "SQL Query Builder",
            //     readtime: 20,
            //     link: "sql-query-builder",
            // },
            // {
            //     title: "Database Normalization Tool",
            //     desc: "Normalize your database schema with our interactive database normalization tool. This resource guides you through the normalization process, helping you understand and implement data normalization effectively.",
            //     codetype: "Database Normalization",
            //     readtime: 20,
            //     link: "database-normalization-tool",
            // },
            // {
            //     title: "SQL Joins Visualizer",
            //     desc: "Visualize and understand SQL Joins with our interactive SQL Joins visualizer tool. This resource offers a step-by-step breakdown of different types of SQL Joins, helping you master the art of data retrieval and manipulation.",
            //     codetype: "SQL Joins Visualizer",
            //     readtime: 20,
            //     link: "sql-joins-visualizer",
            // },
            // {
            //     title: "Entity-Relationship Diagram Tool",
            //     desc: "Design and visualize your ER diagrams with our interactive ER diagram tool. This resource allows you to create, modify, and visualize entity-relationship diagrams, helping you understand and implement data modeling effectively.",
            //     codetype: "ER Diagram Tool",
            //     readtime: 20,
            //     link: "er-diagram-tool",
            // },
            // {
            //     title: "Database Schema Generator",
            //     desc: "Generate sample database schemas with our interactive database schema generator tool. This resource offers a range of pre-defined schemas for practice and learning, helping you understand database design principles effectively.",
            //     codetype: "Database Schema Generator",
            //     readtime: 20,
            //     link: "database-schema-generator",
            // },
            // {
            //     title: "SQL Practice Problems",
            //     desc: "Sharpen your SQL skills with our collection of SQL practice problems. This resource offers a variety of SQL queries and scenarios for practice, covering basic to advanced topics, to help you master the art of database management.",
            //     codetype: "SQL Practice Problems",
            //     readtime: 20,
            //     link: "sql-practice-problems",
            // },
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