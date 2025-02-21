
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {                
                title: "C Collection - A C-Language Project",
                desc: "Designed and developed a comprehensive C programming framework to automate and manage lab exercises for the course Logic Building with Computer Programming (CSU1128). The project involved creating a structured and modular codebase to support over 80 different programming tasks, categorized into labs, practical files, and class exercises.",
                codetype: "Academic Project",
                cardimage: "https://cdn.dmj.one/edu/su/course/projects/img/logo.webp",                
                continuereading: "Click to Visit the Project Page",
                link: "view/c-collection"
            },
            {                
                title: "Inventory Management System - A C++ Project",
                desc: "Developed an Object-Oriented Inventory Management System in C++ to manage parts issuance and returns, including detailed tracking of inventory status with a file-based persistence layer.",
                codetype: "Academic Project",
                cardimage: "https://cdn.dmj.one/edu/su/course/projects/img/logo.webp",
                continuereading: "Click to Visit the Project Page",
                link: "view/inventory-management-system"
            },
            {                
                title: "Automatic Night Light Based on 555 Timer - A Digital Electronics Project",
                desc: "Developed an Automatic Night Light system that uses a 555 Timer IC and an LDR (Light Dependent Resistor) to automatically turn on an LED when ambient light levels drop. The system was designed to reduce energy consumption and provide reliable illumination in low-light conditions without human intervention.",
                codetype: "Academic Project",
                cardimage: "https://cdn.dmj.one/edu/su/course/projects/img/logo.webp",
                continuereading: "Click to Visit the Project Page",
                link: "view/automatic-night-light-using-555-timer"
            },
            {                
                title: "TimeKeeper - A Java Project",
                desc: "Developed a cross-platform reminder application, TimeKeeper, utilizing Java Swing to enhance time management and productivity for users across Windows, macOS, and Linux. The application allows users to set time-based reminders with custom messages and provides native system notifications tailored to each operating system. It features a persistent log system for storing reminders, real-time reminder checking, and a user-friendly graphical interface.",
                codetype: "Academic Project",
                cardimage: "https://cdn.dmj.one/edu/su/course/projects/img/logo.webp",
                continuereading: "Click to Visit the Project Page",
                link: "view/timekeeper"
            },
            {                
                title: "Autonomous Robo Collision Avoidance System - A Computer Organization Project",
                desc: "Developed an autonomous robotic system capable of detecting and avoiding obstacles using infrared (IR) sensors and an AT89C51 microcontroller. The project involved designing a circuit with sensors and actuators, writing control code in C, and implementing motor control logic for real-time obstacle detection and avoidance.",
                codetype: "Academic Project",
                cardimage: "https://cdn.dmj.one/edu/su/course/projects/img/logo.webp",
                continuereading: "Click to Visit the Project Page",
                link: "view/autonomous-collision-avoidance"
            },
            {                
                title: "Interfacing Peripherals with 8051 Microcontroller- A Computer Organization Project",
                desc: "The project involved designing and implementing a system to interface two peripherals (LCD displays) with the AT89C51 microcontroller. The objective was to develop a functional schematic and ensure accurate data transfer between the microcontroller and the peripherals. This project demonstrates proficiency in microcontroller-based system design, circuit design, and peripheral interfacing.",
                codetype: "Academic Project",
                cardimage: "https://cdn.dmj.one/edu/su/course/projects/img/logo.webp",
                continuereading: "Click to Visit the Project Page",
                link: "view/interfacing-8051"
            },
            {                
                title: "Student Management System - A Python, DBMS, and Cybersecurity Project",
                desc: "Developed a comprehensive Student Management System that automates administrative tasks, including student enrollment, course management, and grading. Integrated security features such as role-based access control and encryption for user credentials to ensure data protection.",
                codetype: "Academic Project",
                cardimage: "https://cdn.dmj.one/edu/su/course/projects/img/logo.webp",
                continuereading: "Click to Visit the Project Page",
                link: "view/student-management-system"
            },
            {
                title: "Privilege Escalation via 'localStorage' Manipulation",
                desc: "Identified and analyzed a critical privilege escalation vulnerability in the Shoolini University DigiCampus platform. The issue allowed users to manipulate `localStorage` entries in the browser to gain unauthorized access to faculty-level privileges. This vulnerability posed a significant security risk, exposing sensitive student records, grading systems, and administrative tools.",
                codetype: "Academic Project",
                cardimage: "https://cdn.dmj.one/edu/su/course/projects/img/logo.webp",
                continuereading: "Click to Visit the Project Page",
                link: "view/localstorage-privilege-escalation"
            },
            

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