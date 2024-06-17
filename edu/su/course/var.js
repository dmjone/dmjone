function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "details"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `Life | ${_data.codetype}` : `Life`;
            readtime = _data.readtime || r(14); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }

    function get_course(def_date, def_author) {
        let arr = [
            {
                link: "csu1128/",
                // date: "Mon January 2, 2023",
                title: "Logic Building with Computer Prgramming and its Lab",
                desc: "Step into the World of C Programming with Semester 1's Dynamic Duo: CSU1128 and CSU1128P. Get Ready to Build Your Logical Skills and Master Computer Programming in No Time. This Section Has Everything You Need for a Successful Semester - Let's Get Coding!",
                codetype: "CSU1128 | CSU1128P",
                semester: 1
            },
            {
                link: "csu953/",
                title: "Front End Development Lab",
                desc: "Step into the Web Development Arena with Semester 1's CSU953: HTML Coding! Get Ready to Create Stunning Front-End Designs and Master the Art of Web Development. This Section Has Everything You Need for a Cutting-Edge Semester - Let's Get HTMLing!",
                codetype: "CSU953",
                semester: 1
            },
            {
                link: "fsu030/",
                title: "Engineering Physics",
                desc: "Get Ready to Dive into the Fascinating World of Physics and Discover Its Real-World Applications with Semester 1's FSU030: Engineering Physics. This Section Has Everything You Need for an Eye-Opening Semester. Let's Get Ready to Explore the Reality of Physics!",
                codetype: "FSU030",
                semester: 1
            },
            {
                link: "csu730/",
                title: "Functional English",
                desc: "Master the Art of Effective Communication with Semester 1's CSU730: Functional English by Rajesh Williams. Get Ready to Enhance Your Language Skills and Make a Lasting Impression. This Section Has Everything You Need for a Fluent Semester - Let's Get Englishing!",
                codetype: "CSU730",
                semester: "Semester 1"
            },
            {
                link: "csu951/",
                title: "Engineering Mathematics",
                desc: "Unlock your potential in mathematics and excel in your academic pursuits with Engineering Mathematics by Dr. Ravinder Thakur. This course will equip you with the fundamental concepts of mathematics and provide you with the tools necessary to succeed in the subject.",
                codetype: "CSU951",
                semester: 1
            },
            {
                link: "seaws002/",
                title: "English Writing Seminar",
                desc: "English Writing Seminar with Ms. Sakshi Gautam.",
                codetype: "SEA-WS002",
                semester: 2
            },
            {
                link: "seaap002/",
                title: "Aptitude Development Seminar",
                desc: "Aptitude Development Seminar with Mr. Raghav Sharma.",
                codetype: "SEA-AP002",
                semester: 2
            },
            {
                link: "csu585/",
                title: "Design Thinking",
                desc: "Approach problems with a new perspective in CSU585: Design Thinking by Mrs. Ruchika Sharma. Develop an innovative, creative and problem-solving mindset.",
                codetype: "CSU585",
                semester: 2
            },
            {
                link: "csu1051/",
                title: "Algorithms and Data Structure",
                desc: "Unlock the secrets of effective problem-solving in CSU1051: Algorithms and Data Structures by Dr. Laxman Singh. Learn to craft elegant solutions while optimizing the performance of your programs using advanced techniques and data organization strategies.",
                codetype: "CSU1051 | CSU1051P",
                semester: 2
            },
            {
                link: "csu1287/",
                title: "OOPS using C++ Language",
                desc: "Get ready to become a programming master with CSU1287: OOPS using C++ Language by Prof. Dr. Pankaj Vaidya. This cutting-edge course covers the latest object-oriented programming concepts, design patterns, and best practices using the powerful C++ language. Whether you're a beginner or an experienced programmer, this course will help you take your skills to the next level and design efficient, reusable, and robust code.",
                codetype: "CSU1287 | CSU1287P",
                semester: 2
            },
            {
                link: "csu1289/",
                title: "Digital Electronics",
                desc: "Explore the fascinating world of Digital Electronics with Dr. Brij Bhushan Sharma. This comprehensive course covers the fundamental principles of digital circuits, logic gates, and microprocessors, and how they are used to power modern electronic devices. With Dr. Sharma's expert guidance, you'll gain the knowledge and skills to design and build complex digital systems from scratch.",
                codetype: "CSU1289 | CSU1289P",
                semester: 2
            },
            {
                link: "seaap003/",
                title: "Aptitude Development Seminar 3",
                desc: "Join our Aptitude Development Seminar to sharpen your cognitive and problem-solving skills. This dynamic and interactive seminar is designed to enhance your logical reasoning, quantitative ability, and verbal proficiency, key components in various aptitude tests. Led by experts in the field, the seminar includes engaging workshops, practice sessions, and strategies to excel in competitive scenarios. Whether you're preparing for academic examinations, job interviews, or seeking to improve your general aptitude, this seminar offers the tools and guidance to achieve your goals.",
                codetype: "SEAAP003",
                semester: 3
            },
            {
                link: "csu1627/",
                title: "Mind Wellness",
                desc: "Embark on a transformative journey with our Mind Wellness course, designed to promote mental and emotional well-being. This course explores various aspects of mental health, including stress management, mindfulness, emotional intelligence, and positive psychology. Engage in interactive sessions that teach practical techniques for self-care, resilience building, and cultivating a positive mindset. The curriculum also delves into the science of happiness and the role of lifestyle factors in mental wellness. Through a blend of theoretical knowledge and experiential learning, students will gain valuable insights and skills to nurture their mental health and enhance their overall quality of life.",
                codetype: "CSU1627",
                semester: 3
            },
            {
                link: "csu716/",
                title: "Life Skills Training",
                desc: "Embark on a journey of personal development with our Life Skills Training course. This essential program, led by experienced instructors Sangeeta Kakkar and Isha Jaswal, focuses on developing crucial life skills such as effective communication, decision-making, problem-solving, and emotional intelligence. Throughout the course, you will engage in interactive activities and discussions, gaining practical knowledge and insights that can be applied in both personal and professional contexts. Prepare to enhance your self-awareness, build resilience, and navigate life's challenges more confidently.",
                codetype: "CSU716",
                semester: 3
            },
            {
                link: "csu083/",
                title: "Design and Analysis of Algorithms",
                desc: "Dive into the intricate world of algorithms with our 'Design and Analysis of Algorithms' course. This program, ideal for those pursuing computer science and software engineering, delves deep into algorithmic design principles, efficiency analysis, and complexity classes. Learn about various algorithmic strategies like divide-and-conquer, dynamic programming, greedy techniques, and graph algorithms. The course also covers advanced topics such as NP-completeness and approximation algorithms. Through lectures, hands-on problem-solving sessions, and assignments, students will acquire the skills to design efficient algorithms and analyze their performance critically.",
                codetype: "CSU083 | CSU083P",
                semester: 3
            },
            {
                link: "csu1291/",
                title: "Java Programming",
                desc: "Immerse yourself in the world of Java Programming with this comprehensive course, tailored for both beginners and those looking to deepen their understanding of this versatile language. You will learn the fundamentals of Java, including object-oriented programming, data structures, software design principles, and exception handling. Advanced topics such as multi-threading, network programming, and utilizing Java libraries and frameworks will also be covered. With a mix of theoretical concepts and practical coding exercises, this course prepares you to develop robust Java applications for diverse platforms.",
                codetype: "CSU1291 | CSU1291P",
                semester: 3
            },
            {
                link: "csu1075/",
                title: "Computer Organization",
                desc: "Our Computer Organization course offers a deep dive into the fundamental concepts and structures that form the backbone of computer systems. This course covers the essentials of computer architecture, including data representation, processor design, memory systems, and input/output organization. Students will explore how hardware and software components interact within a computer system, learning about topics such as instruction set architecture, microarchitecture, and various types of memory. Practical labs complement theoretical knowledge, providing hands-on experience with computer organization concepts and fostering a comprehensive understanding of how computers function at a fundamental level.",
                codetype: "CSU1075",
                semester: 3
            },
            {
                link: "csu1526/",
                title: "Microprocessor and Microcontroller",
                desc: "Delve into the fascinating world of microprocessors and microcontrollers with Shoolini University's comprehensive course, CSU1526. Designed for students and professionals alike, this course offers an in-depth understanding of the architecture, programming, and applications of microprocessors and microcontrollers. You will learn about various processor models, assembly language programming, interfacing techniques, and the integration of microcontrollers in embedded systems. The course also covers practical aspects through lab sessions, where students will get hands-on experience in programming and working with actual microprocessor and microcontroller kits, preparing them for real-world applications in electronics, robotics, and IoT (Internet of Things).",
                codetype: "CSU1526",
                semester: 3
            },



            // {
            //     link: "csu1287/",
            //     title: "OOPS Using C++ Language",
            //     desc: "Approach problems with a new perspective in CSU585: Design Thinking by Dr. Namita Gandotra. Develop an innovative, creative and problem-solving mindset.",
            //     codetype: "CSU1287 | CSU1287(P)",
            //     semester: 2,
            //     date: "Tue February 28, 2023"
            // },
            // {
            //     link: "fsu013/",
            //     title: "Engineering Mathematics 2",
            //     desc: "Unlock your potential in mathematics and excel in your academic pursuits with Engineering Mathematics by Dr. Ravinder Thakur. This course will equip you with the fundamental concepts of mathematics and provide you with the tools necessary to succeed in the subject.",
            //     codetype: "FSU013",
            //     semester: 2
            // },
        ];

        arr.reverse(); // For semester to come at top. 
        // // Fisher-Yates shuffle algorithm to randomly shuffle an array
        // arr = (function (array) {
        //     for (let i = array.length - 1; i > 0; i--) {
        //         const j = Math.floor(Math.random() * (i + 1));
        //         [array[i], array[j]] = [array[j], array[i]];
        //     }
        //     return array;
        // })(arr);

        for (let i = 0; i < arr.length; i++) { // display in ascendening order
            // for (let i = arr.length - 1; i >= 0; i--) { // display in reverse order. 
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `s${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? _data.codetype : `Course`;
            readtime = _data.readtime || r(60); readtime = null;    // Null readtime - Special Case
            author = _data.author || def_author; author = null;     // Null author - Special Case
            semester = /^\d+$/.test(_data.semester) ? `Semester ${_data.semester}` : _data.semester;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester);
        }
    }

    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author, semester, cardimage, continuereading;
    const functions = {
        course: get_course,
        // seminar: get_seminar,
        // assignment: get_assignment,
        default: get_main
    };
    (functions[window.urlpart3] || functions.default)(datetogen, author);
}