
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/week-1-assignment-1",
                title: "Week 1 : Programming Assignment 1",
                desc: "Eren aims to conquer cities connected by directed or undirected paths. Directed edges mean one-way travel between cities, while undirected edges allow two-way travel. His path includes cities he can pillage multiple times, marked by self-loops in the graph. Determine the optimal route for his journey.",
                codetype: "CS103 | Getting Started with Competitive Programing",               
            },
            {
                link: "theory/week-1-assignment-2",
                title: "Week 1 : Programming Assignment 2",
                desc: "Organize your school's photo-shoot by determining the best side to take the group photo from. Given the heights of n students standing in a queue, find the optimal side to ensure everyone is visible in the photo.",
                codetype: "CS103 | Getting Started with Competitive Programing",               
            },
            {
                link: "theory/week-2-assignment-1",
                title: "Week 2 : Programming Assignment 1",
                desc: "Sort and display donated clothing items within your shift at a Los Angeles thrift shop. Determine the minimum sorting rate needed to finish on time.",
                codetype: "CS103 | Getting Started with Competitive Programing",               
                
            },
            {
                link: "theory/week-2-assignment-2",
                title: "Week 2 : Programming Assignment 2",
                desc: "Sort a large shipment of books in your New York bookstore by popularity rankings to boost sales. Hire as many workers as needed, each sorting a segment independently. Determine the maximum number of workers you can hire to ensure all books are sorted by popularity ranking by the end of the day.",
                codetype: "CS103 | Getting Started with Competitive Programing",

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