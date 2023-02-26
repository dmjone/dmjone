
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "praxis/",
                title: "Theories and Activities",
                desc: "Get ready to unlock the power of creative problem-solving with Design Thinking! Discover innovative theories and approaches that can help you design effective solutions to complex problems. With Design Thinking, you can turn your ideas into reality and achieve your goals. Let's explore the possibilities!",
                codetype: "Praxis"
            },
            /* {
                link: "misc/",
                title: "Assignments",
                desc: "Put Your Skills to the Test with Our Challenging Classroom Assignments! From Basic Concepts to Advanced Problems, We've Got You Covered. Get Ready to Hone Your Abilities, Improve Your Understanding, and Prove Your Worth. Let's Get to Work!",
                codetype: "Assignment"
            } */
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `Design Thinking | ${_data.codetype}` : `Design Thinking`;
            readtime = _data.readtime || r(14); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_praxis(def_date, def_author) {
        const arr = [
            {
                title: "What is Design Thinking",
                desc: "Discover the innovative problem-solving approach of Design Thinking. Explore its core principles, stages, and methods to create effective solutions.",
                link: "introduction"
            },
            // {
            //     title: "Section B: Electricity and Magnetism",
            //     desc: "Get ready to explore Electricity & Magnetism! Learn about electric field & potential, dielectric polarization, displacement current, Maxwell's equations, velocity of EM waves, electromagnetic spectrum, magnetic materials, superconductivity, ultrasonic waves, Type I & Type II superconductors and more. Get ready to electrify your knowledge!"
            // }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `s${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `Physics | ${_data.codetype}` : `Physics | Section`;
            readtime = _data.readtime || r(14);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_seminar(def_date, def_author) {
        const arr = [
            {
                title: "Seminar 1: Application of Fundamental Mechanics on a Rocket",
                desc: "Blast off into the world of Work, Energy & Fluid Motions with the Saturn 5 Rocket! Learn the science behind the rocket's power, work & energy theorem, Pascal's law, fluid mechanics, fluid properties, Bernoulli's equation and how the Saturn 5 overcame space challenges. Get ready for an exciting journey!"
            },
            {
                title: "Seminar 2: Electromagnetic Waves",
                desc: "Expand your knowledge on Electromagnetic Waves! Learn about formation of Electromagnetic Waves, its real-world applications, characterstics, polarization, frequency and wavelength. Get ready to broaden your horizons.This seminar was presented on Electromagnetic Waves."
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `s${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `Physics | ${_data.codetype}` : `Physics | Seminar`;
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
    var dated = "December 25, 2022";
    var title, desc, codetype, readtime, author = 1, link;
    const functions = {
        praxis: get_praxis,
        // seminar: get_seminar,
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