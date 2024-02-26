
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                "link": `mailto:${window.GLOBAL_get_prof_href_}?subject=Referred%20from%20dmj.one&body=--%20Referred%20from%20the%20page%20${window.location.href}%20Please%20write%20below%20this%20line%20--%0D%0A%0D%0A`,
                "title": `Need Help with ${window.GLOBAL_get_course_detail_}?`,
                "desc": `<strong>Get help from Dr. Gaurav Gupta, the course creator himself.</strong><br>Why worry when we are here to guide you? If you're encountering challenges or have questions regarding ${window.GLOBAL_get_course_detail_} course by Shoolini University, we encourage you to reach out directly to Shoolini University's faculty Dr. Gaurav Gupta. He is a very experienced instructor and is here to assist you through every step of your learning journey, ensuring you grasp the complexities effectively. Click to compose an email and seek guidance on ${window.GLOBAL_get_course_detail_}.`,
                "codetype": `${window.GLOBAL_get_course_} | ${window.GLOBAL_get_course_detail_}`,
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
                link: "#",
                title: "Hands-On Database Management System Lab: Enhancing Data Skills [WIP]",
                desc: "Deepen your understanding of Database Management Systems in the CSU357P DBMS Lab. This practical lab course focuses on applying the theoretical concepts learned in CSU357 through hands-on exercises. Engage with SQL queries, database design, and data normalization practices. Click to participate in interactive labs that will improve your ability to design, implement, and manage databases effectively, preparing you for complex data challenges in the real world.",
                codetype: "CSU357P | DBMS Lab"
            }

        ];

        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;            
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1162`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                "title": "Decoding Database Management Systems",
                "desc": "This guide explores the intricacies of Database Management Systems (DBMS), from basic definitions and key features to various types of DBMS and their real-world applications. Dive into the evolution from file-based systems to advanced DBMS, understanding the challenges of the former and the solutions offered by the latter. Learn about the characteristics and problems of file-based approaches and how the database approach overcomes these issues, enhancing data redundancy, accessibility, integrity, and security. Perfect for aspiring database professionals and students, this guide also covers the technical aspects and the impact of DBMS across multiple industries.",
                "codetype": "DBMS Overview",
                "readtime": 5,
                "link": "introduction-to-database"
            },
            {
                title: "Exploring the Core of Database Management Systems",
                desc: "Unpack the essentials of Database Management Systems (DBMS), from the basics of databases, entities, attributes, and relationships to the intricacies of DBMS itself, including its components and the database approach. This guide delves into system catalogs, database application programs, DDL, DML, views, and the pivotal components of a DBMS, offering a comprehensive overview for developers, database administrators, and anyone interested in the foundational aspects of database management.",
                codetype: "DBMS Fundamentals",
                readtime: 5,
                link: "core-database-management-systems"
            },
            {
                "title": "Exploring DBMS: Advantages and Challenges",
                "desc": "An in-depth exploration of Database Management Systems, highlighting their advantages, challenges, and the evolving landscape of data management technologies.",
                "codetype": "Database Systems",
                "readtime": 7,
                "link": "understanding-dbms-advantages-and-challenges"
            },
            {
                title: "Understanding the Three-Level Database Architecture",
                desc: "Exploring the ANSI/SPARC three-level database architecture, including its objectives, levels of abstraction, and SQL implementation examples.",
                codetype: "Database Architecture",
                readtime: 7,
                link: "understanding-three-level-database-architecture"
            },
            {
                title: "Understanding Database Schemas and Instances",
                desc: "Explore the foundational concepts of database schemas and instances in DBMS, including their design, functionality, and management.",
                codetype: "Database Management",
                readtime: 7,
                link: "understanding-database-schemas-and-instances"
            },
            {
                title: "Exploring Data Models in Database Management",
                desc: "This comprehensive guide explores the fundamental concept of Data Models in Database Management Systems (DBMS), detailing the various types of data models and their significance in organizing, managing, and manipulating data within an organization. It covers Object-based, Record-based, and Physical data models, highlighting their roles in database design and implementation. Additionally, the guide delves into conceptual modeling, DBMS functions, data modeling techniques, SQL implementation methods, the evolution of data models, and the challenges faced in data modeling. This resource offers valuable insights for developers, database administrators, and students aiming to understand and apply data modeling principles effectively.",
                codetype: "Data Models",
                readtime: 5,
                link: "exploring-data-models"
            },
            {
                title: "Understanding Data Independence in DBMS: A Comprehensive Guide",
                desc: "Dive into the crucial concept of Data Independence within Database Management Systems (DBMS), unraveling its significance for database design and operation. Learn about logical and physical data independence, their impact on database scalability and flexibility, and how they enable changes without affecting applications. This guide covers types of data independence, their implementation in DBMS architectures, and practical examples in SQL, offering invaluable insights for developers and database administrators.",
                codetype: "Data Independence",
                readtime: 7,
                link: "exploring-data-independence-dbms"
            },


        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU357 | ${_data.codetype}` : `CSU357 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
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
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU357P | ${_data.codetype}` : `CSU357P | Lab`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }


    /**********  AUTOMATION CONTROL **********/
    // Get Random date near the entered date. 
    function gendate(date) {
        var inputDate = new Date(date);
        var offset = Math.floor(Math.random() * 20 - 10) * 24 * 60 * 60 * 1000;
        var newDate = new Date(inputDate.getTime() + offset);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var outputDate = weekdays[newDate.getUTCDay()] + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear();
        return outputDate;
    }
    function r(t) { return Math.floor(Math.random() * 10) + t };
    var title, desc, codetype, readtime, author = 1, link, semester, cardimage;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}