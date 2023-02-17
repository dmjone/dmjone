var prof = "Dr. Pankaj Vaidya";
var prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
var prof_href = "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
var course = "CSU1128";
var course_detail = "Logic Building with Computer Programming";
function get_menu_list() {
    var course = window.location.pathname.split("/")[3];
    var path = window.location.pathname.split("/")[4];
    var file = window.location.pathname.split("/")[5];
    var readtime = "";
    var author = "";

    if (path) {
        switch (path) {
            case "class":
                get_classes();
                break;
            case "books":
                get_books();
                break;
            case "program":
                get_programs();
                break;
            default:
                break;
        }
    }
    else {
        get_main();
    }

    function get_main() {
        var cases = [1];

        // var readtime = Math.floor(Math.random() * 5) + 2;
        // var author = 1;

        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "course/";
                    date = "Mon February 13, 2023";
                    title = "Study @ Shoolini";
                    desc = "Ready to Level Up Your Computer Science and Engineering Game? Say Goodbye to Snooze-Worthy Study Sessions and Hello to a Comprehensive Course List Packed with Knowledge and Skills. Impress the World with Your In-Demand Expertise and Soar to New Heights - Join dmj.one's Edutainment Initiative Today and Get Ready to Graduate with Flying Colors (and Maybe a Few Jokes Along the Way)!";
                    codetype = "study@shoolini";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "csu953/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Front End Development Lab";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in class and is written in C language.";
                    codetype = "CSU953";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    link = "csu1128p/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Logic Building with Computer Programming Lab";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in class and is written in C language.";
                    codetype = "CSU1128P";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    link = "fsu030/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Engineering Physics";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in class and is written in C language.";
                    codetype = "FSU030";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    link = "csu951/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Engineering Mathematics";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in class and is written in C language.";
                    codetype = "CSU951";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    link = "csu730/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Functional English";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in class and is written in C language.";
                    codetype = "CSU730";
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
    function get_classes() {
        var cases = [1];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "program/";
                    date = "Last Updated: Wed November 23, 2022";
                    title = "Programs done in Class";
                    desc = "This contains list of programs written in C language done in class.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
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
                    title = "Classes for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }

    function get_programs() {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        for (let i = 0; i < cases.length; i++) {

            var codetype = "C Language";
            var d = i + 1;
            var link = "p" + d;
            var title = "Program " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    // link = "add_link like 'c2' ";
                    date = "Mon October 2, 2022";
                    // title = "Program 31 / title += 'append something' ";
                    desc = "Hello World";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Wed October 5, 2022";
                    desc = "Program to calculate sum aftertaking two numbers as input from user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Classes for current course " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }

    function get_books() {
        var cases = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "c1";
                    date = "Thu September 27, 2022";
                    title = "Lab 1";
                    desc = "This is an introductory class";
                    codetype = "BOOKS";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "BOOK2";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Books for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }
}
