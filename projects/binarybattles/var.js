window.addEventListener("load", async function () {
    (function () {
        const professors = [
            { name: 'M S Thakur', title: 'Professor' },
            { name: 'Bhaskar Goel', title: 'Professor' },
            { name: 'Ram Prakash Dwivedi', title: 'Professor' },
            { name: 'Abhilash Pathania', title: 'Assistant Professor' },
            { name: 'Pankaj Vaidya', title: 'Professor' },
            { name: 'Raj Kumar Saini', title: 'Associate Professor' },
            { name: 'Raj Kumar', title: 'Associate Professor' },
            { name: 'Sorabh Aggarwal', title: 'Assistant Professor' },
            { name: 'Sushil Kumar', title: 'Assistant Professor' },
            { name: 'Veena Kashyap', title: 'Assistant Professor' },
            { name: 'Brij Bhushan Sharma', title: 'Assistant Professor' },
            { name: 'Namita Gandotra', title: 'Assistant Professor' },
            { name: 'Diksha Sharma', title: 'Assistant Professor' },
            { name: 'Nitisha Sharma', title: 'Assistant Professor' },
            { name: 'Sonia', title: 'Assistant Professor' },
            { name: 'Arunava Poddar', title: 'Assistant Professor' },
            { name: 'Arvind Singh Bisht', title: 'Assistant Professor' },
            { name: 'Kushal Kanwar', title: 'Assistant Professor' },
            { name: 'Bharti Thakur', title: 'Assistant Professor' },
            { name: 'Prachi Agrawal', title: 'Assistant Professor' },
            { name: 'Navsal Kumar', title: 'Assistant Professor' },
            { name: 'Nitin Kumar Sharma', title: 'Assistant Professor' },
            { name: 'Rahul Chandel', title: 'Assistant Professor' },
            { name: 'Ishani Sharma', title: 'Assistant Professor' },
            { name: 'Maya Thapa', title: 'Assistant Professor' },
            { name: 'Piyush Sewal', title: 'Assistant Professor' },
            { name: 'Kanika', title: 'Assistant Professor' }
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

});