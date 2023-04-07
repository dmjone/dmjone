
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "program/",
                title: "Key C++ Concepts Covered in Class",
                desc: "Explore essential concepts in C++ programming covered in class, including object-oriented programming, templates, smart pointers, operator overloading, virtual functions, advanced data structures, inheritance, encapsulation and much more. Gain a deeper understanding of these concepts through hands-on examples and learn how to apply them to solve real-world problems in C++ programming.",
                codetype: "CSU1287 | Concepts and Programs"
            },
            {
                link: "lab/",
                title: "C++ Programming Covered in Lab",
                desc: "Get practical experience with C++ programming assignments covered in the lab section. Work on a variety of programming assignments covering essential and advanced C++ concepts, such as object-oriented programming, memory management, exception handling, templates, and data structures. Gain a deeper understanding of these concepts through hands-on examples and learn how to apply them to solve real-world problems in C++ programming.",
                codetype: "CSU1287P | Lab"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1287`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }

    function get_program(def_date, def_author) {
        const arr = [
            {
                title: "Object Oriented vs Procedure Oriented Programming",
                desc: "Discover the Differences Between Object-Oriented and Procedure-Oriented Programming: Which One is Right for Your Project?"
            },
            {
                title: "Class and its methods",
                desc: "Learn how to define classes in object-oriented programming and explore the methods that can be defined within them.",
                codetype: "Class"
            },
            {
                title: "Class: Constructors",
                desc: "Explore how constructors are used in object-oriented programming to initialize objects when they are created.",
                codetype: "Methods of Class"
            },
            {
                title: "Class: Destructors",
                desc: "Discover the role of destructors in object-oriented programming and how they can be used to clean up resources when an object is destroyed.",
                codetype: "Methods of Class"
            },
            {
                title: "Class: Member Functions",
                desc: "Learn how to define member functions within classes in object-oriented programming and how they can be used to manipulate object state.",
                codetype: "Methods of Class"
            },
            {
                title: "Class: Access Specifiers",
                desc: "Explore the different access specifiers available in object-oriented programming, such as public, private, and protected, and learn how they are used to control access to class members.",
                codetype: "Methods of Class"
            },
            {
                title: "Class: Operator Overloading",
                desc: "Discover how operator overloading works in object-oriented programming and how it can be used to define custom behaviors for operators on class objects.",
                codetype: "Methods of Class"
            },
            {
                title: "Class: Friend Functions",
                desc: "Learn how friend functions work in object-oriented programming and how they can be used to grant external functions access to private members of a class.",
                codetype: "Methods of Class"
            },
            {
                title: "Scope Resolution Operator",
                desc: "Learn about the scope resolution operator in C++ with this program. The scope resolution operator (::) is used to access a global variable or function, or a member variable or function of a class, outside its scope. This program is a useful exercise for beginner programmers to learn how to access and modify variables and functions in different scopes using the scope resolution operator in C++."
            },
            {
                title: "Arrays in C++",
                desc: "Learn about arrays in C++ with this program. An array is a collection of elements of the same data type, stored in contiguous memory locations. This program is a useful exercise for beginner programmers to learn how to declare, initialize, and manipulate arrays in C++.",
                codetype: "Advanced Arrays"
            },
            {
                title: "Strings in C++",
                desc: "Learn about strings in C++ with this program. A string is a collection of characters, stored in a sequential memory location. This program is a useful exercise for beginner programmers to learn how to declare, initialize, and manipulate strings in C++."
            },
            {
                title: "Working with Strings in C++",
                desc: "Learn how to work with strings in C++ with this program. Strings are an important data type in C++ programming and this program will show you how to create, initialize, and manipulate strings using various string manipulation functions. This program is a useful exercise for beginner programmers to learn how to work with strings in C++ and gain practical experience with string manipulation functions."
            },

            // {
            //     title: "Section B: Electricity and Magnetism",
            //     desc: "Get ready to explore Electricity & Magnetism! Learn about electric field & potential, dielectric polarization, displacement current, Maxwell's equations, velocity of EM waves, electromagnetic spectrum, magnetic materials, superconductivity, ultrasonic waves, Type I & Type II superconductors and more. Get ready to electrify your knowledge!"
            // }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `OOPS using C++ | ${_data.codetype}` : `OOPS Using C++ | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Number Conversion Program",
                desc: "Convert a decimal number to binary, decimal, octal, and hexadecimal formats with this C++ program using bitwise operators and mathematical operations. Practice your understanding of number systems and data representation with this practical programming exercise."
            },
            {
                title: "Password Retrieval Program",
                desc: "Retrieve lost passwords with this C++ program that uses object-oriented programming algorithms to securely recover passwords. This program is a practical application of OOPS concepts and is useful for anyone interested in cybersecurity and data protection."
            },
            {
                title: "Sentence Parsing Program",
                desc: "Parse a sentence entered by the user and print each of its words on a new line with this C++ program. This program is a useful exercise for beginner programmers to practice string manipulation and input/output operations in C++."
            },
            {
                title: "Array Equality Program",
                desc: "Check if two arrays are equal regardless of their position with this C++ program. This program compares two arrays entered by the user and determines if they contain the same elements, regardless of their position in the array. This program is a useful exercise for beginner programmers to practice array manipulation and logical operations in C++."
            },
            {
                title: "Word Validation Program",
                desc: "Validate a word entered by the user to ensure it meets specific criteria with this C++ program. This program checks if a word has at least one vowel, one digit, and one uppercase letter, and its length does not exceed 8 characters. This program is a useful exercise for beginner programmers to practice string manipulation and logical operations in C++."
            },
            {
                title: "Counter Class Program",
                desc: "Define a Counter class with overloaded increment and decrement operators to modify and display its count value with this C++ program. This program is a practical application of operator overloading concepts and is useful for anyone interested in learning how to define and use classes in C++."
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `lab${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1287P | ${_data.codetype}` : `CSU1287P | Lab`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_assignment(def_date, def_author) {
        const arr = [
            {
                title: "Assignment 1: Application of Fundamental Mechanics on Saturn V Rocket",
                desc: "This assignment is based on the fundamental mechanics of Saturn V Rocket"
            },
            {
                title: "Assignment 2: Types of Magnetic Materials and Application of Lasers",
                desc: "Dive into Magnetic Materials & Laser Applications! Learn about different types of magnetic materials, their properties, and the cutting-edge applications of laser technology. Get ready to be amazed by the power of magnetism and light!"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `a${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `Physics | ${_data.codetype}` : `Physics | Assignment`;
            readtime = _data.readtime || r(6);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }

    /**********  AUTOMATION CONTROL **********/
    // Get Random date near the entered date. 
    function gendate(date) {
        var inputDate = new Date(date);
        var offset = Math.floor(Math.random() * 20 - 10) * 24 * 60 * 60 * 1000;
        var newDate = new Date(inputDate.getTime() + offset);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var outputDate = weekdays[newDate.getUTCDay()] + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear();
        return outputDate;
    }
    function r(t) { return Math.floor(Math.random() * 10) + t };
    var title, desc, codetype, readtime, author = 1, link;
    const functions = {
        program: get_program,
        lab: get_lab,
        // assignment: get_assignment,
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