
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory: Computer Graphics",
                desc: "Explore the fundamentals of Computer Graphics, including CRT displays, raster and random scan techniques, frame buffers, input devices, and line drawing algorithms. This section provides comprehensive notes and resources to help you understand the core concepts of computer graphics and their applications in modern computing.",
                codetype: "CSU358 | Course",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu358/img/logo.webp",
                cardimage_dark: "https://cdn.dmj.one/edu/su/course/csu358/img/logo_dark.webp",
                // cardimage_dark: "//cdn.dmj.one/img/needhelp.webp",
                // continuereading: " Click here to reach out to Faculty directly through email"
            },
            // {
            //     link: "lab/",
            //     title: "Lab: Hands-On Practice and Exercises",
            //     desc: "Description of the topic. This section offers practical exercises and interactive tools to help you apply the concepts learned in the theory section. Click to access hands-on labs, coding exercises, and simulations that will enhance your understanding of the topic.",
            //     codetype: "CSUCODE | Course",
            // },
            // {
            //     link: "practice/",
            //     title: "Practice Operating Systems Concepts: Strengthen Your Knowledge",
            //     desc: "Reinforce your understanding of Operating Systems with practice exercises and interactive tools. This section offers a range of resources to help you master operating system concepts, including sorting algorithms, virtual machine installation, and more. Click to access hands-on exercises that will enhance your comprehension of operating system principles and prepare you for advanced topics in computer science.",
            //     codetype: "Practice | Operating Systems",                
            // }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [            
            {
                title: "Unit 1: Introduction to Graphics",
                desc: "Definition, Applications, and Graphics Pipeline.",
                codetype: "Fundamentals",
                readtime: 15,
                link: "introduction-to-computer-graphics"
            },
            {
                title: "Unit 2: Graphics Hardware",
                desc: "Input/Output Devices, CRT, LCD, and Display Techniques.",
                codetype: "Hardware",
                readtime: 20,
                link: "graphics-hardware-and-display-technologies"
            },
            {
                title: "Unit 3: Scan Conversion",
                desc: "DDA, Bresenham Line & Circle, Polygon Filling.",
                codetype: "Algorithms",
                readtime: 25,
                link: "scan-conversion-drawing-algorithms"
            },
            {
                title: "Unit 4: Transformations",
                desc: "2D & 3D Translation, Rotation, Scaling, Reflection.",
                codetype: "Math",
                readtime: 25,
                link: "transformations-2d-and-3d"
            },
            {
                title: "Unit 5: Projections",
                desc: "Parallel (Orthographic) and Perspective Projections.",
                codetype: "Math",
                readtime: 20,
                link: "projections"
            },
            {
                title: "Unit 6: Clipping",
                desc: "Cohen-Sutherland Line Clipping, Polygon Clipping.",
                codetype: "Algorithms",
                readtime: 20,
                link: "clipping-windowing"
            },
            {
                title: "Unit 7: VSD & Hidden Surfaces",
                desc: "Z-Buffer, Back-Face Detection, Scan-Line Algo.",
                codetype: "Advanced",
                readtime: 25,
                link: "visible-surface-detection-hidden-surface-removal"
            },
            {
                title: "Unit 8: Animation",
                desc: "Keyframing, Morphing, Procedural Animation.",
                codetype: "Advanced",
                readtime: 20,
                link: "animation"
            },
            {
                title: "Computer Graphics Notes",
                desc: "Comprehensive notes on topic including CRT displays, raster and random scan techniques, frame buffers, input devices, and line drawing algorithms.",
                codetype: "Concepts",
                readtime: 25,
                link: "computer-graphics-notes"
            },
            {
                title: "Computer Graphics Notes ESM",
                desc: "Comprehensive ESM notes on Computer Graphics including CRT displays, raster and random scan techniques, frame buffers, input devices, and line drawing algorithms.",
                codetype: "Notes",
                readtime: 30,
                link: "notes-end-semester"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author);
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
            // {
            //     title: "Practical 1: Procedure for VirtualBox Installation and Configuration",
            //     desc: "Learn to set up your operating system lab environment with VirtualBox, a powerful virtualization tool for creating and managing virtual machines. This practical exercise will guide you through the installation and configuration of VirtualBox, enabling you to create a virtualized environment for hands-on learning and experimentation.",
            //     codetype: "Installation",
            //     readtime: 2,
            //     date: "Wed February 07, 2024",
            //     link: "installing-virtualbox"
            // },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        // lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}