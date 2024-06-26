window.varjsrequirefooter = 1;
window.varjsalreadyloaded = 1;

// var appendAccordians = function () {
//     const parentElement = document.querySelector('.card-body.py-5');

//     const numberOfAccordions = 5;

//     function generateAccordion(roundNumber) {
//         return `<div class="card border-0 my-2">
//                     <div class="accordion" id="toc">
//                         <div class="accordion-item">
//                             <h2 class="accordion-header" id="h${roundNumber}">
//                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c${roundNumber}" aria-controls="c${roundNumber}" aria-expanded="false">
//                                     <i class="fas fa-terminal"></i> <strong>&nbsp;Round ${roundNumber}</strong>
//                                 </button>
//                             </h2>
//                             <div id="c${roundNumber}" class="accordion-collapse collapse" aria-labelledby="h${roundNumber}" data-bs-parent="#toc">
//                                 <div class="accordion-body"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`;
//     }
//     for (let i = 1; i <= numberOfAccordions; i++) {
//         parentElement.innerHTML += generateAccordion(i);
//     }
// };

// var appendAccordians = function () {
//     // The parent element where the accordions will be appended
//     const parentElement = document.querySelector('.card-body.py-5');

//     // Number of accordion items to generate
//     const numberOfAccordions = 5;

//     // Function to generate accordion HTML
//     function generateAccordion(roundNumber) {
//         return `<div class="card border-0 my-2">
//                     <div class="accordion" id="toc${roundNumber}">
//                         <div class="accordion-item">
//                             <h2 class="accordion-header" id="h${roundNumber}">
//                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c${roundNumber}" aria-expanded="false" aria-controls="c${roundNumber}">
//                                     <i class="fas fa-code"></i> <strong>&nbsp;Round ${roundNumber}</strong>
//                                 </button>
//                             </h2>
//                             <div id="c${roundNumber}" class="accordion-collapse collapse" aria-labelledby="h${roundNumber}" data-bs-parent="#toc${roundNumber}">
//                                 <div class="accordion-body"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`;
//     }

//     // Append each accordion item and initialize Collapse
//     for (let i = 1; i <= numberOfAccordions; i++) {
//         parentElement.innerHTML += generateAccordion(i);
//     }

//     // Initialize Bootstrap Collapse for dynamically added elements
//     var myCollapsible = document.querySelectorAll('.collapse');
//     myCollapsible.forEach(function (collapsible) {
//         new bootstrap.Collapse(collapsible, {
//             toggle: false
//         });
//     });
// };

// if (document.readyState === 'loading')
//     document.addEventListener('DOMContentLoaded', appendAccordians);
// else
//     appendAccordians();




window.addEventListener("load", async function () {

    document.querySelectorAll('.blur-text').forEach(item => {
        new bootstrap.Popover(item, {
            trigger: 'hover focus',
            title: '<i class="fas fa-lock"></i> Restricted Access',
            content: 'Please <strong>register</strong>. Details will be given soon.',
            placement: 'top',
            html: true // Allow HTML in the popover
        });
    });

    //     (function () {
    //         // The parent element where the accordions will be appended
    //         const parentElement = document.querySelector('.card-body.py-5');

    //         // Number of accordion items to generate
    //         const numberOfAccordions = 5;

    //         // Function to generate accordion HTML
    //         function generateAccordion(roundNumber) {
    //             return `<div class="card border-0 my-2">
    //                     <div class="accordion" id="accordion${roundNumber}">
    //                         <div class="accordion-item">
    //                             <h2 class="accordion-header" id="heading${roundNumber}">
    //                                 <button class="accordion-button collapsed" type="button" id="button${roundNumber}">
    //                                     <i class="fas fa-code"></i> <strong>&nbsp;Round ${roundNumber}</strong>
    //                                 </button>
    //                             </h2>
    //                             <div id="c${roundNumber}" class="accordion-collapse collapse" aria-labelledby="heading${roundNumber}" data-bs-parent="#accordion${roundNumber}">
    //                                 <div class="accordion-body"></div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>`;
    //         }

    //         for (let i = 1; i <= numberOfAccordions; i++) {
    //             parentElement.innerHTML += generateAccordion(i);
    //         }
    // for (let i = 1; i <= numberOfAccordions; i++) {
    //             document.getElementById(`button${i}`).addEventListener('click', function () {
    //                 const collapseElement = document.getElementById(`c${i}`);
    //                 collapseElement.classList.toggle('show');
    //             });
    //         }
    //     })();


    // (function () {
    //     const specificContent = {
    //         c1: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 1: Screen Test</h3><h4 class="fw-bold text-primary">Registration</h4><p class="mb-3">In this initial phase, students will register their participation using a Google form to confirm their involvement. Students are divided into three categories: First Year, Second Year, and Third Year. Students of Master Degree Programs like MCA, MTech. will be registered under third year irrespective of their class and semester.</p><h4 class="fw-bold text-primary">Screen Test Overview</h4><p class="mb-3">The CSE faculty will curate a question bank covering key computer science subjects such as Operating System, Computer System Architecture, Database Management System, Computer Networks, Software Engineering, Algorithms, Data Structures, Front End Development, and Programming Languages like C, C++, Python, and Java, among others.</p><h4 class="fw-bold text-primary">Screen Test Format</h4><p class="mb-3">Screen Test will be taken in three different sub rounds. The first, a Basic Aptitude Test, consists of a multiple-choice quiz with 50 questions, to be completed within a 30-minute timeframe. Questions will be organized class/year-wise so that students compete within the difficulty level of their respective classes. This test will be administered class-wise, one class at a time.</p><ul class="list-unstyled mb-4"><li class="mb-2"><strong>Contest Date:</strong> November 22, 2023</li><li class="mb-2"><strong>Difficulty Level:</strong> Moderate</li><li class="mb-2"><strong>Evaluation Parameter:</strong> 1 mark allocated for each correct answer. No negative marking.</li><li class="mb-2"><strong>Total Marks:</strong> 50</li><li class="mb-2"><strong>Outcome:</strong> The top 30% students from each year progress to the subsequent round, totaling 300 students.</li><li class="mb-2"><strong>Round 1 Venue:</strong> Respective/ Pre-decided Classrooms.</li><li class="mb-2"><strong>Invigilators:</strong> Teachers with respective classes as per timetable.</li></ul>`,
    //         c2: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 2: Coding Ability Test</h3><p class="mb-3">In the second phase, participants face a 30-minute quiz tailored to test their coding prowess through 15 challenging problems. Organized class/year-wise, this round ensures a fair playing field for all. All 300 contestants will participate simultaneously in this coding-centric assessment.</p><ul class="list-unstyled mb-4"><li class="mb-2"><strong>Difficulty Level:</strong> High</li><li class="mb-2"><strong>Evaluation Parameter:</strong> 2 marks for each correct answer, with negative marking (0.25%) for incorrect responses.</li><li class="mb-2"><strong>Total Marks:</strong> 30</li><li class="mb-2"><strong>Outcome:</strong> The top 30% students from each year will advance, narrowing the field to 120 skilled coders.</li><li class="mb-2"><strong>Round 2 Venue:</strong> Respective Classrooms.</li><li class="mb-2"><strong>Invigilators:</strong> Assigned faculty members will oversee the process, ensuring a smooth and fair testing environment.</li></ul>`,
    //         c3: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 3: Analytical and Time Management Skills Test</h3><p class="mb-3">The third screen test ramps up the intensity with a 10-minute quiz of 30 questions designed to evaluate the participants' analytical skills and efficiency under time pressure. Tailored to each class/year level, the test challenges all 120 remaining students collectively.</p><ul class="list-unstyled mb-4"><li class="mb-2"><strong>Difficulty Level:</strong> High</li><li class="mb-2"><strong>Evaluation Parameter:</strong> 1 mark for each correct answer, with negative marking (0.25%) for incorrect responses.</li><li class="mb-2"><strong>Total Marks:</strong> 30</li><li class="mb-2"><strong>Outcome:</strong> This round aims to sieve out the top 30% students from each year based on their ability to swiftly navigate through time-sensitive challenges.</li><li class="mb-2"><strong>Round 3 Venue:</strong> Pre-determined Classrooms/Labs.</li><li class="mb-2"><strong>Invigilators:</strong> Appointed invigilators will ensure a fair and efficient examination process.</li><li class="mb-2"><strong>Main Attraction:</strong> Noteworthy cash prizes and personalized gifts await the elite group of shortlisted participants.</li></ul>`,
    //         // c4: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 4: Group Discussion and Personality Test</h3><p class="mb-3">This multifaceted round shapes 8 diverse teams, each integrating students from all academic years, tasked with showcasing a spectrum of skills through four distinct segments:</p><h4 class="fw-bold text-primary">Professional Writing Skills Round</h4><p class="mb-2">Teams compose a professional email on a common topic within 5 minutes. Evaluation focuses on clarity, conciseness, and proper use of professional email etiquette.</p><ul class="list-unstyled mb-4"><li><strong>Evaluation Parameters:</strong> Clarity, Conciseness, Formal Tone, Grammar, Relevance, and Formatting.</li><li><strong>Judges:</strong> Dr. Gaurav Gupta, Dr. Arvind, Dr. Bharti.</li><li><strong>Invigilators:</strong> Er. Shravan, Er. Waleed, Er. Anjali Thakur.</li><li><strong>Marks:</strong> Maximum of 10 marks for each participant.</li></ul><h4 class="fw-bold text-primary">GD Round</h4><p class="mb-2">Engaging group discussions on randomized topics test participants' ability to articulate ideas, collaborate, and respond to viewpoints dynamically.</p><ul class="list-unstyled mb-4"><li><strong>Evaluation Parameters:</strong> Content Assessment, Delivery, Confidence, Participation, and Teamwork.</li><li><strong>Judges:</strong> Dr. Sonia, Dr. Brij Bhushan Sharma, Ms. Anandita Garg.</li><li><strong>Marks:</strong> Up to 10 marks for each GD topic per team, totaling 30 marks.</li></ul><h4 class="fw-bold text-primary">Code Master Round</h4><p class="mb-2">A true test of coding prowess, teams are presented with programming challenges to solve in a race against time, underscoring their technical acumen.</p><ul class="list-unstyled mb-4"><li><strong>Evaluation Parameter:</strong> Code Optimization.</li><li><strong>Judges:</strong> Dr. Anurag, Er. Puneet Kapoor, Dr. Rather Gousia.</li><li><strong>Invigilators:</strong> Er. Ruchika, Er. Dahlak, Er. Abdullahi.</li><li><strong>Marks:</strong> Up to 10 marks for each coding problem per participant, totaling 30 marks.</li></ul><h4 class="fw-bold text-primary">Free Speech Round</h4><p class="mb-2">Each team member delivers a short speech on a pre-assigned topic, allowing for individual expression and assessment of public speaking skills.</p><ul class="list-unstyled mb-4"><li><strong>Evaluation Parameters:</strong> Content Quality, Delivery, Confidence.</li><li><strong>Judges:</strong> Dr. Pankaj Vaidya, Dr. Ravikant, Dr. Namita.</li><li><strong>Marks:</strong> 10 marks per participant, resulting in a total of 30 marks for the team.</li></ul><p class="fw-bold">Total Marks of Round 4: 120</p><p>The conclusion of Round 4 will see the advancement of the top 4 teams to the finals, with the remaining teams being honored with participation certificates during the final award ceremony.</p><p class="mb-0"><strong>Main Attraction for the Audience:</strong> Engaging questions posed to the audience offer a chance to win cash prizes and certificates, which will be distributed during the prize distribution ceremony.</p>`,
    //         // c5: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 5: Multi-Faceted Technical Challenge</h3><p class="mb-3">Round 5 is a crucible of varied technical and analytical challenges, designed to test the participants' comprehensive skills in computer science and problem-solving.</p><ul class="list-unstyled mb-4"><li class="mb-2"><strong>Aptitude Test</strong> - A test of logic and problem-solving abilities.</li><li class="mb-2"><strong>General Technical Round</strong> - Involves questions from core computer science subjects.</li><li class="mb-2"><strong>Coding-Output Round</strong> - Participants write code to solve problems without running it (dry run).</li><li class="mb-2"><strong>Visual Round</strong> - Identification of computer science luminaries and their famous quotes.</li><li class="mb-2"><strong>Faculty Round</strong> - Faculty members challenge teams with technical questions.</li><li class="mb-2"><strong>Audience Round</strong> - Situation-based questions from guests to assess analytical skills.</li><li class="mb-2"><strong>My Choice Round</strong> - Teams select subjects from a list to answer related questions.</li><li class="mb-2"><strong>Rapid Fire Round</strong> - A fast-paced question session with points for correct answers.</li><li class="mb-2"><strong>Sudden Death Round</strong> - A high stakes Q&A where accuracy is key, and mistakes are costly.</li></ul><p><strong>Judges:</strong> A panel of invited guests.</p><p><strong>Scorer and Timekeeper:</strong> Er. Abhishek.</p><p><strong>Student Volunteers:</strong> A team of 5 final-year students.</p><p><strong>Final Result:</strong>The highest-scoring teams claim victory and runners-up accolades. All finalists are recognized for their prowess and awarded accordingly.</p><p class="mb-0"><strong>Main Attraction for the Audience:</strong> Audience engagement with opportunities to win cash prizes through interactive questioning rounds.</p>`,
    //     };

    //     const defaultContent = '<p>Details coming soon. Stay Tuned!</p>';

    //     function setContent(accordionId) {
    //         const content = specificContent.hasOwnProperty(accordionId) ? specificContent[accordionId] : defaultContent;
    //         document.querySelector('#' + accordionId + ' .accordion-body').innerHTML = content;
    //     }

    //     document.querySelectorAll('.accordion-item').forEach(item => {
    //         const accordionId = item.querySelector('.accordion-button').getAttribute('data-bs-target').substring(1);
    //         setContent(accordionId);
    //     });

    // })();


    (function () {
        const parentElement = document.querySelector('.card-body.py-5');
        const numberOfAccordions = 5;

        const specificContent = {
            c1: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 1: Screen Test</h3><h4 class="fw-bold text-primary">Registration</h4><p class="mb-3">In this initial phase, students will register their participation using a Google form to confirm their involvement. Students are divided into three categories: First Year, Second Year, and Third Year. Students of Master Degree Programs like MCA, MTech. will be registered under third year irrespective of their class and semester.</p><h4 class="fw-bold text-primary">Screen Test Overview</h4><p class="mb-3">The CSE faculty will curate a question bank covering key computer science subjects such as Operating System, Computer System Architecture, Database Management System, Computer Networks, Software Engineering, Algorithms, Data Structures, Front End Development, and Programming Languages like C, C++, Python, and Java, among others.</p><h4 class="fw-bold text-primary">Screen Test Format</h4><p class="mb-3">Screen Test will be taken in three different sub rounds. The first, a Basic Aptitude Test, consists of a multiple-choice quiz with 50 questions, to be completed within a 30-minute timeframe. Questions will be organized class/year-wise so that students compete within the difficulty level of their respective classes. This test will be administered class-wise, one class at a time.</p><ul class="list-unstyled mb-4"><li class="mb-2"><strong>Contest Date:</strong> November 22, 2023</li><li class="mb-2"><strong>Difficulty Level:</strong> Moderate</li><li class="mb-2"><strong>Evaluation Parameter:</strong> 1 mark allocated for each correct answer. No negative marking.</li><li class="mb-2"><strong>Total Marks:</strong> 50</li><li class="mb-2"><strong>Outcome:</strong> The top 30% students from each year progress to the subsequent round, totaling 300 students.</li><li class="mb-2"><strong>Round 1 Venue:</strong> Respective/ Pre-decided Classrooms.</li><li class="mb-2"><strong>Invigilators:</strong> Teachers with respective classes as per timetable.</li></ul>`,
            c2: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 2: Coding Ability Test</h3><p class="mb-3">In the second phase, participants face a 30-minute quiz tailored to test their coding prowess through 15 challenging problems. Organized class/year-wise, this round ensures a fair playing field for all. All 300 contestants will participate simultaneously in this coding-centric assessment.</p><ul class="list-unstyled mb-4"><li class="mb-2"><strong>Difficulty Level:</strong> High</li><li class="mb-2"><strong>Evaluation Parameter:</strong> 2 marks for each correct answer, with negative marking (0.25%) for incorrect responses.</li><li class="mb-2"><strong>Total Marks:</strong> 30</li><li class="mb-2"><strong>Outcome:</strong> The top 30% students from each year will advance, narrowing the field to 120 skilled coders.</li><li class="mb-2"><strong>Round 2 Venue:</strong> Respective Classrooms.</li><li class="mb-2"><strong>Invigilators:</strong> Assigned faculty members will oversee the process, ensuring a smooth and fair testing environment.</li></ul>`,
            c3: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 3: Analytical and Time Management Skills Test</h3><p class="mb-3">The third screen test ramps up the intensity with a 10-minute quiz of 30 questions designed to evaluate the participants' analytical skills and efficiency under time pressure. Tailored to each class/year level, the test challenges all 120 remaining students collectively.</p><ul class="list-unstyled mb-4"><li class="mb-2"><strong>Difficulty Level:</strong> High</li><li class="mb-2"><strong>Evaluation Parameter:</strong> 1 mark for each correct answer, with negative marking (0.25%) for incorrect responses.</li><li class="mb-2"><strong>Total Marks:</strong> 30</li><li class="mb-2"><strong>Outcome:</strong> This round aims to sieve out the top 30% students from each year based on their ability to swiftly navigate through time-sensitive challenges.</li><li class="mb-2"><strong>Round 3 Venue:</strong> Pre-determined Classrooms/Labs.</li><li class="mb-2"><strong>Invigilators:</strong> Appointed invigilators will ensure a fair and efficient examination process.</li><li class="mb-2"><strong>Main Attraction:</strong> Noteworthy cash prizes and personalized gifts await the elite group of shortlisted participants.</li></ul>`,
            //         // c4: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 4: Group Discussion and Personality Test</h3><p class="mb-3">This multifaceted round shapes 8 diverse teams, each integrating students from all academic years, tasked with showcasing a spectrum of skills through four distinct segments:</p><h4 class="fw-bold text-primary">Professional Writing Skills Round</h4><p class="mb-2">Teams compose a professional email on a common topic within 5 minutes. Evaluation focuses on clarity, conciseness, and proper use of professional email etiquette.</p><ul class="list-unstyled mb-4"><li><strong>Evaluation Parameters:</strong> Clarity, Conciseness, Formal Tone, Grammar, Relevance, and Formatting.</li><li><strong>Judges:</strong> Dr. Gaurav Gupta, Dr. Arvind, Dr. Bharti.</li><li><strong>Invigilators:</strong> Er. Shravan, Er. Waleed, Er. Anjali Thakur.</li><li><strong>Marks:</strong> Maximum of 10 marks for each participant.</li></ul><h4 class="fw-bold text-primary">GD Round</h4><p class="mb-2">Engaging group discussions on randomized topics test participants' ability to articulate ideas, collaborate, and respond to viewpoints dynamically.</p><ul class="list-unstyled mb-4"><li><strong>Evaluation Parameters:</strong> Content Assessment, Delivery, Confidence, Participation, and Teamwork.</li><li><strong>Judges:</strong> Dr. Sonia, Dr. Brij Bhushan Sharma, Ms. Anandita Garg.</li><li><strong>Marks:</strong> Up to 10 marks for each GD topic per team, totaling 30 marks.</li></ul><h4 class="fw-bold text-primary">Code Master Round</h4><p class="mb-2">A true test of coding prowess, teams are presented with programming challenges to solve in a race against time, underscoring their technical acumen.</p><ul class="list-unstyled mb-4"><li><strong>Evaluation Parameter:</strong> Code Optimization.</li><li><strong>Judges:</strong> Dr. Anurag, Er. Puneet Kapoor, Dr. Rather Gousia.</li><li><strong>Invigilators:</strong> Er. Ruchika, Er. Dahlak, Er. Abdullahi.</li><li><strong>Marks:</strong> Up to 10 marks for each coding problem per participant, totaling 30 marks.</li></ul><h4 class="fw-bold text-primary">Free Speech Round</h4><p class="mb-2">Each team member delivers a short speech on a pre-assigned topic, allowing for individual expression and assessment of public speaking skills.</p><ul class="list-unstyled mb-4"><li><strong>Evaluation Parameters:</strong> Content Quality, Delivery, Confidence.</li><li><strong>Judges:</strong> Dr. Pankaj Vaidya, Dr. Ravikant, Dr. Namita.</li><li><strong>Marks:</strong> 10 marks per participant, resulting in a total of 30 marks for the team.</li></ul><p class="fw-bold">Total Marks of Round 4: 120</p><p>The conclusion of Round 4 will see the advancement of the top 4 teams to the finals, with the remaining teams being honored with participation certificates during the final award ceremony.</p><p class="mb-0"><strong>Main Attraction for the Audience:</strong> Engaging questions posed to the audience offer a chance to win cash prizes and certificates, which will be distributed during the prize distribution ceremony.</p>`,
            //         // c5: `<h3 class="h2 fw-bold text-center mb-4 text-secondary py-3">Round 5: Multi-Faceted Technical Challenge</h3><p class="mb-3">Round 5 is a crucible of varied technical and analytical challenges, designed to test the participants' comprehensive skills in computer science and problem-solving.</p><ul class="list-unstyled mb-4"><li class="mb-2"><strong>Aptitude Test</strong> - A test of logic and problem-solving abilities.</li><li class="mb-2"><strong>General Technical Round</strong> - Involves questions from core computer science subjects.</li><li class="mb-2"><strong>Coding-Output Round</strong> - Participants write code to solve problems without running it (dry run).</li><li class="mb-2"><strong>Visual Round</strong> - Identification of computer science luminaries and their famous quotes.</li><li class="mb-2"><strong>Faculty Round</strong> - Faculty members challenge teams with technical questions.</li><li class="mb-2"><strong>Audience Round</strong> - Situation-based questions from guests to assess analytical skills.</li><li class="mb-2"><strong>My Choice Round</strong> - Teams select subjects from a list to answer related questions.</li><li class="mb-2"><strong>Rapid Fire Round</strong> - A fast-paced question session with points for correct answers.</li><li class="mb-2"><strong>Sudden Death Round</strong> - A high stakes Q&A where accuracy is key, and mistakes are costly.</li></ul><p><strong>Judges:</strong> A panel of invited guests.</p><p><strong>Scorer and Timekeeper:</strong> Er. Abhishek.</p><p><strong>Student Volunteers:</strong> A team of 5 final-year students.</p><p><strong>Final Result:</strong>The highest-scoring teams claim victory and runners-up accolades. All finalists are recognized for their prowess and awarded accordingly.</p><p class="mb-0"><strong>Main Attraction for the Audience:</strong> Audience engagement with opportunities to win cash prizes through interactive questioning rounds.</p>`,
        };
        const defaultContent = '<p>Details coming soon. Stay Tuned!</p>';

        function setContent(accordionId) {
            const content = specificContent.hasOwnProperty(accordionId) ? specificContent[accordionId] : defaultContent;
            document.querySelector('#' + accordionId + ' .accordion-body').innerHTML = content;
        }

        function generateAndAppendAccordion(roundNumber) {
            const accordionDiv = document.createElement('div');
            accordionDiv.classList.add('card', 'border-0', 'my-2');
            accordionDiv.innerHTML = `
            <div class="accordion" id="accordion${roundNumber}">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${roundNumber}">
                        <button class="accordion-button collapsed" type="button" data-bs-target="#c${roundNumber}" aria-expanded="false">
                            <i class="fas fa-code"></i> <strong>&nbsp;Round ${roundNumber}</strong>
                        </button>
                    </h2>
                    <div id="c${roundNumber}" class="accordion-collapse collapse" aria-labelledby="heading${roundNumber}" data-bs-parent="#accordion${roundNumber}">
                        <div class="accordion-body"></div>
                    </div>
                </div>
            </div>`;

            parentElement.appendChild(accordionDiv);
            setContent(`c${roundNumber}`);

            const button = accordionDiv.querySelector('.accordion-button');
            button.addEventListener('click', function () {
                const collapseElement = document.getElementById(`c${roundNumber}`);
                collapseElement.classList.toggle('show');
                button.classList.toggle('collapsed');
            });
        }

        for (let i = 1; i <= numberOfAccordions; i++) {
            generateAndAppendAccordion(i);
        }
    })();



    (function () {
        const organizers = [
            { title: 'Director', name: 'Prof. Ashish Khosla', img: 'img/1623244771-AshishKhosla.jpeg', quote: 'Pending: Director\'s Quote or Message' },
            { title: 'Dean', name: 'Dr. Virender Rihani', img: 'img/1654685857-VirenderRihani.jpeg', quote: 'Pending: Dean\'s Quote or Message' },
            { title: 'Head of School', name: 'Dr. Pankaj Vaidya', img: 'img/1610703196-PankajVaidya.jpeg', quote: 'Pending: HOS\'s Quote or Message' }
        ];

        const container = document.getElementById('organizer-container');

        organizers.forEach(organizer => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-3 mb-3';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'card border-0 shadow text-center h-100';

            const img = document.createElement('img');
            img.src = organizer.img;
            img.className = 'card-img-top';
            img.alt = organizer.title;

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body';

            const titleH4 = document.createElement('h4');
            titleH4.className = 'card-title';
            titleH4.textContent = organizer.title;

            const nameP = document.createElement('p');
            nameP.className = 'card-text text-center';
            nameP.textContent = organizer.name;

            const quoteP = document.createElement('p');
            quoteP.className = 'card-text';
            const smallText = document.createElement('small');
            smallText.className = 'text-muted';
            smallText.textContent = organizer.quote;
            quoteP.appendChild(smallText);

            cardBodyDiv.appendChild(titleH4);
            cardBodyDiv.appendChild(nameP);
            cardBodyDiv.appendChild(quoteP);

            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBodyDiv);
            colDiv.appendChild(cardDiv);

            container.appendChild(colDiv);
        });
    })();


    (function () {
        // const professors = [
        //     { name: 'Pankaj Vaidya', title: 'Professor' },
        //     { name: 'Brij Bhushan Sharma', title: 'Assistant Professor' },
        //     { name: 'Sonia', title: 'Assistant Professor' },
        //     { name: 'Bharti Thakur', title: 'Assistant Professor' },
        //     { name: 'Ishani Sharma', title: 'Assistant Professor' },
        //     { name: 'Maya Thapa', title: 'Assistant Professor' },
        //     { name: 'Piyush Sewal', title: 'Assistant Professor' },
        //     { name: 'Kanika', title: 'Assistant Professor' }
        // ];

        const professors = [
            { name: 'Dr. Pankaj Vaidya', title: 'Professor' },
            { name: 'Dr. Gaurav Gupta', title: 'Associate Professor' },
            { name: 'Dr. Ravi Kant', title: 'Associate Professor' },
            { name: 'Dr. Sonia', title: 'Associate Professor' },
            { name: 'Dr. Bharti Thakur', title: 'Associate Professor' },
            { name: 'Dr. Brij Bhushan Sharma', title: 'Associate Professor' },
            { name: 'Dr. Anurag Rana', title: 'Assistant Professor' },
            { name: 'Dr. Arvind Sharma', title: 'Assistant Professor' },
            { name: 'Puneet Kapoor', title: 'Assistant Professor' },
            { name: 'Aarchit Joshi', title: 'Assistant Professor' },
            { name: 'Waleed Salehi', title: 'Assistant Professor' },
            { name: 'Abhishek Tomar', title: 'Assistant Professor' },
            { name: 'Kritika Rana', title: 'Assistant Professor' },
            { name: 'Dhalak Danial Solemon', title: 'Assistant Professor' },
            { name: 'Abdulahi Adem', title: 'Assistant Professor' },
            { name: 'Shrawan Kumar', title: 'Assistant Professor' },
            { name: 'Ruchika Sharma', title: 'Assistant Professor' },
            { name: 'Anitya Gupta', title: 'Assistant Professor' },
            { name: 'Anandita Garg', title: 'Assistant Professor' },
            { name: 'Piyush Sewal', title: 'Assistant Professor' },
            { name: 'Nitesh Sharma', title: 'Assistant Professor' },
            { name: 'Kanika', title: 'Assistant Professor' },
            { name: 'Anjali Thakur', title: 'Assistant Professor' },
            { name: 'Maya Thapa', title: 'Assistant Professor' },
            { name: 'Ishani Sharma', title: 'Assistant Professor' },
            { name: 'Dr. Rather Gousia', title: 'Assistant Professor' },
            { name: 'Shiva', title: 'Assistant Professor' }
        ];

        const container = document.getElementById('learning-facilitator');

        professors.forEach(professor => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'card h-100 border-0';

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body p-3 text-center h-100';

            const nameH5 = document.createElement('h5');
            nameH5.className = 'card-title fw-bold text-danger text-opacity-75';
            nameH5.textContent = professor.name;

            const titleP = document.createElement('p');
            titleP.className = 'text-secondary text-center small';
            titleP.textContent = professor.title;

            cardBodyDiv.appendChild(nameH5);
            cardBodyDiv.appendChild(titleP);

            cardDiv.appendChild(cardBodyDiv);
            colDiv.appendChild(cardDiv);

            container.appendChild(colDiv);
        });
    })();



    (function () {
        const professors = [
            { name: 'Er. Piyush Sewal', title: 'Faculty of Engineering' },
            { name: 'Er. Aarchit Joshi', title: 'Faculty of Engineering' },
            { name: 'Er. Kritika Rana', title: 'Faculty of Engineering' },
            { name: 'Er. Abhishek Tomar', title: 'Faculty of Engineering' },
            { name: 'Er. Anjali Thakur', title: 'Faculty of Engineering' },
            { name: 'Er. Nitesh Sharma', title: 'Faculty of Engineering' },
        ];

        const container = document.getElementById('faculty-organizer');

        professors.forEach(professor => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'card h-100 border-0';

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body p-3 text-center h-100';

            const nameH5 = document.createElement('h5');
            nameH5.className = 'card-title fw-bold text-primary';
            nameH5.textContent = professor.name;

            const titleP = document.createElement('p');
            titleP.className = 'text-secondary text-center small';
            titleP.textContent = professor.title;

            cardBodyDiv.appendChild(nameH5);
            cardBodyDiv.appendChild(titleP);

            cardDiv.appendChild(cardBodyDiv);
            colDiv.appendChild(cardDiv);

            container.appendChild(colDiv);
        });
    })();



    (function () {
        const professors = [
            { name: 'Pratham Purohit', title: 'Computer Science & Engineering' },
            { name: 'Gunjan', title: 'Computer Science & Engineering' },
            { name: 'Anjali', title: 'Computer Science & Engineering' },
            { name: 'Er. Divya Mohan', title: 'Computer Science & Engineering' },
        ];

        const container = document.getElementById('student-organizer');

        professors.forEach(professor => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'card h-100 border-0';

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body p-3 text-center h-100';

            const nameH5 = document.createElement('h5');
            nameH5.className = 'card-title fw-bold text-primary text-opacity-50';
            nameH5.textContent = professor.name;

            const titleP = document.createElement('p');
            titleP.className = 'text-secondary text-center small';
            titleP.textContent = professor.title;

            cardBodyDiv.appendChild(nameH5);
            cardBodyDiv.appendChild(titleP);

            cardDiv.appendChild(cardBodyDiv);
            colDiv.appendChild(cardDiv);

            container.appendChild(colDiv);
        });
    })();

});