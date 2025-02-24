
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                title: "HTML Laboratory",
                desc: "Unleash Your Inner Coder with Our Classroom Masterpiece! From Basic to Beyond, We've Got HTML Labs that Will Make You a Pro in No Time. Let the Fun and Learning Begin!",
                codetype: "HTML Labs",
                date: "Wed November 23, 2022",
                link: "lab/",
            },
            {
                date : "Sun December 25, 2022",
                title:  "Practical File",
                desc : "Step up your web game with progressive enhancement! Let's give those browsers a run for their money by crafting a top-notch HTML practical notebook. Accessibility for all, served on a silver platter. Ready, set, let's code!",
                codetype: "HTML Labs",
                link : "file/",
            },
            {
                link: "misc/project_report_video",
                date: "Wed January 4, 2022",
                title: "Project Report Video",
                desc: `"Unleashing the Power of Education: My Journey to Create an Impact with CSU953 at Shoolini University" <p>This video is a must - see for anyone who is passionate about education and wants to make a difference. So sit back, relax, and get ready to be inspired by joining me on a journey of discovery and innovation as I delve into the reasons behind my educational initiative dmj.one"</p>`,
                codetype: "Video",
            },
            {
                link: "misc/practicequestions",
                date: "Thu January 5, 2022",
                title: "100 Practice Questions",
                desc: "Challenge yourself and enhance your web development skills with our comprehensive set of 100 Practice Questions. Our questions are tailored to help you ace your VIVA and succeed in the real-world. Get ready to put your knowledge to the test and emerge as a confident and skilled web developer.",
                codetype: "Training",
            },
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [            
            {
                title: "Introduction to Web Programming",
                date: "Thu September 27, 2022",
                desc: "This is an introductory class which discusses various aspects of web programming",
                link: "c1"
            },
            {
                title: 'Using Meta tags and Inline Styles',
                date: "Thu September 27, 2022",
                desc: "Use of tags title, details, p, heading, and inline style of background-color.",
                link: "c2"
            },
            {
                title: 'Using text formatting Tags',
                date: "Thu September 27, 2022",
                desc: "Use of tags tags sub, sup, text-align, address, and abbr.",
                link: "c3"
            },
            {
                title: 'Class Test',
                date: "Thu September 27, 2022",
                link: "c4"
            },
            {
                title: 'Use of table, tr, th tags in creation of Tables',
                date: "Thu September 27, 2022",
                link: "c5"
            },
            {
                title: 'VIVA based on questions directed towards odd and even students.',
                date: "Thu November 17, 2022",          
                link: "c6"
            },
            {
                title: 'Form elements, radio and 10 ul and ol lists.',
                date: "Thu November 24, 2022",        
                link: "c7"
            },
            {
                title: 'Create border, color the border, color the text and create types of border.',
                date: "Thu December 1, 2022",
                link: "c8"
            },
            {
                title: 'Create checkbox and write the difference between margin and padding.',
                date: "Thu December 8, 2022",
                link: "c9"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_file(def_date, def_author) {
        const arr = [            
            {
                title:  "Use of tags title, h1, p, img, a, div.",
                date: "Thu October 6, 2022",
                desc: "Create a basic HTML file by using following tags: title, h1, p, image, a, div.",
                link: "f1"
            },
            {
                title: "Design a web page to display Shoolini University with hyperlink.",
                date: "Thu October 13, 2022",    
                link: "f2"
            },
            {
                title: "Create a static web page using table tags of HTML.",
                date: "Thu October 20, 2022",
                link: "f3"
            },
            {
                title: "Create a static web page which defines all text formatting tags of HTML in tabular format",
                date: "Thu October 27, 2022",
                link: "f4"
            },
            {
                title: "Create webpage using list tag of HTML, (Display your family information in a list).",
                date: "Thu November 3, 2022",
                link: "f5"
            },
            {
                title: "Create a form in html.",
                date: "Thu November 10, 2022",
                link: "f6"
            },
            {
                title: "Using HTML, CSS create a styled checkbox.",
                date: "Thu November 17, 2022",
                link: "f7"
            },
            {
                title: "Using CSS create and display text on an image.",
                date: "Thu November 24, 2022",
                link: "f8"
            },
            {
                title: "Create a margin and padding space in a Box by using CSS.",
                date: "Thu December 1, 2022",
                link: "f9"
            },
            {
                title: "By using CSS specifies 50% opacity to an image.",
                date: "Thu December 8, 2022",
                link: "f10"
            },
            {
                title: "Create a navigation bar (horizontal and vertical)  by using CSS.",
                date: "Thu December 15, 2022",
                link: "f11"
            },
            {
                title: "Create a dropdown box that appears when the user moves the mouse over an element.",
                date: "Thu December 22, 2022",
                link: "f12"
            },
            {
                title: "Create animation effect by using CSS.",
                date: "Thu December 29, 2022",
                link: "f13"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        lab: get_class,
        file: get_file,        
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}        