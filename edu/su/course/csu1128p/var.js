function get_menu_list() {
    var course = window.location.pathname.split("/")[4];
    var path = window.location.pathname.split("/")[5];
    var file = window.location.pathname.split("/")[6];
    console.log(course + "_1/2_" + path + "_2/3_" + file);
    console.log(window.location.pathname);
    var readtime = "";
    var author = "";

    if (path) {
        switch (path) {
            case "labfile":
                get_labfile();
                break;
            default:
                break;
        }
    }
    else {
        get_main();
    }

    function get_main() {
        var cases = [1, 2, 3, 4];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "labfile/";
                    date = "Last Updated: Fri December 30, 2022";
                    title = "Programs done in Lab File";
                    desc = "Get Your Coding Skills to the Next Level with This Section! Discover a Wide Range of Programs, From Basic to Advanced, Written in the Dynamic C Language. Join the Coding Revolution and Unleash Your Inner Prodigy - Let's Get Labbing!";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "../csu1128/program/";
                    date = "Last Updated: Sun December 25, 2022";
                    title = "Programs done in Class";
                    desc = "Master the Art of Coding with This Comprehensive Collection of Programs! From Basic to Advanced, This Section has Everything You Need to Excel in the C Language. Get Ready to Code Your Way to Success - Let's Get Coding!";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    link = "../csu1128/misc/download";
                    date = "Last Updated: Mon January 2, 2023";
                    title = "All Programs Compiled";
                    desc = "Unleash the Power of Coding with This Section - All the Programs you read, are Compiled and Ready to Use! From Basic to Advanced, This Collection is Written in C and a Compatible file for Both Windows and Linux is available to download. Get Ready to Run Your Code with Confidence - Let's Get Executing!";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    link = "../csu1128/misc/";
                    date = "Last Updated: Sun January 15, 2023";
                    title = "Miscellaneous";
                    desc = "Challenge Your Coding Skills with Our Collection of Miscellaneous Programs and Questions! Test Your Knowledge and Master the Art of Coding with Our Comprehensive Selection. Get Ready to Showcase Your Skills - Let's Get Quizzing!";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    link = "books";
                    date = "Thu September 27, 2022";
                    title = "Reference Books";
                    desc = "Learn where";
                    // codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Voila! Party Time!";
                    desc = "<strong>WIP: Work in Progress! </strong><br> For admin: Please define a hierchy for the main menu for the course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }

    function get_labfile() {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        for (let i = 0; i < cases.length; i++) {

            var codetype = "C Language";
            var d = i + 1;
            var link = "p" + d;
            var title = "Program " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    date = "Thu October 13, 2022";
                    title = "Practical 1";
                    desc = "Write the structure of C. Write the difference between  difference keywords, constants, and variables.";
                    // codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    // link = "add_link like 'c2' ";
                    date = "Thu October 20, 2022";
                    desc = "WAP to take 5 numbers of the respective subjects, calculate its average, and grade the sudent based on their performance percentage.";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    date = "Thu October 27, 2022";
                    desc = "WAP to swap two variables using all possible methods.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    date = "Thu November 3, 2022";
                    desc = "WAP to display all four digit perfect square numbers using for loop";
                    // codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    date = "Thu November 10, 2022";
                    title = "Practical 5 - Compile vs Runtime errors.";
                    desc = "Write about compile time and runtime errors with an example.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    date = "Thu November 17, 2022";
                    desc = "Program to print the rhombus (triangle on an inverted triangle) of numbers of the range entered by the user. Example 3 = 3 2 1 2 3";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 7:
                    date = "Thu November 24, 2022";
                    desc = "Program to compare two matrices and check if they are identical or not";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    date = "Thu November 24, 2022";
                    title += ": Another Method by Harshal";
                    author = "Harshal Khajuria";
                    link += "_m2";
                    desc = "Another method by Harshal Khajuria - Program to compare two matrices and check if they are identical or not";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 8:
                    date = "Thu December 1, 2022";
                    desc = "Program to find the nth term of fibonacci series";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 9:
                    date = "Thu December 8, 2022";
                    desc = "Program to swap the values by using call by reference.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 10:
                    date = "Thu December 15, 2022";
                    desc = "Program to count the number of vowels and consonents from the sentence entered by the user";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 11:
                    date = "Thu December 22, 2022";
                    desc = "Program to take input of a sentence, write it in the file, convert it in both lower and upper caser and write them both to the file again";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 12:
                    date = "Thu December 29, 2022";
                    desc = "Program to create a student structure having fields studname, ID and mark. Accept the details of 'n' students, rearrange the data in alphabetical order of student name and display it.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    break;
            }
        }
    }
}