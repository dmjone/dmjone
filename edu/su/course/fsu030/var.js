
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
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_section(def_date, def_author) {
        const arr = [
            {
                title: "Section A: Work, Energy and Fluid motion",
                desc: "WIP: Understand Work, Energy & Fluid Motions in Physics! Learn about forces, energy diagrams, equilibriums, gravitational & elastic potential energies, fluid properties, Pascal's law, surface tension, capillarity, continuity equation, Bernoulli's equation. Get ready to apply your knowledge in the real world!"
            },
            {
                title: "Section B: Electricity and Magnetism",
                desc: "Get ready to explore Electricity & Magnetism! Learn about electric field & potential, dielectric polarization, displacement current, Maxwell's equations, velocity of EM waves, electromagnetic spectrum, magnetic materials, superconductivity, ultrasonic waves, Type I & Type II superconductors and more. Get ready to electrify your knowledge!",
                link: "s2"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_seminar(def_date, def_author) {
        const arr = [
            {
                title: "Seminar 1: Application of Fundamental Mechanics on a Rocket",
                desc: "Blast off into the world of Work, Energy & Fluid Motions with the Saturn 5 Rocket! Learn the science behind the rocket's power, work & energy theorem, Pascal's law, fluid mechanics, fluid properties, Bernoulli's equation and how the Saturn 5 overcame space challenges. Get ready for an exciting journey!",
                link: "s1"
            },
            {
                title: "Seminar 2: Electromagnetic Waves",
                desc: "Expand your knowledge on Electromagnetic Waves! Learn about formation of Electromagnetic Waves, its real-world applications, characterstics, polarization, frequency and wavelength. Get ready to broaden your horizons.This seminar was presented on Electromagnetic Waves.",
                link: "s2"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    function get_assignment(def_date, def_author) {
        const arr = [
            {
                title: "Assignment 1: Application of Fundamental Mechanics on Saturn V Rocket",
                desc: "This assignment is based on the fundamental mechanics of Saturn V Rocket",
                link: "a1"
            },
            {
                title: "Assignment 2: Types of Magnetic Materials and Application of Lasers",
                desc: "Dive into Magnetic Materials & Laser Applications! Learn about different types of magnetic materials, their properties, and the cutting-edge applications of laser technology. Get ready to be amazed by the power of magnetism and light!",
                link: "a2"
            }
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }

    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        section: get_section,
        seminar: get_seminar,
        assignment: get_assignment,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}