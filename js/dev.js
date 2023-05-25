/* A Messy Playground! - This file contains all the js combined for experiments. NOT FOR PRODUCTION USE. */
/*************** Fixed Functions and Variables START **************/

// Generate URL in parts and store in the automated variable inside the window os the user. 
(function () {
    let parts = window.location.pathname.split("/").slice(1);
    // does not include hostname. eg: dmj.one/sd/ss -> sd is urlpart1 and ss is urlpart2 and so on.
    let i = 1;
    if (parts[parts.length - 1] === "") {
        // parts[parts.length - 1] = "index"; // to give a name instead of empty index.
    }
    for (const part of parts) { // Store the variables in window.variable_name
        let variable = `urlpart${i}`;
        window[variable] = part;
        i++;
    }
    for (const variable in window) { // Displayed for Debug
        if (variable.startsWith("urlpart")) {
            console.log(`${variable} = ${window[variable]}`);
        }
    }
})();
/*************** Fixed Functions and Variables END **************/


//****Highlight Js****//
// var hljs = ""; function highlightAll() { };


// (function () {
//     var script = document.createElement('script');
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js";
//     script.defer = true;
//     script.onload = hljs.highlightAll;
//     document.head.appendChild(script);
// })();

// ****Math render - kaTex Js**** //
//ACTIVE (function () {
//     var scriptsToLoad = 2; // Number of scripts to load
//     var script = document.createElement('script'); // Create script element for first script
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/contrib/auto-render.min.js"; // url to be loaded
//     script.defer = true;
//     script.onload = function () {
//         scriptsToLoad--;
//         checkIfAllScriptsLoaded();
//     }; // Add an onload event to the script element
//     document.head.appendChild(script); // Append the script element to the head of the document

//     script = document.createElement('script'); // Create script element for second script
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.js"; // url to be loaded
//     script.defer = true;
//     script.onload = function () {
//         scriptsToLoad--;
//         checkIfAllScriptsLoaded();
//     };
//     document.head.appendChild(script);

//     function checkIfAllScriptsLoaded() {
//         if (scriptsToLoad === 0) {
//             renderMathInElement(document.body, {
//                 // customised options
//                 // • auto-render specific keys, e.g.:
//                 delimiters: [
//                     { left: '$$', right: '$$', display: true },
//                     { left: '$', right: '$', display: false },
//                     { left: '\\(', right: '\\)', display: false },
//                     { left: '\\[', right: '\\]', display: true }
//                 ],
//                 // • rendering keys, e.g.:
//                 throwOnError: false
//             });
//         }
//     }
// })();

(function () {
    // Dynamically include var.js - it includes var.js for every folder hiearchy 
    // currently capped till course code (7) - scalable to any number of folders.

    /* -- CRUDE -- 
    var currentUrl = window.location.href,
        urlParts = currentUrl.split('/'),
        varJsUrl = 'https://dmj.one/var.js';
    if (urlParts[3])
        varJsUrl = 'https://dmj.one/' + urlParts[3] + '/var.js';
    if (urlParts[4]) 
        varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/var.js';
    if (urlParts[5]) 
        varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/' + urlParts[5] + '/var.js';
    if (urlParts[6]) 
        varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/' + urlParts[5] + '/' + urlParts[6] + '/var.js';
    */

    /* -- Advanced --
    var currentUrl = window.location.href, urlParts = currentUrl.split('/'), varJsUrl = 'https://dmj.one/var.js', lastFolderIndex = urlParts.length - 1; // initialize the last complete folder index
    for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) { // iterate through the parts in reverse order, starting from the last index
        lastFolderIndex = i;
        break;
    }
    if (lastFolderIndex >= 4 && lastFolderIndex <= 6) // check if the last folder index is between 4 and 6 (inclusive)
        varJsUrl = 'https://dmj.one/' + urlParts.slice(3, lastFolderIndex).join('/') + '/var.js'; // create the varJsUrl using the parts from index 3 to lastFolderIndex
    else if (lastFolderIndex > 6) // check if the last folder index is greater than 6
        varJsUrl = 'https://dmj.one/' + urlParts.slice(3, 7).join('/') + '/var.js'; // create the varJsUrl using the parts from index 3 to 7
 */
    // -- Professional --
    var varJsUrl = (function () {
        var currentUrl = window.location.href,
            urlParts = currentUrl.split('/').map(encodeURIComponent),
            varJsUrl = '/var.js',
            lastFolderIndex = urlParts.length - 1;
        for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) {
            lastFolderIndex = i;
            break;
        }
        if (lastFolderIndex >= 4 && lastFolderIndex <= 6)
            varJsUrl = '/' + urlParts.slice(3, lastFolderIndex).join('/') + '/var.js';
        else if (lastFolderIndex > 6)
            varJsUrl = '/' + urlParts.slice(3, 7).join('/') + '/var.js';
        return varJsUrl;
    })();
    document.write(`<script src='${varJsUrl}'></script>`);

    var common_variables = "/js/comvar.js";
    document.write(`<script src='${common_variables}'></script>`);

    var qrcode_js = "/js/qrcode.js"; // from "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
    document.write(`<script src='${qrcode_js}'></script>`);

    //var edu_var = "https://dmj.one/js/edu_su_var.js";
    //var edu_js = "https://dmj.one/js/edu_su_common.js";
    var cdnjs_jquery = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    var cdnjs_bootstrap = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js";
    var cdnjs_highlightjs = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js";
    var cdnjs_katex = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.4/katex.min.js";
    var cdnjs_katex_autorender = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.4/contrib/auto-render.min.js";
    var cdnjs_font_awesome = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js";

    // Create an array of script URLs
    var scripts = [cdnjs_jquery, cdnjs_bootstrap, cdnjs_highlightjs, cdnjs_katex, cdnjs_katex_autorender, cdnjs_font_awesome];
    var loaded = 0; // Create a counter to keep track of the number of scripts that have finished loading

    for (var i = 0; i < scripts.length; i++) { // Iterate through the array of scripts
        var script = document.createElement('script'); // Create script element
        script.src = scripts[i]; // Set the script's URL
        script.defer = true;
        script.onload = function () {
            loaded++; // Increment the counter
            if (loaded === scripts.length) { // Check if all scripts have finished loading. If it is then Execute the onload code here

                var autorender = document.createElement('script');
                autorender.innerHTML = `
hljs.highlightAll(); // Highlight js init - single line code. 
// renderMathInElement(document.body); // KaTex Math js
// renderMathInElement(document.body, {
//     delimiters: [
//         { left: '$$', right: '$$', display: true },
//         { left: '$', right: '$', display: false },
//         { left: '\\(', right: '\\)', display: false },
//         { left: '\\[', right: '\\]', display: true }
//     ],
//     throwOnError: false
// });
                `;
                document.head.appendChild(autorender);

                // hljs.highlightAll(); // Highlight js init - single line code. 
                // renderMathInElement(document.body); // KaTex Math js

                /*                 // KaTex Math js START
                                renderMathInElement(document.body, {
                                    delimiters: [{ left: '$$', right: '$$', display: true },
                                    { left: '$', right: '$', display: false },
                                    { left: '\\(', right: '\\)', display: false },
                                    { left: '\\[', right: '\\]', display: true }],
                                    throwOnError: false
                                });
                                // KaTex Math js END */
            }
        };
        document.head.appendChild(script); // Append the script element to the head of the document
    }
})();

(function () {
    const logo = "/logo.png";
    const pr = "preconnect";
    const links = [
        { rel: pr, href: "https://fonts.googleapis.com" },
        { rel: pr, href: "https://cdnjs.cloudflare.com" },
        { rel: pr, href: "https://dmj.one" },
        { rel: pr, href: "https://dev.dmj.one" },
        { rel: pr, href: "https://cdn.dmj.one" },
        { rel: pr, href: "https://fonts.gstatic.com" },
        { rel: pr, href: "https://picsum.photos" },
        { rel: pr, href: "https://type.fit" },
        { rel: "manifest", href: "/manifest.webmanifest" },
        { rel: "shortcut icon", href: logo },
        { rel: "fluid-icon", href: logo },
        { rel: "apple-touch-icon", href: logo },
        { rel: "stylesheet", href: "/css/edu_su_common.css" }
    ];

    (function header_createlink(links) {
        links.forEach(function (link) {
            var newlink = document.createElement('link');
            newlink.setAttribute('rel', link.rel);
            newlink.setAttribute('href', link.href);
            document.head.appendChild(newlink);
        });
    })(links);
})();



// Verify If jquery and hljs is loaded
// window.jQuery || document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>');
// if (!hljs) { document.write('<script defer src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" integrity="sha512-gU7kztaQEl7SHJyraPfZLQCNnrKdaQi5ndOyt4L4UPL/FHDd/uB9Je6KDARIqwnNNE27hnqoWLBq+Kpe4iHfeQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'); }

/******** Header ***********/
function header_navbar() {

    // Get current URL
    function header_nav() {
        const url = new URL(window.location.href);
        const base = '/edu/su/';
        const courses = `${base}course/`;
        const pathname = url.pathname.split('/');
        const nav_folder = pathname[4] ? `${courses}${pathname[4]}` : '';
        const nav_subfolder = pathname[5] || '';
        const nav_filename = pathname.pop() || '';


        /*         var url = new URL(window.location.href);
                var base = "/edu/su/";
                var courses = base + "course/";
                if (url.pathname.split("/")[4]) { var nav_folder = courses + url.pathname.split("/")[4]; }
                var nav_subfolder = url.pathname.split("/")[5];
                var nav_filename = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);
         */

        var nav_home = `<a href="//${window.location.host}" data-toggle="tooltip" data-placement="top" title="Home" data-original-title="Home"><i class="bi bi-house-fill text-light"></i></a>`;
        var nav_path = `<a href="${nav_folder}/" data-toggle="tooltip" data-placement="top" title="${nav_folder}" data-original-title="${nav_folder}"><i class="bi bi-journals text-light"></i></a>`;
        var nav_subpath = `<a href="${nav_folder}/${nav_subfolder}/" data-toggle="tooltip" data-placement="top" title="${nav_subfolder}" data-original-title="${nav_subfolder}"><i class="bi bi-card-list text-light"></i></a>`;
        var nav_file = `<a href="${nav_filename}" data-toggle="tooltip" data-placement="top" title="${nav_filename}" data-original-title="${nav_filename}"><i class="bi bi-journal-code text-light"></i></a>`;

        var list_start = '<nav aria-label="breadcrumb" class="navbar-brand text-light"><ol class="breadcrumb" style="margin:auto">';
        var list_home = `<li class="breadcrumb-item">${nav_home}</li>`;
        var list_close = '</ol></nav>';
        var list_path = '';

        if (nav_folder) {
            list_path = `<li class="breadcrumb-item">${nav_path}</li>`;
            if (nav_subfolder) {
                list_path += '<li class="breadcrumb-item">' + nav_subpath + '</li>';
                if (nav_filename) {
                    list_path += '<li class="breadcrumb-item active" aria-current="page">' + nav_file + '</li>';
                }
            }
        }
        if (!window["page"] == 404 || !window["page"] == "homepage") {
            list_path = '';
        }
        return (list_start + list_home + list_path + list_close);
    }



    // Dropdown Menu Generator START
    function nav_createDropdown(links) {
        let year = links.shift();
        links.sort();
        let li_link = "";
        var path = window.location.pathname;
        var folder = window.location.pathname.split("/")[4];
        for (let i = 0; i < links.length; i++) {
            if (links[i] != folder) {
                var linkactive = '"';
            } else {
                var linkactive = ' active" aria-current="page"';
            }
            if (links[i] == "csu5543" || links[i] == "csu934") {
                li_link += `<li><a class="dropdown-item ${linkactive} href="/edu/su/course/${links[i]}/" data-toggle="tooltip" data-placement="top" title="Work In Progress. Section will be available soon." data-original-title="Work In Progress. Section will be available soon.">${links[i].toUpperCase()} <strong>[WIP]</strong></a></li>`;
            } else {
                li_link += `<li><a class="dropdown-item ${linkactive} href="/edu/su/course/${links[i]}/">${links[i].toUpperCase()}</a></li>`;
            }
            // li_link += `<li><a class="dropdown-item ${linkactive} href="/edu/su/course/${links[i]}/">${links[i].toUpperCase()}</a></li>`;
        }
        return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a><ul class="dropdown-menu">${li_link}</ul></li>`;
    }
    // Dropdown Generator END

    //  Menu Generator START
    function nav_createMainNav(links) {
        links.sort();
        let li_link = "";
        var path = window.location.pathname;
        var folder = window.location.pathname.split("/")[4];
        for (let i = 0; i < links.length; i++) {
            if (links[i] != folder) {
                var linkactive = '"';
            } else {
                var linkactive = ' active" aria-current="page"';
            }
            li_link += `<li class="nav-item"><a class="nav-link${linkactive} href="/edu/su/course/${links[i]}/">${links[i].toUpperCase()}</a></li>`;
        }
        return li_link;
    }
    //  Generator END


    // var common_nav_start = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg"><div class="container-fluid"><script>document.write(header_nav())</script><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">';
    function displayedlinks() {
        var li_link = "";
        var path = window.location.pathname;
        var folder = window.location.pathname.split("/")[4];
        var alreadyactive = 0;

        var visible_links = ["csu1128p", "csu1128", "csu953", "fsu030", "csu730", "csu951"].sort();
        for (let i = 0; i < visible_links.length; i++) {
            if (visible_links[i] != folder) {
                var linkactive = '"';
            } else {
                var linkactive = ' active" aria-current="page"';
            }
            linkname = visible_links[i].toUpperCase();
            li_link += '<li class="nav-item"><a class="nav-link' + linkactive + ' href="/edu/su/course/' + visible_links[i] + '/">' + linkname + "</a></li>";
        }
        return li_link;
    }

    var common_nav_start = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark"><div class="container-fluid">' + header_nav() + '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">';
    var common_nav_end = '</ul><!--- <form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-light" type="submit">Search</button></form> --></div></div></nav>';

    // Send array of links to create link for dropdown
    var year1_links = ["1<sup>st</sup> Year", "csu1128p", "csu1128", "csu953", "fsu030", "csu730", "csu951", "csu585", "csu1051", "csu1287", "csu1289"];
    var visible_links = ["csu585", "csu1051", "csu1287", "csu1289"].sort();

    var alllinks = nav_createDropdown(year1_links) + nav_createMainNav(visible_links);

    nav = common_nav_start + alllinks + common_nav_end;
    return nav;
}

function head_FormatAuthor(...args) {
    let authorTextArr = [];
    for (let i = 0; i < args.length; i += 2) {
        let author = args[i];
        let author_href = args[i + 1];
        if (author && author_href) { // add this line to check for blank inputs
            authorTextArr.push(`<strong>${author}</strong> <a href="mailto:${author_href}?subject=Referred from dmj.one&body=-- Referred from the page ${window.location.href} Please write below this line --%0D%0A%0D%0A" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author}" data-original-title="Get in touch with ${author}"> <i class="bi bi-envelope-plus text-light"></i></a>`);
        }
    }
    let authorText;
    if (authorTextArr.length === 0) {
        authorText = "";
    } else if (authorTextArr.length === 1) {
        authorText = authorTextArr[0];
    } else if (authorTextArr.length === 2) {
        authorText = authorTextArr.join(" and ");
    } else {
        // authorTextArr.pop();
        authorText = authorTextArr.slice(0, -1).join(", ") + `, and ${authorTextArr.slice(-1)}`;
    }
    return authorText;
}

function header_author(...args) {
    // Ensure safety: If 'Off' is passed as a function argument, no header will be displayed. If 'WriteManually' is passed, the corresponding HTML code in the next value will be sent for manual header composition.
    if (args[0] === "off") { return null; }
    if (args[0] === "WriteManually") { const finalheaders = "<header>" + args[1] + "</header>" + header_navbar(); document.body.insertAdjacentHTML('afterbegin', finalheaders); return null; }
    if (args[0] === "NavOnly") { document.body.insertAdjacentHTML('afterbegin', header_navbar()); return null; }

    /* USAGE - header_author("authorinitials || name", "email", "author1 details", "authorinitials || name2" ... ) */
    window["loaded_header_author"] = 1;

    const { pA_author, pA_bio } = processAuthors(args);
    const allAuthors = `<span id="authorlist">${pA_author}</span>`, author_bio = pA_bio;

    const { line1, line2, line3, line4 } = processFolder(allAuthors, author_bio);

    const finalheaders = "<header>" + line1 + line2 + line3 + line4 + "</header>" + header_navbar();
    document.body.insertAdjacentHTML('afterbegin', finalheaders);
}

// check and give active link
if (window.hasOwnProperty('header_navbar') && typeof header_navbar === 'function') {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a');

    // Get the current URL
    const currentUrl = window.location.pathname;

    // Loop through each link
    navLinks.forEach(link => {
        // If the link's href matches the current URL, add the active class
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


/******** Body ***********/
// Decode Encrypted Variable's - Call this function to decode variables.
// Example: execute the vars by calling <script>decenv(_varname_);</script> in html where it is required.
// abbr: DeCodeEncryptedVAr - dcevar
function dcevar(s) {
    var s1 = decodeURIComponent(s.substr(0, s.length - 1));
    var t = '';
    for (i = 0; i < s1.length; i++) t += String.fromCharCode(s1.charCodeAt(i) - s.substr(s.length - 1, 1));
    var decoded = decodeURIComponent(t);
    document.body.innerHTML += decoded;
}
// For better compatiblity of vars and var usage spelling mistake
function dcevars(s) {
    var s1 = decodeURIComponent(s.substr(0, s.length - 1));
    var t = '';
    for (var i = 0; i < s1.length; i++) {
        t += String.fromCharCode(s1.charCodeAt(i) - s.substr(s.length - 1, 1));
    }
    var decoded = decodeURIComponent(t);
    // document.write(decoded);
    var div = document.createElement("div"); // if the code has its own script, it wont work. command it from this js file or use document.write for script and if necessary BUT it will erase all the contents. 
    div.innerHTML = decoded;
    document.body.appendChild(div);
}


function body_genmenu(course) {
    window["loaded_body_genmenu"] = 1;
    //  var body_generated = '<section class="light"><div class="container py-2">';
    //  var gen_end = '</div></section>';
    //  document.write(body_generated);
    if (!course) { var course = window.location.pathname.split("/")[4]; }
    var body_generated = window.scriptsremoved == 1 ? '<div></div><article class="genmenu py-3">' : '<article class="genmenu py-3">';

    var gen_end = '</article>';
    var agenmenu = document.querySelector("#agenmenu");
    // document.addEventListener("DOMContentLoaded", function () {
    agenmenu.innerHTML += body_generated;
    // });
    // Substituted document.write(body_generated); by DOMContentLoaded for automation

    // const datetogen = "April 1, 2023"; // Manual Date - Change this date to reflect it everywhere.
    const datetogen = new Date(new Date().setDate(new Date().getDate() - 7)).toDateString(); // Get Date automatically. Change the number with days to minus the date. Number 7 or 10 denotes days to substract from current date.
    // var offset = Math.floor(Math.random() * 10) * -1 * 24 * 60 * 60 * 1000; // Change this in the specific var.js if you dont want to generate future dates and only past date. supplied date - 10th date.

    get_menu_list(datetogen);
    // Substitution for document.write(gen_end); due to automation
    // document.addEventListener("DOMContentLoaded", function () {
    agenmenu.innerHTML += gen_end;
    // });
}






// Original Code
var sitemap_links = [];
function body_blockcards(link, date, title, desc, codetype, readtime, author, semester, qr_link) {

    // USAGE - body_blockcards("/csu953/c1", "Thursday, September 29th 2022", "Lab 1 fn", "An introduction to HTML.", "HTML", "2");

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (!title && !desc) { return }; // Do not Remove. Else it will waste the time in processing and give incomplete blocks
    if (link) { } else link = "#";
    if (date) { } else var date = new Date().toDateString();
    if (title) { } else title = "Unknown Title";
    if (desc) { } else desc = "No desc provided";
    var include_generator = 2;
    if (include_generator == 1) { var body_generated = '<article>'; var gen_end = '</article>'; } else { body_generated = ""; gen_end = ""; }
    if (author) {
        if (author == "vp") { author = "Vanshika Painuly"; }
        else if (author == 1) { author = "Divya Mohan"; }
        else { author = author; }
    }

    // Auxillary functions for blockcards
    // Append the current URL to the link - for sitemap generation easy. - Copy paste the generated url's.
    var resolvedLink = new URL(link, location.href).toString();
    sitemap_links.push(resolvedLink);

    // Generate Random
    const randomNum01 = function (val) {
        val = val ? val : 7;
        var randomNum = Math.floor(Math.random() * 10) + 1;
        return (randomNum <= val) ? 1 : 0;
    };

    randomNum01(5);

    // Generate QR if qr_link is available or generate the picsum.photo image
    var qrcode_data = (function () {
        var typeNumber = 0;
        var errorCorrectionLevel = 'H';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(window.location.href + link);
        qr.make();
        return qr.createDataURL(4, "");
    })();

    let unsplash_categories = ["programming", "robot", "space", "script", "tech", "network", "electronic", "server", "code"];
    unsplash_categories = unsplash_categories[randomNum(0, unsplash_categories.length - 1)];

    // var imgsrc = randomNum01 === 0 ? qrcode_data : `https://picsum.photos/${randomNum(200, 400)}`;
    var imgsrc = randomNum01(7) === 0 ? `https://picsum.photos/${randomNum(200, 400)}` : `https://source.unsplash.com/${randomNum(200, 500)}x${randomNum(200, 500)}/?${unsplash_categories}`;
    imgsrc = randomNum01(3) === 0 ? imgsrc : qrcode_data;
    var is_qr = Number(imgsrc === qrcode_data);
    var imgAlt = is_qr ? "QR code of the URL" : "A Random Image from picsum.photo";
    var imgStyle = is_qr ? 'object-fit:contain;padding:2.5rem' : "";
    var imgClass = is_qr ? 'postcard__img is_qr' : 'postcard__img';
    var imgTag = `<img class="${imgClass}" src="${imgsrc}" alt="${imgAlt}" style="${imgStyle}"/>`;

    // qrblock = qr_link ? `<div id="qrcode"></div> ${imgsrc}` : "";

    // Get color and start generating the block.
    var color = ["yellow", "blue", "red", "green"];
    var getcolor = color[randomNum(0, 3)];
    // https://picsum.photos/
    body_generated += `<div class="m-0 my-5 postcard light shadow ${getcolor}">`;
    body_generated += `<a class="postcard__img_link" href="${link}">${imgTag}</a>`;
    body_generated += `<div class="postcard__text t-dark"><h1 class="postcard__title blue"><a href="${link}">${title}</a></h1>`;
    body_generated += `<div class="postcard__subtitle small"><i class="bi bi-calendar3"></i>&nbsp;&nbsp;${date}</div>`;
    body_generated += `<div class="postcard__bar"></div><div class="postcard__preview-txt">${desc}</div>`;
    body_generated += `<ul class="postcard__tagbox">`;
    body_generated += semester ? `<li class="tag__item"><i class="bi bi-collection"></i>  ${semester}</li>` : "";
    body_generated += codetype ? `<li class="tag__item"><i class="bi bi-file-earmark-code"></i>  ${codetype}</li>` : "";
    body_generated += readtime ? `<li class="tag__item"><i class="bi bi-clock"></i>  ${readtime} minute read</li>` : "";
    body_generated += author ? `<li class="tag__item"><i class="bi bi-pencil-square"></i>  ${author} </li>` : "";
    const options = ['Expand Your Knowledge', 'Keep Learning', 'Feed Your Curiosity', 'Keep Your Mind Active', 'Learn More With Us', 'Stay Curious', 'Keep Discovering', 'Feed Your Brain', "Don't Stop Learning", 'Keep Exploring', 'Keep Absorbing', 'Continue Your Learning Journey', 'Unlock More Learning', 'Keep Developing Your Understanding', 'Expand Your Perspective', 'Keep Your Mind Engaged', 'The Learning Continues', 'Stay Inquisitive', 'Keep Your Brain Engaged', 'Keep Your Intellectual Fire Burning', 'Keep Challenging Yourself', 'Stay On The Learning Path', 'The Adventure Continues', 'Keep Your Mind Open', 'Stay Focused On Learning', 'Keep Your Learning Moving', 'Keep Expanding Your Mind', 'Keep Progressing In Your Learning', 'The Learning Never Stops', 'Keep Your Intellect Fueled', 'Keep Your Brain Buzzing', 'Keep Your Learning Journey Thriving', 'Keep Your Curiosity Alive', 'Keep Your Mind Alert', 'Keep Building Your Knowledge', 'Stay Invested In Your Learning', 'Keep Building Your Expertise', 'The Learning Journey Continues', 'Keep Your Understanding Evolving', 'Keep Your Learning Momentum Going', 'Keep Pushing Your Limits', 'Stay On The Path To Learning', 'Keep Unleashing Your Potential'];
    const continueReading = options[Math.floor(Math.random() * options.length)];
    body_generated += `<a href="${link}" data-toggle="tooltip" data-placement="top" title="Click to continue reading." data-original-title="Click to continue reading."><li class="tag__item play ${getcolor} fw-bold text-center" style="cursor: inherit;"><i class="bi bi-book"></i>  ${continueReading}</li></a></ul></div></div>`;
    body_generated += gen_end;

    let finaltowrite = body_generated + gen_end;
    // document.write(body_generated + m + m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + gen_end);
    // document.addEventListener("DOMContentLoaded", function () {
    var genclass = document.querySelector(".genmenu");
    genclass.innerHTML += finaltowrite;
    // });
}

function sitemap_var_gen_clipboard() {
    // maintenance_mode();
    // Get the folder hierarchy after "/edu/su/" from the URL
    var url = new URL(location.href);
    var path = url.pathname.split('/');
    var folders = path.slice(1);
    // Generate the variable name
    var varName = folders.join('_');
    // Generate the output
    // console.log(`var sitemap_${varName} = [${sitemap_links.map(link => `'${link}'`).join(', ')}];`);
    navigator.clipboard.writeText(`var sitemap_${varName} = [${sitemap_links.map(link => `'${link}'`).join(', ')}];`);

    //navigator.clipboard.writeText(sitemap_links.map(link => `'${link}'`).join(', '));
    //console.log(sitemap_links.map(link => `'${link}'`).join(', '));
}

function maintenance_mode() {
    // Get the body element of the webpage
    var body = document.querySelector('body');
    // Clear the contents of the body element
    body.innerHTML = '';
    // Create a new element to display the message
    var message = document.createElement('h1');
    message.innerHTML = "Maintenance mode";
    // Append the message to the body element
    body.appendChild(message);
}

//plugins.js code:
// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/******** Footer ***********/
function footer_getHeaderValue(keyName) {
    // usage: getHeaderValue("server") OR getHeaderValue("header_name") // source: /getheaders.html
    var xhr = new XMLHttpRequest();
    xhr.open("GET", document.location, false);
    xhr.send(null);
    var headers = xhr.getAllResponseHeaders().toLowerCase();
    var headerValue = headers.match(new RegExp(keyName + ":\\s*([^\\n]+)", "i")) ? headers.match(new RegExp(keyName + ":\\s*([^\\n]+)", "i"))[1].trim() : false;
    return headerValue;
}

function createSharingButtons(text, url, iconName, btnClass) {
    const sharingContainer = document.createElement("div");
    sharingContainer.classList.add("sharing-buttons-container");
    sharingContainer.style.maxWidth = "100%";
    sharingContainer.style.overflowX = "auto";
    sharingContainer.style.padding = "0";

    const currentUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const shareMessage = `${pageTitle} ${currentUrl}`;

    const socialSites = [
        { name: "WhatsApp", icon: "bi bi-whatsapp", url: `https://api.whatsapp.com/send?text=${shareMessage}` },
        { name: "Facebook", icon: "bi bi-facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&quote=${pageTitle}` },
        { name: "Twitter", icon: "bi bi-twitter", url: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${pageTitle}` },
        { name: "LinkedIn", icon: "bi bi-linkedin", url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}` },
        { name: "Pinterest", icon: "bi bi-pinterest", url: `https://pinterest.com/pin/create/button/?url=${currentUrl}&description=${pageTitle}` },
        { name: "Reddit", icon: "bi bi-reddit", url: `https://www.reddit.com/submit?url=${currentUrl}&title=${pageTitle}` },
        { name: "Tumblr", icon: "fa-brands fa-tumblr", url: `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${currentUrl}&title=${pageTitle}&caption=${shareMessage}` },
        { name: "Telegram", icon: "bi bi-telegram", url: `https://t.me/share/url?url=${currentUrl}&text=${pageTitle}` },
        { name: "VK", icon: "fa-brands fa-vk", url: `https://vk.com/share.php?url=${currentUrl}&title=${pageTitle}&description=${shareMessage}` },
        { name: "Xing", icon: "fa-brands fa-xing", url: `https://www.xing.com/app/user?op=share&url=${currentUrl}` },
    ];

    const label = document.createElement("span");
    label.textContent = text || "Share this page: ";
    label.style.fontSize = "1.25rem";
    label.style.color = "#0d6efd";
    label.style.display = "inline-block";
    label.style.verticalAlign = "middle";
    label.style.marginRight = "10px";
    sharingContainer.appendChild(label);

    const buttonGroup = document.createElement("div");
    buttonGroup.style.display = "inline-block";
    buttonGroup.style.verticalAlign = "middle";
    sharingContainer.appendChild(buttonGroup);

    socialSites.slice(0, 3).forEach((site) => {
        const button = createButton(site);
        buttonGroup.appendChild(button);
    });

    if (socialSites.length > 3) {
        const moreButton = document.createElement("button");
        moreButton.classList.add("btn", "btn-link", "bi", "bi-plus-square");
        moreButton.setAttribute("type", "button");
        sharingContainer.appendChild(moreButton);

        const hiddenGroup = document.createElement("div");
        hiddenGroup.classList.add("sharing-buttons-group", "collapse");
        hiddenGroup.style.display = "none";
        hiddenGroup.style.marginLeft = "5px";
        sharingContainer.appendChild(hiddenGroup);

        socialSites.slice(3).forEach((site) => {
            const button = createButton(site);
            hiddenGroup.appendChild(button);
        });

        moreButton.addEventListener("click", function () {
            if (hiddenGroup.style.display === "none") {
                hiddenGroup.style.display = "inline-block";
                moreButton.classList.remove("bi-plus-square");
                moreButton.classList.add("bi-x-square");
            } else {
                hiddenGroup.style.display = "none";
                moreButton.classList.remove("bi-x-square");
                moreButton.classList.add("bi-plus-square");
            }
        });
    }

    function createButton(site) {
        const button = document.createElement("a");
        button.href = site.url;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
        button.classList.add("btn", `${btnClass}-${site.name.toLowerCase()}`);
        button.style.marginRight = "5px";
        button.innerHTML = `<i class="${site.icon}"></i>`;
        return button;
    }

    return sharingContainer;
}




function copyright(rights) {
    window["loaded_copyright"] = 1;
    // sitemap_var_gen_clipboard();
    if (rights === "off") { return null; }

    var footer_all_rights = ' &#8226; All rights reserved';
    var footer_some_rights = ' &#8226; Some rights reserved';
    var footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
    var footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';

    if (rights == "all") {
        var rights = footer_all_rights;
    } else if (rights == "some") {
        var rights = footer_some_rights;
    } else { rights = ""; }

    var footer = document.createElement("footer");
    var sharingButtons = createSharingButtons();
    footer.appendChild(sharingButtons);
    var span = document.createElement("span");
    var strong = document.createElement("strong");

    const date = new Date();
    const isServer = "";
    const lastModified = new Date(document.lastModified);
    if (date.getTime() === lastModified.getTime()) {
        isServer = " (Live)";
    }

    const modified = "cloudflare" == footer_getHeaderValue('server') ? `<span style="font-size:10px">Not seeing updated content? Page was loaded on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>` : `<span style="font-size:10px">Not seeing updated content? Page last modified on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>`;

    strong.innerHTML = modified + `&copy; 2007 - ${new Date().getFullYear()} Divya Mohan ${rights} ${footer_link_privacy} ${footer_link_tos}`;
    span.appendChild(strong);
    footer.appendChild(span);

    //document.body.appendChild(footer);
    document.body.insertBefore(footer, document.body.lastChild);

    //define service worker
    if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('/sw.js')
    }

    // Notification cookie
    //if (!(localStorage.getItem("noshow"))) { dcevars(notify_cookie); }

    window.onload = function () {
        // Syntax highlighter - Enable is using highlight js.
        // hljs.highlightAll();

        // renderMathInElement(document.body, {
        //     // customised options
        //     // • auto-render specific keys, e.g.:
        //     delimiters: [
        //         { left: '$$', right: '$$', display: true },
        //         { left: '$', right: '$', display: false },
        //         { left: '\\(', right: '\\)', display: false },
        //         { left: '\\[', right: '\\]', display: true }
        //     ],
        //     // • rendering keys, e.g.:
        //     throwOnError: false
        // });
    };
}


/* function copyright(rights) {
    // sitemap_var_gen_clipboard();
 
    var footer_all_rights = ' &#8226; All rights reserved';
    var footer_some_rights = ' &#8226; Some rights reserved';
    var footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
    var footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';
 
    if (rights == "all") {
        var rights = footer_all_rights;
    } else if (rights == "some") {
        var rights = footer_some_rights;
    } else { rights = ""; }
 
    document.write('<footer><span><strong>&copy; 2007-' + new Date().getFullYear() + ' Divya Mohan' + rights + footer_link_privacy + footer_link_tos + '</span></strong></footer>');
 
    //define service worker
    if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('/sw.js')
    }
 
    // Notification cookie
    if (!(localStorage.getItem("noshow"))) { dcevar(notify_cookie); }
 
    window.onload = function () {
        // Syntax highlighter - Enable is using highlight js.
        // hljs.highlightAll();
 
        // // Notification - Privacy - I accept
        // $('.i-accept').on('click', function () {
        //     if (localStorage.noshow !== '1') {
        //         $('#cookie-notice').addClass('d-none');
        //         localStorage.noshow = '1';
        //     }
        // });
        // if (localStorage.noshow == '1') {
        //     $('#cookie-notice').addClass('d-none');
        // };
 
 
        // renderMathInElement(document.body, {
        //     // customised options
        //     // • auto-render specific keys, e.g.:
        //     delimiters: [
        //         { left: '$$', right: '$$', display: true },
        //         { left: '$', right: '$', display: false },
        //         { left: '\\(', right: '\\)', display: false },
        //         { left: '\\[', right: '\\]', display: true }
        //     ],
        //     // • rendering keys, e.g.:
        //     throwOnError: false
        // });
    };
} */


/********************* Custom made dmj.one Plugins *********************/
/******* Generate Blockquote **********/
function gen_blockquote() {
    var quoteblock = '<figure class="text-center shadow p-4 rounded bg-warning bg-gradient bg-opacity-25 p-5"><blockquote class="blockquote showquote"></blockquote><figcaption class="blockquote-footer showauthor"></figcaption>';
    document.write(quoteblock);

    async function quote() {
        let data = await fetch("/js/quotes.json")
            .then((response) => response.json())
            .then(data => { return data; });

        let index = Math.floor(Math.random() * data.length); // Generates a random number between 0 and the length of the dataset
        var quote = data[index].text;
        var author = data[index].author;
        if (!author) { author = "Anonymous"; }

        const texts = document.querySelectorAll(".showquote");
        const authors = document.querySelectorAll(".showauthor");
        texts[0].innerHTML = quote;
        authors[0].innerHTML = author;
    } quote();
}

/******** Display Cookie Notice ********/
(function () {
    if (!localStorage.getItem("noshow")) {
        document.addEventListener('DOMContentLoaded', function () {
            const cookieNotice = document.createElement("div");
            cookieNotice.id = "cookie-notice";
            cookieNotice.classList.add("w-100", "bg-dark", "text-white", "pt-3", "px-4", "pb-1", "position-fixed");
            cookieNotice.style = "z-index: 1000; bottom: 0;";

            const container = document.createElement("div");
            container.classList.add("container", "p-2");

            const row = document.createElement("div");
            row.classList.add("row", "d-flex", "align-items-center");

            const col1 = document.createElement("div");
            col1.classList.add("col-sm-8", "col-md-9");

            const p = document.createElement("p");
            p.classList.add("p-2");
            p.innerHTML = `This website uses cookies so that we can provide you with the best website experience. By <strong>clicking</strong> I Accept or<strong> by scrolling</strong> to view the contents of this website you acknowledge the use of cookies and to our <a href='/tos'>Terms and Conditions</a> and <a href='/privacy'>Privacy Policy</a>.`;

            col1.appendChild(p);

            const col2 = document.createElement("div");
            col2.classList.add("col-sm-4", "col-md-3");

            const a = document.createElement("a");
            a.classList.add("i-accept", "btn", "btn-primary", "m-2");
            a.innerHTML = "I Accept";

            col2.appendChild(a);

            row.appendChild(col1);
            row.appendChild(col2);
            container.appendChild(row);
            cookieNotice.appendChild(container);

            document.body.appendChild(cookieNotice);

            const iAcceptBtn = document.querySelector('.i-accept');

            iAcceptBtn.addEventListener('click', hideCookieNotice);
            document.addEventListener('scroll', hideCookieNotice);
        });
    }

    function hideCookieNotice() {
        const cookieNotice = document.getElementById('cookie-notice');
        cookieNotice.style.display = 'none';
        localStorage.setItem('noshow', 1);
    }
})();

/************ Let there be snowfall! ************/
// to do - Make it faster. 
(function () {
    const isWinter = () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        return month === 12 || month === 1;
    };

    if (isWinter()) {
        function createSnowflake() {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.style.left = Math.random() * window.innerWidth + "px";
            snowflake.style.top = "-50px";
            snowflake.style.width = (Math.random() * 10 + 5) + "px";
            snowflake.style.height = snowflake.style.width;
            snowflake.speed = Math.random() * 2 + 1;
            document.body.appendChild(snowflake);
            return snowflake;
        }

        function moveSnowflake(snowflake) {
            const top = parseFloat(snowflake.style.top);
            const newTop = top + snowflake.speed;
            snowflake.style.top = newTop + "px";
            if (newTop > window.innerHeight) {
                snowflake.remove();
            }
        }

        let snowflakeInterval = setInterval(() => {
            const snowflake = createSnowflake();
            setInterval(() => {
                moveSnowflake(snowflake);
            }, Math.floor(Math.random() * 100) + 20);
        }, Math.floor(Math.random() * 300) + 100);

        setTimeout(() => {
            clearInterval(snowflakeInterval);
        }, Math.floor(Math.random() * 3000) + 2000);
    }
})();

/*** Summer Bubbles ***/
(function () {
    const isSummer = () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        return month === 6 || month === 7 || month === 8;
    };

    if (isSummer()) {
        function createBubble() {
            const bubble = document.createElement("div");
            bubble.classList.add("bubble");
            bubble.style.left = Math.random() * window.innerWidth + "px";
            bubble.style.top = window.innerHeight + "px";
            bubble.style.width = (Math.random() * 20 + 10) + "px";
            bubble.style.height = bubble.style.width;
            bubble.speed = Math.random() * 2 + 1;
            document.body.appendChild(bubble);
            return bubble;
        }

        function moveBubble(bubble) {
            const top = parseFloat(bubble.style.top);
            const newTop = top - bubble.speed;
            bubble.style.top = newTop + "px";
            if (newTop < 0) {
                bubble.remove();
            }
        }

        let bubbleInterval = setInterval(() => {
            const bubble = createBubble();
            setInterval(() => {
                moveBubble(bubble);
            }, Math.floor(Math.random() * 100) + 20);
        }, Math.floor(Math.random() * 300) + 70);

        setTimeout(() => {
            clearInterval(bubbleInterval);
        }, Math.floor(Math.random() * 3000) + 2000);
    }
})();

/*** Birthday Balloons ***/
(function () {
    const isBirthday = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        return day === 25 && month === 2; // Change the date to the birthday date you want to celebrate
    };

    if (isBirthday()) {
        function createBalloon() {
            const balloon = document.createElement("img");
            const randomNumber = Math.floor(Math.random() * 5) + 1; // generate a random number between 1 and 5
            const url = `/img/balloon${randomNumber}.png`; // generate the balloon URL based on the random number
            const hue = Math.floor(Math.random() * 360); // Generate a random hue value between 0 and 360
            balloon.src = url;
            balloon.classList.add("balloon");
            balloon.style.filter = `hue-rotate(${hue}deg)`; // Apply the random hue rotation to the image
            balloon.style.left = Math.random() * window.innerWidth + "px";
            balloon.style.top = window.innerHeight + "px";
            balloon.style.width = (Math.random() * 20 + 10) + "px";
            balloon.style.height = balloon.style.width;
            balloon.speed = Math.random() * 0.01 + 0.01;
            balloon.easing = Math.random() * 0.2 + 0.1;
            document.body.appendChild(balloon);
            return balloon;
        }

        function moveBalloon(balloon) {
            const top = parseFloat(balloon.style.top);
            const newTop = top - balloon.speed;
            balloon.style.top = newTop + "px";
            balloon.speed += balloon.easing; // Ease In
            if (newTop < 0) {
                balloon.remove();
            }
        }

        let balloonInterval = setInterval(() => {
            const balloon = createBalloon();
            setInterval(() => {
                moveBalloon(balloon);
            }, Math.floor(Math.random() * 30) + 10);
        }, Math.floor(Math.random() * 400) + 10);

        setTimeout(() => {
            clearInterval(balloonInterval);
        }, Math.floor(Math.random() * 4000) + 1000);
    }
})();


/** Fireworks **/
(function () {
    const isDiwali = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        return day === 12 && month === 11;
    };
    if (isDiwali()) {
        const FIREWORKS_DISPLAYED_KEY = 'fireworks_displayed';
        const fireworksDisplayed = localStorage.getItem(FIREWORKS_DISPLAYED_KEY);

        if (!fireworksDisplayed) {
            document.write(`<canvas id="fireworks"></canvas><div class="message"><p class="text-center">Congratulations!<br>Happy Diwali!</p></div>`);
            window.addEventListener('load', function () {
                const canvas = document.getElementById('fireworks');
                const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const fireworks = [];

                function Particle(x, y, size, color) {
                    this.x = x;
                    this.y = y;
                    this.size = size;
                    this.color = color;
                    this.velocity = { x: Math.random() * 6 - 3, y: Math.random() * 6 - 3 };
                    this.gravity = 0.1;
                    this.alpha = 1;

                    this.update = function () {
                        this.x += this.velocity.x;
                        this.y += this.velocity.y;
                        this.velocity.y += this.gravity;
                        this.alpha -= 0.01;
                    };

                    this.draw = function () {
                        ctx.globalAlpha = this.alpha;
                        ctx.fillStyle = this.color;
                        ctx.fillRect(this.x, this.y, this.size, this.size);
                    };
                }

                function Firework(x, y) {
                    this.x = x;
                    this.y = y;
                    this.particles = [];
                    this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';

                    for (let i = 0; i < 50; i++) {
                        const size = Math.random() * 4 + 1;
                        const particle = new Particle(x, y, size, this.color);
                        this.particles.push(particle);
                    }

                    this.update = function () {
                        for (let i = 0; i < this.particles.length; i++) {
                            this.particles[i].update();
                            if (this.particles[i].alpha <= 0) {
                                this.particles.splice(i, 1);
                            }
                        }
                    };

                    this.draw = function () {
                        for (let i = 0; i < this.particles.length; i++) {
                            this.particles[i].draw();
                        }
                    };
                }

                function createFirework() {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height / 2;
                    const firework = new Firework(x, y);
                    fireworks.push(firework);
                }

                setInterval(createFirework, Math.floor(Math.random() * 300) + 100);

                function loop() {
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    for (let i = 0; i < fireworks.length; i++) {
                        fireworks[i].update();
                        fireworks[i].draw();
                        if (fireworks[i].particles.length <= 0) {
                            fireworks.splice(i, 1);
                        }
                    }

                    requestAnimationFrame(loop);
                }

                loop();
                setTimeout(function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    document.querySelector('.message').style.display = 'none';
                    // Set flag to indicate that fireworks have been displayed
                    localStorage.setItem(FIREWORKS_DISPLAYED_KEY, true);
                    location.reload(true);
                }, Math.floor(Math.random() * 6000) + 4000);

            });
        }
    }
})();

/*** Cornfetti ***/
(function () {
    window.addEventListener('load', function () {
        // check if the user visited the site before
        let visited = localStorage.getItem('visited');
        let today = new Date().toDateString();

        // if the user is visiting for the first time today, run the function
        if (!visited || visited !== today) {
            localStorage.setItem('visited', today);
            // create a canvas element
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            // set the canvas dimensions to the window size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // add the canvas to the page
            document.body.appendChild(canvas);

            // create an array to store the confetti particles
            const confettiParticles = [];

            // create an array of confetti colors
            const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];

            // create a confetti particle object
            function ConfettiParticle(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.size = Math.random() * 5 + 5;
                this.velocity = {
                    x: Math.random() * 6 - 3,
                    y: Math.random() * 3 + 3
                };
            }

            // create a function to generate confetti particles
            function generateConfetti() {
                // generate a random number of particles between 50 and 100
                const numParticles = Math.floor(Math.random() * 51) + 50;

                // generate the particles
                for (let i = 0; i < numParticles; i++) {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const particle = new ConfettiParticle(x, y, color);
                    confettiParticles.push(particle);
                }

                // write the congratulation message
                context.font = '48px serif';
                context.fillStyle = '#ffffff';
                context.textAlign = 'center';
                context.zindex = 9999;
                context.fillText('Hello and Welcome to dmj.one!', canvas.width / 2, canvas.height / 2);
            }

            // create a function to animate the confetti
            function animateConfetti() {
                // clear the canvas
                context.clearRect(0, 0, canvas.width, canvas.height);

                // update and draw each confetti particle
                for (let i = 0; i < confettiParticles.length; i++) {
                    const particle = confettiParticles[i];
                    particle.x += particle.velocity.x;
                    particle.y += particle.velocity.y;
                    context.fillStyle = particle.color;
                    context.fillRect(particle.x, particle.y, particle.size, particle.size);
                }

                // remove particles that have gone off screen
                for (let i = 0; i < confettiParticles.length; i++) {
                    if (confettiParticles[i].y > canvas.height) {
                        confettiParticles.splice(i, 1);
                    }
                }

                // if there are still particles, keep animating
                if (confettiParticles.length > 0) {
                    requestAnimationFrame(animateConfetti);
                }
            }

            // generate and animate the confetti
            generateConfetti();
            animateConfetti();

            // remove the canvas and message after 7 seconds
            setTimeout(function () {
                canvas.remove();
            }, 7000);
        }
    });
})();

/*** Funny Emoji's ***/
(function () {
    const isAprilFool = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        return day === 1 && month === 4;
    };

    if (isAprilFool()) {
        let stopAnimation = false;
        const emojis = [];

        function createEmoji() {
            const emojiOptions = ["😀", "😂", "😍", "🤪", "🤔", "🤢", "🤮", "🥴", "🥳", "🤩"];
            const emoji = document.createElement("div");
            emoji.classList.add("emoji");
            emoji.innerText = emojiOptions[Math.floor(Math.random() * emojiOptions.length)];
            emoji.style.left = Math.random() * window.innerWidth + "px";
            emoji.style.top = Math.random() * window.innerHeight + "px";
            document.body.appendChild(emoji);
            emojis.push(emoji);
            return emoji;
        }

        function moveEmoji(emoji) {
            const x = parseFloat(emoji.style.left);
            const y = parseFloat(emoji.style.top);
            const dx = Math.random() * 20 - 10;
            const dy = Math.random() * 20 - 10;
            emoji.style.left = x + dx + "px";
            emoji.style.top = y + dy + "px";
        }

        function startAnimation() {
            setInterval(() => {
                if (stopAnimation) {
                    return;
                }
                const emoji = createEmoji();
                setInterval(() => {
                    if (stopAnimation) {
                        return;
                    }
                    moveEmoji(emoji);
                }, Math.floor(Math.random() * 100) + 50);
            }, Math.floor(Math.random() * 300) + 50);
        }

        function clearEmojis() {
            emojis.forEach(emoji => emoji.remove());
            emojis.length = 0;
        }

        startAnimation();

        setTimeout(() => {
            stopAnimation = true;
            clearEmojis();
        }, Math.floor(Math.random() * 3000) + 2000);
    }
})();

/*** Valentine's Day ***/
// Heart Moves Straight up - constant speed.
/* (function () {
    const isValentine = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        return day === 14 && month === 2;
    };

    if (isValentine()) {
        const url = "/img/heart.png";
        function createHeart() {
            const heart = document.createElement("img");
            heart.src = url;
            heart.classList.add("heart");
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.top = window.innerHeight + "px";
            heart.style.width = (Math.random() * 20 + 10) + "px";
            heart.style.height = heart.style.width;
            heart.speed = Math.random() * 2 + 1;
            document.body.appendChild(heart);
            return heart;
        }
        function moveHeart(heart) {
            const top = parseFloat(heart.style.top);
            const newTop = top - heart.speed;
            heart.style.top = newTop + "px";
            if (newTop < 0) {
                heart.remove();
            }
        }

        let heartInterval = setInterval(() => {
            const heart = createHeart();
            setInterval(() => {
                moveHeart(heart);
            }, Math.floor(Math.random() * 30) + 21);
        }, Math.floor(Math.random() * 300) + 50);

        setTimeout(() => {
            clearInterval(heartInterval);
        }, Math.floor(Math.random() * 3000) + 2000);
    }
})(); */
// Heart moves up - Starts slow and then accelerates. 
(function () {
    const isValentine = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        return day === 14 && month === 2;
    };

    if (isValentine()) {
        const url = "/img/heart.png";
        function createHeart() {
            const heart = document.createElement("img");
            heart.src = url;
            heart.classList.add("heart");
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.top = window.innerHeight + "px";
            heart.style.width = (Math.random() * 20 + 10) + "px";
            heart.style.height = heart.style.width;
            heart.speed = Math.random() * 0.01 + 0.01;
            heart.easing = Math.random() * 0.2 + 0.1;
            document.body.appendChild(heart);
            return heart;
        }

        function moveHeart(heart) {
            const top = parseFloat(heart.style.top);
            const newTop = top - heart.speed;
            heart.style.top = newTop + "px";
            heart.speed += heart.easing; // Ease In
            if (newTop < 0) {
                heart.remove();
            }
        }

        let heartInterval = setInterval(() => {
            const heart = createHeart();
            setInterval(() => {
                moveHeart(heart);
            }, Math.floor(Math.random() * 30) + 10);
        }, Math.floor(Math.random() * 400) + 10);

        setTimeout(() => {
            clearInterval(heartInterval);
        }, Math.floor(Math.random() * 4000) + 1000);
    }
})();


/******** Fetch updated content from the server automatically ********/
(function () {
    let refreshCounter = 0; // Counter for refresh attempts
    const maxRefreshAttempts = 5; // Maximum number of refresh attempts
    let rtime = 12 * 60 * 60 * 1000; // 24 hours

    const currentTime = new Date().getTime(); // Get current time in milliseconds    
    const storedTime = localStorage.getItem(`pageLoadTime-${location.pathname}`); // Get time from local storage for this page
    // If there's no stored time, set it to the current time
    if (!storedTime) {
        localStorage.setItem(`pageLoadTime-${location.pathname}`, currentTime);
    } else {
        // If the stored time is more than 24 hours ago, hard reload the page
        if (currentTime - storedTime >= rtime) {
            if (refreshCounter >= maxRefreshAttempts) {
                console.error('Too many refresh attempts. Stopping refresh.');
                return;
            }
            refreshCounter++;
            localStorage.setItem(`pageLoadTime-${location.pathname}`, currentTime);
            location.reload(true);
        }
    }
    (async function () {
        let currentCachedVersion;

        try {
            // retrieve the current cached version of fs.js
            const response = await fetch('/js/edu_su_common.js');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            currentCachedVersion = await response.text();
        } catch (error) {
            console.error('Error while retrieving cached version:', error);
        }

        try {
            // make the request with cache-busting to retrieve the latest version
            const response = await fetch(`/js/edu_su_common.js?v=${Date.now()}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const latestVersion = await response.text();

            if (latestVersion !== currentCachedVersion) {
                // reload the page if the latest version is different from the cached version
                if (refreshCounter >= maxRefreshAttempts) {
                    console.error('Too many refresh attempts. Stopping refresh.');
                    return;
                }
                refreshCounter++;
                caches.keys().then(function (cacheNames) {
                    if (cacheNames.length > 0) {
                        // if (confirm("Currently you viewing the cached version of page. Do you want to get the current version of the website? \nPlease make sure you have internet connectivity before clicking Yes.")) {
                        cacheNames.forEach(function (cacheName) {
                            caches.delete(cacheName);
                        });

                        // Delete all cookies
                        if (document.cookie) {
                            document.cookie.split(";").forEach(function (c) {
                                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                            });
                        }

                        // Delete local storage data
                        if (window.localStorage) {
                            localStorage.clear();
                        }

                        // Delete session storage data
                        if (window.sessionStorage) {
                            sessionStorage.clear();
                        }

                        // Delete IndexedDB data
                        if (window.indexedDB) {
                            indexedDB.databases().then(function (dbs) {
                                dbs.forEach(function (db) {
                                    indexedDB.deleteDatabase(db.name);
                                });
                            });
                        }

                        // Delete WebSQL data (deprecated)
                        if (window.openDatabase) {
                            var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
                            db.transaction(function (tx) {
                                tx.executeSql('DROP TABLE mytable');
                            });
                        }

                        // Unregister service worker
                        if ('serviceWorker' in navigator) {
                            navigator.serviceWorker.getRegistrations().then(function (registrations) {
                                registrations.forEach(function (registration) {
                                    registration.unregister(); // registration.update();
                                });
                            });
                        }

                        // Delete Cache API data
                        if ('caches' in window) {
                            caches.keys().then(function (cacheNames) {
                                cacheNames.forEach(function (cacheName) {
                                    caches.delete(cacheName);
                                });
                            });
                        }

                        // Clear Web notifications
                        Notification.get().then(function (notifications) {
                            notifications.forEach(function (notification) {
                                notification.close();
                            });
                        });

                        // Clear Broadcast channels
                        if ('BroadcastChannel' in window) {
                            var bc = new BroadcastChannel('mychannel');
                            bc.close();
                        }

                        // Perform a hard refresh
                        location.reload(true);
                        // }
                    } else {
                        console.log("No cache available to delete.");
                    }
                });

            }
        } catch (error) {
            console.error('Error while fetching latest version:', error);
        }
    })();
})();


/******** Include all the Google ad / analytics and Microsoft Clarity codes. *******/
(function () {
    // Microsoft Clarity
    var microsoftClarity = document.createElement('script');
    microsoftClarity.innerHTML = "(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','fhsj5p7qsd');";
    document.head.appendChild(microsoftClarity);

    // Google Tag
    var gtag = document.createElement('script');
    gtag.async = true;
    gtag.src = 'https://www.googletagmanager.com/gtag/js?id=G-GYE73EC1RV';
    document.head.appendChild(gtag);
    var gtag = document.createElement('script');
    gtag.innerHTML = "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GYE73EC1RV');";
    document.head.appendChild(gtag);

    // Google Tag Manager
    var googleTagManager = document.createElement('script');
    googleTagManager.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N7J6QJX');";
    document.head.appendChild(googleTagManager);

    /* Google Adsense Start */
    // Google Adsense ONLY
    var googleAdsense = document.createElement('script');
    googleAdsense.async = true;
    googleAdsense.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9436488945721774';
    googleAdsense.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(googleAdsense);

    // Google Adsense Blocking Recovery.
    var googleAdsenseAdBlockingRecovery = document.createElement('script');
    googleAdsenseAdBlockingRecovery.async = true;
    googleAdsenseAdBlockingRecovery.src = 'https://fundingchoicesmessages.google.com/i/pub-9436488945721774?ers=1';
    googleAdsenseAdBlockingRecovery.setAttribute('nonce', 'EMMATsPYQgw1b0bjhpWtnQ');
    document.head.appendChild(googleAdsenseAdBlockingRecovery);
    var googleAdsenseAdBlockingRecovery = document.createElement('script');
    googleAdsenseAdBlockingRecovery.innerHTML = "(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();";
    googleAdsenseAdBlockingRecovery.setAttribute('nonce', 'EMMATsPYQgw1b0bjhpWtnQ');
    document.head.appendChild(googleAdsenseAdBlockingRecovery);

    var googleAdsenseErrorProtection = document.createElement('script');
    googleAdsenseErrorProtection.innerHTML = `(function(){/* Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ 'use strict';var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var m;a:{var ca={a:!0},n={};try{n.__proto__=ca;m=n.a;break a}catch(a){}m=!1}k=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null} var p=k,q=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(p)p(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.v=b.prototype},r=this||self,da=function(){},t=function(a){return a};var u;var w=function(a,b){this.g=b===v?a:""};w.prototype.toString=function(){return this.g+""};var v={},x=function(a){if(void 0===u){var b=null;var c=r.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:t,createScript:t,createScriptURL:t})}catch(d){r.console&&r.console.error(d.message)}u=b}else u=b}a=(b=u)?b.createScriptURL(a):a;return new w(a,v)};var A=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};var B={},C=null;var D="function"===typeof Uint8Array;function E(a,b,c){return"object"===typeof a?D&&!Array.isArray(a)&&a instanceof Uint8Array?c(a):F(a,b,c):b(a)}function F(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),e=0;e<a.length;e++){var f=a[e];null!=f&&(d[e]=E(f,b,c))}Array.isArray(a)&&a.s&&G(d);return d}d={};for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(f=a[e],null!=f&&(d[e]=E(f,b,c)));return d} function ea(a){return F(a,function(b){return"number"===typeof b?isFinite(b)?b:String(b):b},function(b){var c;void 0===c&&(c=0);if(!C){C={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=[" + /=","+/"," - _="," - _."," - _"],f=0;5>f;f++){var h=d.concat(e[f].split(""));B[f]=h;for(var g=0;g<h.length;g++){var l=h[g];void 0===C[l]&&(C[l]=g)}}}c=B[c];d=Array(Math.floor(b.length/3));e=c[64]||"";for(f=h=0;h<b.length-2;h+=3){var y=b[h],z=b[h+1];l=b[h+2];g=c[y>>2];y=c[(y&3)<< 4|z>>4];z=c[(z&15)<<2|l>>6];l=c[l&63];d[f++]=""+g+y+z+l}g=0;l=e;switch(b.length-h){case 2:g=b[h+1],l=c[(g&15)<<2]||e;case 1:b=b[h],d[f]=""+c[b>>2]+c[(b&3)<<4|g>>4]+l+e}return d.join("")})}var fa={s:{value:!0,configurable:!0}},G=function(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,fa);return a};var H;var J=function(a,b,c){var d=H;H=null;a||(a=d);d=this.constructor.u;a||(a=d?[d]:[]);this.j=d?0:-1;this.h=null;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],!(null===d||"object"!=typeof d||Array.isArray(d)||D&&d instanceof Uint8Array))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.g[a])?G(d):this.g[a]=I):(d=this.l+this.j,this.g[d]||(this.i=this.g[d]={}),(d=this.i[a])? G(d):this.i[a]=I)},I=Object.freeze(G([])),K=function(a,b){if(-1===b)return null;if(b<a.l){b+=a.j;var c=a.g[b];return c!==I?c:a.g[b]=G([])}if(a.i)return c=a.i[b],c!==I?c:a.i[b]=G([])},M=function(a,b){var c=L;if(-1===b)return null;a.h||(a.h={});if(!a.h[b]){var d=K(a,b);d&&(a.h[b]=new c(d))}return a.h[b]};J.prototype.toJSON=function(){var a=N(this,!1);return ea(a)}; var N=function(a,b){if(a.h)for(var c in a.h)if(Object.prototype.hasOwnProperty.call(a.h,c)){var d=a.h[c];if(Array.isArray(d))for(var e=0;e<d.length;e++)d[e]&&N(d[e],b);else d&&N(d,b)}return a.g},O=function(a,b){H=b=b?JSON.parse(b):null;a=new a(b);H=null;return a};J.prototype.toString=function(){return N(this,!1).toString()};var P=function(a){J.call(this,a)};q(P,J);function ha(a){var b,c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,d=null===(b=c.querySelector)||void 0===b?void 0:b.call(c,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};var Q=function(a,b){b=String(b);"application / xhtml + xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},R=function(a){this.g=a||r.document||document};R.prototype.appendChild=function(a,b){a.appendChild(b)};var S=function(a,b,c,d,e,f){try{var h=a.g,g=Q(a.g,"SCRIPT");g.async=!0;g.src=b instanceof w&&b.constructor===w?b.g:"type_error:TrustedResourceUrl";ha(g);h.head.appendChild(g);g.addEventListener("load",function(){e();d&&h.head.removeChild(g)});g.addEventListener("error",function(){0<c?S(a,b,c-1,d,e,f):(d&&h.head.removeChild(g),f())})}catch(l){f()}};var ia=r.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),ja=r.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg == "),ka=r.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),la=function(a,b,c){this.h=a;this.j=new R(this.h);this.g=null;this.i=[];this.l=!1;this.o=b;this.m=c},V=function(a){if(a.h.body&&!a.l){var b= function(){T(a);r.setTimeout(function(){return U(a,3)},50)};S(a.j,a.o,2,!0,function(){r[a.m]||b()},b);a.l=!0}},T=function(a){for(var b=W(1,5),c=0;c<b;c++){var d=X(a);a.h.body.appendChild(d);a.i.push(d)}b=X(a);b.style.bottom="0";b.style.left="0";b.style.position="fixed";b.style.width=W(100,110).toString()+" % ";b.style.zIndex=W(2147483544,2147483644).toString();b.style["background - color"]=ma(249,259,242,252,219,229);b.style["box - shadow"]="0 0 12px #888";b.style.color=ma(0,10,0,10,0,10);b.style.display= "flex";b.style["justify - content"]="center";b.style["font - family"]="Roboto, Arial";c=X(a);c.style.width=W(80,85).toString()+" % ";c.style.maxWidth=W(750,775).toString()+"px";c.style.margin="24px";c.style.display="flex";c.style["align - items"]="flex - start";c.style["justify - content"]="center";d=Q(a.j.g,"IMG");d.className=A();d.src=ia;d.style.height="24px";d.style.width="24px";d.style["padding - right"]="16px";var e=X(a),f=X(a);f.style["font - weight"]="bold";f.textContent=ja;var h=X(a);h.textContent=ka;Y(a, e,f);Y(a,e,h);Y(a,c,d);Y(a,c,e);Y(a,b,c);a.g=b;a.h.body.appendChild(a.g);b=W(1,5);for(c=0;c<b;c++)d=X(a),a.h.body.appendChild(d),a.i.push(d)},Y=function(a,b,c){for(var d=W(1,5),e=0;e<d;e++){var f=X(a);b.appendChild(f)}b.appendChild(c);c=W(1,5);for(d=0;d<c;d++)e=X(a),b.appendChild(e)},W=function(a,b){return Math.floor(a+Math.random()*(b-a))},ma=function(a,b,c,d,e,f){return"rgb("+W(Math.max(a,0),Math.min(b,255)).toString()+", "+W(Math.max(c,0),Math.min(d,255)).toString()+", "+W(Math.max(e,0),Math.min(f, 255)).toString()+")"},X=function(a){a=Q(a.j.g,"DIV");a.className=A();return a},U=function(a,b){0>=b||null!=a.g&&0!=a.g.offsetHeight&&0!=a.g.offsetWidth||(na(a),T(a),r.setTimeout(function(){return U(a,b-1)},50))},na=function(a){var b=a.i;var c="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];b=c?c.call(b):{next:aa(b)};for(c=b.next();!c.done;c=b.next())(c=c.value)&&c.parentNode&&c.parentNode.removeChild(c);a.i=[];(b=a.g)&&b.parentNode&&b.parentNode.removeChild(b);a.g=null};var pa=function(a,b,c,d,e){var f=oa(c),h=function(l){l.appendChild(f);r.setTimeout(function(){f?(0!==f.offsetHeight&&0!==f.offsetWidth?b():a(),f.parentNode&&f.parentNode.removeChild(f)):a()},d)},g=function(l){document.body?h(document.body):0<l?r.setTimeout(function(){g(l-1)},e):b()};g(3)},oa=function(a){var b=document.createElement("div");b.className=a;b.style.width="1px";b.style.height="1px";b.style.position="absolute";b.style.left=" - 10000px";b.style.top=" - 10000px";b.style.zIndex=" - 10000";return b};var L=function(a){J.call(this,a)};q(L,J);var qa=function(a){J.call(this,a)};q(qa,J);var ra=function(a,b){this.l=a;this.m=new R(a.document);this.g=b;this.i=K(this.g,1);b=M(this.g,2);this.o=x(K(b,4)||"");this.h=!1;b=M(this.g,13);b=x(K(b,4)||"");this.j=new la(a.document,b,K(this.g,12))};ra.prototype.start=function(){sa(this)}; var sa=function(a){ta(a);S(a.m,a.o,3,!1,function(){a:{var b=a.i;var c=r.btoa(b);if(c=r[c]){try{var d=O(P,r.atob(c))}catch(e){b=!1;break a}b=b===K(d,1)}else b=!1}b?Z(a,K(a.g,14)):(Z(a,K(a.g,8)),V(a.j))},function(){pa(function(){Z(a,K(a.g,7));V(a.j)},function(){return Z(a,K(a.g,6))},K(a.g,9),K(a.g,10),K(a.g,11))})},Z=function(a,b){a.h||(a.h=!0,a=new a.l.XMLHttpRequest,a.open("GET",b,!0),a.send())},ta=function(a){var b=r.btoa(a.i);a.l[b]&&Z(a,K(a.g,5))};(function(a,b){r[a]=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];r[a]=da;b.apply(null,d)}})("__h82AlnkH6D91__",function(a){"function"===typeof window.atob&&(new ra(window,O(qa,window.atob(a)))).start()});}).call(this); window.__h82AlnkH6D91__("WyJwdWItOTQzNjQ4ODk0NTcyMTc3NCIsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9iL3B1Yi05NDM2NDg4OTQ1NzIxNzc0Il0sbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9lbC9BR1NLV3hWNkF5WUdMRmhJN0kxZkdOc2hrSXBPbXR4emxHT1hDRVhNOUFMMWY1RWpGckI1MWVSNkMxcElKTFBvTUFBbkM0VGlFdDJKNkZkd1hIbEM4UlQ1MWZDRGJBXHUwMDNkXHUwMDNkP3RlXHUwMDNkVE9LRU5fRVhQT1NFRCIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFc4ekdULUgyMXpLRUVwRDJCMm90Qk9Jc3lEVkRwT3dFZzExM2ZsWFMwcUpfVkhqaFNiSHFROUtOQURlXzJTZ053dnh1X0FJWXNhZE1Rc3BzcjRIWDlGa0FcdTAwM2RcdTAwM2Q / YWJcdTAwM2QxXHUwMDI2c2JmXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFgzcUJhdGNXSlhucjlIUWNMcG9Dek1QczRDWnVZZk5yeGN5ZzFCbTVDRVFXUmd4dHJWQ2pxcmxDRTJ1NVZLd0oyTHlCRzRQX0o0TVBvLVBERjJ6ekRwcEFcdTAwM2RcdTAwM2Q / YWJcdTAwM2QyXHUwMDI2c2JmXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFhXdTk3eW5nYVFnaFdFdGp0Z0RaVE1tc1pKdWpKN3AwT2lKZ0tYWXNQZENSaWRJaWpjM2VQalhLcENzQW1pQ3YxZzdTQ295dHp0ZTBMclFWSURQTHZhYmdcdTAwM2RcdTAwM2Q / c2JmXHUwMDNkMiIsImRpdi1ncHQtYWQiLDIwLDEwMCwiY0hWaUxUazBNelkwT0RnNU5EVTNNakUzTnpRXHUwMDNkIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tLzBlbW4vZi9wL3B1Yi05NDM2NDg4OTQ1NzIxNzc0LmpzP3VzcXBcdTAwM2RDQUUiXSwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vZWwvQUdTS1d4VldTV2NEQjhucnlZSklvejdBWVByTWl1dUdjSVI1eGp3eVhDMkd5eDEza005VlNRNllLR0FTNDNMcjhVNG95REVNRjVDak83SkRUNi1tMmdSbC1GUFpWUVx1MDAzZFx1MDAzZCJd");`;
    document.head.appendChild(googleAdsenseErrorProtection);
    /* Adsense End */
})();

/******* get reading time required *******/
window.onload = function () {
    var totalTime = 0;
    var content = document.body.innerHTML;
    var words = content.split(" ");

    for (var i = 0; i < words.length; i++) {
        totalTime += (words[i].length / 250);
    }
    // console.log("Total time to read the webpage: " + totalTime + " minutes");
};



/******* SECURITY SUITE START *******/
(function () {
    window.onload = function () {
        if (location.hostname === "127.0.0.1") {
            document.body.style.webkitUserSelect = "text";
            document.body.style.mozUserSelect = "text";
            document.body.style.msUserSelect = "text";
            document.body.style.userSelect = "text";
        }
    }
})();
(function () {
    if (location.hostname === "dmj.one") {
        const clearinteral_sakjds = window.setInterval(function () {
            if (localStorage.getItem("noshow") === "1" && window.scriptsremoved != 1) {
                (function () {
                    // FAILSAFE REMOVAL OF ALL SCRIPTS from the f12 developer console view.
                    window.scriptsremoved = 1;
                    window.addEventListener("load", function () {
                        setTimeout(function () {
                            // Method 1
                            var scripts = document.getElementsByTagName("script");
                            var loaded = 0;
                            for (var i = 0; i < scripts.length; i++) {
                                scripts[i].onload = function () {
                                    loaded++;
                                    if (loaded === scripts.length) {
                                        for (var j = 0; j < scripts.length; j++) {
                                            scripts[j].remove();
                                        }
                                    }
                                };
                            }
                            // Method 2
                            $(document).ready(function () {
                                $("script").remove();
                            });
                            // Method 3 
                            var head = document.head;
                            for (var i = 0; i < head.children.length; i++) {
                                if (head.children[i].tagName.toLowerCase() === "script") {
                                    head.removeChild(head.children[i]);
                                }
                            }
                        }, 10);
                    });

                    // Disable F12 and CTRL + U silently!
                    function showContactMessage() {
                        var encodedUrl = encodeURIComponent(window.location.href);
                        var modal =
                            `<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="contactModalLabel">Thank you for your interest and contributions!</h5>
                    </div>
                    <div class="modal-body">
                        <p>Join our mission to create a better resource for all by becoming a valued contributor. Your ideas and insights are highly valued and appreciated. Share your knowledge, ideas, and passion with the world by <a href='mailto:contact@dmj.one?subject=Contribution for [ ${document.title} ]&body=Hello dmj.one,%0D%0A%0D%0AI want to contribute to the course/page [ ${encodedUrl} ] (change as required) with the following details:%0D%0A%0D%0A Your Name: %0D%0A Your Email: %0D%0A Content: %0D%0A%0D%0A Any other relevant details: %0D%0A%0D%0A%0D%0A%0D%0AThank you.%0A%0D%0A%0D'>emailing us</a>. Don't forget to include your name, email address, and any other relevant details.</p>
                        <p>If you spot an error or have a suggestion for improvement, please don't hesitate to reach us <a href='mailto:contact@dmj.one?subject=Suggestions for [ ${document.title} ]&body=I spotted discrepancies on the page ${encodedUrl} (change as required) and want to suggest these changes:%0D%0A%0D%0A1. %0D%0A2. %0D%0A%0D%0AYour Name: %0D%0AYour Email: %0D%0AAny other relevant details: %0D%0A%0D%0AThank you.'>here</a>.</p>
                        <p>Let's learn, grow, inspire each other and make a difference together by unleashing the power of knowledge!</p>
                        <p class="text-center small"><strong>Click outside the box to continue</strong> learning and unlock a world of knowledge and possibilities that awaits you.</p>
                    </div>
                </div>
            </div>
        </div>`;

                        var body = document.querySelector('body');
                        body.insertAdjacentHTML('beforeend', modal);



                        //                         var modal =
                        //                             `<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
                        // <div class="modal-dialog modal-dialog-centered" role="document">
                        // <div class="modal-content">
                        // <div class="modal-header">
                        // <h5 class="modal-title text-center" id="contactModalLabel">Thank you for your interest and contributions!</h5>
                        // </div>
                        // <div class="modal-body">
                        // <p>Join our mission to create a better resource for all by becoming a valued contributor. Your ideas and insights are highly valued and appreciated. Share your knowledge, ideas, and passion with the world by <a href='mailto:contact@dmj.one?subject=Contribution for [ ${document.title} ]&body=Hello dmj.one,%0D%0A%0D%0AI want to contribute to the course/page [ ${window.location.href} ] (change as required) with the following details:%0D%0A%0D%0A Your Name: %0D%0A Your Email: %0D%0A Content: %0D%0A%0D%0A Any other relevant details: %0D%0A%0D%0A%0D%0A%0D%0AThank you.%0A%0D%0A%0D'>emailing us</a>. Don't forget to include your name, email address, and any other relevant details.</p>
                        // <p>If you spot an error or have a suggestion for improvement, please don't hesitate to reach us <a href='mailto:contact@dmj.one?subject=Suggestions for [ ${document.title} ]&body=I spotted discrepancies on the page ${window.location.href} (change as required) and want to suggest these changes:%0D%0A%0D%0A1. %0D%0A2. %0D%0A%0D%0AYour Name: %0D%0AYour Email: %0D%0AAny other relevant details: %0D%0A%0D%0AThank you.'>here</a>.</p>
                        // <p>Let's learn, grow, inspire each other and make a difference together by unleashing the power of knowledge!</p>
                        // <p class="text-center small"><strong>Click outside the box to continue</strong> learning and unlock a world of knowledge and possibilities that awaits you.</p>
                        // </div>
                        // </div>
                        // </div>
                        // </div>`;

                        //                         var body = document.querySelector('body');
                        //                         body.insertAdjacentHTML('beforeend', modal);

                        var modalEl = document.querySelector('#contactModal');
                        var modalOptions = {
                            backdrop: 'static',
                            keyboard: false
                        };
                        var modal = new bootstrap.Modal(modalEl, modalOptions);
                        modal.show();

                        var documentClickHandler = function (event) {
                            if (!event.target.closest('.modal-content')) {
                                modal.hide();
                                document.removeEventListener('click', documentClickHandler);
                            }
                        };
                        document.addEventListener('click', documentClickHandler);
                    }

                    (function () {

                        document.onkeydown = function (e) {
                            if (e.keyCode === 123 || (e.ctrlKey && e.keyCode === 85)) {
                                e.preventDefault();
                                showContactMessage();
                            }
                        };
                        document.oncontextmenu = function () {
                            return false;
                        }
                        document.onmousedown = function (e) {
                            if (e.button === 2) {
                                showContactMessage();
                                return false;
                            }
                        }
                    })();

                    // Clear Console
                    console.clear();
                })();
            }
        }, 1000);
        if (window.scriptsremoved === 1) {
            clearInterval(clearinteral_sakjds);
        }
    }
})();
/******* SECURITY SUITE END *******/




/************* AUTOMATION CONTROL PANEL ******************/
window.addEventListener("load", function () {
    var currentUrl = document.location.pathname;
    // Header Automation
    if (!window["loaded_header_author"] == 1 || window["page"] === 404) {
        var vp_headerurls = ["/edu/su/course/csu1128/program/p31", "/edu/su/course/csu1128/program/p32"];
        var harshal_headerurls = ["/edu/su/course/csu1128p/labfile/p7_m2"];

        if (vp_headerurls.includes(currentUrl)) {
            header_author("vp");
        } else if (harshal_headerurls.includes(currentUrl)) {
            header_author("harshal");
        } else if (window["page"] == 404) {
            document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
        } else {
            // header_author();
            document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
        }
    }

    // Body Automation - TO DO
    var agenmenu = document.querySelector("#agenmenu");
    if (agenmenu) {
        if (!window["loaded_body_genmenu"] == 1) {
            body_genmenu();
        }
    }



    // Footer Automation    
    if (!window["loaded_copyright"] == 1) {
        var footerurls = ["/se.html", "/fr.html", "/de.html"];
        if (footerurls.includes(currentUrl)) {
            copyright("some");
        } else {
            copyright("all");
        }
    }
});


// Test Mode
/* (function () {
    var d = (window.location.hostname === "dmj.one") ? "huTc3sO65ZnfzK2um5vEvaDp3smun+PffIitqN+9vNrp4JgJqylZ" : "o8uwvLjXzG29wcqVb3m52oexr8WVwsBsjaOHwK3B0MjBiAgXMJO";
    (function (n) { var m = n.slice(-5), j = n.slice(0, -5), o = "=".repeat((4 - j.length % 4) % 4), e = []; for (var i = 0; i < atob(j + o).length; i++) { e[i] = atob(j + o).charCodeAt(i) - m.charCodeAt(i % 5); } console.log(String.fromCharCode.apply(null, e)) })(d);
    if (window.location.hostname !== "dmj.one") {
        window.addEventListener('load', function () { console.clear(); });
    }
})(); */
(function () { if (window.location.hostname === "dmj.one") { window.addEventListener('load', function () { console.clear(); }); } })();
