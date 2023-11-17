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




    (function () {
        const organizers = [
            { title: 'Director', name: 'Prof. Ashish Khosla', img: 'img/1623244771-AshishKhosla.jpeg', quote: 'Pending: Director\'s Quote or Message' },
            { title: 'Dean', name: 'Dr. Virender Rihani', img: 'img/1654685857-VirenderRihani.jpeg', quote: 'Pending: Dean\'s Quote or Message' },
            { title: 'Head of School', name: 'Dr. Pankaj Vaidya', img: 'img/1610703196-PankajVaidya.jpeg', quote: 'Pending: HOS\'s Quote or Message' }
            // ... add more organizers here ...
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