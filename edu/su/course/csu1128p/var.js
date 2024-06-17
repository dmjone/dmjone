function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link :"labfile/",
                date :"Last Updated: Fri December 30, 2022",
                title: "Programs done in Lab File",
                desc :"Get Your Coding Skills to the Next Level with This Section! Discover a Wide Range of Programs, From Basic to Advanced, Written in the Dynamic C Language. Join the Coding Revolution and Unleash Your Inner Prodigy - Let's Get Labbing!",
                codetype: "C Programming",
            },
            {
                link: "../csu1128/program/",
                date: "Sun December 25, 2022",
                title: "Programs done in Class",
                desc: "Master the Art of Coding with This Comprehensive Collection of Programs! From Basic to Advanced, This Section has Everything You Need to Excel in the C Language. Get Ready to Code Your Way to Success - Let's Get Coding!",
                codetype: "C Programming",
            },
            {
                link: "../csu1128/misc/download",
                date: "Mon January 2, 2023",
                title: "All Programs Compiled",
                desc: "Unleash the Power of Coding with This Section - All the Programs you read, are Compiled and Ready to Use! From Basic to Advanced, This Collection is Written in C and a Compatible file for Both Windows and Linux is available to download. Get Ready to Run Your Code with Confidence - Let's Get Executing!",
                codetype: "C Programming",
            },
            {
                link: "../csu1128/misc/",
                date: "Sun January 15, 2023",
                title: "Miscellaneous",
                desc: "Challenge Your Coding Skills with Our Collection of Miscellaneous Programs and Questions! Test Your Knowledge and Master the Art of Coding with Our Comprehensive Selection. Get Ready to Showcase Your Skills - Let's Get Quizzing!",
                codetype: "C Programming",
            },
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_labfile(def_date, def_author) {
        const arr = [
            {
                title: "Practical 1",
                desc: "Write the structure of C. Write the difference between  difference keywords, constants, and variables.",
                codetype: "C Language",
                date: "Thu October 13, 2022",
                link: "p1"
            },
            {
                title: "Practical 2",
                desc: "WAP to take 5 numbers of the respective subjects, calculate its average, and grade the sudent based on their performance percentage.",
                codetype: "C Language",
                date: "Thu October 20, 2022",
                link: "p2"
            },
            {
                title: "Practical 3",
                desc: "WAP to swap two variables using all possible methods.",
                codetype: "C Language",
                date: "Thu October 27, 2022",
                link: "p3"
            },
            {
                title: "Practical 4",
                desc: "WAP to display all four digit perfect square numbers using for loop",
                codetype: "C Language",
                date: "Thu November 3, 2022",
                link: "p4"
            },
            {
                title: "Practical 5",
                desc: "Program to print the rhombus (triangle on an inverted triangle) of numbers of the range entered by the user. Example 3 = 3 2 1 2 3",
                codetype: "C Language",
                date: "Thu November 10, 2022",
                link: "p5"
            },
            {
                title: "Practical 6",
                desc: "Program to compare two matrices and check if they are identical or not",
                codetype: "C Language",
                date: "Thu November 17, 2022",
                link: "p6"
            },
            {
                title: "Practical 7",
                desc: "Program to find the nth term of fibonacci series",
                codetype: "C Language",
                date: "Thu November 24, 2022",
                link: "p7"
            },
            {
                title: "Practical 8",
                desc: "Program to swap the values by using call by reference.",
                codetype: "C Language",
                date: "Thu December 1, 2022",
                link: "p8"
            },
            {
                title: "Practical 9",
                desc: "Program to count the number of vowels and consonents from the sentence entered by the user",
                codetype: "C Language",
                date: "Thu December 8, 2022",
                link: "p9"
            },
            {
                title: "Practical 10",
                desc: "Program to take input of a sentence, write it in the file, convert it in both lower and upper caser and write them both to the file again",
                codetype: "C Language",
                date: "Thu December 15, 2022",
                link: "p10"
            },
            {
                title: "Practical 11",
                desc: "Program to create a student structure having fields studname, ID and mark. Accept the details of 'n' students, rearrange the data in alphabetical order of student name and display it.",
                codetype: "C Language",
                date: "Thu December 22, 2022",
                link: "p11"
            },
            {
                title: "Practical 12",
                desc: "Program to create a student structure having fields studname, ID and mark. Accept the details of 'n' students, rearrange the data in alphabetical order of student name and display it.",
                codetype: "C Language",
                date: "Thu December 29, 2022",
                link: "p12"
            },            
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        labfile: get_labfile,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}