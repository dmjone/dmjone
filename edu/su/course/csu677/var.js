
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
                link: "lab/",
                title: "Hands-on Web Development Lab",
                desc: "Practice web development concepts and techniques with hands-on lab exercises. This section offers a range of practical activities to help you apply your knowledge of HTML, CSS, JavaScript, and other web technologies. Click to access interactive coding challenges, projects, and tutorials that will enhance your skills in web development and design.",
                codetype: "CSU677P | Web Technology Lab",
            },
            // {
                // link: "#",
                // title: "Practice MCQs and Quizzes [WIP]",
                // desc: "Test your knowledge of web technology with practice quizzes and multiple-choice questions. This section offers a variety of quizzes covering essential topics such as HTML, CSS, JavaScript, and responsive web design. Click to take quizzes and assess your understanding of web development concepts.",
                // codetype: "Practice | Web Technology",
            // }
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
                link: "web-technology"
            },
            {
                title: "Introduction to HTML",
                desc: "Learn the basics of HTML, including tags, elements, attributes, and structure. This class covers essential concepts for creating web pages with HTML, including text formatting, links, images, lists, tables, and forms. Explore best practices for writing clean and semantic HTML code, optimizing accessibility, and enhancing user experience.",
                codetype: "HTML",
                readtime: 5,
                link: "html"
            },
            {
                title: "Introduction to CSS",
                desc: "Explore the fundamentals of CSS, including selectors, properties, values, and cascading styles. This class covers essential concepts for styling web pages with CSS, including text formatting, colors, backgrounds, borders, margins, padding, and positioning. Learn how to create responsive layouts, design attractive interfaces, and customize the appearance of web elements.",
                codetype: "CSS",
                readtime: 5,
                link: "css"
            },
            {
                title: "Responsive Web Design Principles",
                desc: "Learn the principles of responsive web design, including fluid grids, flexible images, and media queries. This class covers essential concepts for creating responsive websites that adapt to various screen sizes and devices. Explore best practices for designing responsive layouts, optimizing images, and enhancing user experience on different devices.",
                codetype: "Responsive Web Design",
                readtime: 5,
                link: "responsive-web-design"
            },
            {
                title: "Introduction to JavaScript",
                desc: "Learn the basics of JavaScript, including variables, data types, operators, functions, and control structures. This class covers essential concepts for programming interactive web pages with JavaScript, including event handling, DOM manipulation, form validation, and error handling. Explore best practices for writing modular and maintainable JavaScript code, optimizing performance, and enhancing user interactivity.",
                codetype: "JavaScript",
                readtime: 5,
                link: "javascript"
            },
            {
                title: "History of JavaScript",
                desc: "Explore the history of JavaScript, from its origins at Netscape to its evolution as a versatile programming language for web development. This class covers key milestones in the development of JavaScript, including the creation of ECMAScript standards, the rise of popular frameworks and libraries, and the emergence of modern JavaScript features and capabilities.",
                codetype: "JavaScript",
                readtime: 5,
                link: "history-of-javascript"
            },
            {
                title: "Number Utilities Made with JavaScript",
                desc: "Explore essential number utilities in JavaScript, including leap year detection, prime number checking, odd or even determination, factorial calculation, and more. This guide provides a comprehensive overview of working with numbers in JavaScript, covering concepts such as number conversion, rounding, precision, and practical algorithms.",
                codetype: "JavaScript",
                readtime: 5,
                link: "number-utilities"
            },
            {
                title: "Document Object Model (DOM)",
                desc: "Learn about the Document Object Model (DOM), including nodes, elements, attributes, and events. This class covers essential concepts for manipulating web pages with the DOM, including element selection, content modification, event handling, and style changes. Explore how to interact with the DOM, create dynamic web content, and enhance user interactivity using JavaScript.",
                codetype: "DOM",
                readtime: 5,
                link: "dom"
            },
            {
                title: "Introduction to SCSS",
                desc: "Learn the basics of SCSS, including variables, nesting, mixins, functions, and inheritance. This class covers essential concepts for writing modular and maintainable CSS code with SCSS, including variable declaration, selector nesting, function definition, and mixin creation. Explore how to use SCSS features to streamline your CSS workflow, improve code organization, and enhance styling capabilities.",
                codetype: "SCSS",
                readtime: 5,
                link: "scss"
            },
            {
                title: "What is a Bootstrap?",
                desc: "Explore the fundamentals of Bootstrap, including the grid system, components, utilities, and responsive design. This class covers essential concepts for building responsive websites with Bootstrap, including layout customization, navigation bars, buttons, forms, modals, and carousels. Learn how to leverage Bootstrap's CSS and JavaScript components to create modern and mobile-friendly web interfaces.",
                codetype: "Bootstrap",
                readtime: 5,
                link: "bootstrap"
            },
            {
                title: "Introduction to jQuery",
                desc: "Learn the basics of jQuery, including selectors, events, effects, and animations. This class covers essential concepts for enhancing web pages with jQuery, including DOM traversal, manipulation, event handling, and AJAX requests. Explore how to use jQuery plugins, animations, and effects to create dynamic and interactive web interfaces.",
                codetype: "jQuery",
                readtime: 5,
                link: "jquery"
            },
            {
                title: "Introduction to Node.js",
                desc: "Explore the fundamentals of Node.js, including modules, packages, events, and streams. This class covers essential concepts for building server-side applications with Node.js, including HTTP servers, file systems, databases, and RESTful APIs. Learn how to use Node.js to create scalable and efficient web applications, interact with databases, and handle asynchronous operations.",
                codetype: "Node.js",
                readtime: 5,
                link: "nodejs"
            },
            {
                title: "Introduction to Express.js",
                desc: "Learn the basics of Express.js, including routing, middleware, templates, and error handling. This class covers essential concepts for building web applications with Express.js, including route handling, request processing, template rendering, and error management. Explore how to create RESTful APIs, handle form submissions, and implement authentication in Express.js applications.",
                codetype: "Express.js",
                readtime: 5,
                link: "expressjs"
            },
            {
                title: "Introduction to MongoDB",
                desc: "Explore the fundamentals of MongoDB, including collections, documents, queries, and indexes. This class covers essential concepts for working with NoSQL databases using MongoDB, including data modeling, CRUD operations, aggregation pipelines, and indexing strategies. Learn how to store, retrieve, update, and delete data in MongoDB collections, and perform complex queries and aggregations.",
                codetype: "MongoDB",
                readtime: 5,
                link: "mongodb"
            },
            {
                title: "Introduction to React",
                desc: "Learn the basics of React, including components, props, state, and lifecycle methods. This class covers essential concepts for building user interfaces with React, including component composition, data flow, event handling, and state management. Explore how to create reusable and interactive UI components, manage application state, and optimize performance in React applications.",
                codetype: "React",
                readtime: 5,
                link: "react"
            },
            {
                title: "Introduction to GraphQL",
                desc: "Learn the basics of GraphQL, including queries, mutations, types, and schemas. This class covers essential concepts for building APIs with GraphQL, including data fetching, schema definition, query execution, and error handling. Explore how to create flexible and efficient APIs using GraphQL, interact with multiple data sources, and optimize data fetching in web applications.",
                codetype: "GraphQL",
                readtime: 5,
                link: "graphql"
            },
            {
                title: "Introduction to WebSockets",
                desc: "Explore the fundamentals of WebSockets, including connections, messages, events, and protocols. This class covers essential concepts for real-time communication in web applications using WebSockets, including socket creation, message broadcasting, event handling, and protocol negotiation. Learn how to implement bidirectional and low-latency communication between clients and servers using WebSockets.",
                codetype: "WebSockets",
                readtime: 5,
                link: "websockets"
            },
            {
                title: "Introduction to WebRTC",
                desc: "Learn the basics of WebRTC, including peer connections, data channels, media streams, and signaling. This class covers essential concepts for real-time communication in web applications using WebRTC, including peer-to-peer connections, media transmission, data exchange, and signaling protocols. Explore how to create audio, video, and data communication channels between browsers using WebRTC technology.",
                codetype: "WebRTC",
                readtime: 5,
                link: "webrtc"
            },
            {
                title: "Introduction to PHP",
                desc: "Explore the fundamentals of PHP, including variables, data types, operators, functions, and control structures. This class covers essential concepts for server-side scripting with PHP, including form processing, file handling, database connectivity, and session management. Learn how to create dynamic web pages, interact with databases, and build web applications using PHP.",
                codetype: "PHP",
                readtime: 5,
                link: "php"
            },
            {
                title: "Introduction to Web Security",
                desc: "Explore the fundamentals of web security, including HTTPS, encryption, authentication, and authorization. This class covers essential concepts for securing web applications and data, including secure connections, data protection, user authentication, and access control. Learn how to implement security best practices, prevent common vulnerabilities, and protect web applications from cyber threats.",
                codetype: "Web Security",
                readtime: 5,
                link: "web-security"
            },
            {
                title: "Introduction to git",
                desc: "Learn the basics of git, including repositories, branches, commits, and merges. This class covers essential concepts for version control with git, including repository management, branch creation, commit history, and conflict resolution. Explore how to collaborate on projects, track changes, and manage code versions using git and GitHub.",
                codetype: "git",
                readtime: 5,
                link: "git"
            },
            {
                title: "Introduction to GitHub",
                desc: "Explore the fundamentals of GitHub, including repositories, issues, pull requests, and workflows. This class covers essential concepts for collaborating on projects with GitHub, including repository creation, issue tracking, pull request submission, and code review. Learn how to contribute to open-source projects, manage project workflows, and share code with the GitHub community.",
                codetype: "GitHub",
                readtime: 5,
                link: "github"
            },
            {
                title: "Cloud Services",
                desc: "Learn about cloud services, including infrastructure, platforms, software, and deployment models. This class covers essential concepts for leveraging cloud computing services, including storage, computing, networking, and security. Explore how to deploy applications, manage resources, and scale infrastructure using cloud platforms such as AWS, Azure, and Google Cloud.",
                codetype: "Cloud Services",
                readtime: 5,
                link: "cloud-services"
            },
            {
                title: "Testing",
                desc: "Learn about testing, including types, strategies, tools, and best practices. This class covers essential concepts for ensuring software quality through testing, including unit testing, integration testing, end-to-end testing, and performance testing. Explore how to write test cases, automate testing processes, and improve software reliability using testing frameworks and tools.",
                codetype: "Testing",
                readtime: 5,
                link: "testing"
            },
            {
                title: "Loading Speed",
                desc: "Learn the basics of loading speed, including performance metrics, optimization techniques, and tools. This class covers essential concepts for improving website loading speed, including image optimization, code minification, caching strategies, and lazy loading. Explore how to measure performance, analyze bottlenecks, and optimize loading times for web pages.",
                codetype: "Loading Speed",
                readtime: 5,
                link: "loading-speed"
            },
            {
                title: "Minification and Compression",
                desc: "Explore minification and compression techniques for optimizing web assets, including HTML, CSS, JavaScript, and images. This class covers essential concepts for reducing file sizes, improving loading times, and enhancing website performance. Learn how to minify code, compress images, enable GZIP compression, and implement other optimization strategies to boost your website's speed and efficiency.",
                codetype: "Optimization",
                readtime: 5,
                link: "minification-and-compression"
            },
            {
                title: "HTTP",
                desc: "Learn about HTTP, including methods, status codes, headers, and cookies. This class covers essential concepts for understanding the Hypertext Transfer Protocol, including request-response cycles, message formats, caching mechanisms, and security considerations. Explore how to work with HTTP methods, handle status codes, manage headers, and use cookies to enhance web communication and data exchange.",
                codetype: "HTTP",
                readtime: 5,
                link: "http"
            },
            {
                title: "HTTPS",
                desc: "Learn about HTTPS, including encryption, certificates, secure connections, and security protocols. This class covers essential concepts for securing web traffic with HTTPS, including data protection, authentication, and privacy. Explore how to enable HTTPS on your website, obtain SSL/TLS certificates, configure secure connections, and implement best practices for web security.",
                codetype: "Security",
                readtime: 5,
                link: "https"
            },
            {
                title: "Cross Site Scripting (XSS)",
                desc: "Learn about Cross-Site Scripting (XSS) attacks, including types, vulnerabilities, prevention, and mitigation techniques. This class covers essential concepts for protecting web applications from XSS vulnerabilities, including input validation, output encoding, and secure coding practices. Explore how to prevent XSS attacks, sanitize user input, and implement security measures to safeguard your web applications.",
                codetype: "XSS",
                readtime: 5,
                link: "xss"
            },
            {
                title: "Cross-Origin Resource Sharing (CORS)",
                desc: "Learn about Cross-Origin Resource Sharing (CORS), including origins, requests, preflight checks, and headers. This class covers essential concepts for handling cross-origin requests in web applications, including same-origin policy, preflight requests, and CORS headers. Explore how to configure CORS settings, handle cross-origin requests, and implement secure communication between different domains.",
                codetype: "CORS",
                readtime: 5,
                link: "cors"
            },
            {
                title: "Content Security Policy (CSP)",
                desc: "Learn about Content Security Policy (CSP), including directives, policies, reporting, and enforcement. This class covers essential concepts for enhancing web security with CSP, including script execution control, resource loading restrictions, and policy enforcement. Explore how to create and configure CSP headers, define security policies, and protect web applications from various types of attacks.",
                codetype: "CSP",
                readtime: 5,
                link: "csp"
            },
            {
                title: "Cross-Site Request Forgery (CSRF)",
                desc: "Learn about Cross-Site Request Forgery (CSRF) attacks, including vulnerabilities, prevention, and mitigation techniques. This class covers essential concepts for protecting web applications from CSRF vulnerabilities, including anti-CSRF tokens, same-site cookies, and secure coding practices. Explore how to prevent CSRF attacks, validate requests, and implement security measures to safeguard your web applications.",
                codetype: "CSRF",
                readtime: 5,
                link: "csrf"
            },
            {
                title: "Authentication and Authorization",
                desc: "Learn about authentication and authorization, including user identification, access control, authentication methods, and security protocols. This class covers essential concepts for securing web applications with user authentication, role-based access control, and token-based authorization. Explore how to implement login systems, manage user sessions, and protect resources using authentication and authorization mechanisms.",
                codetype: "Authentication",
                readtime: 5,
                link: "authentication-and-authorization"
            },
            {
                title: "JSON Web Tokens (JWT)",
                desc: "Learn about JSON Web Tokens (JWT), including structure, encoding, signing, and verification. This class covers essential concepts for implementing token-based authentication in web applications using JWT, including token generation, validation, and revocation. Explore how to create secure and stateless authentication mechanisms using JWT to protect web resources and enhance user privacy.",
                codetype: "JWT",
                readtime: 5,
                link: "jwt"
            },
            {
                title: "AJAX",
                desc: "Learn about AJAX, including requests, responses, callbacks, and error handling. This class covers essential concepts for asynchronous communication in web applications using AJAX, including data fetching, content loading, and form submission. Explore how to make AJAX requests, handle responses, process data, and update web pages dynamically without reloading the entire page.",
                codetype: "AJAX",
                readtime: 5,
                link: "ajax"
            },
            {
                title: "RESTful APIs",
                desc: "Learn about RESTful APIs, including resources, methods, status codes, and best practices. This class covers essential concepts for designing and implementing RESTful APIs, including resource identification, request handling, response formatting, and error management. Explore how to create RESTful endpoints, handle CRUD operations, and interact with RESTful services using HTTP methods.",
                codetype: "RESTful APIs",
                readtime: 5,
                link: "restful-apis"
            },
            {
                title: "Continuous Integration/Continuous Deployment (CI/CD)",
                desc: "Learn about Continuous Integration/Continuous Deployment (CI/CD), including automation, testing, deployment, and monitoring. This class covers essential concepts for streamlining software development workflows, including code integration, testing automation, deployment pipelines, and monitoring strategies. Explore how to implement CI/CD practices, improve development efficiency, and deliver high-quality software products.",
                codetype: "CI/CD",
                readtime: 5,
                link: "ci-cd"
            },
            {
                title: "Docker",
                desc: "Learn about Docker, including containers, images, volumes, and networks. This class covers essential concepts for containerization with Docker, including container management, image creation, volume mounting, and network configuration. Explore how to build, run, and deploy applications in Docker containers, optimize resource usage, and streamline development workflows.",
                codetype: "Docker",
                readtime: 5,
                link: "docker"
            },
            {
                title: "Web Storage",
                desc: "Learn about Web Storage, including localStorage, sessionStorage, data persistence, and storage limits. This class covers essential concepts for storing data in the browser using Web Storage APIs, including key-value pairs, data persistence, and storage management. Explore how to use localStorage and sessionStorage to store user data, manage storage limits, and enhance web application functionality.",
                codetype: "Web Storage",
                readtime: 5,
                link: "web-storage"
            },
            {
                title: "Cookies",
                desc: "Learn about cookies, including creation, management, expiration, and security considerations. This class covers essential concepts for working with cookies in web applications, including cookie creation, data storage, expiration settings, and security practices. Explore how to set, read, update, and delete cookies, handle cookie-based authentication, and implement cookie security measures.",
                codetype: "Cookies",
                readtime: 5,
                link: "cookies"
            },
            {
                title: "Web Workers",
                desc: "Learn about Web Workers, including creation, communication, termination, and performance benefits. This class covers essential concepts for running background scripts in web applications using Web Workers, including thread management, message passing, and task execution. Explore how to create, communicate with, and terminate Web Workers to offload CPU-intensive tasks and improve application performance.",
                codetype: "Web Workers",
                readtime: 5,
                link: "web-workers"
            },
            {
                title: "Service Workers",
                desc: "Learn about Service Workers, including registration, lifecycle, caching, and offline support. This class covers essential concepts for building progressive web apps with Service Workers, including background processing, network interception, and offline functionality. Explore how to register, install, activate, and manage Service Workers to enhance web application performance and user experience.",
                codetype: "Service Workers",
                readtime: 5,
                link: "service-workers"
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
            {
                title: "Practical 1: Employee Registration Form",
                desc: "Create an employee registration form using HTML, CSS, and JavaScript. This hands-on lab exercise will help you practice form design, validation, and submission, enhancing your skills in web development.",
                codetype: "HTML, CSS",
                readtime: 2,
                date: "Thu August 8, 2024",
                link: "employee-registration-form"
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