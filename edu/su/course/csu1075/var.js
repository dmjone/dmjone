
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            // {
            //     link: "theory/",
            //     title: "Theory: Dive into the World of Computer Organization: A Comprehensive Guide",
            //     desc: "Unlock the full potential of Computer Organization with our in-depth guide to all the concepts. Take your programming skills to the next level and discover a world of endless possibilities in architecture of computers. Click now to embark on your Computer Organization journey.",
            //     codetype: "CSU1075 | Concepts"
            // },
            {
                link: "theory/",
                title: "Explore the Core: Journey Through Computer Organization",
                desc: "Embark on an explorative adventure into the heart of computers with CSU1075. Understand the sophisticated dance of circuits and systems that empower your code. From logic gates to processor design, elevate your comprehension of computer architecture to master the machine. Your quest for knowledge begins here—don't just learn, conquer!",
                codetype: "CSU1075 | Computer Organization Fundamentals"
            },
            // {
            //     link: "lab/",
            //     title: "Practical: Elevate Your Java Programming Skills: A Comprehensive Guide for Lab Enthusiasts",
            //     desc: "Unleash your potential in the Java programming lab with our comprehensive guide covering all the essential concepts. Discover the magic of code and take your programming skills to the next level. Click now to embark on your Java journey.",
            //     codetype: "CSU1291P | Lab"
            // },

        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            // {
            //     title: "The Digital Revolution: A Thrilling Introduction to Digital Electronics",
            //     desc: "Join the revolution and discover the magic of digital electronics with our exciting introduction to the world of digital circuits and systems. From binary code to microprocessors, our guide covers all the essentials. Click now to embark on an electrifying journey into the digital realm!",
            //     codetype: "Introduction",
            //     readtime: r(15)
            // },                    
            {
                title: "Pipelining: The Heartbeat of Computer Performance",
                desc: "Dive into the pulse of Computer Organization with a thrilling exploration of Pipelining. Discover how this crucial system boosts computing power and efficiency, allowing for swift execution of instructions in a symphony of synchronized stages. Click now to unveil the secrets of this performance-enhancing marvel in the world of computer architecture!",
                codetype: "Pipelinig",
                readtime: 7,
                link: "pipelining"
            },
            {
                title: "Instruction Codes: The Language of Processors",
                desc: "Embark on a detailed journey through the world of Instruction Codes in Computer Organization. Uncover the intricacies of opcodes, operands, and their orchestration in the CPU to perform a ballet of computations. Click to master the art of machine language that drives the core of computing efficiency!",
                codetype: "Instruction Codes",
                readtime: 7,
                link: "instruction-codes"
            },
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