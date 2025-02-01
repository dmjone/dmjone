
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/facf",
                title: "Frequently Asked Concepts and Formulas of Aptitude Development-3",
                desc: "Explore the complete collection of essential formulas and concepts from the third seminar in the Aptitude Development Seminar series of Shoolini University.",
                codetype: "SEA-AP003 | Key Principles and Equations"
            },
            {
                link: "theory/practice-questions",
                title: "Practice Questions for Aptitude Development-3",
                desc: "Dive into a comprehensive set of practice questions based on the third seminar's formulas and concepts from the Aptitude Development Seminar series at Shoolini University.",
                codetype: "SEA-AP003 | Practice Questions"
            },
            // {
            //     link: "lab/",
            //     title: "🔬 Practicals: Hands-On Learning with DSA Lab!",
            //     desc: "Discover practical and hands-on learning experience for Data Structures & Algorithms through Lab.",
            //     codetype: "CSU1051P | Lab"
            // }
        ];
        
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    


    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {        
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