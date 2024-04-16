
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {		
        const arr = [           
            {
                "link": "theory/",
                "title": "Theory of Computing",
                "desc": "Explore the foundational theories of computing and algorithms with our Theory of Computing course. Dive deep into topics like automata theory, computability, complexity classes, and algorithmic thinking. This course provides a solid theoretical framework for understanding the capabilities and limits of computing, preparing students for advanced studies in computer science. Click to discover the principles that underlie all of computing and how they apply to practical problem solving.",
                "codetype": "CSU1105 | Theory of Computing",                
            },
            {
                "link": "designer/",
                "title": "Finite State Machine Designer",
                "desc": "<strong>Engage with a dynamic web-based tool for designing Finite State Machines (FSMs).</strong><br>This interactive platform enables users to create, and visualize deterministic finite automata and non-deterministic finite automata with ease. Utilize intuitive controls to add states, draw transitions, and configure accept states directly within a versatile canvas environment. Features include exporting designs in various formats (PNG, SVG, Backup, Restore), adjusting visual elements like circle radius, and a comprehensive help modal for guidance. Ideal for both educational purposes and professional projects, this tool simplifies the complexity of FSM design, offering an immersive experience in the study of automata theory.",
                "codetype": "CSU1105 | Finite State Machine Designer",
                continuereading: "Start Designing FSMs"
            }
        ];

        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1105`;
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
            // {
            //     title: "Exploring Python: A Deep Dive into Its Universe",
            //     desc: "Embark on a comprehensive exploration of Python, from its inception to its pivotal role in today's tech landscape. Understand the 'why' behind its creation, its evolutionary journey, key advantages, and the challenges it faces. Discover its applications, influence on technology, and what the future holds. This article offers a holistic view of Python, providing readers with a strong foundation and motivation for further exploration.",
            //     codetype: "Why Python",
            //     readtime: 5,
            //     link: "why-python"
            // },
            {
                "title": "Cases of DFA, NFA, RE, Grammar, Mealy, and Moore",
                "desc": "This comprehensive article presents a series of cases involving Deterministic Finite Automata (DFA), Nondeterministic Finite Automata (NFA), Regular Expressions (RE), Grammars, Mealy Machines, and Moore Machines. From theoretical foundations to practical applications, explore how these concepts are employed in language processing, compiler design, digital circuit design, and algorithm development. Each case study highlights the unique advantages, challenges, and solutions provided by these models in solving complex computational problems, offering insights into their interconnections and the elegant structure of theoretical computer science.",
                "codetype": "TOC Cases",
                "readtime": 30,
                "link": "dfa-nfa-re-grammar-cases"
            },
            {
                "link": "../designer/",
                "title": "Finite State Machine Designer",
                "desc": "<strong>Engage with a dynamic web-based tool for designing Finite State Machines (FSMs).</strong><br>This interactive platform enables users to create, and visualize deterministic finite automata and non-deterministic finite automata with ease. Utilize intuitive controls to add states, draw transitions, and configure accept states directly within a versatile canvas environment. Features include exporting designs in various formats (PNG, SVG, Backup, Restore), adjusting visual elements like circle radius, and a comprehensive help modal for guidance. Ideal for both educational purposes and professional projects, this tool simplifies the complexity of FSM design, offering an immersive experience in the study of automata theory.",
                "codetype": "CSU1105 | Finite State Machine Designer",
            },
            {
                "title": "Deterministic Finite Automata",
                "desc": "Dive into the world of Deterministic Finite Automata (DFA), a core concept in theoretical computer science and automata theory. Learn how DFAs serve as a mathematical model for various computational devices, capable of recognizing patterns within digital inputs. This article unpacks the structure of DFAs, their operational mechanics, and their pivotal role in compiling processes, text processing, and designing of lexical analyzers. Gain insights into the creation, optimization, and application of DFAs in solving real-world computational problems.",
                "codetype": "Understanding DFA",
                "readtime": 4,
                "link": "understanding-dfa"
            },
            {
                "title": "Nondeterministic Finite Automata",
                "desc": "Explore Nondeterministic Finite Automata (NFA), a fundamental concept in automata theory that introduces flexibility and non-determinism into state machines. This article delves into the nuances of NFA, contrasting its structure and functionality with DFA, and demonstrating its unique ability to occupy multiple states simultaneously. Discover how NFAs simplify the design of computational models, their conversion to DFAs, and their application in simplifying complex computational problems and pattern matching tasks.",
                "codetype": "Exploring NFA",
                "readtime": 4,
                "link": "exploring-nfa"
            },
            {
                "title": "Regular Expressions",
                "desc": "Delve into the essence of Regular Expressions (REs) from the perspective of the Theory of Computing, where they stand as a fundamental mechanism for describing regular languages. This exploration discusses the formal definition of REs, their equivalence to Finite Automata, and their role in Chomsky's hierarchy. Learn about the algebraic properties of regular expressions, their application in proving language properties, and how they contribute to the foundational understanding of language recognition and processing in computer science.",
                "codetype": "RE in Computational Theory",
                "readtime": 4,
                "link": "regular-expression"
            },
            {
                "title": "The Structure of Languages",
                "desc": "Embark on a journey through the concept of Grammar in the context of formal languages and automata theory. This article covers the classification of grammars, including context-free and context-sensitive, and their role in defining programming languages and parsing algorithms. Discover how grammars are foundational to the development of compilers and interpreters, enabling computers to understand and execute programming languages effectively.",
                "codetype": "Grammar in Computing",
                "readtime": 4,
                "link": "grammar-in-computing"
            },
            {
                "title": "Mealy Machines",
                "desc": "Dive deep into Mealy Machines, a type of finite state machine where the outputs are determined by the current state and the current inputs. This article explores the structure, functionality, and advantages of Mealy Machines in detail. Learn about their applications in hardware design, signal processing, and where output responsiveness to inputs is critical. Understand the differences between Mealy and its counterpart, the Moore Machine, through comparative analysis.",
                "codetype": "Understanding Mealy Machines",
                "readtime": 4,
                "link": "mealy-machines"
            },
            {
                "title": "Moore Machines",
                "desc": "Explore Moore Machines, a variant of finite state machines where the output is solely determined by the machine's current state, independent of the input. This article elucidates the concept, design, and operational principles of Moore Machines, offering insight into their utility in digital circuits and control systems. Compare and contrast Moore Machines with Mealy Machines to understand their unique advantages and applications in designing predictable and stable computational models.",
                "codetype": "Exploring Moore Machines",
                "readtime": 4,
                "link": "moore-machines"
            },
            {
                "title": "Revision",
                "desc": "This revision article provides a comprehensive overview of the key concepts covered in the Theory of Computing course. From automata theory to computational complexity, this resource offers a structured review of the foundational principles and theories that underpin the field of computer science. Ideal for exam preparation or reinforcing understanding, this revision guide summarizes essential topics, definitions, and applications, providing a solid foundation for further exploration and study.",
                "codetype": "TOC Revision",
                "readtime": 10,
                "link": "revision"
            },
            {
                "title": "Push Down Automata",
                "desc": "Discover the world of Pushdown Automata (PDA), a fundamental concept in automata theory that extends the capabilities of finite automata to handle context-free languages. This article explores the structure, functionality, and applications of PDAs in language recognition, parsing algorithms, and the design of compilers. Gain insights into the operational mechanics of PDAs, their equivalence to context-free grammars, and their pivotal role in theoretical computer science.",
                "codetype": "PDA",
                "readtime": 10,
                "link": "push-down-automata"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1105 | ${_data.codetype}` : `CSU1105 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
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
            codetype = _data.codetype ? `CSU1162P | ${_data.codetype}` : `CSU1162P | Lab`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
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
    function r(t) { return Math.floor(Math.random() * 10) + t }
    var title, desc, codetype, readtime, author = 1, link, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}