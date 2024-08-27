
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "program/",
                title: "Key C++ Concepts Covered in Class",
                desc: "Explore essential concepts in C++ programming covered in class, including object-oriented programming, templates, smart pointers, operator overloading, virtual functions, advanced data structures, inheritance, encapsulation and much more. Gain a deeper understanding of these concepts through hands-on examples and learn how to apply them to solve real-world problems in C++ programming.",
                codetype: "CSU1287 | Concepts"
            },
            {
                link: "lab/",
                title: "C++ Programming Covered in Lab",
                desc: "Get practical experience with C++ programming assignments covered in the lab section. Work on a variety of programming assignments covering essential and advanced C++ concepts, such as object-oriented programming, memory management, exception handling, templates, and data structures. Gain a deeper understanding of these concepts through hands-on examples and learn how to apply them to solve real-world problems in C++ programming.",
                codetype: "CSU1287P | Lab"
            },
            {
                link: "misc/",
                title: "Miscellaneous Section",
                desc: "Learn new programs and then put Your Coding Skills to the Test with Our Collection of Miscellaneous Programs! Work on a variety of programming assignments covering essential and advanced C++ concepts, such as object-oriented programming, memory management, exception handling, templates, and data structures. Brush Up Your Knowledge and Perfect Your Craft with Our Challenging Selection. Get Ready to Prove Your Mastery - Let's Get Testing! Gain a deeper understanding of these concepts through hands-on examples and learn how to apply them to solve real-world problems in C++ programming.",
                codetype: "CSU1287P | Miscellaneous",
            },
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }

    function get_program(def_date, def_author) {
        const arr = [
            {
                title: "Object Oriented vs Procedure Oriented Programming",
                desc: "Discover the Differences Between Object-Oriented and Procedure-Oriented Programming: Which One is Right for Your Project?",
                link: "oops-vs-procedure"
            },
            {
                title: "Objects and Classes in C++",
                desc: "Learn about objects and classes in C++ with this program. Object-oriented programming is a powerful paradigm that allows programmers to create modular, reusable code by encapsulating data and functions into objects. This program is a useful exercise for beginner programmers to learn how to define and use classes and objects in C++, and understand the principles of encapsulation, inheritance, and polymorphism.",
                link: "objects-and-classes"
            },
            {
                title: "Class and its methods",
                desc: "Learn how to define classes in object-oriented programming and explore the methods that can be defined within them.",
                codetype: "Class",
                link: "class-cpp"
            },
            {
                title: "Class: Constructors",
                desc: "Explore how constructors are used in object-oriented programming to initialize objects when they are created.",
                codetype: "Methods of Class",
                link: "class-constructors"
            },
            {
                title: "Class: Destructors",
                desc: "Discover the role of destructors in object-oriented programming and how they can be used to clean up resources when an object is destroyed.",
                codetype: "Methods of Class",
                link: "class-destructors"
            },
            {
                title: "Class: Member Functions",
                desc: "Learn how to define member functions within classes in object-oriented programming and how they can be used to manipulate object state.",
                codetype: "Methods of Class",
                link: "class-member-functions"
            },
            {
                title: "Class: Access Specifiers",
                desc: "Explore the different access specifiers available in object-oriented programming, such as public, private, and protected, and learn how they are used to control access to class members.",
                codetype: "Methods of Class",
                link: "class-access-specifiers"
            },
            {
                title: "Class: Operator Overloading",
                desc: "Discover how operator overloading works in object-oriented programming and how it can be used to define custom behaviors for operators on class objects.",
                codetype: "Methods of Class",
                link: "class-operator-overloading"
            },
            {
                title: "Class: Friend Functions",
                desc: "Learn how friend functions work in object-oriented programming and how they can be used to grant external functions access to private members of a class.",
                codetype: "Methods of Class",
                link: "class-friend-functions"
            },
            {
                title: "Scope Resolution Operator",
                desc: "Learn about the scope resolution operator in C++ with this program. The scope resolution operator (::) is used to access a global variable or function, or a member variable or function of a class, outside its scope. This program is a useful exercise for beginner programmers to learn how to access and modify variables and functions in different scopes using the scope resolution operator in C++.",
                link: "scope-resolution-operator"
            },
            {
                title: "Functions in C++",
                desc: "Learn about functions in C++ with this program. Functions are a fundamental building block of C++ programs and are used to group related code, improve code organization, and make code more modular and easier to read. This program is a useful exercise for beginner programmers to learn how to define, call, and pass arguments to functions in C++.",
                link: "functions-cpp"
            },
            {
                title: "Virtual Functions in C++",
                desc: "Learn about virtual functions in C++ with this program. Virtual functions are a fundamental concept of object-oriented programming that allows a function to be redefined in a derived class while retaining its base class implementation. This program is a useful exercise for beginner programmers to learn how to use virtual functions to achieve polymorphism and create more flexible, modular code in their C++ programs.",
                link: "virtual-functions"
            },
            {
                title: "Detailed Virtual Functions in C++",
                desc: "Explore the in-depth working of virtual functions in C++ with this program. Virtual functions form the backbone of runtime polymorphism, allowing derived classes to redefine a base class's function without changing its original functionality. This detailed program helps programmers understand the intricacies of virtual functions, improving code flexibility and modularity in C++ object-oriented programming.",
                link: "virtual-functions-cpp"
            },
            {
                title: "Friend Functions in C++",
                desc: "Dive into the topic of friend functions in C++ with this comprehensive program. A friend function in C++ is a function that has the ability to access the private and protected members of a class, enhancing the flexibility and sharing capabilities of your objects. This program provides a detailed understanding of when and how to use friend functions in C++ for better encapsulation and data security.",
                link: "friend-functions-cpp"
            },
            {
                title: "Function Overloading in C++",
                desc: "Learn about function overloading in C++ with this program. Function overloading allows multiple functions to have the same name, but with different parameters. This program is a useful exercise for beginner programmers to learn how to define and use function overloading to make their code more concise and efficient.",
                link: "function-overloading"
            },
            {
                title: "Operator Overloading in C++",
                desc: "Learn about operator overloading in C++ with this program. Operator overloading allows operators, such as +, -, *, /, and %, to be redefined for user-defined data types, such as classes and structures. This program is a useful exercise for beginner programmers to learn how to define and use operator overloading to make their code more concise and efficient.",
                link: "operator-overloading"
            },
            {
                title: "Arrays in C++",
                desc: "Learn about arrays in C++ with this program. An array is a collection of elements of the same data type, stored in contiguous memory locations. This program is a useful exercise for beginner programmers to learn how to declare, initialize, and manipulate arrays in C++.",
                codetype: "Advanced Arrays",
                link: "array-cpp"
            },
            {
                title: "Strings in C++",
                desc: "Learn about strings in C++ with this program. A string is a collection of characters, stored in a sequential memory location. This program is a useful exercise for beginner programmers to learn how to declare, initialize, and manipulate strings in C++.",
                link: "strings-cpp"
            },
            {
                title: "Working with Strings in C++",
                desc: "Learn how to work with strings in C++ with this program. Strings are an important data type in C++ programming and this program will show you how to create, initialize, and manipulate strings using various string manipulation functions. This program is a useful exercise for beginner programmers to learn how to work with strings in C++ and gain practical experience with string manipulation functions.",
                link: "working-with-strings"
            },
            {
                title: "Encapsulation in C++",
                desc: "Learn about encapsulation in C++ with this program. Encapsulation is a fundamental concept of object-oriented programming that combines data and the functions that manipulate that data into a single unit, called a class. This program is a useful exercise for beginner programmers to learn how to use encapsulation to improve code organization, data security, and code reuse in their C++ programs.",
                link: "encapsulation-cpp"
            },
            {
                title: "Inheritance in C++",
                desc: "Learn about inheritance in C++ with this program. Inheritance is a fundamental concept of object-oriented programming that allows one class to inherit properties and methods from another class. This program is a useful exercise for beginner programmers to learn how to use inheritance to improve code organization, code reuse, and create more efficient, modular code in their C++ programs.",
                link: "inheritance-cpp"
            },

            {
                title: "Aggregation in C++",
                desc: "Learn about aggregation in C++ with this program. Aggregation is a form of object composition that allows one object to contain and use another object as a member. This program is a useful exercise for beginner programmers to learn how to use aggregation to create more modular, reusable code in their C++ programs.",
                link: "aggregation-cpp"
            },
            {
                title: "Pointers in C++",
                desc: "Learn about pointers in C++ with this program. A pointer is a variable that stores the memory address of another variable. Pointers are an important concept in C++ programming and are used extensively for memory management and dynamic allocation. This program is a useful exercise for beginner programmers to learn how to declare, initialize, and use pointers in their C++ programs.",
                link: "pointers-cpp"
            },
            {
                title: "Streams and Files in C++",
                desc: "Learn about streams and files in C++ with this program. Streams and files are an important part of C++ programming that allow data to be read from or written to external sources such as files or other devices. This program is a useful exercise for beginner programmers to learn how to use streams and files in C++ to manipulate data and create more versatile, dynamic programs.",
                link: "streams-and-files"
            },
            {
                title: "Binding in C++",
                desc: "Discover the process of binding in C++ through this program. You'll learn about static and dynamic binding, which refer to the compile-time and runtime association of names with memory addresses, respectively. This is an essential concept for effective and efficient C++ programming.",
                link: "binding-cpp"
            },
            {
                title: "C++ Concepts Revision",
                desc: "Revisit and reinforce your knowledge of C++ with this comprehensive revision program. It provides a quick refresher on key C++ topics, from basic syntax, data structures, and control flow to advanced topics like object-oriented programming, pointers, and memory management. This revision guide is perfect for programmers who want to solidify their understanding or prepare for examinations or interviews.",
                link: "revision-cpp"
            },
            {
                title: "1 Line C++ Concepts",
                desc: "<strong>In hurry?</strong> We have 1 line concepts for you! Revisit and reinforce your knowledge of C++ with these 1 liners. It provides a quick refresher on key C++ topics. This revision is perfect for programmers who want to solidify their understanding but in just 2 minutes for examinations or interviews! <p><strong>Got Time?</strong> We strongly recommend that you <a href=\"revision-cpp\" class=\"text-primary\">visit this</a> instead.",
                link: "one-line-concepts",
                readtime: 7
            },
            {
                title: "C++ FAQ's",
                desc: "Navigate through the common questions and answers related to C++ programming with this resource. It covers a broad range of topics, from basic syntax and data structures to more advanced concepts such as object-oriented programming, pointers, and memory management. This FAQ is an excellent starting point for both new programmers trying to understand C++ and seasoned developers looking to refresh their knowledge.",
                link: "faq-cpp"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Number Conversion Program",
                desc: "Convert a decimal number to binary, decimal, octal, and hexadecimal formats with this C++ program using bitwise operators and mathematical operations. Practice your understanding of number systems and data representation with this practical programming exercise.",
                link: "num-conversion"
            },
            {
                title: "Password Retrieval Program",
                desc: "Retrieve lost passwords with this C++ program that uses object-oriented programming algorithms to securely recover passwords. This program is a practical application of OOPS concepts and is useful for anyone interested in cybersecurity and data protection.",
                link: "retrieve-password"
            },
            {
                title: "Sentence Parsing Program",
                desc: "Parse a sentence entered by the user and print each of its words on a new line with this C++ program. This program is a useful exercise for beginner programmers to practice string manipulation and input/output operations in C++.",
                link: "word-to-line"
            },
            {
                title: "Array Equality Program",
                desc: "Check if two arrays are equal regardless of their position with this C++ program. This program compares two arrays entered by the user and determines if they contain the same elements, regardless of their position in the array. This program is a useful exercise for beginner programmers to practice array manipulation and logical operations in C++.",
                link: "equal-array"
            },
            {
                title: "Word Validation Program",
                desc: "Validate a word entered by the user to ensure it meets specific criteria with this C++ program. This program checks if a word has at least one vowel, one digit, and one uppercase letter, and its length does not exceed 8 characters. This program is a useful exercise for beginner programmers to practice string manipulation and logical operations in C++.",
                link: "validate-word"
            },
            {
                title: "Counter Class Program",
                desc: "Define a Counter class with overloaded increment and decrement operators to modify and display its count value with this C++ program. This program is a practical application of operator overloading concepts and is useful for anyone interested in learning how to define and use classes in C++.",
                link: "operator-overloading"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_misc(def_date, def_author) {

        let download_link;
        if (navigator.platform.startsWith('Win')) {
            // Windows
            download_link = "https://cdn.dmj.one/edu/su/course/csu1287/misc/project.exe"
        } else if (navigator.platform.startsWith('Linux')) {
            // Linux
            download_link = "https://cdn.dmj.one/edu/su/course/csu1287/misc/project";
        } else {
            // Other OS or unable to determine
            download_link = "#";
        }


        const arr = [
            {
                title: "Download C++ Project File's Executable",
                desc: "The project is based on the inventory which takes part names, and issues them to employee when required.<br><br><a href=\"https://cdn.dmj.one/edu/su/course/csu1287/misc/project.exe\" class=\"text-primary\"><strong>Click here </strong></a> to download <mark>For Windows</mark><br><a href=\"https://cdn.dmj.one/edu/su/course/csu1287/misc/project\" class=\"text-primary\"><strong>Click here</strong> </a> to download <mark>For Linux</mark>",
                link: download_link,
                codetype: "Project Executable",
                readtime: "off"
            }, {
                title: "100 Programs in C++",
                desc: "Section contains 100 Programs written in CPP",
                link: "100programs",
                codetype: "100 Programs in C++"
            }            
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }

    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        program: get_program,
        lab: get_lab,
        misc: get_misc,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}

/*
You can use different approaches and algorithms to solve optimization problems, depending on the specific problem you are trying to solve. Here are a few common methods:

Gradient descent: This is a popular method for optimizing objective functions that are differentiable. It works by iteratively adjusting the parameters of the model in the direction of the negative gradient of the objective function.

Conjugate gradient method: This is a type of iterative optimization algorithm that can be used to solve symmetric, positive definite linear systems. It works by using information from previous iterations to improve convergence rates.

Simulated annealing: This is a probabilistic method for solving optimization problems. It works by randomly perturbing the parameters of the model and accepting the new solution if it results in an improvement to the objective function.

Particle swarm optimization: This is a swarm intelligence-based optimization algorithm that works by having a population of candidate solutions that move and update their positions based on their own fitness and the fitness of other solutions.

Genetic algorithms: This is a population-based optimization algorithm that works by iteratively evolving a population of candidate solutions. It uses genetic operators such as mutation and crossover to generate new solutions and selection to determine which solutions are retained for the next iteration.

Each method has its own advantages and disadvantages and works best for specific types of optimization problems, so you may need to experiment with different methods to find the one that works best for your particular problem.
*/