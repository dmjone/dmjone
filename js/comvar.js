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
    }
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
                                    prof_bio = "<p>Bharti Thakur is an Assistant Professor at the Yogananda School of Artificial Intelligence, Computing and Data Science, Shoolini University of Biotechnology and Management Sciences, Solan (HP) India. She is doing her research on ???Data Mining and Machine Learning???. She holds 10 years of teaching experience.</p>";
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
                                    prof_href = "contact@dmj.one";
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
                                    prof = "Dr. Namita Gandotra";
                                    prof_bio = "<p>Dr Namita Gandotra has been working with Shoolini University from 2012. Her field of specialisation is Soft Computing and its Applications in Decision Making. She worked at IITT Kala Amb, Sirmour (HP) from 2009 to 2011. She teaches Computer Architecture, Software Engineering, Unix Internals and Programming, etc. She holds nine years of teaching experience.</p>";
                                    prof_href = "namita@shooliniuniversity.com";
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
                                case "fsu013":
                                    prof = "Dr. Ravinder Thakur";
                                    prof_bio = "<p>Dr. Ravinder Thakur is an assistant professor at Shoolini University.</p>";
                                    prof_href = "contact@dmj.one";
                                    course = "FSU013";
                                    course_detail = "Advanced Mathematics";
                                    break;
                                default:
                                    prof = "";
                                    prof_bio = "";
                                    prof_href = "";
                                    course = "Study @ Shoolini University";
                                    course_detail = "2026";
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
                            course = "B. Tech CSE @ Shoolini University";
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