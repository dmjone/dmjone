// // shuffle helper
// const shuffle = a => {
//     for (let i = a.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [a[i], a[j]] = [a[j], a[i]];
//     }
//     return a;
// };

// const students = ((arr) => {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// })([
//     { name: "Aarushi", id: "GF202217642" },
//     { name: "Aaryan Kathuga", id: "GF202219013" },
//     { name: "abhay chandel", id: "GF202217661" },
//     { name: "Abhay sharma", id: "GF202218683" },
//     { name: "Abhishek", id: "GF202219716" },
//     { name: "Adarsh choudhary", id: "GF202216680" },
//     { name: "Adarsh Kumar", id: "GF202218941" },
//     { name: "Adarsh sharma", id: "GF202215162" },
//     { name: "Adarsh verma", id: "GF202349954" },
//     { name: "Aditya Thakur", id: "GF202218718" },
//     { name: "Aerish Verma", id: "GF202217911" },
//     { name: "Akanksha", id: "GF202217069" },
//     { name: "Akash", id: "GF202218465" },
//     { name: "Akshat Tiwari", id: "GF202217215" },
//     { name: "Akshit", id: "GF202215081" },
//     { name: "Akshit", id: "GF202220189" },
//     { name: "Akshit Thakur", id: "GF202220107" },
//     { name: "Aman Thakur", id: "GF202216027" },
//     { name: "Amandeep kumar", id: "GF202219136" },
//     { name: "Amogh Thakur", id: "GF202340427" },
//     { name: "Anant Chaudhary", id: "GF202217577" },
//     { name: "Anish", id: "GF202216452" },
//     { name: "Ankit Saini", id: "GF202215717" },
//     { name: "Ansh", id: "GF202215982" },
//     { name: "Ansh Bisht", id: "GF202219995" },
//     { name: "Ansh Thakur", id: "GF202219910" },
//     { name: "Anshika Bhuria", id: "GF202213991" },
//     { name: "Anshuman Mohanty", id: "GF202217744" },
//     { name: "Anugraha Tamang", id: "GF202216959" },
//     { name: "Anuj kumar", id: "GF202214751" },
//     { name: "Anurag", id: "GF202218710" },
//     { name: "Aritra Mondal", id: "GF202216884" },
//     { name: "Armaan Gautam", id: "GF202219099" },
//     { name: "Arpit", id: "GF202214861" },
//     { name: "Arpit Bhardwaj", id: "GF202216002" },
//     { name: "Arpit Singh Dhillon", id: "GF202219588" },
//     { name: "Aryan Sharma", id: "GF202218457" },
//     { name: "Aryan Thakur", id: "GF202218659" },
//     { name: "Ashutosh Rana", id: "GF202221023" },
//     { name: "Asmi goyal", id: "GF202218101" },
//     { name: "Astha Chandel", id: "GF202214559" },
//     { name: "Atul Chauhan", id: "GF202216859" },
//     { name: "Ayush", id: "GF202215719" },
//     { name: "Bhavishya Sharma", id: "GF202220590" },
//     { name: "Chirag pal", id: "GF202216782" },
//     { name: "Debajyoti Bhowmik", id: "GF202216426" },
//     { name: "Devyani", id: "GF202218776" },
//     { name: "Devyansh Pawar", id: "GF202344200" },
//     { name: "Dhaneshwar Singh", id: "GF202220123" },
//     { name: "Divya Mohan", id: "GF202214698" },
//     { name: "Divyanshu", id: "GF202218328" },
//     { name: "Harman Rana", id: "GF202218756" },
//     { name: "Harsh Kanwar", id: "GF202215401" },
//     { name: "Nitin Thakur", id: "GF202216583" },
//     { name: "Harsh Pathania", id: "GF202219897" },
//     { name: "Harshal Khajuria", id: "GF202218277" },
//     { name: "Harshit sharma", id: "GF202215237" },
//     { name: "Himanshi Verma", id: "GF202215904" },
//     { name: "Nityam Sharma", id: "GF202218795" },
//     { name: "Ivaan Ipsa Kundu", id: "GF202216775" },
//     { name: "Jamuna Rai", id: "GF202218652" },
//     { name: "Jasleen", id: "GF202217023" },
//     { name: "Jasmeen Sharma", id: "GF202217536" },
//     { name: "Jaspreet Singh", id: "GF202217952" },
//     { name: "JATIN", id: "GF202219717" },
//     { name: "Kamaksha dogra", id: "GF202218486" },
//     { name: "Kaustuv Sharma", id: "GF202218455" },
//     { name: "Krish Saini", id: "GF202216008" },
//     { name: "Kritika Lamba", id: "GF202220345" },
//     { name: "parixit sharma", id: "GF202217428" },
//     { name: "Kshitij Shankar Kulal", id: "GF202214673" },
//     { name: "Kumkum", id: "GF202220969" },
//     { name: "Lakshay Sharma", id: "GF202216641" },
//     { name: "Lakshika", id: "GF202220476" },
//     { name: "Lavanya", id: "GF202217875" },
//     { name: "Manasdeep", id: "GF202219772" },
//     { name: "Manish Kumar", id: "GF202218585" },
//     { name: "Mayank Banga", id: "GF202218364" },
//     { name: "Milli khatri", id: "GF202218910" },
//     { name: "MOHD SHAMMAD", id: "GF202219177" },
//     { name: "Naman Sharma", id: "GF202215980" },
//     { name: "Naveen Chauhan", id: "GF202218643" },
//     { name: "Nikita sharma", id: "GF202218595" },
//     { name: "Nisha kumari", id: "GF202220815" },
//     { name: "Palak Thakur", id: "GF202219794" },
//     { name: "Paras Chauhan", id: "GF202216945" },
//     { name: "Parshav Pathania", id: "GF202219568" },
//     { name: "PIYUSH BANER", id: "GF202217706" },
//     { name: "Piyush Sharma", id: "GF202218943" },
//     { name: "Piyush Snate", id: "GF202217922" },
//     { name: "Prabhakar Lal", id: "GF202218129" },
//     { name: "Pranjal Chauhan", id: "GF202215557" },
//     { name: "Pratham", id: "GF202216921" },
//     { name: "Prikshit Thakur", id: "GF202216395" },
//     { name: "Prithak Thapa", id: "IN/2022/1191" },
//     { name: "Radhe Garg", id: "GF202218040" },
//     { name: "Radhika Kanwar", id: "GF202344308" },
//     { name: "Raja Babu Jamatia", id: "GF202347734" },
//     { name: "RAJAT BHATNAGAR", id: "GF202213862" },
//     { name: "Raksha", id: "GF202346910" },
//     { name: "Rameshwar Katoch", id: "GF202216821" },
//     { name: "Ranish goyal", id: "GF202217662" },
//     { name: "Ravi Kumar", id: "GF202218734" },
//     { name: "Rehan Haque", id: "GF202220756" },
//     { name: "Riddhi sahu", id: "GF202220064" },
//     { name: "Rijul chaudhary", id: "GF202218418" },
//     { name: "Rishu Kumar gupta", id: "GF202216818" },
//     { name: "Ritik Saini", id: "GF202215284" },
//     { name: "Riyant Thakur", id: "GF202215973" },
//     { name: "Rohit Dhiman", id: "GF202219890" },
//     { name: "Rohit Kumar", id: "GF202220522" },
//     { name: "Rohit Mehta", id: "GF202216619" },
//     { name: "Saksham Awasthi", id: "GF202219306" },
//     { name: "SAKSHI KHACHARIYA", id: "GF202218711" },
//     { name: "Samarth Singh", id: "GF202341183" },
//     { name: "Satyam Tripathi", id: "GF202218625" },
//     { name: "Saurav Thakur", id: "GF202220516" },
//     { name: "Shambhav Chhetri", id: "GF202213793" },
//     { name: "Shivam Garg", id: "GF202215586" },
//     { name: "Shivam Sharma", id: "GF202218544" },
//     { name: "Shreshth Srivastav", id: "GF202218982" },
//     { name: "Shruti", id: "GF202219655" },
//     { name: "Shruti Thakur", id: "GF202218590" },
//     { name: "Siddharth pandoh", id: "GF202350614" },
//     { name: "Siddharth Singh Markam", id: "GF202218839" },
//     { name: "Singh Rishabh Ajit", id: "GF202344756" },
//     { name: "Sooraj", id: "GF202217243" },
//     { name: "Soveer Shah", id: "GF202213662" },
//     { name: "Subhojeet ghosh", id: "GF202347000" },
//     { name: "Sujal Jaganbal", id: "GF202214891" },
//     { name: "Sukham preet", id: "IN/2022/1052" },
//     { name: "Sushant Tomar", id: "GF202216843" },
//     { name: "Syed Mohammad wajahat tahir", id: "GF202218362" },
//     { name: "Tanshil Tigran", id: "GF202219644" },
//     { name: "Tanya Puri", id: "GF202219386" },
//     { name: "Tarun kumar", id: "GF202214708" },
//     { name: "Vansh malik", id: "GF202218880" },
//     { name: "Vanshika Painuly", id: "GF202215303" },
//     { name: "Vanshika Sharma", id: "GF202218737" },
//     { name: "VEDANSH SHARMA", id: "GF202218482" },
//     { name: "Vibhav Singh", id: "GF202218143" },
//     { name: "Vidya Parmar", id: "GF202215292" },
//     { name: "Vinayak Awasthi", id: "GF202218584" },
//     { name: "Vineet Dhiman", id: "GF202218953" },
//     { name: "Vipul Verma", id: "GF202214829" },
//     { name: "Yatharth Saroha", id: "GF202219757" },
//     { name: "Yuvraj Kumar", id: "GF202350495" }
// ]);

// const attStatus = Array(students.length).fill('blank'); // "blank" | "present" | "absent"

// // count how many share the same first name
// const firstNameCount = students.reduce((acc, s) => {
//     const fn = s.name.split(' ')[0];
//     acc[fn] = (acc[fn] || 0) + 1;
//     return acc;
// }, {});

// let voices = [];
// function loadVoices() {
//     voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
// }
// speechSynthesis.onvoiceschanged = loadVoices;
// loadVoices();
// function getNaturalVoice() {
//     return voices.find(v => v.lang === 'en-IN')
//         || voices.find(v => v.name.includes('Google US English') && v.lang === 'en-US')
//         || voices.find(v => v.lang === 'en-US')
//         || null;
// }

// const nameCount = students.reduce((acc, s) => {
//     acc[s.name] = (acc[s.name] || 0) + 1; return acc;
// }, {});

// document.getElementById('date').textContent = new Date().toLocaleDateString();

// // const container = document.getElementById('students');
// // const absentSet = new Set();
// // const tiles = [];
// // students.forEach((s, i) => {
// //     const tile = document.createElement('div');
// //     tile.className = 'student';
// //     tile.textContent = `${s.name} - ${s.id}`;
// //     tile.onclick = () => {
// //         if (absentSet.has(i)) {
// //             absentSet.delete(i); tile.classList.remove('absent');
// //         } else {
// //             absentSet.add(i); tile.classList.add('absent');
// //         }
// //     };
// //     container.appendChild(tile);
// //     tiles.push(tile);
// // });

// const container = document.getElementById('students');
// const tiles = students.map((s, i) => {
//     const tile = document.createElement('div');
//     tile.className = 'student';
//     tile.textContent = `${s.name} — ${s.id}`;
//     container.appendChild(tile);

//     tile.addEventListener('click', () => {
//         // Manual toggle absent ↔ blank
//         if (attStatus[i] === 'absent') {
//             attStatus[i] = 'blank';
//             tile.classList.remove('absent');
//         } else {
//             attStatus[i] = 'absent';
//             tile.classList.remove('present');
//             tile.classList.add('absent');
//         }
//     });

//     return tile;
// });

// // speak first name, but if that first name appears >1× anywhere, append last 4 of ID
// function speakAndWait(s, cb) {
//     const first = s.name.split(' ')[0];
//     let utterText = first;
//     if (firstNameCount[first] > 1) {
//         utterText += ` ${s.id.slice(-4)}`;
//     }
//     if ('speechSynthesis' in window) {
//         const u = new SpeechSynthesisUtterance(utterText);
//         const v = getNaturalVoice();
//         if (v) u.voice = v;
//         u.lang = v?.lang || 'en-IN';
//         u.rate = 1.5;
//         u.pitch = 1.05;
//         u.onend = () => setTimeout(cb, 500);
//         speechSynthesis.speak(u);
//     } else {
//         setTimeout(cb, 500);
//     }
// }

// // let currentIndex = -1;
// // document.getElementById('rollcall').onclick = () => {
// //     currentIndex = 0;
// //     tiles.forEach(t => t.classList.remove('current'));
// //     (function next() {
// //         if (currentIndex > 0) tiles[currentIndex - 1].classList.remove('current');
// //         if (currentIndex < tiles.length) {
// //             tiles[currentIndex].classList.add('current');
// //             speakAndWait(students[currentIndex], () => { currentIndex++; next(); });
// //         } else currentIndex = -1;
// //     })();
// // };

// // inside your roll-call onclick handler, replace the next() function with:

// // document.getElementById('rollcall').onclick = () => {
// //     currentIndex = 0;
// //     tiles.forEach(t => t.classList.remove('current'));
// //     (function next() {
// //         // handle previous
// //         if (currentIndex > 0) {
// //             const prev = tiles[currentIndex - 1];
// //             prev.classList.remove('current');
// //             // if not marked absent, mark present
// //             if (!absentSet.has(currentIndex - 1)) {
// //                 prev.classList.add('present');
// //             }
// //         }
// //         // advance
// //         if (currentIndex < tiles.length) {
// //             const curr = tiles[currentIndex];
// //             curr.classList.remove('present');       // clear any leftover present
// //             curr.classList.add('current');
// //             speakAndWait(students[currentIndex], () => {
// //                 currentIndex++;
// //                 next();
// //             });
// //         } else {
// //             currentIndex = -1;
// //         }
// //     })();
// // };


// let currentIndex = -1;
// document.getElementById('rollcall').onclick = () => {
//     currentIndex = 0;
//     tiles.forEach(t => t.classList.remove('current', 'present'));

//     (function next() {
//         if (currentIndex > 0) {
//             const prevIdx = currentIndex - 1;
//             const prevTile = tiles[prevIdx];
//             prevTile.classList.remove('current');
//             if (attStatus[prevIdx] !== 'absent') {
//                 attStatus[prevIdx] = 'present';
//                 prevTile.classList.add('present');
//             }
//         }

//         if (currentIndex < tiles.length) {
//             const currTile = tiles[currentIndex];
//             currTile.classList.add('current');
//             speakAndWait(students[currentIndex], () => {
//                 currentIndex++;
//                 next();
//             });
//         } else {
//             currentIndex = -1;
//         }
//     })();
// };

// document.addEventListener('keydown', e => {
//     if (e.key === 'Enter' && currentIndex > 0) tiles[currentIndex].click();
// });


// // document.getElementById('generate').onclick = () => {
// //     const data = students.map((s, i) => ({
// //         name: s.name, id: s.id,
// //         status: absentSet.has(i) ? 'A' : 'P'
// //     }));
// //     data.sort((a, b) => a.name.localeCompare(b.name));
// //     const wb = XLSX.utils.book_new();
// //     const header = ['Name', 'ID', document.getElementById('date').textContent];
// //     const rows = data.map(d => [d.name, d.id, d.status]);
// //     const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
// //     XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
// //     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
// //     saveAs(new Blob([wbout], { type: 'application/octet-stream' }),
// //         `Attendance_${document.getElementById('date').textContent.replace(/\//g, '-')}.xlsx`);
// // };

// document.getElementById('generate').onclick = () => {
//     const data = students.map((s, i) => ({
//         name: s.name,
//         id: s.id,
//         status: attStatus[i] === 'absent' ? 'A' : 'P'
//     })).sort((a, b) => a.name.localeCompare(b.name));

//     const wb = XLSX.utils.book_new();
//     const header = ['Name', 'ID', document.getElementById('date').textContent];
//     const rows = data.map(d => [d.name, d.id, d.status]);
//     const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
//     XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
//     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     saveAs(new Blob([wbout], { type: 'application/octet-stream' }),
//         `Attendance_${document.getElementById('date').textContent.replace(/\//g, '-')}.xlsx`);
// };



// 1. Shuffle helper
const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

function titleCase(fullName) {
    return fullName
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
  }

const officialRollOrder = [
    "GF202217642", "GF202219013", "GF202217661", "GF202218683", "GF202219716",
    "GF202216680", "GF202218941", "GF202215162", "GF202349954", "GF202218718",
    "GF202217911", "GF202217069", "GF202218465", "GF202217215", "GF202215081",
    "GF202220189", "GF202220107", "GF202216027", "GF202219136", "GF202340427",
    "GF202217577", "GF202216452", "GF202215717", "GF202215982", "GF202219995",
    "GF202219910", "GF202213991", "GF202217744", "GF202216959", "GF202214751",
    "GF202218710", "GF202216884", "GF202219099", "GF202214861", "GF202216002",
    "GF202219588", "GF202218457", "GF202218659", "GF202221023", "GF202218101",
    "GF202214559", "GF202216859", "GF202215719", "GF202220590", "GF202216782",
    "GF202216426", "GF202218776", "GF202344200", "GF202220123", "GF202214698",
    "GF202218328", "GF202218756", "GF202215401", "GF202216583", "GF202219897",
    "GF202218277", "GF202215237", "GF202215904", "GF202218795", "GF202216775",
    "GF202218652", "GF202217023", "GF202217536", "GF202217952", "GF202219717",
    "GF202218486", "GF202218455", "GF202216008", "GF202220345", "GF202217428",
    "GF202214673", "GF202220969", "GF202216641", "GF202220476", "GF202217875",
    "GF202219772", "GF202218585", "GF202218364", "GF202218910", "GF202219177",
    "GF202215980", "GF202218643", "GF202218595", "GF202220815", "GF202219794",
    "GF202216945", "GF202219568", "GF202217706", "GF202218943", "GF202217922",
    "GF202218129", "GF202215557", "GF202216921", "GF202216395", "IN20221191",
    "GF202218040", "GF202344308", "GF202347734", "GF202213862", "GF202346910",
    "GF202216821", "GF202217662", "GF202218734", "GF202220756", "GF202220064",
    "GF202218418", "GF202216818", "GF202215284", "GF202215973", "GF202219890",
    "GF202220522", "GF202216619", "GF202219306", "GF202218711", "GF202341183",
    "GF202218625", "GF202220516", "GF202213793", "GF202215586", "GF202218544",
    "GF202218982", "GF202219655", "GF202218590", "GF202350614", "GF202218839",
    "GF202344756", "GF202217243", "GF202213662", "GF202347000", "GF202214891",
    "IN20221052", "GF202216843", "GF202218362", "GF202219644", "GF202219386",
    "GF202214708", "GF202218880", "GF202215303", "GF202218737", "GF202218482",
    "GF202218143", "GF202215292", "GF202218584", "GF202218953", "GF202214829",
    "GF202219757", "GF202350495"
];

// 2. Students (shuffled once)
const students = shuffle([
    { name: "Aarushi", id: "GF202217642" },
    { name: "Aaryan Kathuga", id: "GF202219013" },
    { name: "Abhay Chandel", id: "GF202217661" },
    { name: "Abhay Sharma", id: "GF202218683" },
    { name: "Abhishek", id: "GF202219716" },
    { name: "Adarsh Choudhary", id: "GF202216680" },
    { name: "Adarsh Kumar", id: "GF202218941" },
    { name: "Adarsh Sharma", id: "GF202215162" },
    { name: "Adarsh Verma", id: "GF202349954" },
    { name: "Aditya Thakur", id: "GF202218718" },
    { name: "Aerish Verma", id: "GF202217911" },
    { name: "Akanksha", id: "GF202217069" },
    { name: "Akash", id: "GF202218465" },
    { name: "Akshat Tiwari", id: "GF202217215" },
    { name: "Akshit", id: "GF202215081" },
    { name: "Akshit", id: "GF202220189" },
    { name: "Akshit Thakur", id: "GF202220107" },
    { name: "Aman Thakur", id: "GF202216027" },
    { name: "Amandeep Kumar", id: "GF202219136" },
    { name: "Amogh Thakur", id: "GF202340427" },
    { name: "Anant Chaudhary", id: "GF202217577" },
    { name: "Anish", id: "GF202216452" },
    { name: "Ankit Saini", id: "GF202215717" },
    { name: "Ansh", id: "GF202215982" },
    { name: "Ansh Bisht", id: "GF202219995" },
    { name: "Ansh Thakur", id: "GF202219910" },
    { name: "Anshika Bhuria", id: "GF202213991" },
    { name: "Anshuman Mohanty", id: "GF202217744" },
    { name: "Anugraha Tamang", id: "GF202216959" },
    { name: "Anuj Kumar", id: "GF202214751" },
    { name: "Anurag", id: "GF202218710" },
    { name: "Aritra Mondal", id: "GF202216884" },
    { name: "Armaan Gautam", id: "GF202219099" },
    { name: "Arpit", id: "GF202214861" },
    { name: "Arpit Bhardwaj", id: "GF202216002" },
    { name: "Arpit Singh Dhillon", id: "GF202219588" },
    { name: "Aryan Sharma", id: "GF202218457" },
    { name: "Aryan Thakur", id: "GF202218659" },
    { name: "Ashutosh Rana", id: "GF202221023" },
    { name: "Asmi Goyal", id: "GF202218101" },
    { name: "Astha Chandel", id: "GF202214559" },
    { name: "Atul Chauhan", id: "GF202216859" },
    { name: "Ayush", id: "GF202215719" },
    { name: "Bhavishya Sharma", id: "GF202220590" },
    { name: "Chirag Pal", id: "GF202216782" },
    { name: "Debajyoti Bhowmik", id: "GF202216426" },
    { name: "Devyani", id: "GF202218776" },
    { name: "Devyansh Pawar", id: "GF202344200" },
    { name: "Dhaneshwar Singh", id: "GF202220123" },
    { name: "Divya Mohan", id: "GF202214698" },
    { name: "Divyanshu", id: "GF202218328" },
    { name: "Harman Rana", id: "GF202218756" },
    { name: "Harsh Kanwar", id: "GF202215401" },
    { name: "Nitin Thakur", id: "GF202216583" },
    { name: "Harsh Pathania", id: "GF202219897" },
    { name: "Harshal Khajuria", id: "GF202218277" },
    { name: "Harshit sharma", id: "GF202215237" },
    { name: "Himanshi Verma", id: "GF202215904" },
    { name: "Nityam Sharma", id: "GF202218795" },
    { name: "Ivaan Ipsa Kundu", id: "GF202216775" },
    { name: "Jamuna Rai", id: "GF202218652" },
    { name: "Jasleen", id: "GF202217023" },
    { name: "Jasmeen Sharma", id: "GF202217536" },
    { name: "Jaspreet Singh", id: "GF202217952" },
    { name: "JATIN", id: "GF202219717" },
    { name: "Kamaksha dogra", id: "GF202218486" },
    { name: "Kaustuv Sharma", id: "GF202218455" },
    { name: "Krish Saini", id: "GF202216008" },
    { name: "Kritika Lamba", id: "GF202220345" },
    { name: "parixit sharma", id: "GF202217428" },
    { name: "Kshitij Shankar Kulal", id: "GF202214673" },
    { name: "Kumkum", id: "GF202220969" },
    { name: "Lakshay Sharma", id: "GF202216641" },
    { name: "Lakshika", id: "GF202220476" },
    { name: "Lavanya", id: "GF202217875" },
    { name: "Manasdeep", id: "GF202219772" },
    { name: "Manish Kumar", id: "GF202218585" },
    { name: "Mayank Banga", id: "GF202218364" },
    { name: "Milli khatri", id: "GF202218910" },
    { name: "MOHD SHAMMAD", id: "GF202219177" },
    { name: "Naman Sharma", id: "GF202215980" },
    { name: "Naveen Chauhan", id: "GF202218643" },
    { name: "Nikita sharma", id: "GF202218595" },
    { name: "Nisha kumari", id: "GF202220815" },
    { name: "Palak Thakur", id: "GF202219794" },
    { name: "Paras Chauhan", id: "GF202216945" },
    { name: "Parshav Pathania", id: "GF202219568" },
    { name: "PIYUSH BANER", id: "GF202217706" },
    { name: "Piyush Sharma", id: "GF202218943" },
    { name: "Piyush Snate", id: "GF202217922" },
    { name: "Prabhakar Lal", id: "GF202218129" },
    { name: "Pranjal Chauhan", id: "GF202215557" },
    { name: "Pratham", id: "GF202216921" },
    { name: "Prikshit Thakur", id: "GF202216395" },
    { name: "Prithak Thapa", id: "IN/2022/1191" },
    { name: "Radhe Garg", id: "GF202218040" },
    { name: "Radhika Kanwar", id: "GF202344308" },
    { name: "Raja Babu Jamatia", id: "GF202347734" },
    { name: "RAJAT BHATNAGAR", id: "GF202213862" },
    { name: "Raksha", id: "GF202346910" },
    { name: "Rameshwar Katoch", id: "GF202216821" },
    { name: "Ranish goyal", id: "GF202217662" },
    { name: "Ravi Kumar", id: "GF202218734" },
    { name: "Rehan Haque", id: "GF202220756" },
    { name: "Riddhi sahu", id: "GF202220064" },
    { name: "Rijul chaudhary", id: "GF202218418" },
    { name: "Rishu Kumar gupta", id: "GF202216818" },
    { name: "Ritik Saini", id: "GF202215284" },
    { name: "Riyant Thakur", id: "GF202215973" },
    { name: "Rohit Dhiman", id: "GF202219890" },
    { name: "Rohit Kumar", id: "GF202220522" },
    { name: "Rohit Mehta", id: "GF202216619" },
    { name: "Saksham Awasthi", id: "GF202219306" },
    { name: "SAKSHI KHACHARIYA", id: "GF202218711" },
    { name: "Samarth Singh", id: "GF202341183" },
    { name: "Satyam Tripathi", id: "GF202218625" },
    { name: "Saurav Thakur", id: "GF202220516" },
    { name: "Shambhav Chhetri", id: "GF202213793" },
    { name: "Shivam Garg", id: "GF202215586" },
    { name: "Shivam Sharma", id: "GF202218544" },
    { name: "Shreshth Srivastav", id: "GF202218982" },
    { name: "Shruti", id: "GF202219655" },
    { name: "Shruti Thakur", id: "GF202218590" },
    { name: "Siddharth pandoh", id: "GF202350614" },
    { name: "Siddharth Singh Markam", id: "GF202218839" },
    { name: "Singh Rishabh Ajit", id: "GF202344756" },
    { name: "Sooraj", id: "GF202217243" },
    { name: "Soveer Shah", id: "GF202213662" },
    { name: "Subhojeet ghosh", id: "GF202347000" },
    { name: "Sujal Jaganbal", id: "GF202214891" },
    { name: "Sukham preet", id: "IN/2022/1052" },
    { name: "Sushant Tomar", id: "GF202216843" },
    { name: "Syed Mohammad wajahat tahir", id: "GF202218362" },
    { name: "Tanshil Tigran", id: "GF202219644" },
    { name: "Tanya Puri", id: "GF202219386" },
    { name: "Tarun kumar", id: "GF202214708" },
    { name: "Vansh malik", id: "GF202218880" },
    { name: "Vanshika Painuly", id: "GF202215303" },
    { name: "Vanshika Sharma", id: "GF202218737" },
    { name: "VEDANSH SHARMA", id: "GF202218482" },
    { name: "Vibhav Singh", id: "GF202218143" },
    { name: "Vidya Parmar", id: "GF202215292" },
    { name: "Vinayak Awasthi", id: "GF202218584" },
    { name: "Vineet Dhiman", id: "GF202218953" },
    { name: "Vipul Verma", id: "GF202214829" },
    { name: "Yatharth Saroha", id: "GF202219757" },
    { name: "Yuvraj Kumar", id: "GF202350495" }
]);

// 3. Attendance status: 'blank' | 'present' | 'absent'
const attStatus = Array(students.length).fill('blank');

// 4. Count duplicates by first name
const firstNameCount = students.reduce((acc, { name }) => {
    const fn = name.split(' ')[0];
    acc[fn] = (acc[fn] || 0) + 1;
    return acc;
}, {});

// 5. Speech synthesis setup
let voices = [];
const loadVoices = () => voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();
const getVoice = () =>
    voices.find(v => v.lang === 'en-IN') ||
    voices.find(v => v.name.includes('Google US English')) ||
    voices.find(v => v.lang === 'en-US') ||
    null;

// 6. Utility: speak first name, append last 4 of ID if duplicate
function speakAndWait({ name, id }, cb) {
    const fn = name.split(' ')[0];
    const text = firstNameCount[fn] > 1 ? `${fn} ${id.slice(-4)}` : fn;
    if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(text);
        const v = getVoice();
        if (v) u.voice = v;
        u.rate = 1.5; u.pitch = 5.05;
        u.onend = () => setTimeout(cb, 500);
        speechSynthesis.speak(u);
    } else setTimeout(cb, 500);
}

// 7. Render date
document.getElementById('date').textContent = new Date().toLocaleDateString();

// 8. Create and render tiles with click-to-toggle-absent
const container = document.getElementById('students');
const tiles = students.map((s, i) => {
    const d = document.createElement('div');
    d.className = 'student';
    d.textContent = `${s.name} — ${s.id}`;
    d.addEventListener('click', () => {
        if (attStatus[i] === 'absent') {
            attStatus[i] = 'blank';
            d.classList.remove('absent');
        } else {
            attStatus[i] = 'absent';
            d.classList.remove('present');
            d.classList.add('absent');
        }
    });
    container.appendChild(d);
    return d;
});

// 9. Roll-call: auto-mark present on advance
let idx = -1;
document.getElementById('rollcall').onclick = () => {
    idx = 0;
    tiles.forEach(t => t.classList.remove('current', 'present'));
    (function next() {
        if (idx > 0) {
            const prev = tiles[idx - 1];
            prev.classList.remove('current');
            if (attStatus[idx - 1] !== 'absent') {
                attStatus[idx - 1] = 'present';
                prev.classList.add('present');
            }
        }
        if (idx < tiles.length) {
            const cur = tiles[idx];
            cur.classList.add('current');
            speakAndWait(students[idx], () => { idx++; next(); });
        } else {
            idx = -1;
        }
    })();
};

// 10. Enter = mark highlighted absent
document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && idx > 0) {
        tiles[idx - 1].click();
    }
});

// 11. Generate Excel (alphabetical by name)
document.getElementById('generate').onclick = () => {
    // const data = students.map((s, i) => ({
    //     name: s.name,
    //     id: s.id,
    //     status: attStatus[i] === 'absent' ? 'A' : attStatus[i] === 'present' ? 'P' : ''
    // }))
    //     .sort((a, b) => a.name.localeCompare(b.name));

    const data = students.map((s, i) => ({
        name: titleCase(s.name),
        id: s.id,
        status: attStatus[i] === 'absent' ? 'A' : attStatus[i] === 'present' ? 'P' : ''
    }))
        .sort((a, b) =>
            officialRollOrder.indexOf(a.id) - officialRollOrder.indexOf(b.id)
        );


    const wb = XLSX.utils.book_new();
    const header = ['Name', 'ID', document.getElementById('date').textContent];
    const ws = XLSX.utils.aoa_to_sheet([
        header,
        ...data.map(d => [d.name, d.id, d.status])
    ]);
    XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
    const out = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([out], { type: 'application/octet-stream' }),
        `Attendance_${document.getElementById('date').textContent.replace(/\//g, '-')}.xlsx`);
};
