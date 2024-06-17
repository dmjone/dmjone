
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "concepts/",
                title: "Concepts of Mathematics",
                desc: "Dive into the exciting world of Mathematics! Discover how these powerful mathematical concepts are used. Explore basic and advanced concepts, including properties, operations, and applications. Get ready to transform your understanding of mathematics!",
                codetype: "Concepts"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author, { isMainCategory: true });
    }
    function get_concepts(def_date, def_author) {
        const arr = [
            {
                title: "Differential",
                desc: "Step into the world of differentials! Discover the fundamental tools used in fields like engineering, physics, and computer science. This topic covers everything from basic operations to advanced concepts. Unleash the power of differentials and unlock new dimensions in problem-solving. Get ready to differentiate your way to success!",
                link: "differential",
                codetype: "Differential Equations"
            },
            {
                title: "Random Variables",
                desc: "All the formulas for the Random Variables including Mathematical Expectations, SD, Variance, Moment Generating Function, Probablity Generating Function, Characterstic Equations",
                link: "random-variables",
                codetype: "Random Variables"
            },
        ];
        body_genmenu.processData(arr, def_date, def_author);
    }
    
    /**********  AUTOMATION CONTROL **********/
    let title, link, date, desc, codetype, readtime, author = 1, semester, cardimage, continuereading;
    const functions = {
        concepts: get_concepts,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}
