// All Hierarchial Data under edu/su/
const arr_author = {
    dm: {
        name: "Er. Divya Mohan",
        bio: "<p>Er. Divya Mohan is a driven computer science student from India, pursuing his B.Tech in Computer Science and Engineering. With a unique approach to teaching, he breaks down complex concepts into simple, digestible chunks to make tech accessible to all learners. Dedicated to delivering top-quality results, Divya is fueled by his passion for technology and education, constantly striving to improve his skills and make an impact in the field.</p>",
        href: "contact@dmj.one"
    },
    vp: {
        name: "Vanshika Painuly",
        bio: "<p>Vanshika Painuly is a computer science student from Uttrakhand, India, pursuing her B.Tech degree. She has a knack for making technical information easily accessible to learners, breaking down complex concepts into clear, understandable chunks. Vanshika's passion for technology and education drives her to deliver outstanding results, and she is dedicated to continuously improving her skills in the field.</p>",
        href: "vp@dmj.one"
    },
    harshal: {
        name: "Harshal Khajuria",
        bio: "<p>Harshal Khajuria is currently a student of Shoolini University pursuing B.Tech Cyber Security</p>",
        href: "harshalkotakhajuria@gmail.com"
    },
    shreshth: {
        name: "Shreshth Srivastav",
        bio: "<p>Shreshth Srivastav is a focused student from India, currently advancing in his Bachelor's degree in Computer Science and Engineering. He is a dedicated CSE student who takes pleasure in coding and generating inventive solutions to address real-world problems.</p>",
        href: "contact@dmj.one"
    },
    asmi: {
        name: "Asmi Goyal",
        bio: "<p>Asmi Goyal is an up-and-coming technology enthusiast and computer science student from India. With a passion for innovation, she spends her time exploring new ways to utilize technology to transform the world. Through hard work and dedication, she has developed a strong foundation in coding and is committed to utilizing her skills to create meaningful solutions to complex problems.</p>",
        href: "contact@dmj.one"
    },
    vinayak: {
        name: "Vinayak Awasthi",
        bio: "<p>Vinayak Awasti is a student from India who is currently pursuing his Bachelor's degree in Computer Science and Engineering. He is a dedicated CSE student who enjoys coding and developing innovative solutions to real-world problems.</p>",
        href: "contact@dmj.one"
    },
    prithak: {
        name: "Prithak Thapa",
        bio: "<p>Prithak is a student from Nepal who is currently pursuing a Bachelor's degree in Computer Science and Engineering at Shoolini University in India. As a CSE student, he is passionate about programming and enjoys building projects that utilize cutting-edge technologies to solve complex problems.</p>",
        href: "contact@dmj.one"
    },
};

function processAuthors(args) {
    let authorTextArr = [];
    args = args.length === 0 ? ["dm"] : args;
    let author, author_href, author_bio = "";
    for (let i = 0; i < args.length; i++) {
        if (arr_author[args[i]]) {
            author = arr_author[args[i]].name;
            author_href = arr_author[args[i]].href;
            author_bio += arr_author[args[i]].bio;
        } else {
            author = args[i];
            author_href = args[i + 1];
            author_bio += `<p>${args[i + 2]}</p>`;
            i += 2;
        }
        authorTextArr.push(author, author_href);
    }
    return {
        pA_author: head_FormatAuthor(...authorTextArr),
        pA_bio: author_bio
    };
}

// Use this to store common variables. Stritcly use var.js for major strings as storing here will cause file size to be massive. Refer ~dmj/invoices/ for version 1.0
(function () {
    let cryptojs_enc_map = {
        "edu": {
            "su": {
                "url1": "data1"
            }
        },
        "datsw2": {
            "sdddf": "data2"
        },
        "~dmj": {
            "invoices": {
                "hp-del": "data"
            }
        }
    }

    let i = 1;
    let current_map = cryptojs_enc_map;
    // while (current_map = current_map[window[`urlpart${i}`]?.replace('.html', '')]) {
    //     i++;
    //     if (typeof current_map === "string") {
    //         // cryptojs_enc_data = current_map;
    //         // console.log('cryptojs_enc_data:', current_map);
    //         return;
    //     }
    // }
})();



const arr_prof = {
    edu: {
        su: {
            course: {
                csu1128: {
                    prof: "Dr. Pankaj Vaidya",
                    prof_bio: "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>",
                    prof_href: "pankaj.vaidya@shooliniuniversity.com",
                    course: "CSU1128",
                    course_detail: "Logic Building with Computer Programming"
                },
                csu1128p: {
                    prof: "Dr. Pankaj Vaidya",
                    prof_bio: "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>",
                    prof_href: "pankaj.vaidya@shooliniuniversity.com",
                    course: "CSU1128(P)",
                    course_detail: "Logic Building with Computer Programming Lab"
                },
                csu953: {
                    prof: "Dr. Bharti Thakur",
                    prof_bio: "<p>Bharti Thakur is an Assistant Professor at the Yogananda School of Artificial Intelligence, Computing and Data Science, Shoolini University of Biotechnology and Management Sciences, Solan (HP) India. She is doing her research on 'Data Mining and Machine Learning'. She holds 10 years of teaching experience.</p>",
                    prof_href: "bhartithakur@shooliniuniversity.com",
                    course: "CSU953",
                    course_detail: "Front End Development Lab"
                },
                fsu030: {
                    prof: "Dr. Pawan Kumar",
                    prof_bio: "Dr. Pawan Kumar is a assistant Professor at Shoolini University. He has more than 20 years of experience in teaching, research, and administration. He completed his Ph.D.in 2019 from Amity University, Noida with the collaboration of Punjab University, Chandigarh. He is currently working on Optical, Thermal and Electrical Properties of Chalcogenide Glasses/Thin Films.</p>",
                    prof_href: "pawankumarsu783@shooliniuniversity.com",
                    course: "FSU030",
                    course_detail: "Engineering Physics"
                },
                csu951: {
                    prof: "Dr. Ravinder Thakur",
                    prof_bio: "<p>Dr. Ravinder Thakur is an assistant professor at Shoolini University.</p>",
                    prof_href: "contact@dmj.one",
                    course: "CSU951",
                    course_detail: "Basic Mathematics"
                },
                csu730: {
                    prof: "Rajesh Williams",
                    prof_bio: "<p>Rajesh Williams is an English Language professional from Faculty of Liberal Arts.</p>",
                    prof_href: "contact@dmj.one",
                    course: "CSU730",
                    course_detail: "Functional English - 1"
                },
                default: {
                    prof: "",
                    prof_bio: "",
                    prof_href: "",
                    course: "Study @ Shoolini University",
                    course_detail: "2026"
                }
            },
            life: {
                events: {
                    details: "test"
                },
                photos: {
                    defaultsd: "testffrd"
                },
                default: {
                    slse: "ds"
                }
            },
            default: {
                prof: "",
                prof_bio: "",
                prof_href: "",
                course: "B. Tech CSE @ Shoolini University",
                course_detail: ""
            }
        }
    }
};
function processFolders() {
}


////////////// VERSION 1.0
/*
function processFolder(allAuthors, author_bio) {
    let prof, prof_href, prof_bio, course, course_detail;
    switch (urlpart1) {
        case "edu":
            switch (urlpart2) {
                case "su":
                    switch (urlpart3) {
                        case "course":
                            switch (urlpart4) {
                                case "csu1128":
                                    prof = "Dr. Pankaj Vaidya";
                                    prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
                                    prof_href = "pankaj.vaidya@shooliniuniversity.com";
                                    course = "CSU1128";
                                    course_detail = "Logic Building with Computer Programming";
                                    break;
                                case "csu1128p":
                                    prof = "Dr. Pankaj Vaidya";
                                    prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
                                    prof_href = "pankaj.vaidya@shooliniuniversity.com";
                                    course = "CSU1128(P)";
                                    course_detail = "Logic Building with Computer Programming Lab";
                                    break;
                                case "csu953":
                                    prof = "Dr. Bharti Thakur";
                                    prof_bio = "<p>Bharti Thakur is an Assistant Professor at the Yogananda School of Artificial Intelligence, Computing and Data Science, Shoolini University of Biotechnology and Management Sciences, Solan (HP) India. She is doing her research on ‘Data Mining and Machine Learning’. She holds 10 years of teaching experience.</p>";
                                    prof_href = "bhartithakur@shooliniuniversity.com";
                                    course = "CSU953";
                                    course_detail = "Front End Development Lab";
                                    break;
                                case "fsu030":
                                    prof = "Dr. Pawan Kumar";
                                    prof_bio = "<p>Dr. Pawan Kumar is a assistant Professor at Shoolini University. He has more than 20 years of experience in teaching, research, and administration. He completed his Ph.D.in 2019 from Amity University, Noida with the collaboration of Punjab University, Chandigarh. He is currently working on Optical, Thermal and Electrical Properties of Chalcogenide Glasses/Thin Films.</p>";
                                    prof_href = "pawankumarsu783@shooliniuniversity.com";
                                    course = "FSU030";
                                    course_detail = "Engineering Physics";
                                    break;
                                case "csu951":
                                    prof = "Dr. Ravinder Thakur";
                                    prof_bio = "<p>Dr. Ravinder Thakur is an assistant professor at Shoolini University.</p>";
                                    prof_href = "ravinderthakur@shooliniuniversity.com";
                                    prof_href += "?subject=Want%20to%20contact%20Dr.%20Ravinder%20Thakur&body=Hello%2C%20I%20want%20to%20contact%20Dr.%20Ravinder%20Thakur.%20Please%20provide%20his%20contact%20details.%0AThanks";
                                    course = "CSU951";
                                    course_detail = "Basic Mathematics";
                                    break;
                                case "csu730":
                                    prof = "Rajesh Williams";
                                    prof_bio = "<p>Rajesh Williams is an English Language professional from Faculty of Liberal Arts.</p>";
                                    prof_href = "contact@dmj.one";
                                    prof_href += "?subject=Want%20to%20contact%20Dr.%20Ravinder%20Thakur&body=Hello%2C%20I%20want%20to%20contact%20Rajesh%20Williams.%20Please%20provide%20his%20contact%20details.%0AThanks";
                                    course = "CSU730";
                                    course_detail = "Functional English - 1";
                                    break;
                                case "csu585":
                                    prof = "Dr. Ruchika Sharma";
                                    prof_bio = "<p>Dr. Ruchika Sharma is an assistant professor at Shoolini University.</p>";
                                    prof_href = "ruchika@shooliniuniversity.com";
                                    course = "CSU585";
                                    course_detail = "Design Thinking";
                                    break;
                                case "csu1287":
                                    prof = "Dr. Pankaj Vaidya";
                                    prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
                                    prof_href = "pankaj.vaidya@shooliniuniversity.com";
                                    course = "CSU1287";
                                    course_detail = "OOPS Using C++ Language";
                                    break;
                                case "csu1287p":
                                    prof = "Dr. Pankaj Vaidya";
                                    prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
                                    prof_href = "pankaj.vaidya@shooliniuniversity.com";
                                    course = "CSU1287p";
                                    course_detail = "OOPS Using C++ Language Lab";
                                    break;
                                case "csu1289":
                                    switch (urlpart5) {
                                        case 'lab':
                                            prof = "Abhishek Tomar";
                                            prof_bio = "<p>Abhishek Tomar is an assistant professor at Shoolini University.</p>";
                                            prof_href = "abhishektomar@shooliniuniversity.com";
                                            course = "CSU1289P";
                                            course_detail = "Digital Electronics Lab";
                                            break;
                                        default:
                                            prof = "Dr. Brij Bhushan Sharma";
                                            prof_bio = "<p>Dr. Brij Bhushan Sharma has an M Tech in Electronics and Communication (2015) and is pursuing a PhD in Smart Agriculture. He has 8 years of teaching experience and has contributed to numerous academic publications. His research focuses on developing an IoT-based Indirect Solar Dryer and a digital system to check soil fertility using AI.</p>";
                                            prof_href = "brijbhushansharma@shooliniouniversity.com";
                                            course = "CSU1289";
                                            course_detail = "Digital Electronics";
                                            break;
                                    }
                                    break;
                                case "fsu013":
                                    prof = "Dr. Ravinder Thakur";
                                    prof_bio = "<p>Dr. Ravinder Thakur is an assistant professor at Shoolini University.</p>";
                                    prof_href = "ravinderthakur@shooliniuniversity.com";
                                    course = "FSU013";
                                    course_detail = "Advanced Mathematics";
                                    break;
                                case "seaws002":
                                    prof = "Ms. Sakshi Gautam";
                                    prof_bio = "<p>Ms. Sakshi Gautam is an assistant professor at Shoolini University.</p>";
                                    prof_href = "contact@dmj.one";
                                    course = "SEA-WS002";
                                    course_detail = "English Writing Seminar";
                                    break;
                                case "seaap002":
                                    prof = "Mr. Raghav Sharma";
                                    prof_bio = "<p>Mr. Raghav Sharma is an assistant professor at Shoolini University.</p>";
                                    prof_href = "contact@dmj.one";
                                    course = "SEA-AP002";
                                    course_detail = "Aptitude Development Seminar";
                                    break;
                                case "csu1051":
                                    switch (urlpart5) {
                                        case 'lab':
                                            prof = "Aarchit Joshi";
                                            prof_bio = "<p>Aarchit Joshi is an assistant professor at Shoolini University.</p>";
                                            prof_href = "contact@dmj.one";
                                            course = "CSU1051";
                                            course_detail = "Algorithms and Data Structure";
                                            break;
                                        default:
                                            prof = "Dr. Laxman Kathait";
                                            prof_bio = "<p>Dr. Laxman Kathait is an assistant professor at Shoolini University.</p>";
                                            prof_href = "contact@dmj.one";
                                            course = "CSU1051";
                                            course_detail = "Algorithms and Data Structure";
                                            break;
                                    }
                                    break;
                                case "csu083":
                                    prof = "Puneet Kapoor";
                                    prof_bio = "<p>Puneet Kapoor is Computer Science expert, researcher and a senior assistant professor at Shoolini University.</p>";
                                    prof_href = "contact@dmj.one";
                                    course = "CSU083";
                                    course_detail = "Design and Analysis of Algorithm";
                                    break;
                                case "csu1075":
                                    prof = "Dr. Brij Bhushan Sharma";
                                    prof_bio = "<p>Dr. Brij Bhushan Sharma has an M Tech in Electronics and Communication (2015) is an Associate Professor at the Yogananda School of AI, Computer, and Data Science at Shoolini University, and holds a PhD in Smart Agriculture. He has 8 years of teaching experience and has contributed to numerous academic publications. His research focuses on developing an IoT-based Indirect Solar Dryer and a digital system to check soil fertility using AI.</p>";
                                    prof_href = "brijbhushan@shooliniouniversity.com";                                            
                                    course = "CSU1075";
                                    course_detail = "Computer Organization";
                                    break;
                                case "csu1526":
                                    prof = "Dr. Piyush Sewal";
                                    prof_bio = "<p>Dr. Piyush Sewal is an Assistant Professor at the Yogananda School of AI, Computer, and Data Science at Shoolini University, holding a Master's in Computer Applications from HP University, Shimla, and currently pursuing a PhD in Data Science at JP University of Information Technology. His expertise lies in machine learning, distributed data processing, and in-memory computation frameworks. Sewal has passed the UGC National Eligibility Test for Computer Science and Applications in 2018 and 2019, as well as the HP State Eligibility Test in 2018. He brings over a decade of teaching experience and has imparted knowledge through more than 400 lectures at various institutions and organizations, including Rashtrapati Bhawan and the Army Skill Training Center. Committed to social causes, he has also spearheaded several social awareness initiatives and health-related drives.</p>";
                                    prof_href = "piyushsewal@shooliniouniversity.com";
                                    course = "CSU1526";
                                    course_detail = "Microprocessor and Microcontroller";
                                    break;
                                case "csu1291":
                                    switch (urlpart5) {
                                        case 'practical':
                                            prof = "Dr. Anurag Rana";
                                            prof_bio = "<p>Dr. Anurag Rana is a research scientist and an assistant professor at Shoolini University.</p>";
                                            prof_href = "contact@dmj.one";
                                            course = "CSU1291";
                                            course_detail = "Java Programming";
                                            break;
                                        default:
                                            prof = "Dr. Anurag Rana";
                                            prof_bio = "<p>Dr. Anurag Rana is a research scientist and an assistant professor at Shoolini University.</p>";
                                            prof_href = "contact@dmj.one";
                                            course = "CSU1291";
                                            course_detail = "Java Programming";
                                            break;
                                    }
                                    break;
                                default:
                                    prof = "";
                                    prof_bio = "";
                                    prof_href = "";
                                    course = "Course Selection";
                                    course_detail = "Select a subject below to explore its concepts";
                                    break;
                            }
                            break;
                        case "life":
                            switch (folder) {
                                case "events":
                                    var details = "test";
                                    break;
                                case "photos":
                                    var defaultsd = "testffrd";
                                    break;
                                default:
                                    var slse = "ds";
                                    break;
                            }
                            break;
                        default:
                            prof = "";
                            prof_bio = "";
                            prof_href = "";
                            course = "Educational Initiative In Collaboration with Shoolini University";
                            course_detail = "Education should be free. Our initiative is to educate the section of people who can not access the educational services.";
                            break;
                    }
            }
    }


    var row_button_start = '<div class="row" style="padding-bottom:30px;">';
    var row_button_end = "</div>";
    // Just write the content in the vars
    var csu1128_button = '<div class="col"><a href="/edu/su/course/csu1128/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Logic Building with Computer Programming">CSU1128</button></a></div>';
    var csu1128p_button = '<div class="col"><a href="/edu/su/course/csu1128p/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Logic Building with Computer Programming Lab!">CSU1128(P)</button></a></div>';
    var fsu030_button = "";
    var csu953_button = "";


    // switch the course and store the value in bottons which is then returned to button through arrow function. usage:-  course_code: things to load if that course code matches. 
    const button = (() => {
        const buttons = {
            "": csu1128_button || csu1128p_button ? row_button_start + csu1128_button + csu1128p_button + row_button_end : null,
            "CSU1128": csu1128_button || csu1128p_button ? row_button_start + csu1128_button + csu1128p_button + row_button_end : null,
            "CSU1128(P)": csu1128_button || csu1128p_button ? row_button_start + csu1128_button + csu1128p_button + row_button_end : null,
            "FSU030": fsu030_button ? row_button_start + fsu030_button + row_button_end : null,
            "CSU953": csu953_button ? row_button_start + csu953_button + row_button_end : null
        }
        return buttons[course] || ""
    })();

    // Line 1 - Main Heading
    course_detail = window.location.pathname.split("/")[3] ? " (" + course_detail + ")" : "";
    const line1 = `<h1>${course} ${course_detail}</h1>`;

    // Line 2 - Summary line
    var { pA_author, pA_bio } = processAuthors([prof, prof_href, prof_bio]);
    let allprof = pA_author ? pA_author : "";
    const line2 = getrandomline2(allAuthors, allprof);

    // Line 3 - Biblography
    let profbio = pA_bio;
    profbio = window.location.pathname.split("/")[5] && window.location.pathname.split("/")[5].length ? "" : profbio;
    // author_bio = window.location.pathname.split("/")[5] && window.location.pathname.split("/")[5].length ? "" : author_bio;
    const line3 = profbio + author_bio;

    // Line 4 - Optional with buttons.

    const line4 = generatebutton(course);

    return { line1, line2, line3, line4 };
}
*/

const profDetailsBio = {
    'Dr. Pankaj Vaidya': {
        bio: "<p>Dr. Pankaj Vaidya serves as the Head of the Yogananda School of AI, Computers, and Data Sciences, bringing with him 22 years of teaching experience. His research focuses on the application of Machine Learning in areas such as Drug Discovery and environmental remediation technologies aimed at pollution prevention and control. Dr. Vaidya obtained both his M.Tech (2005) and Ph.D. (2020) in Computer Science Engineering from Shoolini University. His scholarly output includes a variety of international scientific papers and book chapters, alongside books he has both edited and authored, which are published by SCOUPS. Committed to environmental causes, Dr. Vaidya is a nature enthusiast who actively contributes to environmental protection efforts.</p>",
        href: "pankaj.vaidya@shooliniuniversity.com"
    },
    'Dr. Bharti Thakur': {
        bio: "<p>Bharti Thakur is an Assistant Professor at the Yogananda School of Artificial Intelligence, Computing and Data Science, Shoolini University of Biotechnology and Management Sciences, Solan (HP) India. She is doing her research on ‘Data Mining and Machine Learning’. She holds 10 years of teaching experience.</p>",
        href: "bhartithakur@shooliniuniversity.com"
    },
    'Dr. Pawan Kumar': {
        bio: "<p>Dr. Pawan Kumar is a assistant Professor at Shoolini University. He has more than 20 years of experience in teaching, research, and administration. He completed his Ph.D.in 2019 from Amity University, Noida with the collaboration of Punjab University, Chandigarh. He is currently working on Optical, Thermal and Electrical Properties of Chalcogenide Glasses/Thin Films.</p>",
        href: "pawankumarsu783@shooliniuniversity.com"
    },
    'Dr. Ravinder Thakur': {
        bio: "<p>Dr. Ravinder Thakur is an assistant professor at Shoolini University.</p>",
        href: "ravinderthakur@shooliniuniversity.com"
    },
    'Rajesh Williams': {
        bio: "<p>Rajesh Williams is an English Language professional from Faculty of Liberal Arts.</p>",
        href: "contact@dmj.one"
    },
    'Dr. Ruchika Sharma': {
        bio: "<p>Dr. Ruchika Sharma is an assistant professor at Shoolini University.</p>",
        href: "ruchika@shooliniuniversity.com"
    },
    'Dr. Brij Bhushan Sharma': {
        bio: "<p>Dr. Brij Bhushan Sharma has an M Tech in Electronics and Communication (2015) is an Associate Professor at the Yogananda School of AI, Computer, and Data Science at Shoolini University, and holds a PhD in Smart Agriculture. He has 8 years of teaching experience and has contributed to numerous academic publications. His research focuses on developing an IoT-based Indirect Solar Dryer and a digital system to check soil fertility using AI.</p>",
        href: "brijbhushan@shooliniouniversity.com"
    },
    'Abhishek Tomar': {
        bio: "<p>Abhishek Tomar is an assistant professor at Shoolini University.</p>",
        href: "abhishektomar@shooliniuniversity.com"
    },
    'Ms. Sakshi Gautam': {
        bio: "<p>Ms. Sakshi Gautam is an assistant professor at Shoolini University.</p>",
        href: "contact@dmj.one"
    },
    'Mr. Raghav Sharma': {
        bio: "<p>Mr. Raghav Sharma is an assistant professor at Shoolini University.</p>",
        href: "contact@dmj.one"
    },
    'Dr. Laxman Kathait': {
        bio: "<p>Dr. Laxman Kathait is an assistant professor at Shoolini University.</p>",
        href: "contact@dmj.one"
    },
    'Aarchit Joshi': {
        bio: "<p>Aarchit Joshi is an assistant professor at Shoolini University.</p>",
        href: "contact@dmj.one"
    },
    'Dr. Anurag Rana': {
        bio: "<p>Dr. Anurag Rana is a research scientist and an assistant professor at Shoolini University.</p>",
        href: "contact@dmj.one"
    },
    'Puneet Kapoor': {
        bio: "<p>Puneet Kapoor is Computer Science expert, researcher and a senior assistant professor at Shoolini University.</p>",
        href: "contact@dmj.one"
    },
    'Er. Piyush Sewal': {
        bio: "<p>Piyush Sewal is an Assistant Professor at the Yogananda School of AI, Computer, and Data Science at Shoolini University, holding a Master's in Computer Applications from HP University, Shimla, and currently pursuing a PhD in Data Science at JP University of Information Technology. His expertise lies in machine learning, distributed data processing, and in-memory computation frameworks. Sewal has passed the UGC National Eligibility Test for Computer Science and Applications in 2018 and 2019, as well as the HP State Eligibility Test in 2018. He brings over a decade of teaching experience and has imparted knowledge through more than 400 lectures at various institutions and organizations, including Rashtrapati Bhawan and the Army Skill Training Center. Committed to social causes, he has also spearheaded several social awareness initiatives and health-related drives.</p>",
        href: "piyushsewal@shooliniouniversity.com"
    }
};
const courseDetailsMap = {
    'csu1128': { 'default': ["Dr. Pankaj Vaidya", "CSU1128", "Logic Building with Computer Programming"] },
    'csu1128p': { 'default': ["Dr. Pankaj Vaidya", "CSU1128(P)", "Logic Building with Computer Programming Lab"] },
    'csu953': { 'default': ["Dr. Bharti Thakur", "CSU953", "Front End Development Lab"] },
    'fsu030': { 'default': ["Dr. Pawan Kumar", "FSU030", "Engineering Physics"] },
    'csu951': { 'default': ["Dr. Ravinder Thakur", "CSU951", "Basic Mathematics"] },
    'csu730': { 'default': ["Rajesh Williams", "CSU730", "Functional English - 1"] },
    'csu585': { 'default': ["Dr. Ruchika Sharma", "CSU585", "Design Thinking"] },
    'csu1287': { 'default': ["Dr. Pankaj Vaidya", "CSU1287", "OOPS Using C++ Language"] },
    'csu1287p': { 'default': ["Dr. Pankaj Vaidya", "CSU1287p", "OOPS Using C++ Language Lab"] },
    'fsu013': { 'default': ["Dr. Ravinder Thakur", "FSU013", "Advanced Mathematics"] },
    'seaws002': { 'default': ["Ms. Sakshi Gautam", "SEA-WS002", "English Writing Seminar"] },
    'seaap002': { 'default': ["Mr. Raghav Sharma", "SEA-AP002", "Aptitude Development Seminar"] },
    'csu1289': {
        'default': ["Dr. Brij Bhushan Sharma", "CSU1289", "Digital Electronics"],
        'lab': ["Abhishek Tomar", "CSU1289P", "Digital Electronics Lab"]
    },
    'csu1051': {
        'default': ["Dr. Laxman Kathait", "CSU1051", "Algorithms and Data Structure"],
        'lab': ["Aarchit Joshi", "CSU1051", "Algorithms and Data Structure Lab"]
    },
    'csu1291': {
        'default': ["Dr. Anurag Rana", "CSU1291", "Java Programming"],
        'lab': ["Dr. Anurag Rana", "CSU1291", "Java Programming Lab"]
    },
    'csu083': { 'default': ["Puneet Kapoor", "CSU083", "Design and Analysis of Algorithm"] },
    'csu1075': { 'default': ["Dr. Brij Bhushan Sharma", "CSU1075", "Computer Organization"] },
    'csu1526': { 'default': ["Er. Piyush Sewal", "CSU1526", "Microprocessor and Microcontroller"] }
};

///////////////// VERSION 2.0
/* function processFolder(allAuthors, author_bio) {
    let prof, prof_href, prof_bio, course, course_detail; // Variables to hold the course details and professor information    
    switch (urlpart1) {
        case "edu":
            switch (urlpart2) {
                case "su":
                    switch (urlpart3) {
                        case "course":
                            switch (urlpart4) {
                                case "csu1128": case "csu1128p": case "csu1128p": case 'csu953': case 'fsu030': case 'csu951': case 'csu730': case 'csu585': case 'csu1287': case 'csu1287p': case 'fsu013': case 'seaws002': case 'seaap002': case 'csu1289': case "csu1051": case "csu1291": case 'csu083': case 'csu1075': case 'csu1526':
                                    switch (urlpart5) {
                                        case 'practical':
                                        case 'lab':
                                            prof = courseDetailsMap[urlpart4].lab[0];
                                            course = courseDetailsMap[urlpart4].lab[1];
                                            course_detail = courseDetailsMap[urlpart4].lab[2];
                                            console.log(prof);
                                            prof_bio = profDetailsBio[prof].bio;
                                            prof_href = profDetailsBio[prof].href;
                                            break;
                                        default:
                                            prof = courseDetailsMap[urlpart4].default[0];
                                            course = courseDetailsMap[urlpart4].default[1];
                                            course_detail = courseDetailsMap[urlpart4].default[2];
                                            console.log(prof);
                                            prof_bio = profDetailsBio[prof].bio;
                                            prof_href = profDetailsBio[prof].href;
                                            break;
                                    }
                                    break;
                                default:
                                    prof = "";
                                    prof_bio = "";
                                    prof_href = "";
                                    course = "Course Selection";
                                    course_detail = "Select a subject below to explore its concepts";
                                    break;
                            }
                            break;
                        case "life":
                            switch (folder) {
                                case "events":
                                    var details = "test";
                                    break;
                                case "photos":
                                    var defaultsd = "testffrd";
                                    break;
                                default:
                                    var slse = "ds";
                                    break;
                            }
                            break;
                        default:
                            prof = "";
                            prof_bio = "";
                            prof_href = "";
                            course = "Educational Initiative In Collaboration with Shoolini University";
                            course_detail = "Education should be free. Our initiative is to educate the section of people who can not access the educational services.";
                            break;
                    }
                    break;
            }
            break;
    }

    // Now the variables prof, prof_bio, prof_href, course, course_detail are set

    // Line 1 - Main Heading
    course_detail = window.location.pathname.split("/")[3] ? " (" + course_detail + ")" : "";
    const line1 = `<h1>${course} ${course_detail}</h1>`;

    // Line 2 - Summary line
    var { pA_author, pA_bio } = processAuthors([prof, prof_href, prof_bio]);
    let allprof = pA_author ? pA_author : "";
    const line2 = getrandomline2(allAuthors, allprof);

    // Line 3 - Biblography
    let profbio = pA_bio;
    profbio = window.location.pathname.split("/")[5] && window.location.pathname.split("/")[5].length ? "" : profbio;
    // author_bio = window.location.pathname.split("/")[5] && window.location.pathname.split("/")[5].length ? "" : author_bio;
    const line3 = profbio + author_bio;

    // Line 4 - Optional with buttons.
    const line4 = generatebutton(course);

    return { line1, line2, line3, line4 };
}  */

//////////// Version 3.0
function processFolder(allAuthors, author_bio) {
    let prof = "", prof_href = "", prof_bio = "", course = "", course_detail = "";

    const courseTypes = ['practical', 'lab'];

    if (urlpart1 === "edu" && urlpart2 === "su") {
        if (urlpart3 === "course") {
            let courseType = courseTypes.includes(window.location.pathname.split("/")[5]) ? 'lab' : 'default';
            let courseInfo = courseDetailsMap[urlpart4]?.[courseType];
            if (courseInfo) {
                [prof, course, course_detail] = courseInfo;
                let profInfo = profDetailsBio[prof];
                if (profInfo) {
                    prof_bio = profInfo.bio;
                    prof_href = profInfo.href;
                }
            } else {
                course = "Course Selection";
                course_detail = "Select a subject below to explore its concepts";
            }
        } else if (urlpart3 === "life") {
            // Logic for 'life' section, if any
        } else {
            course = "Educational Initiative In Collaboration with Shoolini University";
            course_detail = "Education should be free. Our initiative is to educate the section of people who cannot access the educational services.";
        }
    }

    // Setting up the lines
    course_detail = window.location.pathname.split("/")[3] ? ` (${course_detail})` : "";
    const line1 = `<h1>${course} ${course_detail}</h1>`;
    var { pA_author, pA_bio } = processAuthors([prof, prof_href, prof_bio]);
    console.log(prof, prof_href, prof_bio);
    const line2 = getrandomline2(allAuthors, pA_author ? pA_author : "");
    const line3 = window.location.pathname.split("/")[5]?.length ? author_bio : (pA_bio + author_bio);
    const line4 = generatebutton(course);

    return { line1, line2, line3, line4 };
}



//Main support function for line2
function getrandomline2(allAuthors, allprof) {
    var allauthor = allAuthors;
    var allProf = allprof;
    // const firstPart = [
    //     `Condensed by ${allAuthors}`,
    //     `Compressed by ${allAuthors}`,
    //     `Streamlined by ${allAuthors}`,
    //     `Simplified by ${allAuthors}`,
    //     `Shortened by ${allAuthors}`,
    //     `Concisely articulated by ${allAuthors}`,
    //     `Precisely condensed by ${allAuthors}`,
    //     `Innovatively abbreviated by ${allAuthors}`,
    //     `Creatively summarized by ${allAuthors}`,
    //     `Firmly articulated by ${allAuthors}`,
    //     `Summarized by ${allAuthors}`,
    //     `Distilled by ${allAuthors}`,
    //     `Boiled down by ${allAuthors}`,
    //     `Synopsized by ${allAuthors}`,
    //     `Outlined by ${allAuthors}`,
    //     `Digested by ${allAuthors}`,
    //     `Abridged by ${allAuthors}`,
    //     `Trimmed by ${allAuthors}`,
    //     `Reduced by ${allAuthors}`,
    //     `Briefed by ${allAuthors}`,
    //     `Recapped by ${allAuthors}`,
    //     `Boiled down to essentials by ${allAuthors}`,
    //     `Condensed to key points by ${allAuthors}`,
    //     `Distilled to main ideas by ${allAuthors}`,
    //     `Summed up by ${allAuthors}`,
    //     `Epitomized by ${allAuthors}`,
    //     `Rephrased by ${allAuthors}`,
    //     `Revised by ${allAuthors}`,
    //     `Reformulated by ${allAuthors}`,
    //     `Rephrased for clarity by ${allAuthors}`,
    //     `Condensed and refined by ${allAuthors}`,
    //     `Summarized succinctly by ${allAuthors}`,
    // ];

    // const secondPart = [
    //     ` with ${allprof}'s expertise.`,
    //     ` with guidance from ${allprof}.`,
    //     ` under direction from ${allprof}.`,
    //     ` with ${allprof}'s innovative input.`,
    //     ` through collaboration with ${allprof}.`,
    //     ` with ${allprof}'s guidance.`,
    //     ` with ${allprof}'s expertise.`,
    //     ` under ${allprof}'s supervision.`,
    //     ` with ${allprof}'s input.`,
    //     ` with the guidance of ${allprof}.`,
    //     ` in collaboration with ${allprof}.`,
    //     ` with assistance from ${allprof}.`,
    //     ` under the supervision of ${allprof}.`,
    //     ` with innovative input from ${allprof}.`,
    //     ` with the guidance of ${allprof}.`,
    //     ` under the direction of ${allprof}.`,
    //     ` with expert input from ${allprof}.`,
    //     ` with consultation from ${allprof}.`,
    //     ` with support from ${allprof}.`,
    //     ` with feedback from ${allprof}.`,
    //     ` under the mentorship of ${allprof}.`,
    //     ` with input from ${allprof}.`,
    //     ` with the aid of ${allprof}.`,
    //     ` through collaboration with ${allprof}.`,
    //     ` with innovative thinking from ${allprof}.`,
    //     ` with the guidance of ${allprof}.`,
    //     ` with consultation from ${allprof}.`,
    //     ` with support from ${allprof}.`,
    //     ` with feedback from ${allprof}.`,
    //     ` under the mentorship of ${allprof}.`,
    //     ` with input from ${allprof}.`,
    // ];
    const firstPart = [
        "Condensed",
        "Compressed",
        "Streamlined",
        "Simplified",
        "Shortened",
        "Concisely articulated",
        "Precisely condensed",
        "Innovatively abbreviated",
        "Creatively summarized",
        "Firmly articulated",
        "Summarized",
        "Distilled",
        "Boiled down",
        "Synopsized",
        "Outlined",
        "Digested",
        "Abridged",
        "Trimmed",
        "Reduced",
        "Briefed",
        "Recapped",
        "Boiled down to essentials",
        "Condensed to key points",
        "Distilled to main ideas",
        "Summed up",
        "Epitomized",
        "Rephrased",
        "Revised",
        "Reformulated",
        "Rephrased for clarity",
        "Condensed and refined",
        "Summarized succinctly"
    ];

    const secondPart = [
        `under the guidance of the esteemed ${allProf}.`,
        `with the expertise of the distinguished ${allProf}.`,
        `with direction from the respected ${allProf}.`,
        `with innovative input from the renowned ${allProf}.`,
        `through collaboration with the accomplished ${allProf}.`,
        `under the wise guidance of the esteemed ${allProf}.`,
        `with the masterful expertise of the distinguished ${allProf}.`,
        `with invaluable direction from the respected ${allProf}.`,
        `with insightful input from the renowned ${allProf}.`,
        `in consultation with the accomplished ${allProf}.`,
        `under the skilled mentorship of the esteemed ${allProf}.`,
        `with the experienced guidance of the distinguished ${allProf}.`,
        `with the valuable input of the respected ${allProf}.`,
        `through collaboration with the inspiring ${allProf}.`,
        `under the supportive mentorship of the accomplished ${allProf}.`,
        `with the valuable feedback of the esteemed ${allProf}.`,
        `with the thoughtful consultation of the distinguished ${allProf}.`,
        `with the generous support of the respected ${allProf}.`,
        `through collaboration with the insightful ${allProf}.`,
        `under the expert guidance of the accomplished ${allProf}.`,
        `with the invaluable input of the esteemed ${allProf}.`,
        `under the wise direction of the distinguished ${allProf}.`,
        `with the skilled support of the respected ${allProf}.`,
        `with the inspired input of the accomplished ${allProf}.`,
        `under the experienced mentorship of the esteemed ${allProf}.`,
        `with the helpful guidance of the distinguished ${allProf}.`,
        `with the thoughtful input of the respected ${allProf}.`,
        `through collaboration with the knowledgeable ${allProf}.`,
        `under the generous mentorship of the accomplished ${allProf}.`,
        `with the invaluable feedback of the esteemed ${allProf}.`,
        `with the insightful consultation of the distinguished ${allProf}.`,
        `with the supportive input of the respected ${allProf}.`,
        `with the experienced guidance of the accomplished ${allProf}.`
    ];

    const randomFirstPart = firstPart[Math.floor(Math.random() * firstPart.length)];
    const randomSecondPart = secondPart[Math.floor(Math.random() * secondPart.length)];


    if (allprof) {
        return `<p>${randomFirstPart} by ${allAuthors} ${randomSecondPart}</p>`;
    } else {
        return `<p>${randomFirstPart} by ${allAuthors}</p>`;
    }
}

// Support Function for line 4
function generatebutton(course) {
    // codes
    var row_button_start = '<div class="row" style="padding-bottom:30px;">';
    var row_button_end = "</div>";
    // Just write the content in the vars
    var csu1128_button = '<div class="col"><a href="/edu/su/course/csu1128/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Logic Building with Computer Programming">CSU1128</button></a></div>';
    var csu1128p_button = '<div class="col"><a href="/edu/su/course/csu1128p/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Logic Building with Computer Programming Lab!">CSU1128(P)</button></a></div>';
    var fsu030_button = "";
    var csu953_button = "";

    // switch the course and store the value in bottons which is then returned to button through arrow function. usage:-  course_code: things to load if that course code matches. 
    const button = (() => {
        const buttons = {
            "": csu1128_button || csu1128p_button ? row_button_start + csu1128_button + csu1128p_button + row_button_end : null,
            "CSU1128": csu1128_button || csu1128p_button ? row_button_start + csu1128_button + csu1128p_button + row_button_end : null,
            "CSU1128(P)": csu1128_button || csu1128p_button ? row_button_start + csu1128_button + csu1128p_button + row_button_end : null,
            "FSU030": fsu030_button ? row_button_start + fsu030_button + row_button_end : null,
            "CSU953": csu953_button ? row_button_start + csu953_button + row_button_end : null
        }
        return buttons[course] || ""
    })();

    return button;
}