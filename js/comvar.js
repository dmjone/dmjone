// All Hierarchial Data under edu/su/
const arr_author = {
    dm: {
        name: "Divya Mohan",
        bio: "<p>Divya Mohan is a driven computer science student from India, pursuing his B.Tech in Computer Science and Engineering. With a unique approach to teaching, he breaks down complex concepts into simple, digestible chunks to make tech accessible to all learners. Dedicated to delivering top-quality results, Divya is fueled by his passion for technology and education, constantly striving to improve his skills and make an impact in the field.</p>",
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
    shrestha: {
        name: "Shrestha Shrivastav",
        bio: "<p>Shrestha Shrivastav is a focused student from India, currently advancing in his Bachelor's degree in Computer Science and Engineering. He is a dedicated CSE student who takes pleasure in coding and generating inventive solutions to address real-world problems.</p>",
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
                "hp-del": "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"
            }
        }
    }

    let i = 1;
    let current_map = cryptojs_enc_map;
    while (current_map = current_map[window[`urlpart${i}`]?.replace('.html', '')]) {
        i++;
        if (typeof current_map === "string") {
            cryptojs_enc_data = current_map;
            // console.log('cryptojs_enc_data:', current_map);
            return;
        }
    }
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
    const line3 = profbio + author_bio;

    // Line 4 - Optional with buttons.

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