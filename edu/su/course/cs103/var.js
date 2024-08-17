
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
            {
                link: "theory/week-3-assignment-1",
                title: "Week 3 : Programming Assignment 1",
                desc: "You are choosing 2 courses for next semester from x options that meet your prerequisites. Each course has a varying weekly class count and duration. A list shows the estimated weekly hours for each course, and you have h hours available for courses.",
                codetype: "CS103 | Getting Started with Competitive Programing",
                
            },
            {
                link: "theory/week-3-assignment-2",
                title: "Week 3 : Programming Assignment 2",
                desc: "You have future stock/ETF daily movement data. You can only place one buy order at 9:00 am and one sell order on or after the buying day at 3:30 pm. Your goal is to find the best day to buy and the best day to sell to maximize profit, considering the stock's performance. Print the total profit (or loss) for x shares.",
                codetype: "CS103 | Getting Started with Competitive Programing",
                
            },
            {
                link: "theory/week-4-assignment-1",
                title: "Week 4 : Programming Assignment 1",
                desc: "As a public health official in Mumbai during the 2020 COVID - 19 pandemic, you have a 2D map showing infections('1') and non- infections('0') .Your task is to find and return the population of the largest cluster of connected infected individuals.",
                codetype: "CS103 | Getting Started with Competitive Programing",            
            },
            {
                link: "theory/week-4-assignment-2",
                title: "Week 4 : Programming Assignment 2",
                desc: "Given a list of islands and the boat tours connecting them, your task is to determine the number of separate archipelagos. Each archipelago consists of islands connected by boat tours, with no connections between different archipelagos.",
                codetype: "CS103 | Getting Started with Competitive Programing",
            },
            {
                link: "theory/week-5-assignment-1",
                title: "Week 5 : Programming Assignment 1",
                desc: "Given a maze map, find the quickest path to the exit by always exploring paths to nodes with lower indices first. Output the concatenated indices of the junction nodes along the path from start to end.",
                codetype: "CS103 | Getting Started with Competitive Programing",                
            },
            {
                link: "theory/week-5-assignment-2",
                title: "Week 5 : Programming Assignment 2",
                desc: "Given the seating arrangement of students in a rectangular classroom, determine the number of groups where each group consists of students who are either directly friends (sitting adjacent horizontally or vertically) or connected through mutual friends. The output should be the total number of such groups formed.",
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
