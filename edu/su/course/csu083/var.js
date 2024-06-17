
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "../csu1051/",
                title: "Prerequisites: DSA <i class=\"bi bi-box-arrow-up-right\"></i>",
                desc: "It is recommended that you master Data Structures & Algorithms with our comprehensive collection of Data Structures & Algorithms Class Topics before continuing to the Theory below! The topics below build upon the concepts present in DSA. Click on the topic to visit.",
                codetype: "CSU1051 | Class"
            },
            {
                link: "theory/",
                title: "Theory: Dive into the World of Design and Analysis of Algorithms: A Comprehensive Guide",
                desc: "Unlock the full potential of algorithms with our in-depth guide to all the concepts. Take your problem-solving skills to the next level and discover a world of efficient solutions. Click now to embark on your DAA journey.",
                codetype: "CSU085 | Concepts"
            },
            {
                link: "lab/",
                title: "Practical: Elevate Your Algorithm Design Skills: A Comprehensive Guide for Lab Enthusiasts",
                desc: "Unleash your potential in the DAA lab with our comprehensive guide covering all the essential concepts. Discover the essence of efficient algorithms and take your problem-solving skills to the next level. Click now to embark on your DAA journey.",
                codetype: "CSU085P | Lab"
            },

        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Priori vs. Posteriori Analysis: Navigating Algorithmic Efficiency",
                desc: "Dive deep into the world of algorithm analysis with our comprehensive guide. Unravel the theoretical predictions of a priori and contrast them with the empirical insights of a posteriori. From foundational concepts to advanced nuances, this guide offers a holistic perspective. Begin your journey into the heart of algorithmic efficiency now!",
                codetype: "Algorithm Analysis",
                readtime: 5,
                link: "priori-posteriori-analysis"
            },
            {
                title: "Almost Complete Binary Trees: Unveiling Structural Efficiency",
                desc: "Embark on an exploratory odyssey into the world of Almost Complete Binary Trees with our in-depth guide. Discover the delicate balance and optimized structure of ACBTs, bridging theoretical principles with practical execution. From elemental concepts to complex applications, this guide encapsulates a comprehensive view of ACBTs. Initiate your intellectual venture into the essence of data structural efficiency today!",
                codetype: "Data Structures",
                readtime: 5,
                link: "almost-complete-binary-tree"
            },
            {
                title: "Revision of Concepts",
                desc: "Delve deep into the intricate world with our extensive revision of concepts. Unravel the complexities and strategic approaches of fundamental theories with advanced problem-solving techniques. This guide provides a overview of all the concepts, from basic recursion to advanced tabulation strategies. Embark on your journey to mastering efficient algorithms and optimal solutions in the realm of Design and Analysis of Algorithm!",
                codetype: "Revision",
                readtime: 6,
                link: "revision"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Interactive Sorting Algorithms Visualizer",
                desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
                author: "Divya Mohan",
                link: "interactive-sorting-visualizer",
                // cardimage: "_url_"
            },
            {
                "title": "Practical 1: Selection Sort in C",
                "desc": "Delve into the implementation of the Selection Sort algorithm using C and C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "selection-sort",
                date: "Thursday, August 17, 2023",
                author: "Shreshth Srivastav"
                // "cardimage": "_url_"
            },
            {
                "title": "Practical 2: Straight Min Max Algorithm",
                "desc": "Delve into the implementation of the Straight Min Max Algorithm using C, C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "straight-min-max",
                // "cardimage": "_url_",
                date: "Thursday, August 31, 2023"
            },
            {
                "title": "Practical 2: Method 2 - Straight Min Max Algorithm",
                "desc": "Delve into the implementation of the Straight Min Max Algorithm using C. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "straight-min-max-method-2",
                // "cardimage": "_url_",
                date: "Thursday, August 31, 2023"
            },
            {
                "title": "Practical 3: Binary Search Algorithm",
                "desc": "Delve into the implementation of the Binary Search Algorithm using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "binary-search-algorithm",
                // "cardimage": "_url_",
                date: "Thursday, September 7, 2023"
            },

            {
                "title": "Practical 4: Merge Sort",
                "desc": "Delve into the implementation of the Merge Sort using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "merge-sort",
                // "cardimage": "_url_",
                date: "Thursday, September 14, 2023"
            },
            {
                title: "Practical 5: Quick Sort",
                desc: "Delve into the implementation of the Quick Sort using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                author: "Divya Mohan",
                link: "quick-sort",
                // "cardimage": "_url_",
                date: "Thursday, September 21, 2023"
            },
            {
                "title": "Practical 6: Selection Procedure",
                "desc": "Delve into the implementation of the Selection Procedure (also known as Quick Select) using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "selection-procedure",
                // "cardimage": "_url_",
                date: "Thursday, September 28, 2023"
            },
            {
                "title": "Practical 7: Divide And Conquer - Strassens Matrix Multiplication",
                "desc": "Delve into the implementation of the Strassens Matrix Multiplication using Divide and Conquer using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "strassens-matrix-multiplication",
                // "cardimage": "_url_",
                date: "Thursday, October 12, 2023"
            },
            {
                "title": "Practical 8: Heap Sort",
                "desc": "Delve into the implementation of the Heap Sort using heapify using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "heap-sort",
                // "cardimage": "_url_",
                date: "Thursday, November 15, 2023"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }


    /**********  AUTOMATION CONTROL **********/    
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}