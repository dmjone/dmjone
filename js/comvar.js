// All Hierarchial Data under edu/su/
const arr_prof = {
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
};

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

function processFolder() {


}

function processFolder(secondary, folder) {
    let prof = "";
    let prof_bio = "";
    let prof_href = "";
    let course = "";
    let course_detail = "";

    switch (secondary) {
        case "course":
            switch (folder) {
                case "csu1128":
                    prof = "Dr. Pankaj Vaidya";
                    prof_bio = "<p>details</p>";
                    prof_href = "pankaj.vaidya@shooliniuniversity.com";
                    course = "CSU1128";
                    course_detail = "Logic Building with Computer Programming";
                    break;
                // other cases here
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
                // other cases here
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
            course_detail = "Education .";
            break;
    }

    return { prof, prof_bio, prof_href, course, course_detail };
}


