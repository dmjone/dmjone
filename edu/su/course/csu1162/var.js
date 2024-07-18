
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",                
                title: "Mastering Python Programming",
                desc: "Dive into the world of Python programming with Shoolini University's CSU1162 Python Programming course, detailed on dmj.one. Unravel the power of Python for software development, data analysis, and automation. Click to explore foundational concepts, advanced techniques, and practical applications that empower you to solve real-world problems efficiently. Discover how to enhance your coding skills, develop sophisticated programs, and significantly boost your career prospects.",
                codetype: "CSU1162 | Python Programming",
                cardimage: "//cdn.dmj.one/edu/su/course/csu1162/img/logo.webp",
                cardimage_dark: "//cdn.dmj.one/edu/su/course/csu1162/img/logo_dark.webp"
                
            },
            {
                link: `https://colab.research.google.com/drive/1goYusw-6vB2d2qZtxo4V1kt4mmLBrN11?usp=sharing" target="_blank" "`,
                title: `Practical Python Programming Lab: Sharpen Your Coding Skills
<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: inline; width: 2rem; height: 2rem;" width="30"  height="30">
    <g><path d="M4.54,9.46,2.19,7.1a6.93,6.93,0,0,0,0,9.79l2.36-2.36A3.59,3.59,0,0,1,4.54,9.46Z" style="" fill="#E8710A"></path><path d="M2.19,7.1,4.54,9.46a3.59,3.59,0,0,1,5.08,0l1.71-2.93h0l-.1-.08h0A6.93,6.93,0,0,0,2.19,7.1Z" style="" fill="#F9AB00"></path><path d="M11.34,17.46h0L9.62,14.54a3.59,3.59,0,0,1-5.08,0L2.19,16.9a6.93,6.93,0,0,0,9,.65l.11-.09" style="" fill="#F9AB00"></path><path d="M12,7.1a6.93,6.93,0,0,0,0,9.79l2.36-2.36a3.59,3.59,0,1,1,5.08-5.08L21.81,7.1A6.93,6.93,0,0,0,12,7.1Z" style="" fill="#F9AB00"></path><path d="M21.81,7.1,19.46,9.46a3.59,3.59,0,0,1-5.08,5.08L12,16.9A6.93,6.93,0,0,0,21.81,7.1Z" style="" fill="#E8710A"></path></g>
</svg> <sup><i class="h6 bi bi-box-arrow-up-right"></i></sup>`,
            desc: "<strong>The link will open inside Google Colaboratory.</strong><br>Elevate your programming expertise in the Python Lab with code CSU1162P. This hands-on lab course is designed to immerse you in the practical aspects of Python programming. From basic syntax to complex problem-solving, you'll learn to write efficient and effective Python code. Click to dive into interactive sessions that will bolster your coding proficiency, enhance your algorithm design capabilities, and prepare you for real-world programming challenges.",
                codetype: "CSU1162P | Lab with Google Colab",
                cardimage: "//cdn.dmj.one/img/colab.webp",
                cardimage_dark: "//cdn.dmj.one/img/colab.webp"
            },

        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Exploring Python: A Deep Dive into Its Universe",
                desc: "Embark on a comprehensive exploration of Python, from its inception to its pivotal role in today's tech landscape. Understand the 'why' behind its creation, its evolutionary journey, key advantages, and the challenges it faces. Discover its applications, influence on technology, and what the future holds. This article offers a holistic view of Python, providing readers with a strong foundation and motivation for further exploration.",
                codetype: "Why Python",
                readtime: 5,
                link: "why-python"
            },
            {
                title: "Python in a Nutshell: Unlocking the World of Programming",
                desc: "<strong>One Shot Article</strong><br>Dive into the realm of Python programming, where we address a common problem: the overwhelming nature of starting to code. This article is designed to transform confusion into clarity, guiding you through Python's syntax, function and its advanced counterparts, variables, data types, and operators. By demystifying these foundational concepts, we aim to equip you with the tools needed to solve real-world problems through coding. From writing your first script to understanding complex data structures, you'll discover how Python's simplicity and versatility make it an ideal language for newcomers and seasoned developers alike. Prepare to explore how each concept plays a critical role in building robust applications, setting the stage for a journey into Python's expansive ecosystem.",
                codetype: "Python in a Nutshell",
                readtime: 15,
                link: "getting-started-with-python"
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