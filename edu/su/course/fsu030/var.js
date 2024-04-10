
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "section/",
                title: "Sections",
                desc: "Discover the Wonders of Physics with Our Comprehensive Collection of Topics! All Covered in Easy-to-Understand Sections, This Collection is the Ultimate Study Guide for Physics Enthusiasts. Get Ready to Immerse Yourself in the World of Science - Let's Get Studying!",
                codetype: "Section"
            },
            {
                link: "seminar/",
                title: "Seminars",
                desc: "Stay Ahead of the Game with Our In-Depth Collection of Classroom Seminars! Get a Firsthand Look at the Latest Developments and Techniques in Your Field. Brush Up on Your Knowledge and Take Your Skills to the Next Level - Let's Get Inspired!",
                codetype: "Seminar"
            },
            {
                link: "assignment/",
                title: "Assignments",
                desc: "Put Your Skills to the Test with Our Challenging Classroom Assignments! From Basic Concepts to Advanced Problems, We've Got You Covered. Get Ready to Hone Your Abilities, Improve Your Understanding, and Prove Your Worth. Let's Get to Work!",
                codetype: "Assignment"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `Physics | ${_data.codetype}` : `Physics`;
            readtime = _data.readtime || r(14); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_section(def_date, def_author) {
        const arr = [
            {
                title: "Section A: Work, Energy and Fluid motion",
                desc: "WIP: Understand Work, Energy & Fluid Motions in Physics! Learn about forces, energy diagrams, equilibriums, gravitational & elastic potential energies, fluid properties, Pascal's law, surface tension, capillarity, continuity equation, Bernoulli's equation. Get ready to apply your knowledge in the real world!"
            },
            {
                title: "Section B: Electricity and Magnetism",
                desc: "Get ready to explore Electricity & Magnetism! Learn about electric field & potential, dielectric polarization, displacement current, Maxwell's equations, velocity of EM waves, electromagnetic spectrum, magnetic materials, superconductivity, ultrasonic waves, Type I & Type II superconductors and more. Get ready to electrify your knowledge!"
            }
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
    function r(t) { return Math.floor(Math.random() * 10) + t }
    var dated = "December 25, 2022";
    var title, desc, codetype, readtime, author = 1, link;
    const functions = {
        section: get_section,
        seminar: get_seminar,
        assignment: get_assignment,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}

/* let course = window.urlpart4;
    let path = window.urlpart5;
    let file = window.location.pathname.split("/")[6];
    console.log(course, path);

    switch (window.urlpart1) {
        case "edu":
            switch (window.urlpart2) {
                case "su":
                    switch (window.urlpart3) {
                        case "course":
                            switch (window.urlpart4) {
                                case "fsu030":
                                    course_fsu030();
                                    break;
                                case "csu1128":
                                    course_csu1128();
                                    break;
                                case "csu1128p":
                                    course_csu1128p();
                                    break;
                                case "csu730":
                                    course_csu730();
                                    break;
                                case "csu953":
                                    course_csu953();
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                case "coursera":
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    if (path) {
        switch (path) {
            case "section":
                get_section();
                break;
            case "seminar":
                get_seminar();
                break;
            case "assignment":
                get_assignment();
                break;
            default:
                get_main();
                break;
        }
    }
    else {
        get_main();
    } 
    function course_fsu030() {


function get_main(cases, date, author) {
    for (let i = 1; i < cases; i++) {
        link = "", title = "", desc = "", date = `Last Updated: ${gendate(date)}`;
        switch (i) {
            case 1:
                link = "section";
                title = "Sections";
                desc = "All topics included in different sections for the subject of physics.";
                codetype = "Section";
                break;
            case 2:
                link = "seminar";
                title = "Seminars";
                desc = "Seminars conducted in the class";
                codetype = "Seminar";
                break;
            case 3:
                link = "assignment";
                title = "Assignments";
                desc = "Assignments which were given in the class";
                codetype = "Assignment";
                break;
            default:
                break;
        }

        if (title) {
            codetype = codetype ? `Physics | ${codetype}` : "";
            author = "";
            link = link ? link += "/" : `${title.toLowerCase()}s/`;
        }
        body_blockcards(link, date, title, desc, codetype, readtime, author);
    }
} 


 
    function get_section(cases, date, author) {
        for (let i = 1; i < cases; i++) {
            link = "", title = "", desc = "", date = gendate(date), codetype = "Section", readtime = r(14);
            switch (i) {
                case 0:
                    title = "Section A: Work, Energy and Fluid motion";
                    desc = "WIP: This topic discusses about Work, Energy and Fluid Motions namely Work and energy theorem, Conservative and non-conservative forces, Potential energy, Energy diagram, Stable and unstable equilibrium, Gravitational potential energy,  Elastic potential energy, Types of fluids, Significance of fluid mechanics, Fluid properties, Pascal's law, Surface tension and capillarity, Continuity equation, Bernoulli's equation.";
                    break;
                case 2:
                    title = "Section B: Electricity and Magnetism";
                    desc = "This topic discusses about electricity and magnetism namely EM waves and dielectrics: Relationship between electric field & potential, Dielectric polarization, displacement current, Types of polarization, Maxwell's equations, Equation of EM waves in free space, Velocity of EM waves, Electromagnetic Spectrum (Basic idea) Magnetic materials & Superconductivity: Basic idea of Dia, Para, Ferro & Ferri, Ferrites, Magnetic anisotropy, Magnetoseminariction and its applications in production of Ultrasonic waves, Superconductivity, Superconductors as ideal diamagnetic materials, Signatures of Superconducting state, Type I & Type II superconductors.";
                    break;
                default:
                    break;
            }
            if (title) {
                link = link ? link : `s${i}`;
                codetype = codetype ? `Physics | ${codetype}` : "";
                author = author ? author : "";
            }
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
 
 
 
    function get_seminar(cases, date, author) {
        for (let i = 1; i < cases; i++) {
            link = "", title = "", desc = "", date = gendate(date), codetype = "Seminar", readtime = r(5);
            switch (i) {
                case 1:
                    title = "Seminar 1: Application of Fundamental Mechanics on a Rocket";
                    desc = "This topic discusses about Work, Energy and Fluid Motions on a Saturn 5 Rocket.";
                    break;
                case 2:
                    title = "Seminar 2: Electromagnetic Waves";
                    desc = "This seminar was presented on Electromagnetic Waves";
                    break;
                default:
                    break;
            }
            if (title) {
                link = link ? link : `s${i}`;
                codetype = codetype ? `Physics | ${codetype}` : "Physics";
                author = author ? author : "1";
            }
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    } 





function get_assignment(cases, date, author) {
    for (let i = 1; i < cases; i++) {
        link = "", title = "", desc = "", date = gendate(date), codetype = "Assignment", readtime = r(6);
        switch (i) {
            case 1:
                date = "Tue October 11, 2022";
                title = "Assignment 1: Application of Fundamental Mechanics on Saturn V Rocket.";
                desc = "This assignment is based on the fundamental mechanics of Saturn V Rocket";
                break;
            case 2:
                date = "Sun December 18, 2022";
                title = "Assignment 2: Types of Magnetic Materials and Application of Lasers.";
                desc = "This topic discusses about types of Magnetic Materials and application of LASER's";
                break;
            default:
                break;
        }
        if (title) {
            link = link ? link : `a${i}`;
            codetype = codetype ? codetype : "Assignment";
            codetype = codetype ? `Physics | ${codetype}` : "Physics";
        }
        body_blockcards(link, date, title, desc, codetype, readtime, author);
    }
}
 */


/*
You can use different approaches and algorithms to solve optimization problems, depending on the specific problem you are trying to solve. Here are a few common methods:

Gradient descent: This is a popular method for optimizing objective functions that are differentiable. It works by iteratively adjusting the parameters of the model in the direction of the negative gradient of the objective function.

Conjugate gradient method: This is a type of iterative optimization algorithm that can be used to solve symmetric, positive definite linear systems. It works by using information from previous iterations to improve convergence rates.

Simulated annealing: This is a probabilistic method for solving optimization problems. It works by randomly perturbing the parameters of the model and accepting the new solution if it results in an improvement to the objective function.

Particle swarm optimization: This is a swarm intelligence-based optimization algorithm that works by having a population of candidate solutions that move and update their positions based on their own fitness and the fitness of other solutions.

Genetic algorithms: This is a population-based optimization algorithm that works by iteratively evolving a population of candidate solutions. It uses genetic operators such as mutation and crossover to generate new solutions and selection to determine which solutions are retained for the next iteration.

Each method has its own advantages and disadvantages and works best for specific types of optimization problems, so you may need to experiment with different methods to find the one that works best for your particular problem.
*/