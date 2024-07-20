function get_menu_list(datetogen) {
    datetogen = '12/1/2023';    
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Dive into the World of Java Programming: A Comprehensive Guide",
                desc: "Unlock the full potential of Java with our in-depth guide to all the concepts. Take your programming skills to the next level and discover a world of endless coding possibilities. Click now to embark on your Java journey.",
                codetype: "CSU1291 | Concepts",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu1291/img/logo.webp"
            },
            {
                link: "lab/",
                title: "Practical: Elevate Your Java Programming Skills: A Comprehensive Guide for Lab Enthusiasts",
                desc: "Unleash your potential in the Java programming lab with our comprehensive guide covering all the essential concepts. Discover the magic of code and take your programming skills to the next level. Click now to embark on your Java journey.",
                codetype: "CSU1291P | Lab"
            },
            {
                link: "projects/",
                title: "List of Projects",
                desc: "Explore a diverse range of projects designed to challenge and enhance your coding skills. From fundamental exercises to advanced programming challenges, our projects span various languages and concepts, offering something for every level of experience. Click now to dive into our curated collection and start your next coding adventure.",
                codetype: "CSU1291P | Projects"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }

    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Origins of Java",
                desc: "Dive deep into the historical tapestry of Java. From its inception at Sun Microsystems to its evolution as a versatile language, this session explores the driving forces, challenges, and milestones that have shaped Java's journey.",
                date: "Sun September 10, 2023",
                author: "Divya Mohan",
                link: "origins-of-java"
            },
            {
                title: "Concepts of Java",
                desc: "Dive into Java's fundamental concepts. From understanding its characteristics, exploring OOP in Java, handling exceptions, to diving into the JVM, this course module is designed for a comprehensive understanding.",
                date: "Sun September 10, 2023",
                author: "Divya Mohan",
                link: "concepts-of-java"
            },
            {
                title: "Scanner Class in Java",
                desc: "Delve into the Scanner class in Java. Understand instantiation, explore basic input methods, gain insights on delimiter and pattern matching, input validation, and learn about exception handling and its importance.",
                date: "Sun September 10, 2023",
                author: "Divya Mohan",
                link: "scanner-class-in-java"
            },
            {
                title: "Data Types of Java",
                desc: "Embark on a comprehensive exploration of Java's data types. From their classification, understanding primitive and reference data types, to methods for taking input in Java, this course provides a thorough understanding.",
                date: "Sun September 10, 2023",
                author: "Divya Mohan",
                link: "data-types-in-java"
            },
            {
                title: "Providing Input in Java",
                desc: "Explore the essentials of gathering input in Java. From Scanner instantiation to exception handling, this course module offers an in-depth understanding of the topic, catering to both beginners and advanced users.",
                date: "Sun September 10, 2023",
                author: "Divya Mohan",
                link: "input-in-java",
                codetype: 'Input in Java'
            },
            {
                title: "Tokenization in Java",
                desc: "Dive into the world of tokenization in Java. From understanding the concept of tokens, exploring the StringTokenizer class, to learning about the split() method, this course module offers a comprehensive guide.",
                date: "Sun September 10, 2023",
                author: "Divya Mohan",
                link: "tokenization-in-java",
                codetype: 'Tokenization in Java'
            },
        ];
        body_genmenu.processData(arr, def_date, def_author, {codetype: 'CSU1291 | Concepts'});
    }

    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Practical 1: Print Hello World",
                desc: "This lab will provide insight into how to install, begin, create and compile files with Java.",
                author: "Divya Mohan",
                link: "hello-world"
            },
            {
                title: "Practical 2: Basic Usage of Java",
                desc: "This lab delves into foundational Java concepts, showcasing arithmetic operations, temperature conversions, and geometric calculations. Through hands-on examples, participants get a grasp of Java's simplicity and versatility.",
                date: "Wednesday September 7, 2023",
                author: "Divya Mohan",
                link: "basic-usage-of-java"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author, {codetype: 'CSU1291P | Lab'});
    }

    function get_projects(def_date, def_author) {        
        const arr = [
            {
                title: "Timekeeper: A Java Remainder App (Major Project)<span class='d-none' id='timekeeper'></span>",
                desc: `<p><strong>Project Version:</strong> 1.0</p>
    <p><strong>Developed by:</strong> Divya Mohan, in collaboration with dmj.one and Shoolini University</p>
    <p><strong>Mentored by:</strong> Dr. Anurag Rana</p>
    <p><strong>Distributed for:</strong> Shoolini University euniv Portal</p>
    <p><strong>Description:</strong> A simple and effective tool for managing daily reminders securely without
    sending data anywhere. Created to enhance productivity and organization, this app allows users to set and manage
    reminders with ease, ensuring that important tasks are never forgotten.</p>
    <p><strong>Special thanks to Shoolini University for their support and encouragement in this project.</strong></p>`,
                author: "Divya Mohan",
                link: "https://go.dmj.one/CAgc8",                
                continuereading: "Download the TimeKeeper.jar file"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author, {codetype: 'CSU1291P | Projects'});
    }

    // AUTOMATION CONTROL
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        projects: get_projects,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}
