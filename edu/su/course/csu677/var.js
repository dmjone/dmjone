
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Theory of Web Technology",
                desc: "Explore the web technology, including web development tools, programming languages, and web design principles. This course covers essential concepts such as HTML, CSS, JavaScript, and responsive web design, providing a solid foundation for building modern websites and web applications. Click to learn more about web technology and enhance your skills in web development.",
                codetype: "CSU677 | Web Technology",
                cardimage: "https://cdn.dmj.one/edu/su/course/csu677/img/logo.webp"
            },
            {
                link: "#",
                title: "Hands-on Web Development Lab [WIP]",
                desc: "Practice web development concepts and techniques with hands-on lab exercises. This section offers a range of practical activities to help you apply your knowledge of HTML, CSS, JavaScript, and other web technologies. Click to access interactive coding challenges, projects, and tutorials that will enhance your skills in web development and design.",
                codetype: "CSU677P | Web Technology Lab",
            },
            {
                link: "#",
                title: "Practice MCQs and Quizzes [WIP]",
                desc: "Test your knowledge of web technology with practice quizzes and multiple-choice questions. This section offers a variety of quizzes covering essential topics such as HTML, CSS, JavaScript, and responsive web design. Click to take quizzes and assess your understanding of web development concepts.",
                codetype: "Practice | Web Technology",
            }
        ];

        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Introduction to Web Technology",
                desc: "Explore the fundamentals of web technology, including the history of the internet, web development tools, and the role of web technologies in modern society. This introductory class provides an overview of essential concepts such as HTML, CSS, JavaScript, and responsive web design, setting the foundation for further exploration of web development principles and practices.",
                codetype: "Concepts",
                readtime: 5,
                link: "introduction-to-web-technology"
            },
            {
                title: "Number Utilities Made with JavaScript",
                desc: "Explore essential number utilities in JavaScript, including leap year detection, prime number checking, odd or even determination, factorial calculation, and more. This guide provides a comprehensive overview of working with numbers in JavaScript, covering concepts such as number conversion, rounding, precision, and practical algorithms.",
                codetype: "JavaScript",
                readtime: 5,
                link: "number-utilities"
            },
            {
                title: "Responsive Web Design Principles",
                desc: "Learn the principles of responsive web design, including fluid grids, flexible images, and media queries. This class covers essential concepts for creating responsive websites that adapt to various screen sizes and devices. Explore best practices for designing responsive layouts, optimizing images, and enhancing user experience on different devices.",
                codetype: "Responsive Web Design",
                readtime: 5,
                link: "responsive-web-design"
            },
            {
                title: "Introduction to HTML",
                desc: "Learn the basics of HTML, including tags, elements, attributes, and structure. This class covers essential concepts for creating web pages with HTML, including text formatting, links, images, lists, tables, and forms. Explore best practices for writing clean and semantic HTML code, optimizing accessibility, and enhancing user experience.",
                codetype: "HTML",
                readtime: 5,
                link: "introduction-to-html"
            },
            {
                title: "Introduction to CSS",
                desc: "Explore the fundamentals of CSS, including selectors, properties, values, and cascading styles. This class covers essential concepts for styling web pages with CSS, including text formatting, colors, backgrounds, borders, margins, padding, and positioning. Learn how to create responsive layouts, design attractive interfaces, and customize the appearance of web elements.",
                codetype: "CSS",
                readtime: 5,
                link: "introduction-to-css"
            },
            {
                title: "Introduction to JavaScript",
                desc: "Learn the basics of JavaScript, including variables, data types, operators, functions, and control structures. This class covers essential concepts for programming interactive web pages with JavaScript, including event handling, DOM manipulation, form validation, and error handling. Explore best practices for writing modular and maintainable JavaScript code, optimizing performance, and enhancing user interactivity.",
                codetype: "JavaScript",
                readtime: 5,
                link: "introduction-to-javascript"
            },
            {
                title: "History of JavaScript",
                desc: "Explore the history of JavaScript, from its origins at Netscape to its evolution as a versatile programming language for web development. This class covers key milestones in the development of JavaScript, including the creation of ECMAScript standards, the rise of popular frameworks and libraries, and the emergence of modern JavaScript features and capabilities.",
                codetype: "JavaScript",
                readtime: 5,
                link: "history-of-javascript"
            }
            // {
            //     title: "Introduction to Bootstrap",
            //     desc: "Explore the fundamentals of Bootstrap, including the grid system, components, utilities, and responsive design. This class covers essential concepts for building responsive websites with Bootstrap, including layout customization, navigation bars, buttons, forms, modals, and carousels. Learn how to leverage Bootstrap's CSS and JavaScript components to create modern and mobile-friendly web interfaces.",
            //     codetype: "Bootstrap",
            //     readtime: 5,
            //     link: "introduction-to-bootstrap"
            // },
            // {
            //     title: "Introduction to jQuery",
            //     desc: "Learn the basics of jQuery, including selectors, events, effects, and animations. This class covers essential concepts for enhancing web pages with jQuery, including DOM traversal, manipulation, event handling, and AJAX requests. Explore how to use jQuery plugins, animations, and effects to create dynamic and interactive web interfaces.",
            //     codetype: "jQuery",
            //     readtime: 5,
            //     link: "introduction-to-jquery"
            // },
            // {
            //     title: "Introduction to Node.js",
            //     desc: "Explore the fundamentals of Node.js, including modules, packages, events, and streams. This class covers essential concepts for building server-side applications with Node.js, including HTTP servers, file systems, databases, and RESTful APIs. Learn how to use Node.js to create scalable and efficient web applications, interact with databases, and handle asynchronous operations.",
            //     codetype: "Node.js",
            //     readtime: 5,
            //     link: "introduction-to-nodejs"
            // },
            // {
            //     title: "Introduction to Express.js",
            //     desc: "Learn the basics of Express.js, including routing, middleware, templates, and error handling. This class covers essential concepts for building web applications with Express.js, including route handling, request processing, template rendering, and error management. Explore how to create RESTful APIs, handle form submissions, and implement authentication in Express.js applications.",
            //     codetype: "Express.js",
            //     readtime: 5,
            //     link: "introduction-to-expressjs"
            // },
            // {
            //     title: "Introduction to MongoDB",
            //     desc: "Explore the fundamentals of MongoDB, including collections, documents, queries, and indexes. This class covers essential concepts for working with NoSQL databases using MongoDB, including data modeling, CRUD operations, aggregation pipelines, and indexing strategies. Learn how to store, retrieve, update, and delete data in MongoDB collections, and perform complex queries and aggregations.",
            //     codetype: "MongoDB",
            //     readtime: 5,
            //     link: "introduction-to-mongodb"
            // },
            // {
            //     title: "Introduction to React",
            //     desc: "Learn the basics of React, including components, props, state, and lifecycle methods. This class covers essential concepts for building user interfaces with React, including component composition, data flow, event handling, and state management. Explore how to create reusable and interactive UI components, manage application state, and optimize performance in React applications.",
            //     codetype: "React",
            //     readtime: 5,
            //     link: "introduction-to-react"
            // },
            // {
            //     title: "Introduction to Redux",
            //     desc: "Explore the fundamentals of Redux, including actions, reducers, store, and middleware. This class covers essential concepts for managing application state with Redux, including data flow, state management, action dispatching, and middleware integration. Learn how to create predictable and scalable state management solutions using Redux in React applications.",
            //     codetype: "Redux",
            //     readtime: 5,
            //     link: "introduction-to-redux"
            // },
            // {
            //     title: "Introduction to GraphQL",
            //     desc: "Learn the basics of GraphQL, including queries, mutations, types, and schemas. This class covers essential concepts for building APIs with GraphQL, including data fetching, schema definition, query execution, and error handling. Explore how to create flexible and efficient APIs using GraphQL, interact with multiple data sources, and optimize data fetching in web applications.",
            //     codetype: "GraphQL",
            //     readtime: 5,
            //     link: "introduction-to-graphql"
            // },
            // {
            //     title: "Introduction to WebSockets",
            //     desc: "Explore the fundamentals of WebSockets, including connections, messages, events, and protocols. This class covers essential concepts for real-time communication in web applications using WebSockets, including socket creation, message broadcasting, event handling, and protocol negotiation. Learn how to implement bidirectional and low-latency communication between clients and servers using WebSockets.",
            //     codetype: "WebSockets",
            //     readtime: 5,
            //     link: "introduction-to-websockets"
            // },
            // {
            //     title: "Introduction to WebRTC",
            //     desc: "Learn the basics of WebRTC, including peer connections, data channels, media streams, and signaling. This class covers essential concepts for real-time communication in web applications using WebRTC, including peer-to-peer connections, media transmission, data exchange, and signaling protocols. Explore how to create audio, video, and data communication channels between browsers using WebRTC technology.",
            //     codetype: "WebRTC",
            //     readtime: 5,
            //     link: "introduction-to-webrtc"
            // },
            // {
            //     title: "Introduction to Progressive Web Apps",
            //     desc: "Explore the fundamentals of Progressive Web Apps (PWAs), including service workers, caching strategies, manifest files, and offline support. This class covers essential concepts for building modern web applications with PWA features, including fast loading, offline access, push notifications, and home screen installation. Learn how to create engaging and reliable web experiences using Progressive Web App technologies.",
            //     codetype: "Progressive Web Apps",
            //     readtime: 5,
            //     link: "introduction-to-progressive-web-apps"
            // },

                
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
            {
                title: "Practical 1: Procedure for VirtualBox Installation and Configuration",
                desc: "Learn to set up your operating system lab environment with VirtualBox, a powerful virtualization tool for creating and managing virtual machines. This practical exercise will guide you through the installation and configuration of VirtualBox, enabling you to create a virtualized environment for hands-on learning and experimentation.",
                codetype: "Installation",
                readtime: 2,
                date: "Wed February 07, 2024",
                link: "installing-virtualbox"
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