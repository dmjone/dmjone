
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "class/",
                title: "Theory: Explore the Fascinating World of Digital Electronics: A Comprehensive Guide",
                desc: "Unlock the full potential of digital electronics with our in-depth guide to all the concepts. Take your tech skills to the next level and discover a world of endless possibilities. Click now to begin your digital journey.",
                codetype: "CSU1289 | Concepts"
            },
            {
                link: "lab/",
                title: "Practical: Elevate Your Digital Electronics Skills: A Comprehensive Guide for Lab Enthusiasts",
                desc: "Unleash your potential in the digital electronics lab with our comprehensive guide covering all the essential concepts. Discover the magic of electronics and take your tech skills to the next level. Click now to begin your digital journey.",
                codetype: "CSU1289P | Lab"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1289`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "The Digital Revolution: A Thrilling Introduction to Digital Electronics",
                desc: "Join the revolution and discover the magic of digital electronics with our exciting introduction to the world of digital circuits and systems. From binary code to microprocessors, our guide covers all the essentials. Click now to embark on an electrifying journey into the digital realm!",
                codetype: "Introduction",
                readtime: r(15)
            },
            {
                title: "Cracking the Code: Demystifying the Fascinating World of Number Systems",
                desc: "Uncover the secrets of the number system and explore the amazing world of numerical codes with our comprehensive guide. From binary to hexadecimal, our guide covers it all. Click now to embark on a mind-bending journey through the world of numbers!",
                codetype: "Number Systems",
                readtime: r(20),
                link: "number-system"
            },
            {
                title: "Adders Unleashed: Unraveling the Magic of Addition in Digital Electronics",
                desc: "Dive into the spellbinding world of digital electronics with our comprehensive guide on Adders. From the simplicity of Half Adders to the sophistication of Full Adders, our guide illuminates every nook and cranny of this fascinating subject. Click now to join this extraordinary adventure in the world of bits and gates!",
                codetype: "Adders",
                readtime: r(10),
                link: "adder"
            },
            {
                title: "Subtractors Decoded: Navigating the Intricacies of Subtraction in Digital Electronics",
                desc: "Embark on a captivating journey through the realm of digital electronics with our comprehensive guide on Subtractors. From Half Subtractors to Full Subtractors, we delve deep into this intriguing topic. Click now to explore this exciting universe of digital computation and logic gates!",
                codetype: "Subtractors",
                readtime: r(10),
                link: "subtractor"
            },
            {
                title: "Binary Arithmetic Unveiled: A Deep Dive into the Mathematical Logic of the Digital World",
                desc: "Step into the astonishing world of digital computation with our all-encompassing guide on Binary Arithmetic. From addition and subtraction to multiplication and division, we explore it all in the binary realm. Click now to unlock the mysteries of the mathematical operations in the binary number system!",
                codetype: "Binary Arithmetic",
                readtime: r(15),
                link: "binary-arithmetic"
            },
            {
                title: "Logic Gates Exposed: A Journey into the Heart of Digital Electronics",
                desc: "Venture into the fascinating world of digital electronics with our comprehensive guide on Logic Gates. From the fundamental AND, OR, NOT gates to the complex XOR, XNOR, NAND, NOR gates, we dissect every aspect of these digital building blocks. Click now to uncover the magic behind the circuitry!",
                codetype: "Logic Gates",
                readtime: r(17),
                link: "logic-gates"
            }
            // {
            //     title: "Section B: Electricity and Magnetism",
            //     desc: "Get ready to explore Electricity & Magnetism! Learn about electric field & potential, dielectric polarization, displacement current, Maxwell's equations, velocity of EM waves, electromagnetic spectrum, magnetic materials, superconductivity, ultrasonic waves, Type I & Type II superconductors and more. Get ready to electrify your knowledge!"
            // }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1289 | ${_data.codetype}` : `CSU1289 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Lab 1: Verify truth table of all logic gates in Proteus",
                desc: "This lab will provide a verification of truth table of logic gates using Proteus software.",
                date: "Fri March 3, 2023",
                link: "verification-of-logic-gates-in-proteus"
            },
            {
                title: "Lab 2: Verify truth table of half adder and full adder in Proteus",
                desc: "This lab will provide a verification of truth table of half adder and full adder using Proteus software.",
                date: "Fri March 3, 2023",
                link: "verification-of-half-and-full-adder-in-proteus"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1289P | ${_data.codetype}` : `CSU1289P | Lab`;
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
        class: get_class,
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