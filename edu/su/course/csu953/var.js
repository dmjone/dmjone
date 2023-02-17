function get_menu_list() {
    var course = window.location.pathname.split("/")[4];
    var path = window.location.pathname.split("/")[5];
    var file = window.location.pathname.split("/")[6];
    var readtime = "";
    var author = "";

    if (path) {
        switch (path) {
            case "lab":
                get_classes();
                break;
            case "books":
                get_books();
                break;
            case "file":
                get_file();
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
        var cases = [1, 2, 3, 4];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "lab/";
                    date = "Last Updated: Wed November 23, 2022";
                    title = "HTML Laboratory";
                    desc = "Unleash Your Inner Coder with Our Classroom Masterpiece! From Basic to Beyond, We've Got HTML Labs that Will Make You a Pro in No Time. Let the Fun and Learning Begin!";
                    codetype = "HTML Labs";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "file/";
                    date = "Last Updated: Sun December 25, 2022";
                    title = "Practical File";
                    desc = "Step up your web game with progressive enhancement! Let's give those browsers a run for their money by crafting a top-notch HTML practical notebook. Accessibility for all, served on a silver platter. Ready, set, let's code!";
                    codetype = "HTML Labs";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    link = "misc/project_report_video";
                    date = "Last Updated: Wed January 4, 2022";
                    title = "Project Report Video";
                    desc = `"Unleashing the Power of Education: My Journey to Create an Impact with CSU953 at Shoolini University"
<p>This video is a must - see for anyone who is passionate about education and wants to make a difference. So sit back, relax, and get ready to be inspired by joining me on a journey of discovery and innovation as I delve into the reasons behind my educational initiative dmj.one"</p>`;
                    codetype = "Video";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    link = "misc/practicequestions";
                    date = "Last Updated: Thu January 5, 2022";
                    title = "100 Practice Questions";
                    desc = "Challenge yourself and enhance your web development skills with our comprehensive set of 100 Practice Questions. Our questions are tailored to help you ace your VIVA and succeed in the real-world. Get ready to put your knowledge to the test and emerge as a confident and skilled web developer.";
                    codetype = "Training";
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
                    /* link = "#";
                    date = "Not Applicable";
                    title = "Voila! Party Time!";
                    desc = "<strong>WIP: Work in Progress! </strong><br> For admin: Please define a hierchy for the main menu for the course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0"; */
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }

    function get_classes() {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 0; i < cases.length; i++) {

            var codetype = "HTML";
            var d = i + 1;
            var link = "c" + d;
            var title = "Lab " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    date = "Thu September 27, 2022";
                    desc = "This is an introductory class which discusses various aspects of web programming";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 7:
                    date = "Thu November 24, 2022";
                    desc = "Form elements, radio and 10 ul and ol lists.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 8:
                    date = "Thu December 1, 2022";
                    desc = "Create border, color the border, color the text and create types of border.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 9:
                    date = "Thu December 8, 2022";
                    desc = "Create checkbox and write the difference between margin and padding.";
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

    function get_file() {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < cases.length; i++) {

            var codetype = "HTML";
            var d = i + 1;
            var link = "f" + d;
            var title = "Practical " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    title += ": Use of tags title, h1, p, img, a, div.";
                    date = "Thu October 6, 2022";
                    desc = "Create a basic HTML file by using following tags: title, h1, p, image, a, div.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Thu October 13, 2022";
                    desc = "Design a web page to display Shoolini University with hyperlink.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    date = "Thu October 20, 2022";
                    desc = "Create a static web page using table tags of HTML.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    date = "Thu October 27, 2022";
                    desc = "Create a static web page which defines all text formatting tags of HTML in tabular format";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    date = "Thu November 3, 2022";
                    desc = "Create webpage using list tag of HTML, (Display your family information in a list).";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    date = "Thu November 10, 2022";
                    desc = "Create a form in html.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 7:
                    date = "Thu November 17, 2022";
                    desc = "Using HTML, CSS create a styled checkbox.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 8:
                    date = "Thu November 24, 2022";
                    desc = "Using CSS create and display text on an image.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 9:
                    date = "Thu December 1, 2022";
                    desc = "Create a margin and padding space in a Box by using CSS.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 10:
                    date = "Thu December 8, 2022";
                    desc = "By using CSS specifies 50% opacity to an image.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 11:
                    date = "Thu December 15, 2022";
                    desc = "Create a navigation bar (horizontal and vertical)  by using CSS.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 12:
                    date = "Thu December 22, 2022";
                    desc = "Create a dropdown box that appears when the user moves the mouse over an element.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 13:
                    date = "Thu December 29, 2022";
                    desc = "Create animation effect by using CSS.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Practical list is incomplete / not defined for current " + course + " / Extra selection has been made, check the array info.";
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
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "HTML";
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
