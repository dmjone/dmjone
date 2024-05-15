/* A Messy Playground! - This file contains all the js combined for experiments. NOT FOR PRODUCTION USE.
 * To Minify Visit https://codebeautify.org/minify-js?url=https://dmj.one/js/dev.js
*/

/*************** Fixed Functions and Variables START **************/
const body_blockcards_continuereading_options = ['Expand Your Knowledge', 'Keep Learning', 'Feed Your Curiosity', 'Keep Your Mind Active', 'Learn More With Us', 'Stay Curious', 'Keep Discovering', 'Feed Your Brain', "Don't Stop Learning", 'Keep Exploring', 'Keep Absorbing', 'Continue Your Learning Journey', 'Unlock More Learning', 'Keep Developing Your Understanding', 'Expand Your Perspective', 'Keep Your Mind Engaged', 'The Learning Continues', 'Stay Inquisitive', 'Keep Your Brain Engaged', 'Keep Your Intellectual Fire Burning', 'Keep Challenging Yourself', 'Stay On The Learning Path', 'The Adventure Continues', 'Keep Your Mind Open', 'Stay Focused On Learning', 'Keep Your Learning Moving', 'Keep Expanding Your Mind', 'Keep Progressing In Your Learning', 'The Learning Never Stops', 'Keep Your Intellect Fueled', 'Keep Your Brain Buzzing', 'Keep Your Learning Journey Thriving', 'Keep Your Curiosity Alive', 'Keep Your Mind Alert', 'Keep Building Your Knowledge', 'Stay Invested In Your Learning', 'Keep Building Your Expertise', 'The Learning Journey Continues', 'Keep Your Understanding Evolving', 'Keep Your Learning Momentum Going', 'Keep Pushing Your Limits', 'Stay On The Path To Learning', 'Keep Unleashing Your Potential', 'Unlock More Insights', 'Dive Deeper Into Knowledge', 'Embrace the Learning Adventure', 'Ignite Your Intellectual Spark', 'Pursue Your Quest for Knowledge', 'Embark on Your Learning Voyage', 'Unearth More Wisdom', 'Uncover More Learning Treasures', 'Boost Your Brainpower', 'Elevate Your Understanding', 'Experience the Joy of Learning', 'Extend Your Intellectual Horizons', 'Accelerate Your Learning Journey', 'Illuminate Your Mind', 'Foster Your Learning Growth', 'Cultivate Your Knowledge Garden', 'Propel Your Learning Forward', 'Stoke Your Curiosity', 'Nurture Your Thirst for Knowledge', 'Enrich Your Learning Experience', 'Amplify Your Knowledge', 'Advance Your Learning Expedition', 'Expand Your Learning Universe', 'Sharpen Your Intellect', 'Reveal More Knowledge Mysteries', 'Bolster Your Learning Power', 'Invigorate Your Mind', 'Fuel Your Learning Journey', 'Boost Your Educational Enthusiasm', 'Extend Your Learning Odyssey', 'Broaden Your Knowledge Base', 'Deepen Your Understanding', 'Unfold More Learning Secrets', 'Unravel More Learning Mysteries', 'Explore Further into Knowledge', 'Progress Along Your Learning Path', 'Supercharge Your Learning', 'Venture Deeper into Knowledge', 'Advance Your Knowledge Quest', 'Quench Your Knowledge Thirst', 'Continue Your Intellectual Journey', 'Further Your Learning Adventure', 'Magnify Your Learning Experience', 'Dive Into the Knowledge Ocean', 'Illuminate Your Learning Path', 'Pioneer Your Learning Journey', 'Elevate Your Learning Endeavor', 'Enhance Your Learning Expedition', 'Galvanize Your Learning Pursuit', 'Deepen Your Knowledge Dive'];

const cdnjs_jquery = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
const cdnjs_bootstrap = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js";
const cdnjs_highlightjs = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
const cdnjs_highlightjs_asm = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/armasm.min.js";
const cdnjs_katex = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js";
const cdnjs_katex_autorender = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js";
const cdnjs_font_awesome = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js";
const cdnjs_cryptoJS = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js";
// const body_pomodoro_helptext = "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student. The technique has been widely popularized by dozens of apps and websites providing timers and instructions. Closely related to concepts such as timeboxing and iterative and incremental development used in software design, the method has been adopted in pair programming contexts.";
const body_pomodoro_helptext = `
<h2 style="color: #FFD700; margin-bottom: 1rem;">Time for a Break!</h2>
<p>During this 5-minute break, consider engaging in activities that help you relax and recharge. Here's a guide to make the most of your break:</p>
<p><strong>Do:</strong></p>
<ul>
  <li>Stand up and stretch your arms, legs, and back.</li>
  <li>Take a short walk around your room or office.</li>
  <li>Practice deep-breathing exercises or meditate to clear your mind.</li>
  <li>Drink water to stay hydrated.</li>
  <li>Look at distant objects to reduce eye strain.</li>
</ul>
<p><strong>Don't:</strong></p>
<ul>
    <li>Engage in stressful or work-related activities.</li>
    <li>Use electronic devices that can strain your eyes further.</li>
    <li>Consume caffeine or sugar-heavy snacks that can affect your focus.</li>
</ul>
<p>Remember, the goal is to relax and prepare your mind for another productive session!</p>
`;



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


//////////////////////// LOADER - Version 1.0 - BASE
// (function () {
//     // Dynamically include var.js - it includes var.js for every folder hiearchy
//     // currently capped till course code (7) - scalable to any number of folders.

//     /* -- CRUDE --
//     var currentUrl = window.location.href,
//         urlParts = currentUrl.split('/'),
//         varJsUrl = 'https://dmj.one/var.js';
//     if (urlParts[3])
//         varJsUrl = 'https://dmj.one/' + urlParts[3] + '/var.js';
//     if (urlParts[4])
//         varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/var.js';
//     if (urlParts[5])
//         varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/' + urlParts[5] + '/var.js';
//     if (urlParts[6])
//         varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/' + urlParts[5] + '/' + urlParts[6] + '/var.js';
//     */

//     /* -- Advanced --
//     var currentUrl = window.location.href, urlParts = currentUrl.split('/'), varJsUrl = 'https://dmj.one/var.js', lastFolderIndex = urlParts.length - 1; // initialize the last complete folder index
//     for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) { // iterate through the parts in reverse order, starting from the last index
//         lastFolderIndex = i;
//         break;
//     }
//     if (lastFolderIndex >= 4 && lastFolderIndex <= 6) // check if the last folder index is between 4 and 6 (inclusive)
//         varJsUrl = 'https://dmj.one/' + urlParts.slice(3, lastFolderIndex).join('/') + '/var.js'; // create the varJsUrl using the parts from index 3 to lastFolderIndex
//     else if (lastFolderIndex > 6) // check if the last folder index is greater than 6
//         varJsUrl = 'https://dmj.one/' + urlParts.slice(3, 7).join('/') + '/var.js'; // create the varJsUrl using the parts from index 3 to 7
//  */
//     // -- Professional --
//     // var varJsUrl = (function () {
//     //     var currentUrl = window.location.href,
//     //         urlParts = currentUrl.split('/').map(encodeURIComponent),
//     //         varJsUrl = '/var.js',
//     //         lastFolderIndex = urlParts.length - 1;
//     //     for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) {
//     //         lastFolderIndex = i;
//     //         break;
//     //     }
//     //     if (lastFolderIndex >= 4 && lastFolderIndex <= 6)
//     //         varJsUrl = '/' + urlParts.slice(3, lastFolderIndex).join('/') + '/var.js';
//     //     else if (lastFolderIndex > 6)
//     //         varJsUrl = '/' + urlParts.slice(3, 7).join('/') + '/var.js';

//     //     return varJsUrl;
//     // })(); document.write(`<script src='${varJsUrl}'></script>`);


//     var getJsUrl = function (fileName) {
//         var currentUrl = window.location.href,
//             urlParts = currentUrl.split('/').map(encodeURIComponent),
//             lastFolderIndex = urlParts.length - 1;
//         for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) {
//             lastFolderIndex = i;
//             break;
//         }
//         var jsUrl;
//         if (lastFolderIndex >= 4 && lastFolderIndex <= 6)
//             jsUrl = '/' + urlParts.slice(3, lastFolderIndex).join('/') + '/' + fileName;
//         else if (lastFolderIndex > 6)
//             jsUrl = '/' + urlParts.slice(3, 7).join('/') + '/' + fileName;
//         else
//             jsUrl = '/' + fileName;

//         return jsUrl;
//     };
//     document.write(`<script src='${getJsUrl("var.js")}'></script>`);

//     (function () {
//         fetch(getJsUrl("encvar.json"))
//             .then(response => {
//                 if (!response.ok) {
//                     throw response;
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // your code here
//                 let cryptojs_enc_map = data;
//                 let urlParts = window.location.pathname.split('/').filter(Boolean);
//                 let current_map = cryptojs_enc_map;
//                 for (let part of urlParts) {
//                     current_map = current_map[part.replace('.html', '')];
//                     if (typeof current_map === "string") {
//                         let cryptojs_enc_data = window["cryptojs_enc_data"] = current_map;
//                         // console.log('cryptojs_enc_data:', current_map);
//                         return;
//                     }
//                 }
//             })
//             .catch((error) => {
//                 if (error.status !== 404) {
//                     console.error('Error:', error);
//                 }
//                 // else, ignore the error or handle it differently
//             });
//     })();

//     var common_variables = "/js/comvar.js";
//     document.write(`<script src='${common_variables}'></script>`);

//     var qrcode_js = "/js/qrcode.js"; // from "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
//     document.write(`<script src='${qrcode_js}'></script>`);

//     //var edu_var = "https://dmj.one/js/edu_su_var.js";
//     //var edu_js = "https://dmj.one/js/edu_su_common.js";
//     // const cdnjs_jquery = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";
//     // const cdnjs_bootstrap = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js";
//     // const cdnjs_highlightjs = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js";
//     // const cdnjs_katex = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.4/katex.min.js";
//     // const cdnjs_katex_autorender = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.4/contrib/auto-render.min.js";
//     // const cdnjs_font_awesome = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js";

//     // Create an array of script URLs
//     var scripts = [cdnjs_jquery, cdnjs_bootstrap, cdnjs_highlightjs, cdnjs_katex, cdnjs_katex_autorender, cdnjs_font_awesome, cdnjs_cryptoJS];
//     var loaded = 0; // Create a counter to keep track of the number of scripts that have finished loading

//     for (var i = 0; i < scripts.length; i++) { // Iterate through the array of scripts
//         var script = document.createElement('script'); // Create script element
//         script.src = scripts[i]; // Set the script's URL
//         script.defer = true;
//         script.onload = function () {
//             loaded++; // Increment the counter
//             if (loaded === scripts.length) { // Check if all scripts have finished loading. If it is then Execute the onload code here

//                 var autorender = document.createElement('script');
//                 autorender.innerHTML = `
// hljs.highlightAll(); // Highlight js init - single line code.
// // renderMathInElement(document.body); // KaTex Math js
// // renderMathInElement(document.body, {
// //     delimiters: [
// //         { left: '$$', right: '$$', display: true },
// //         { left: '$', right: '$', display: false },
// //         { left: '\\(', right: '\\)', display: false },
// //         { left: '\\[', right: '\\]', display: true }
// //     ],
// //     throwOnError: false
// // });
//                 `;
//                 document.head.appendChild(autorender);

//                 // hljs.highlightAll(); // Highlight js init - single line code.
//                 // renderMathInElement(document.body); // KaTex Math js

//                 /*                 // KaTex Math js START
//                                 renderMathInElement(document.body, {
//                                     delimiters: [{ left: '$$', right: '$$', display: true },
//                                     { left: '$', right: '$', display: false },
//                                     { left: '\\(', right: '\\)', display: false },
//                                     { left: '\\[', right: '\\]', display: true }],
//                                     throwOnError: false
//                                 });
//                                 // KaTex Math js END */
//             }
//         };
//         document.head.appendChild(script); // Append the script element to the head of the document
//     }
// })();

////////////////////// LOADER - Version 1.4 - Advanced
(function () {
    var getJsUrl = function (fileName) {
        var currentUrl = window.location.href,
            urlParts = currentUrl.split('/').map(encodeURIComponent),
            lastFolderIndex = urlParts.length - 1;
        for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) {
            lastFolderIndex = i;
            break;
        }
        var jsUrl;
        if (lastFolderIndex >= 4 && lastFolderIndex <= 6)
            jsUrl = '/' + urlParts.slice(3, lastFolderIndex).join('/') + '/' + fileName;
        else if (lastFolderIndex > 6)
            jsUrl = '/' + urlParts.slice(3, 7).join('/') + '/' + fileName;
        else
            jsUrl = '/' + fileName;

        return jsUrl;
    };
    document.write(`<script src='${getJsUrl("var.js")}'></script>`);

    (function () {
        var appendScript = function () {
            var script = document.createElement('script');
            script.src = getJsUrl("var.js");
            console.log(getJsUrl("var.js"));
            script.async = false; // This ensures that the script is executed in order
            document.body.appendChild(script);

        };
        if (window.varjsrequirefooter == 1 && window.varjsalreadyloaded != 1) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', appendScript);
            } else {
                // DOMContentLoaded has already fired
                appendScript();
            }
        }
    })();

    (function () {
        if (!window.dnfetchenc) {
            fetch(getJsUrl("encvar.json"))
                .then(response => {
                    if (!response.ok) {
                        throw response;
                    }
                    return response.json();
                })
                .then(data => {
                    // your code here
                    let cryptojs_enc_map = data;
                    let urlParts = window.location.pathname.split('/').filter(Boolean);
                    let current_map = cryptojs_enc_map;
                    for (let part of urlParts) {
                        current_map = current_map[part.replace('.html', '')];
                        if (typeof current_map === "string") {
                            let cryptojs_enc_data = window["cryptojs_enc_data"] = current_map;
                            // console.log('cryptojs_enc_data:', current_map);
                            return;
                        }
                    }
                })
                .catch((error) => {
                    if (error.status !== 404) {
                        console.error('Error:', error);
                    }
                    // else, ignore the error or handle it differently
                });
        }
    })();

    var common_variables = "/js/comvar.js";
    document.write(`<script src='${common_variables}'></script>`);

    // from "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
    var qrcode_js = "/js/qrcode.js";
    document.write(`<script src='${qrcode_js}'></script>`);

    const allScripts = [cdnjs_jquery, cdnjs_bootstrap, cdnjs_highlightjs, cdnjs_font_awesome, cdnjs_cryptoJS, cdnjs_highlightjs_asm];
    var loadScript = function (src) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };


    // Load katex.min.js first. Once katex.min.js is loaded, load auto-render.min.js
    loadScript(cdnjs_katex).then(function () {
        return loadScript(cdnjs_katex_autorender);
    }).then(function () {
        return Promise.all(allScripts.map(loadScript));
    }).then(function () {
        hljs.highlightAll(); // Highlight Js Automatic rendering init 
        renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false
        }); // Once all scripts are loaded, run the KaTeX rendering function
    });
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
//////////////// Version 1.0
// function header_navbar(flags) {
//     if (flags) { return 0 };

//     // Get current URL
//     function header_nav() {
//         const url = new URL(window.location.href);
//         const base = '/edu/su/';
//         const courses = `${base}course/`;
//         const pathname = url.pathname.split('/');
//         const nav_folder = pathname[4] ? `${courses}${pathname[4]}` : '';
//         const nav_subfolder = pathname[5] || '';
//         const nav_filename = pathname.pop() || '';


//         /*         var url = new URL(window.location.href);
//                 var base = "/edu/su/";
//                 var courses = base + "course/";
//                 if (url.pathname.split("/")[4]) { var nav_folder = courses + url.pathname.split("/")[4]; }
//                 var nav_subfolder = url.pathname.split("/")[5];
//                 var nav_filename = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);
//          */

//         var nav_home = `<a href="//${window.location.host}" data-toggle="tooltip" data-placement="top" title="Home" data-original-title="Home"><i class="bi bi-house-fill text-light"></i></a>`;
//         var nav_path = `<a href="${nav_folder}/" data-toggle="tooltip" data-placement="top" title="${nav_folder}" data-original-title="${nav_folder}"><i class="bi bi-journals text-light"></i></a>`;
//         var nav_subpath = `<a href="${nav_folder}/${nav_subfolder}/" data-toggle="tooltip" data-placement="top" title="${nav_subfolder}" data-original-title="${nav_subfolder}"><i class="bi bi-card-list text-light"></i></a>`;
//         var nav_file = `<a href="${nav_filename}" data-toggle="tooltip" data-placement="top" title="${nav_filename}" data-original-title="${nav_filename}"><i class="bi bi-journal-code text-light"></i></a>`;

//         var list_start = '<nav aria-label="breadcrumb" class="navbar-brand text-light"><ol class="breadcrumb" style="margin:auto">';
//         var list_home = `<li class="breadcrumb-item">${nav_home}</li>`;
//         var list_close = '</ol></nav>';
//         var list_path = '';

//         if (nav_folder) {
//             list_path = `<li class="breadcrumb-item">${nav_path}</li>`;
//             if (nav_subfolder) {
//                 list_path += '<li class="breadcrumb-item">' + nav_subpath + '</li>';
//                 if (nav_filename) {
//                     list_path += '<li class="breadcrumb-item active" aria-current="page">' + nav_file + '</li>';
//                 }
//             }
//         }
//         if (!window["page"] == 404 || !window["page"] == "homepage") {
//             list_path = '';
//         }
//         return (list_start + list_home + list_path + list_close);
//     }



//     // Dropdown Menu Generator START
//     function nav_createDropdown(links) {
//         let year = links.shift();
//         links.sort();
//         let li_link = "";
//         var path = window.location.pathname;
//         var folder = window.location.pathname.split("/")[4];
//         for (let i = 0; i < links.length; i++) {
//             if (links[i] != folder) {
//                 var linkactive = '"';
//             } else {
//                 var linkactive = ' active" aria-current="page"';
//             }
//             if (links[i] == "csu5543" || links[i] == "csu934") {
//                 li_link += `<li><a class="dropdown-item ${linkactive} href="/edu/su/course/${links[i]}/" data-toggle="tooltip" data-placement="top" title="Work In Progress. Section will be available soon." data-original-title="Work In Progress. Section will be available soon.">${links[i].toUpperCase()} <strong>[WIP]</strong></a></li>`;
//             } else {
//                 li_link += `<li><a class="dropdown-item ${linkactive} href="/edu/su/course/${links[i]}/">${links[i].toUpperCase()}</a></li>`;
//             }
//             // li_link += `<li><a class="dropdown-item ${linkactive} href="/edu/su/course/${links[i]}/">${links[i].toUpperCase()}</a></li>`;
//         }
//         return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a><ul class="dropdown-menu">${li_link}</ul></li>`;
//     }
//     // Dropdown Generator END

//     //  Menu Generator START
//     // function nav_createMainNav(links) {
//     //     links.sort();
//     //     let li_link = "";
//     //     var path = window.location.pathname;
//     //     var folder = window.location.pathname.split("/")[4];
//     //     for (let i = 0; i < links.length; i++) {
//     //         if (links[i] != folder) {
//     //             var linkactive = '"';
//     //         } else {
//     //             var linkactive = ' active" aria-current="page"';
//     //         }

//     //         if (links[i] == "contact" || links[i] == "homepage") {
//     //             li_link += `<li class="nav-item"><a class="nav-link${linkactive} href="mailto:contact@dmj.one">Reach Us</a></li>`;
//     //         } else {
//     //             li_link += `<li class="nav-item"><a class="nav-link${linkactive} href="/edu/su/course/${links[i]}/">${links[i].toUpperCase()}</a></li>`;
//     //         }
//     //     }
//     //     return li_link;
//     // }
//     function nav_createMainNav(links) {
//         const sortedLinks = links.sort();
//         const folder = window.location.pathname.split("/")[4];

//         // Define special links and their URLs
//         const specialLinks = {
//             'home': '/homepage/url/',
//             'contact': 'mailto:contact@dmj.one'
//         };

//         const li_link = sortedLinks.map(link => {
//             const isActive = link === folder;
//             const linkActive = isActive ? ' active" aria-current="page"' : '"';
//             const isSpecialLink = specialLinks.hasOwnProperty(link.toLowerCase());
//             const href = isSpecialLink ? specialLinks[link.toLowerCase()] : `/edu/su/course/${link}/`;
//             const text = link.toUpperCase();
//             return `<li class="nav-item"><a class="nav-link${linkActive} href="${href}">${text}</a></li>`;
//         }).join("");

//         return li_link;
//     }
//     //  Generator END


//     // var common_nav_start = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg"><div class="container-fluid"><script>document.write(header_nav())</script><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">';
//     function displayedlinks() {
//         var li_link = "";
//         var path = window.location.pathname;
//         var folder = window.location.pathname.split("/")[4];
//         var alreadyactive = 0;

//         // var visible_links = ["csu1128p", "csu1128", "csu953", "fsu030", "csu730", "csu951"].sort();
//         for (let i = 0; i < visible_links.length; i++) {
//             if (visible_links[i] != folder) {
//                 var linkactive = '"';
//             } else {
//                 var linkactive = ' active" aria-current="page"';
//             }
//             linkname = visible_links[i].toUpperCase();
//             li_link += '<li class="nav-item"><a class="nav-link' + linkactive + ' href="/edu/su/course/' + visible_links[i] + '/">' + linkname + "</a></li>";
//         }
//         return li_link;
//     }

//     var common_nav_start = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark"><div class="container-fluid">' + header_nav() + '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">';
//     var common_nav_end = '</ul><!--- <form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-light" type="submit">Search</button></form> --></div></div></nav>';

//     // Send array of links to create link for dropdown
//     var year1_links = ["1<sup>st</sup> Year", "csu1128", "csu953", "fsu030", "csu730", "csu951", "csu585", "csu1051", "csu1287", "csu1289", "seaws002", "fsu013", "seaap002"].sort();
//     // var year2_links = ["2<sup>nd</sup> Year", ""].sort();
//     var year2_links = ["2<sup>nd</sup> Year", ...["WIP"].sort()];

//     var visible_links = [...[""].sort(), ""];

//     let alllinks;
//     alllinks += year1_links ? nav_createDropdown(year1_links) : '';
//     alllinks += year2_links ? nav_createDropdown(year2_links) : '';
//     alllinks += visible_links ? nav_createMainNav(visible_links) : '';

//     nav = common_nav_start + alllinks + common_nav_end;
//     return nav;
// }

///////////// Version 1.2 - Header Navbar ONLY
// function header_navbar(flags) {
//     if (flags) { return 0 }

//     const url = new URL(window.location.href);
//     const pathname = url.pathname.split('/');
//     const base = '/edu/su/';
//     const courses = `${base}course/`;
//     const nav_folder = pathname[4] ? `${courses}${pathname[4]}` : '';
//     const nav_subfolder = pathname[5] || '';
//     const nav_filename = pathname.pop() || '';

//     const breadcrumb = [
//         { href: `//${window.location.host}`, icon: 'house-fill', title: 'Home' },
//         nav_folder && { href: `${nav_folder}/`, icon: 'journals', title: nav_folder },
//         nav_subfolder && { href: `${nav_folder}/${nav_subfolder}/`, icon: 'card-list', title: nav_subfolder },
//         nav_filename && { href: nav_filename, icon: 'journal-code', title: nav_filename }
//     ].filter(Boolean);

//     const breadcrumbHTML = breadcrumb.map(({ href, icon, title }) =>
//         `<li class="breadcrumb-item${title === nav_filename ? ' active' : ''}"${title === nav_filename ? ' aria-current="page"' : ''}>` +
//         `<a href="${href}" data-toggle="tooltip" data-placement="top" title="${title}">` +
//         `<i class="bi bi-${icon} text-light"></i></a></li>`
//     ).join('');

//     const headerNavHTML = `<nav aria-label="breadcrumb" class="navbar-brand text-light">` +
//         `<ol class="breadcrumb" style="margin:auto">${breadcrumbHTML}</ol></nav>`;

//     const navItem = (folder, specialLinks) => {
//         const linkActive = folder === pathname[4] ? ' active" aria-current="page"' : '"';
//         return specialLinks.hasOwnProperty(folder.toLowerCase())
//             ? specialLinks[folder.toLowerCase()]
//             : `<a class="dropdown-item${linkActive} href="${courses}${folder}/">${folder.toUpperCase()}</a>`;
//     }

//     const dropdown = links => {
//         const year = links.shift();
//         links.sort();
//         const dropdownItems = links.map(link =>
//             `<li>${navItem(link, { 'csu5543': 'WIP', 'csu934': 'WIP' })}</li>`
//         ).join('');

//         return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a>` +
//             `<ul class="dropdown-menu">${dropdownItems}</ul></li>`;
//     }

//     const mainNav = links => {
//         links.sort();
//         const navItems = links.map(link => `<li class="nav-item">${navItem(link, { 'home': '/homepage/url/', 'contact': 'mailto:contact@dmj.one' })}</li>`).join('');
//         return navItems;
//     }

//     const year1_links = ["1<sup>st</sup> Year", "csu1128", "csu953", "fsu030", "csu730", "csu951", "csu585", "csu1051", "csu1287", "csu1289", "seaws002", "fsu013", "seaap002"].sort();
//     const year2_links = ["2<sup>nd</sup> Year", ...["WIP"].sort()];
//     const visible_links = [...[""].sort(), ""];

//     const allLinksHTML = (year1_links ? dropdown(year1_links) : '') + (year2_links ? dropdown(year2_links) : '') + (visible_links ? mainNav(visible_links) : '');

//     return `<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark"><div class="container-fluid">${headerNavHTML}` +
//         `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">` +
//         `<span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">${allLinksHTML}</ul></div></div></nav>`;
// }


// function head_FormatAuthor(...args) {
//     let authorTextArr = [];
//     for (let i = 0; i < args.length; i += 2) {
//         let author = args[i];
//         let author_href = args[i + 1];
//         if (author && author_href) { // add this line to check for blank inputs
//             authorTextArr.push(`<strong>${author}</strong> <a href="mailto:${author_href}?subject=Referred from dmj.one&body=-- Referred from the page ${window.location.href} Please write below this line --%0D%0A%0D%0A" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author}" data-original-title="Get in touch with ${author}"> <i class="bi bi-envelope-plus text-light"></i></a>`);
//         }
//     }
//     let authorText;
//     if (authorTextArr.length === 0) {
//         authorText = "";
//     } else if (authorTextArr.length === 1) {
//         authorText = authorTextArr[0];
//     } else if (authorTextArr.length === 2) {
//         authorText = authorTextArr.join(" and ");
//     } else {
//         // authorTextArr.pop();
//         authorText = authorTextArr.slice(0, -1).join(", ") + `, and ${authorTextArr.slice(-1)}`;
//     }
//     return authorText;
// }

// function header_author(...args) {
//     // Ensure safety: If 'Off' is passed as a function argument, no header will be displayed. If 'WriteManually' is passed, the corresponding HTML code in the next value will be sent for manual header composition.
//     if (args[0] === "off") { window.loaded_header_author = 1; return null; }
//     if (args[0] === "WriteManually") { window.loaded_header_author = 1; const finalheaders = "<header>" + args[1] + "</header>" + header_navbar(); document.body.insertAdjacentHTML('afterbegin', finalheaders); return null; }
//     if (args[0] === "WriteManuallyNoNav") { window.loaded_header_author = 1; const finalheaders = "<header>" + args[1] + "</header>"; document.body.insertAdjacentHTML('afterbegin', finalheaders); return null; }
//     if (args[0] === "NavOnly") { window.loaded_header_author = 1; document.body.insertAdjacentHTML('afterbegin', header_navbar()); return null; }

//     /* USAGE - header_author("authorinitials || name", "email", "author1 details", "authorinitials || name2" ... ) */
//     window["loaded_header_author"] = 1;

//     const { pA_author, pA_bio } = processAuthors(args);
//     const allAuthors = `<span id="authorlist">${pA_author}</span>`, author_bio = pA_bio;

//     const { line1, line2, line3, line4 } = processFolder(allAuthors, author_bio);

//     const finalheaders = "<header>" + line1 + line2 + line3 + line4 + "</header>" + header_navbar();
//     document.body.insertAdjacentHTML('afterbegin', finalheaders);
// }

// // check and give active link
// if (window.hasOwnProperty('header_navbar') && typeof header_navbar === 'function') {
//     // Get all the navigation links
//     const navLinks = document.querySelectorAll('.navbar-nav a');

//     // Get the current URL
//     const currentUrl = window.location.pathname;

//     // Loop through each link
//     navLinks.forEach(link => {
//         // If the link's href matches the current URL, add the active class
//         if (link.getAttribute('href') === currentUrl) {
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     });
// }

//////////////// Version 1.3
// let header_navbar = (flags) => {
//     if (flags) return 0;

//     const url = new URL(window.location.href);
//     const pathname = url.pathname.split('/');
//     const base = '/edu/su/';
//     const courses = `${base}course/`;
//     const nav_folder = pathname[4] ? `${courses}${pathname[4]}` : '';
//     const nav_subfolder = pathname[5] || '';
//     const nav_filename = pathname.pop() || '';

//     const breadcrumb = [
//         { href: `//${window.location.host}`, icon: 'house-fill', title: 'Home' },
//         nav_folder && { href: `${nav_folder}/`, icon: 'journals', title: nav_folder },
//         nav_subfolder && { href: `${nav_folder}/${nav_subfolder}/`, icon: 'card-list', title: nav_subfolder },
//         nav_filename && { href: nav_filename, icon: 'journal-code', title: nav_filename }
//     ].filter(Boolean);

//     const breadcrumbHTML = breadcrumb.map(({ href, icon, title }) =>
//         `<li class="breadcrumb-item${title === nav_filename ? ' active' : ''}"${title === nav_filename ? ' aria-current="page"' : ''}>` +
//         `<a href="${href}" data-toggle="tooltip" data-placement="top" title="${title}">` +
//         `<i class="bi bi-${icon} text-light"></i></a></li>`
//     ).join('');

//     const headerNavHTML = `<nav aria-label="breadcrumb" class="navbar-brand text-light">` +
//         `<ol class="breadcrumb" style="margin:auto">${breadcrumbHTML}</ol></nav>`;

//     const navItem = (folder, specialLinks) => {
//         const linkActive = folder === pathname[4] ? ' active" aria-current="page"' : '"';
//         if (specialLinks.hasOwnProperty(folder.toLowerCase())) {
//             const specialHref = specialLinks[folder.toLowerCase()];
//             if (specialHref === 'WIP') {
//                 return `<li><a class="dropdown-item disabled" href="#" title="Work In Progress">${folder.toUpperCase()} [WIP]</a></li>`;
//             } else {
//                 const formattedFolder = folder.charAt(0).toUpperCase() + folder.slice(1).toLowerCase();
//                 return `<li class="nav-item"><a class="nav-link${linkActive}" href="${specialHref}" title="Go to ${formattedFolder}">${formattedFolder}</a></li>`;
//             }
//         } else {
//             return `<a class="dropdown-item${linkActive}" href="${courses}${folder}/">${folder.toUpperCase()}</a>`;
//         }
//     };


//     const dropdown = links => {
//         const year = links.shift();
//         links.sort();
//         const dropdownItems = links.map(link =>
//             `<li>${navItem(link, { 'csu5543': 'WIP', 'csu934': 'WIP' })}</li>`
//         ).join('');

//         return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a>` +
//             `<ul class="dropdown-menu">${dropdownItems}</ul></li>`;
//     }

//     const mainNav = links => {
//         links.sort();
//         const navItems = links.map(link => `<li class="nav-item">${navItem(link, { 'news': '/updates/', 'contact': 'mailto:contact@dmj.one' })}</li>`).join('');
//         return navItems;
//     }


//     const year1_links = ["1<sup>st</sup> Year", "csu1128", "csu934", "csu953", "fsu030", "csu730", "csu951", "csu585", "csu1051", "csu1287", "csu1289", "seaws002", "fsu013", "seaap002"].sort();
//     const year2_links = ["2<sup>nd</sup> Year", ...["WIP"].sort()];
//     const visible_links = [...[""].sort(), "news"];

//     const allLinksHTML = (year1_links ? dropdown(year1_links) : '') + (year2_links ? dropdown(year2_links) : '') + (visible_links ? mainNav(visible_links) : '');

//     return `<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark"><div class="container-fluid">${headerNavHTML}` +
//         `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">` +
//         `<span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">${allLinksHTML}</ul></div></div></nav>`;
// };

// let head_FormatAuthor = (...args) => {
//     const authorTextArr = args.filter((_, i) => i % 2 === 0)
//         .map((author, i) => {
//             const author_href = args[i * 2 + 1];
//             return author && author_href ?
//                 `<strong>${author}</strong> <a href="mailto:${author_href}?subject=Referred from dmj.one&body=-- Referred from the page ${window.location.href} Please write below this line --%0D%0A%0D%0A" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author}" data-original-title="Get in touch with ${author}"> <i class="bi bi-envelope-plus text-light"></i></a>`
//                 : null;
//         }).filter(Boolean);

//     return authorTextArr.length === 0 ? '' :
//         authorTextArr.length === 1 ? authorTextArr[0] :
//             authorTextArr.length === 2 ? authorTextArr.join(" and ") :
//                 authorTextArr.slice(0, -1).join(", ") + `, and ${authorTextArr.slice(-1)}`;
// };

// let header_author = (...args) => {
//     // Ensure safety: If 'Off' is passed as a function argument, no header will be displayed. If 'WriteManually' is passed, the corresponding HTML code in the next value will be sent for manual header composition.
//     if (args[0] === "off") { window.loaded_header_author = 1; return null; }
//     if (args[0] === "WriteManually") { window.loaded_header_author = 1; const finalheaders = "<header>" + args[1] + "</header>" + header_navbar(); document.body.insertAdjacentHTML('afterbegin', finalheaders); return null; }
//     if (args[0] === "WriteManuallyNoNav") { window.loaded_header_author = 1; const finalheaders = "<header>" + args[1] + "</header>"; document.body.insertAdjacentHTML('afterbegin', finalheaders); return null; }
//     if (args[0] === "NavOnly") { window.loaded_header_author = 1; document.body.insertAdjacentHTML('afterbegin', header_navbar()); return null; }

//     /* USAGE - header_author("authorinitials || name", "email", "author1 details", "authorinitials || name2" ... ) */
//     window["loaded_header_author"] = 1;

//     const { pA_author, pA_bio } = processAuthors(args);
//     const allAuthors = `<span id="authorlist">${pA_author}</span>`, author_bio = pA_bio;

//     const { line1, line2, line3, line4 } = processFolder(allAuthors, author_bio);

//     const finalheaders = "<header>" + line1 + line2 + line3 + line4 + "</header>" + header_navbar();
//     document.body.insertAdjacentHTML('afterbegin', finalheaders);
// }


// if (window.hasOwnProperty('header_navbar') && typeof header_navbar === 'function') {
//     const navLinks = document.querySelectorAll('.navbar-nav a');
//     const currentUrl = window.location.pathname;
//     navLinks.forEach(link => link.getAttribute('href') === currentUrl ? link.classList.add('active') : link.classList.remove('active'));
// }

/////////////// Version 1.4
let head_FormatAuthor = function (...args) {
    const authorTextArr = args.filter((_, i) => i % 2 === 0)
        .map((author, i) => {
            const author_href = args[i * 2 + 1];
            return author && author_href ?
                `<strong>${author}</strong> <a href="mailto:${author_href}?subject=Referred from dmj.one&body=-- Referred from the page ${window.location.href} Please write below this line --%0D%0A%0D%0A" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author}" data-original-title="Get in touch with ${author}"> <i class="bi bi-envelope-plus text-light"></i></a>`
                : null;
        }).filter(Boolean);

    return authorTextArr.length === 0 ? '' :
        authorTextArr.length === 1 ? authorTextArr[0] :
            authorTextArr.length === 2 ? authorTextArr.join(" and ") :
                authorTextArr.slice(0, -1).join(", ") + `, and ${authorTextArr.slice(-1)}`;
};

let header_navbar = function (flags) {
    if (flags) return 0;

    const url = new URL(window.location.href);
    const pathname = url.pathname.split('/');
    const base = '/edu/su/';
    const courses = `${base}course/`;
    const nav_folder = pathname[4] ? `${courses}${pathname[4]}` : '';
    const nav_subfolder = pathname[5] || '';
    const nav_filename = pathname.pop() || '';

    const breadcrumb = [
        { href: `//${window.location.host}`, icon: 'house-fill', title: 'Home' },
        nav_folder && { href: `${nav_folder}/`, icon: 'journals', title: nav_folder },
        nav_subfolder && { href: `${nav_folder}/${nav_subfolder}/`, icon: 'card-list', title: nav_subfolder },
        nav_filename && { href: nav_filename, icon: 'journal-code', title: nav_filename }
    ].filter(Boolean);

    const breadcrumbHTML = breadcrumb.map(({ href, icon, title }) =>
        `<li class="breadcrumb-item${title === nav_filename ? ' active' : ''}"${title === nav_filename ? ' aria-current="page"' : ''}>` +
        `<a href="${href}" data-toggle="tooltip" data-placement="top" title="${title}">` +
        `<i class="bi bi-${icon} text-light"></i></a></li>`
    ).join('');

    const headerNavHTML = `<nav aria-label="breadcrumb" class="navbar-brand text-light">` +
        `<ol class="breadcrumb" style="margin:auto">${breadcrumbHTML}</ol></nav>`;

    const navItem = (folder, specialLinks) => {
        const linkActive = folder === pathname[4] ? ' active" aria-current="page"' : '"';
        if (specialLinks.hasOwnProperty(folder.toLowerCase())) {
            const specialHref = specialLinks[folder.toLowerCase()];
            if (specialHref === 'WIP') {
                return `<li><a class="dropdown-item disabled" href="#" title="Work In Progress">${folder.toUpperCase()} [WIP]</a></li>`;
            } else {
                const formattedFolder = folder.charAt(0).toUpperCase() + folder.slice(1).toLowerCase();
                return `<li class="nav-item"><a class="nav-link${linkActive}" href="${specialHref}" title="Go to ${formattedFolder}">${formattedFolder}</a></li>`;
            }
        } else {
            return `<a class="dropdown-item${linkActive}" href="${courses}${folder}/">${folder.toUpperCase()}</a>`;
        }
    };


    const dropdown = links => {
        const year = links.shift();
        links.sort();
        const dropdownItems = links.map(link =>
            `<li>${navItem(link, { 'wip': 'WIP', 'csu5543': 'WIP' })}</li>`
        ).join('');

        return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a>` +
            `<ul class="dropdown-menu">${dropdownItems}</ul></li>`;
    }

    const mainNav = links => {
        links.sort();
        const navItems = links.map(link => `<li class="nav-item">${navItem(link, { 'wip': 'WIP', 'news': '/updates/', 'contact': 'mailto:contact@dmj.one' })}</li>`).join('');
        return navItems;
    }


    const year1_links = ["1<sup>st</sup> Year", ...["csu1128", "csu953", "fsu030", "csu730", "csu951", "csu585", "csu1051", "csu1287", "csu1289", "seaws002", "fsu013", "seaap002"].sort()];
    const year2_links = ["2<sup>nd</sup> Year", ...["csu083", "csu1291", "csu1526", "csu1075", "seaap003", "csu716", "csu1162", "csu357", "csu360", "csu1105"].sort()];
    const visible_links = [...[""].sort(), "wip"];

    const allLinksHTML = (year1_links ? dropdown(year1_links) : '') + (year2_links ? dropdown(year2_links) : '') + (visible_links ? mainNav(visible_links) : '');

    return `<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark"><div class="container-fluid">${headerNavHTML}` +
        `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">` +
        `<span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">${allLinksHTML}</ul></div></div></nav>`;
};

let header_author = function (...args) {
    const header_author_internal = {
        activateNavbar() {
            const navLinks = document.querySelectorAll('.navbar-nav a');
            const currentUrl = window.location.pathname;
            navLinks.forEach(link => link.getAttribute('href') === currentUrl ? link.classList.add('active') : link.classList.remove('active'));
        },
        header_author_main(...args) {
            if (args[0] === "off") { window.loaded_header_author = 1; return null; }
            if (args[0] === "WriteManually") { window.loaded_header_author = 1; const finalheaders = "<header>" + args[1] + "</header>" + header_navbar(); document.body.insertAdjacentHTML('afterbegin', finalheaders); return null; }
            if (args[0] === "WriteManuallyNoNav") { window.loaded_header_author = 1; const finalheaders = "<header>" + args[1] + "</header>"; document.body.insertAdjacentHTML('afterbegin', finalheaders); return null; }
            if (args[0] === "NavOnly") { window.loaded_header_author = 1; document.body.insertAdjacentHTML('afterbegin', header_navbar()); return null; }

            window["loaded_header_author"] = 1;


            const { pA_author, pA_bio } = processAuthors(args);
            const allAuthors = `<span id="authorlist">${pA_author}</span>`, author_bio = pA_bio;

            // Added to display when user prints the article
            window.GLOBAL_get_Author_Name_ = pA_author;


            const { line1, line2, line3, line4 } = processFolder(allAuthors, author_bio);

            const finalheaders = "<header>" + line1 + line2 + line3 + line4 + "</header>" + header_navbar();
            document.body.insertAdjacentHTML('afterbegin', finalheaders);
        },
    };

    header_author_internal.header_author_main(...args);
    header_author_internal.activateNavbar();
};

/************************* Print Specific Layout Generator ****************************/
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const path = window.location.pathname.split('/').filter(Boolean); // Split the path and remove empty segments

        // Check if the path length is exactly 6
        if (path.length === 6) {
            // Create a link element for the CSS
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.type = 'text/css';
            // linkElement.media = 'print';
            linkElement.href = '/css/print-article-APA6.css'; // Adjust the path as needed
            document.head.appendChild(linkElement);
        }
    });
})();

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        let noactualarticle, studentmode, logocontent_dmj_shoolini_qr;

                    
        studentmode = window.GLOBAL_get_isstudentmode_ || 0;
        
        
        // Retrive elements of the page
        let articleElement = document.querySelector('article.agen-tableofcontents');
        if (typeof articleElement === 'undefined' || articleElement === null) {
            noactualarticle = 1;
            articleElement = document.querySelector('main');
        }

        let titleofthepage = articleElement.querySelector('h2').innerText;
        let dateofthepage = articleElement.querySelector('.contentdate') ? articleElement.querySelector('.contentdate').innerText : "n.d.";
        let h2 = articleElement.querySelector('h2');
        h2.classList.add('d-print-none');
            
        // Get the location of the page
        // var currentlocation = 'https://dmj.one/' + window.location.pathname.split('/').pop().replace('.html', '');        
        let currentlocation = 'https://dmj.one' + window.location.pathname.replace(/\.html$/, '') || window.location.href;
        // let currentlocation = 'https://dmj.one/edu/su/course/csu360/lab/'; // Fix location for specific work.



        // Create QR code data URL
        var qr = qrcode(0, 'H');
        // qr.addData(window.location.href);
        qr.addData(currentlocation);

        qr.make();
        var qrcode_data = qr.createDataURL(4, "");

        // Create and configure the QR code image
        var qrImage = new Image();
        qrImage.src = qrcode_data;
        qrImage.alt = 'QR Code to visit the website of the article';
        qrImage.className = 'img-fluid ';
        // qrImage.style = 'max-width: 150px; max-height: 150px;';

        var qrDiv = document.createElement('div');
        qrDiv.className = 'd-none d-none d-print-block mx-auto mt-10';
        qrDiv.appendChild(qrImage);

        logocontent_dmj_shoolini_qr = () => {
            let data; // Define data variable to hold the HTML string
            if (studentmode) {
                // Create a <style> element
                const style = document.createElement('style');
                style.textContent = `@media print { #defaultcopyrightfooter{ display: none; }}`;
                document.head.appendChild(style);



                // Only display the Shoolini logo when in student mode
                data = `<div class="col-12">
                  <img src="/img/shoolini_logo.png" class="img-fluid" alt="Shoolini University Logo" style="max-width:40%;">
                </div>`;
            } else {
                // Base structure for other modes
                data = `<div class="col-6 col">
                  <img src="/logo.png" class="img-fluid" alt="DMJ Logo" style="max-width:40%;">
                </div>`;

                if (noactualarticle) {
                    // Add QR code for no article mode
                    data += `<div class="col-6 col">
                       <img src="${qrcode_data}" class="img-fluid" alt="QR Code" style="max-width:40%;">
                     </div>`;
                } else {
                    // Add Shoolini logo for normal mode
                    data += `<div class="col-6 col">
                       <img src="/img/shoolini_logo.png" class="img-fluid" alt="Shoolini University Logo" style="max-width:80%;">
                     </div>`;
                }
            }
            return data;
        };



        // Create a div for logos
        var logodiv = document.createElement('div');        
        // logodiv.innerHTML = noactualarticle ? `<div class="row d-none d-print-flex"><img src="/logo.png" class="img-fluid" alt="Logo" style="max-width:40%"></div>` : `<div class="row d-none d-print-flex justify-content-between">${logocontent_dmj_shoolini_qr}</div>`;
        logodiv.innerHTML = `<div class="row d-none d-print-flex justify-content-between">${logocontent_dmj_shoolini_qr()}</div>`;
        logodiv.className = 'd-none d-print-flex mx-auto mb-10';
        if (noactualarticle) {
            articleElement.parentNode.insertBefore(logodiv, articleElement);
            return null;
        }


        // Function to extract text content from strong tags
        // function extractTextFromStrongTag(htmlString) {
        //     var tempDiv = document.createElement('div');
        //     tempDiv.innerHTML = htmlString;
        //     return Array.from(tempDiv.querySelectorAll('strong'), el => el.textContent).join(', ');
        // }

        function formatAuthorsEtAl(htmlString) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlString;
            var strongTags = tempDiv.querySelectorAll('strong');

            // If there's only one author, just return the formatted name
            if (strongTags.length === 1) {
                var singleAuthorName = strongTags[0].textContent.trim().split(' ');
                return singleAuthorName[1] + ' ' + singleAuthorName[0].charAt(0) + '.';
            } else if (strongTags.length > 1) {
                // Assuming the first strong tag is the primary author
                var primaryAuthorName = strongTags[0].textContent.trim().split(' ');
                return primaryAuthorName[1] + ' ' + primaryAuthorName[0].charAt(0) + '. et al.';
            }
            return ''; // In case there are no strong tags
        }

        function extractTextFromStrongTag(htmlString) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlString;
            var authorNames = Array.from(tempDiv.querySelectorAll('strong'), el => el.textContent);

            // If there's more than one name, format the string with "and" before the last name
            if (authorNames.length > 1) {
                var lastAuthor = authorNames.pop();
                return authorNames.join(', ') + ' and ' + lastAuthor;
            } else {
                return authorNames.join('');
            }
        }

        // Prepare the titleofthepage div with the titleofthepage as text content
        var titleDiv = document.createElement('div');
        titleDiv.className = 'd-none d-print-block mx-auto mt-2';
        titleDiv.innerHTML = `<h2 class="text-center text-uppercase">${titleofthepage}</h2>`;

        // Prepare the author and faculty divs with text content
        // var authorsText = extractTextFromStrongTag(window.GLOBAL_get_Author_Name_);
        // var authorsText = 'Divya Mohan <em>(GF202214698)</em>';
        var authorsText = studentmode ? 'Divya Mohan <em>(GF202214698)</em>' : extractTextFromStrongTag(window.GLOBAL_get_Author_Name_);
        var authorsdept = studentmode ? 'Yogananda School of AI, Computers and Data Science' : 'Faculty of Engineering and Technology';
        var authorsDiv = document.createElement('div');        
        authorsDiv.className = 'd-none d-print-block mx-auto mt-3 mb-4';
        authorsDiv.innerHTML = authorsText ? `<p class="text-center text-uppercase">${authorsText}</p><p class="text-uppercase text-center" style="font-size:8px!important">${authorsdept}</p><p class="text-uppercase text-center fw-bold" style="font-size:10px!important">Shoolini University, Solan, Himachal Pradesh, India</p>` : '';        


        var facultyDiv = document.createElement('div');
        facultyDiv.className = 'd-none d-print-block mx-auto';
        facultyDiv.innerHTML = window.GLOBAL_get_course_detail_ ? window.GLOBAL_get_course_ ? `<p class="text-center fst-italic">Under the guidance of <span class="text-capitalize">${window.GLOBAL_get_Faculty_Name_}</span> in the subject of <span class="text-capitalize">${window.GLOBAL_get_course_detail_} (${window.GLOBAL_get_course_})</span></p>` : `<p class="text-center">${window.GLOBAL_get_course_detail_}</p>` : '';
        // facultyDiv.innerHTML += window.GLOBAL_get_Faculty_Name_ ? `<p class="text-center text-uppercase"><span class="fw-bold"></span> ${window.GLOBAL_get_Faculty_Name_}</p>` : '';
        facultyDiv.innerHTML += `<p class="text-center text-uppercase" style="font-size:8px!important">${studentmode ? 'Submitted on' : 'Printed on'} ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>`;

        var authorsetal = formatAuthorsEtAl(window.GLOBAL_get_Author_Name_);
        var citationblockquote = document.createElement('blockquote');
        citationblockquote.className = 'd-none d-print-flex mt-3 text-decoration-none';
        citationblockquote.style = 'font-style:unset !important';
        citationblockquote.innerHTML = authorsetal ? `<p class="citation">${authorsetal} (${dateofthepage}). <em>${titleofthepage}</em>. Retrieved from ${currentlocation}</p>` : '';

        // Append the elements to the article element
        // var article = document.querySelector('.agen-tableofcontents');

        // articleElement.insertBefore(logodiv, h2);
        // articleElement.insertBefore(qrImage, h2);
        // articleElement.insertBefore(authorsDiv, h2.nextSibling);
        // articleElement.insertBefore(facultyDiv, authorsDiv.nextSibling);
        // articleElement.insertBefore(citationblockquote, facultyDiv.nextSibling);
        // article.insertBefore(img, facultyDiv.nextSibling);

        // Create a document fragment to hold all the elements in the correct order
        let docFragmentBeforeh2 = document.createDocumentFragment();
        docFragmentBeforeh2.appendChild(logodiv);
        
        let docFragmentAfterh2 = document.createDocumentFragment();
        docFragmentAfterh2.appendChild(titleDiv);
        docFragmentAfterh2.appendChild(authorsDiv);
        docFragmentAfterh2.appendChild(facultyDiv);
        docFragmentAfterh2.appendChild(qrDiv);
        docFragmentAfterh2.appendChild(citationblockquote);

        // Insert the document fragment at the beginning of articleElement
        articleElement.insertBefore(docFragmentBeforeh2, h2);
        articleElement.insertBefore(docFragmentAfterh2, h2.nextSibling);
    });
})();

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

/******** CryptoJS Encryption System ********/

////////////////////////////// Version 1.0 - Working
////////////// function cryptoJS_decryption(cryptojs_encrypted_data) {
// function cryptoJS_decryption(cryptojs_encrypted_data) {
//     // Requires CryptoJS to be loaded for running.

//     cryptojs_encrypted_data = cryptojs_encrypted_data || window["cryptojs_enc_data"];
//     // Disable normal header and give a protected header.
//     window["loaded_header_author"] = 1;
//     header_author("WriteManuallyNoNav", "<h1 class='text-light text-center'>Password Protected Content</h1>");
//     // const app = document.getElementById('app');
//     document.body.innerHTML += `
//                 <div class="bg-light">
//                     <div id="cryptojs_decrypted-content" class="py-10 d-none"></div>
//                     <div id="password-prompt" class="container no-color d-flex flex-column justify-content-center align-items-center text-center"  style="height: calc(100vh - 35vh);">
//                         <div class="shadow alert w-auto w-sm-50 bg-warning bg-opacity-25 bg-gradient">
//                             <h2 class="fw-bold">Enter the password to view content:</h2>
//                         </div>
//                         <input type="password" id="password" name="password" class="shadow-lg mt-3 mb-2 form-control w-auto w-sm-50 border-info" placeholder="Password Required*" autocomplete="off" maxlength="40" size="30" data-lpignore="true" required autofocus>
//                         <div class="input-group w-auto w-sm-50 mt-4 justify-content-center align-items-center text-center">
//                             <button id="submit-button" class="shadow m-2 btn btn-outline-success rounded btn-lg fw-bold"><i class="bi bi-key-fill"></i> Submit</button>
//                             <button id="get-password" class="shadow m-2 btn btn-outline-danger rounded btn-lg fw-bold" data-bs-toggle="modal" data-bs-target="#common_msg_us_model"><i class="bi bi-question-circle-fill"></i> Get Password</button>
//                         </div>
//                         <div id="error-message" class="text-danger d-none mt-4 fw-bold"></div>
//                     </div>
//                 </div>`;
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initial call

//     function handleResize() {
//         let passwordPrompt = document.getElementById('password-prompt');
//         if (window.matchMedia("screen and (max-device-width: 1024px) and (orientation: landscape)").matches) {
//             passwordPrompt.style.height = "calc(100vh + 25vh)";
//         } else {
//             passwordPrompt.style.height = "calc(100vh - 35vh)";
//         }
//     }


//     let tries = 3;

//     function cryptojs_dec(cryptojs_encrypted_data, password) {

//         function addtoast() { // support function stat
//             const toastHTML = `
//     <div class="toast position-absolute top-50 start-50 translate-middle m-3 shadow-lg"
//          style="z-index: 99999;" role="alert" aria-live="assertive" aria-atomic="true">
//         <div class="d-flex align-items-center text-white bg-danger border-0">
//             <div class="toast-body">
//                 <strong>Note:</strong> For security, this content will auto re-encrypt in 120s. Re-enter password to view again.
//             </div>
//             <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
//         </div>
//     </div>`;
//             document.body.insertAdjacentHTML('beforeend', toastHTML);
//             const toastElement = document.querySelector('.toast');
//             const toast = new bootstrap.Toast(toastElement, { autohide: true, delay: 2500 });
//             toast.show();
//         } // support function end


//         try {
// const originalText = CryptoJS.AES.decrypt(cryptojs_encrypted_data, password).toString(CryptoJS.enc.Utf8);
// const decryptedContentElement = document.getElementById("cryptojs_decrypted-content");
// decryptedContentElement.innerHTML = originalText;
// addtoast();

// document.getElementById('password-prompt').classList.add('d-none');
// document.getElementById('cryptojs_decrypted-content').classList.remove('d-none');
// document.querySelector('header').classList.add('d-none');
// // document.querySelector('footer').classList.add('d-none');
// setTimeout(function () { location.reload(); }, 120000);
// header_author("NavOnly");
//         } catch (e) {
//             tries--;
//             if (tries >= 1) {
//                 document.getElementById('error-message').innerHTML = 'Authentication Failed. Please try again. You may try ' + tries + ' more time.';
//                 document.getElementById('error-message').classList.remove('d-none');
//                 document.getElementById('password').classList.add('border-danger');
//             } else {
//                 document.body.innerHTML = `
//                                 <div class="no-color d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
//                                     <h1 class="py-2 p-5 px-md-2 text-sm-center fw-bold text-danger">Authentication Failed</h1>
//                                     <h4 class="py-2 p-3 px-md-4 text-sm-center fw-bold text-primary">The decryption process was unsuccessful due to an incorrect password.</h4>
//                                     <p class="py-2 text-secondary text-center p-3 px-md-4 fw-bold">Please refresh the page and provide the correct password to access the content.</p>
//                                 </div>`;
//                 console.clear();
//             }
//         }
//     }

//     document.getElementById('password').addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             const password = document.getElementById('password').value;
//             cryptojs_dec(cryptojs_encrypted_data, password);
//         }
//     });

//     document.getElementById('submit-button').addEventListener('click', () => {
//         const password = document.getElementById('password').value;
//         cryptojs_dec(cryptojs_encrypted_data, password);
//     });
// }


//////////////// Version 1.1 - Working. 

// function GLOBAL_server_refresh_createAndPlaySound() {
//     let GLOBAL_server_refresh_toastAlert_sound;
//     if (!GLOBAL_server_refresh_toastAlert_sound) { // Create audio element only if it doesn't exist
//         GLOBAL_server_refresh_toastAlert_sound = document.createElement("audio");
//         GLOBAL_server_refresh_toastAlert_sound.id = 'toastAlert1';
//         GLOBAL_server_refresh_toastAlert_sound.src = '/media/music/click-sound.mp3';
//         document.body.appendChild(GLOBAL_server_refresh_toastAlert_sound);
//     }
//     GLOBAL_server_refresh_toastAlert_sound.play(); // Play alert sound
// }
// const GLOBAL_server_refresh = (sentenceType, timedcall) => {
//     timedcall = timedcall || 1000;
//     setTimeout(function () {
//         // Toast message generator
//         const generateToast = (id, headerClass, headerIcon, headerText, bodyClass, bodyText) => {
//             return `<div id="${id}-toast" class="toast position-fixed bottom-0 end-0 m-5 mx-2 shadow-lg" style="z-index: 99999;" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="5000">
//                     <div class="${headerClass}">
//                         <i class="${headerIcon} me-2"></i>
//                         <strong class="me-auto">${headerText}</strong>
//                         <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
//                     </div>
//                     <div class="${bodyClass}">
//                         ${bodyText}
//                     </div>
//                 </div>`;
//         }

//         // Function to show toast and play alert sound
//         const showToast = (toastId, autohide, delay, toastAlert) => {
//             const toast = new bootstrap.Toast(document.querySelector(`#${toastId}-toast`), { autohide, delay });
//             toast.show();
//             if (toastAlert) { GLOBAL_server_refresh_createAndPlaySound(); }
//         }

//         let sentence;
//         switch (sentenceType) {
//             case 'encryption':
//                 sentence = 'For added security, this page will refresh in 10s to encrypt the contents again. After the refresh, please re-enter your password to continue viewing the content.';
//                 break;
//             case 'decryption':
//                 sentence = 'The page will refresh in 10s to complete the decryption process. Please re-enter the password to view this content again.';
//                 break;
//             case 'update':
//                 sentence = 'This page is about to refresh in 10 seconds to update its cache and keep you updated with new changes. Please stay with us, it\'ll only take a few seconds.';
//                 break;
//             default:
//                 sentence = 'This page will refresh in 10 seconds. Please stay seated and you can continue your work right after the refresh.';
//         }

//         const secondToastHTML = generateToast('second', 'toast-header fw-bold text-white bg-success bg-gradient border-0', 'bi bi-shield-lock', 'Refreshing Alert', 'toast-body fw-bold bg-success bg-gradient bg-opacity-25', sentence);
//         document.body.insertAdjacentHTML('beforeend', secondToastHTML);
//         showToast('second', true, 7000, true);

//         setTimeout(() => {
//             const thirdToastHTML = `<div id="third-toast" class="toast position-fixed top-50 start-50 translate-middle shadow-lg" style="z-index: 99999;" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" data-bs-delay="7000">
//                                     <div class="d-flex flex-column align-items-center justify-content-center h1 text-center bg-danger bg-gradient bg-opacity-75 shadow-lg text-light p-5" style="min-height: 200px;">
//                                         <div class="spinner-border text-light mb-3" role="status" style="width: 3rem; height: 3rem;"></div>
//                                         <div>Refreshing...</div>
//                                     </div>
//                                 </div>`;

//             const backdropHTML = `<div id="backdrop" class="position-fixed top-0 start-0 w-100 h-100 bg-dark" style="z-index: 99998; opacity: 0; transition: opacity 0.3s;"></div>`; // Create a backdrop element
//             document.body.insertAdjacentHTML('beforeend', thirdToastHTML + backdropHTML);
//             showToast('third', false, 500, true);

//             // Show the backdrop after a brief delay for a more gradual appearance
//             setTimeout(function () {
//                 document.querySelector('#backdrop').style.opacity = '0.75';
//             }, 100);

//             document.body.style.overflow = 'hidden'; // Disable scrolling

//             setTimeout(function () {
//                 location.reload(true);
//             }, 500); // Refresh the page
//         }, 9000);
//     }, timedcall);
// };
// function cryptoJS_decryption(cryptojs_encrypted_data) {
//     /********* Dependency: CryptoJS || Usage: Call the function directly (it will get from window.cryptojs_enc_data encrypted data var) or pass the encrypted var to it.   *********/

//     cryptojs_encrypted_data = cryptojs_encrypted_data || window.cryptojs_enc_data;

//     function hidebody() {
//         const childrenToHide = document.querySelectorAll( // Select all direct children of the body, excluding specific elements and descendants of specific ids
//             'body > *:not([role="dialog"], .modal-parent, #common-msg-us-container, #searchbox-container, #common-msg-us-container *, #searchbox-container *, script, .google-ads, iframe)'
//         );

//         childrenToHide.forEach((child) => { // Iterate over each selected first-child and add 'd-none' class
//             // child.classList.add('d-none'); // passive
//             child.remove(); //aggressive
//         });
//     }

//     hidebody();
//     window.loaded_header_author = 1;
//     window.has_password_protection = 1;
//     header_author("WriteManuallyNoNav", "<h1 class='text-light text-center'>Password Protected Content</h1>");

//     document.body.insertAdjacentHTML('beforeend', `
//                 <div class="bg-light">
//                     <div id="cryptojs_decrypted-content" class="py-10 d-none"></div>
//                     <div id="crypto-password-prompt" class="container no-color d-flex flex-column justify-content-center align-items-center text-center"  style="height: calc(100vh - 35vh);">
//                         <div class="shadow alert w-auto w-sm-50 bg-warning bg-opacity-25 bg-gradient">
//                             <h2 class="fw-bold">Enter the password to view content:</h2>                            
//                         </div>
//                         <input type="password" id="crypto-password" name="password" class="shadow-lg mt-3 mb-2 form-control w-auto w-sm-50 border-info" placeholder="Password Required*" autocomplete="off" maxlength="40" size="30" data-lpignore="true" required autofocus>
//                         <div class="input-group w-auto w-sm-50 mt-4 justify-content-center align-items-center text-center">                                                        
//                             <button id="crypto-submit-button" class="shadow m-2 btn btn-outline-success rounded btn-lg fw-bold"><i class="bi bi-key-fill"></i> Submit</button>
//                             <button id="get-password" class="shadow m-2 btn btn-outline-danger rounded btn-lg fw-bold" data-bs-toggle="modal" data-bs-target="#common_msg_us_model"><i class="bi bi-question-circle-fill"></i> Get Password</button>
//                         </div>                                                                        
//                         <div id="crypto-error-message" class="text-danger d-none mt-4 fw-bold"></div>
//                     </div>
//                 </div>`);

//     window.addEventListener("resize", handleResize);
//     handleResize();
//     copyright("all");

//     let tries = 3;

//     document.getElementById('crypto-password').addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             const password = event.target.value;
//             cryptojs_dec(cryptojs_encrypted_data, password);
//         }
//     });

//     document.getElementById('crypto-submit-button').addEventListener('click', () => {
//         const password = document.getElementById('crypto-password').value;
//         cryptojs_dec(cryptojs_encrypted_data, password);
//     });

//     function handleResize() {
//         let passwordPrompt = document.getElementById('crypto-password-prompt');
//         if (window.matchMedia("screen and (max-device-width: 1024px) and (orientation: landscape)").matches) {
//             passwordPrompt.style.height = "calc(100vh + 25vh)";
//         } else {
//             passwordPrompt.style.height = "calc(100vh - 35vh)";
//         }
//     }

//     function addtoast() {
//         const toastHTML = `<div id="first-toast" class="toast position-fixed bottom-0 end-0 m-5 mx-2 shadow-lg" style="z-index: 99999;" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="10000">
//                                 <div class="toast-header text-white fw-bold bg-danger bg-gradient border-0">
//                                     <i class="bi bi-exclamation-triangle-fill me-2"></i>
//                                     <strong class="me-auto">Security Alert</strong>
//                                     <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
//                                 </div>
//                                 <div class="toast-body fw-bold bg-danger bg-gradient bg-opacity-25">
//                                     This page uses AES-256 encryption, which, unless you know the key, will need nearly impenetrable 1.1 x 10^77 potential key combinations, making it nearly impossible to break. To ensure enhanced and uninterrupted protection, this page will be refreshed and re-encrypted in 120 seconds.
//                                 </div>
//                             </div>`;
//         document.body.insertAdjacentHTML('beforeend', toastHTML);
//         const toast = new bootstrap.Toast(document.querySelector('#first-toast'), { autohide: true, delay: 10000 });
//         toast.show();
//         GLOBAL_server_refresh_createAndPlaySound();
//         setTimeout(function () { GLOBAL_server_refresh("encryption"); }, 10000);
//     }

//     function cryptojs_dec(cryptojs_encrypted_data, password) {
//         try {
//             document.getElementById("cryptojs_decrypted-content").innerHTML += CryptoJS.AES.decrypt(cryptojs_encrypted_data, password).toString(CryptoJS.enc.Utf8);
//             [document.getElementById('crypto-password-prompt'), document.querySelector('header'), document.querySelector('footer-dummy')].forEach(el => el?.classList.add('d-none'));
//             document.getElementById('cryptojs_decrypted-content')?.classList.remove('d-none');
//             addtoast();
//             header_author("NavOnly");
//         } catch (e) {
//             tries--;
//             if (tries >= 1) {
//                 document.getElementById('crypto-error-message').innerHTML = `Authentication Failed. Please try again. You may try ${tries} more time(s).`;
//                 document.getElementById('crypto-error-message').classList.remove('d-none');
//                 document.getElementById('crypto-password').classList.add('border-danger');
//             } else {
//                 if (!window.cryptojs_enc_data) {
//                     document.body.innerHTML = null;
//                     document.body.innerHTML = `
//                     <div class="no-color d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
//                         <h1 class="py-2 p-5 px-md-2 text-sm-center fw-bold text-danger">Authentication Failed</h1>
//                         <h4 class="py-2 p-3 px-md-4 text-sm-center fw-bold text-primary">The decryption process was unsuccessful due to insufficient information.</h4>
//                         <p class="py-2 text-secondary text-center p-3 px-md-4 fw-bold">Kindly bring this incidence to <a href="mailto:contact@dmj.one">our attention</a> as we could not find anything to decrypt. The page might be undergoing enhancements, and we appreciate your patience.</p>
//                     </div>`;
//                     console.clear();
//                 } else {
//                     // hidebody();
//                     document.body.innerHTML = null;
//                     document.body.innerHTML = `
//                     <div class="no-color d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
//                         <h1 class="py-2 p-5 px-md-2 text-sm-center fw-bold text-danger">Authentication Failed</h1>
//                         <h4 class="py-2 p-3 px-md-4 text-sm-center fw-bold text-primary">The decryption process was unsuccessful due to an incorrect password.</h4>
//                         <p class="py-2 text-secondary text-center p-3 px-md-4 fw-bold">Please refresh the page and provide the correct password to access the content.</p>
//                     </div>`;
//                     console.clear();
//                 }
//             }
//         }
//     }
// }


////////////// Version 1.2 - Beta
function ContentEncryptionManager(cryptojs_encrypted_data) {

    // Usage: Just place the url which needs to be encrypted or decrypted inside the automation control json and do the following:
    // If the page requres encryption, put <script>window.runencryption = 1</script> as 1st element in head of that page.
    // If the page requires decryption, just put the url in the automation control json and its equivalent in var.js. Done? Thats all you need.

    let alertSound;
    const createAndPlaySound = (play) => {
        if (!alertSound) {
            alertSound = document.createElement("audio");
            alertSound.id = 'toastAlert1';
            alertSound.src = '/media/music/click-sound.mp3';
            document.body.appendChild(alertSound);
        }
        if (play) alertSound.play();
    }

    const showToast = (toastId, autohide, delay, toastAlert) => {
        const toast = new bootstrap.Toast(document.querySelector(`#${toastId}-toast`), { autohide, delay });
        toast.show();
        if (toastAlert) createAndPlaySound(true);
    }

    const generateToast = (id, headerClass, headerIcon, headerText, bodyClass, bodyText) => {
        return `<div id="${id}-toast" class="toast position-fixed bottom-0 end-0 m-5 mx-2 shadow-lg" style="z-index: 99999;" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="5000">
                <div class="${headerClass}">
                    <i class="${headerIcon} me-2"></i>
                    <strong class="me-auto">${headerText}</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="${bodyClass}">
                    ${bodyText}
                </div>
            </div>`;
    }

    const serverRefresh = (sentenceType, timedcall = 1000) => {
        setTimeout(function () {
            let sentence;
            switch (sentenceType) {
                case 'encryption':
                    sentence = 'For added security, this page will refresh in 10s to encrypt the contents again. After the refresh, please re-enter your password to continue viewing the content.';
                    break;
                case 'decryption':
                    sentence = 'The page will refresh in 10s to complete the decryption process. Please re-enter the password to view this content again.';
                    break;
                case 'update':
                    sentence = 'This page is about to refresh in 10 seconds to update its cache and keep you updated with new changes. Please stay with us, it\'ll only take a few seconds.';
                    break;
                default:
                    sentence = 'This page will refresh in 10 seconds. Please stay seated and you can continue your work right after the refresh.';
            }

            const secondToastHTML = generateToast('second', 'toast-header fw-bold text-white bg-success bg-gradient border-0', 'bi bi-shield-lock', 'Refreshing Alert', 'toast-body fw-bold bg-success bg-gradient bg-opacity-25', sentence);
            document.body.insertAdjacentHTML('beforeend', secondToastHTML);
            showToast('second', true, 7000, true);

            setTimeout(() => {
                const thirdToastHTML = `<div id="third-toast" class="toast position-fixed top-50 start-50 translate-middle shadow-lg" style="z-index: 99999;" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" data-bs-delay="7000">
                                        <div class="d-flex flex-column align-items-center justify-content-center h1 text-center bg-danger bg-gradient bg-opacity-75 shadow-lg text-light p-5" style="min-height: 200px;">
                                            <div class="spinner-border text-light mb-3" role="status" style="width: 3rem; height: 3rem;"></div>
                                            <div>Refreshing...</div>
                                        </div>
                                    </div>`;

                const backdropHTML = `<div id="backdrop" class="position-fixed top-0 start-0 w-100 h-100 bg-dark" style="z-index: 99998; opacity: 0; transition: opacity 0.3s;"></div>`;
                document.body.insertAdjacentHTML('beforeend', thirdToastHTML + backdropHTML);
                showToast('third', false, 500, true);

                setTimeout(function () {
                    document.querySelector('#backdrop').style.opacity = '0.75';
                }, 100);

                document.body.style.overflow = 'hidden';

                setTimeout(function () {
                    location.reload(true);
                }, 500);
            }, 9000);
        }, timedcall);
    };


    const cryptoJSEncryption = () => {
        const defaultTagId = "encryptedcontent";

        function cryptojs_enc(tagId, secretKey, copyToClipboard) {
            var htmlElement = document.getElementById(tagId);

            if (!htmlElement) {
                document.getElementById(alertMsgId).innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              The provided id was not found in the document. Please make sure the content you want to encrypt is wrapped within a tag with the specified id.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
                return;
            }

            var htmlString = htmlElement.innerHTML;
            const crypto_enc_data = CryptoJS.AES.encrypt(htmlString, secretKey).toString(); // Encrypt
            console.log(crypto_enc_data);
            if (copyToClipboard) {
                navigator.clipboard.writeText(crypto_enc_data);
            }
            document.getElementById(alertMsgId).innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          Encryption successful! The encrypted data has been logged to the console. If you opted to copy to clipboard, it's also been copied there. Place the variables in the necessary scripts.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        }

        // Create unique ids for the modal and elements within it
        const uniqueId = Math.floor(Math.random() * 10000);
        const modalId = 'encryptModal' + uniqueId;
        const alertMsgId = 'alertMsg' + uniqueId;
        const instructionStepId = 'instructionStep' + uniqueId;
        const nextButtonId = 'nextButton' + uniqueId;
        const formStepId = 'formStep' + uniqueId;
        const tagIdInputId = 'tagId' + uniqueId;
        const secretKeyId = 'secretKey' + uniqueId;
        const copyToClipboardId = 'copyToClipboard' + uniqueId;
        const formFooterId = 'formFooter' + uniqueId;
        const encryptButtonId = 'encryptButton' + uniqueId;

        const defaultTagPresent = Boolean(document.getElementById(defaultTagId));

        // Create the modal HTML and append it to the body
        const modalHTML = `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="${modalId}Label">Encrypt Content</h5>
            </div>
            <div class="modal-body">
                <div id="${alertMsgId}"></div>
                <div id="${instructionStepId}">
                    <p>Make sure the content you want to encrypt is wrapped within a tag with the specified id. For example: <code><br>&lt;div id="encryptedcontent"&gt;<br>Contents to encrypt. Include Bootstrap bundle js here if needed. <br>&lt;/div&gt;</code></p>
                    <button type="button" class="btn btn-primary" id="${nextButtonId}">Next</button>
                </div>
                <div id="${formStepId}" style="display: none;">
                    <div class="mb-3">
                    <label for="${tagIdInputId}" class="col-form-label">Enter the id of the tag to encrypt:</label>
                    <input type="text" class="form-control" id="${tagIdInputId}" value="${defaultTagPresent ? defaultTagId : ''}" ${defaultTagPresent ? 'disabled' : ''} autocomplete="off">
                    ${defaultTagPresent ? '<small class="form-text text-success">The default id has been found and auto-filled.</small>' : ''}
                    </div>
                    <div class="mb-3">
                    <label for="${secretKeyId}" class="col-form-label">Enter the password to encrypt:</label>
                    <input type="password" class="form-control" id="${secretKeyId}" autocomplete="off">
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="${copyToClipboardId}">
                    <label class="form-check-label" for="${copyToClipboardId}">
                        Copy to clipboard
                    </label>
                    </div>
                </div>
            </div>
            <div class="modal-footer" id="${formFooterId}" style="display: none;">
                <button type="button" class="btn btn-primary" id="${encryptButtonId}">Encrypt</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        document.getElementById(nextButtonId).addEventListener('click', function () {
            document.getElementById(instructionStepId).style.display = 'none';
            document.getElementById(formStepId).style.display = 'block';
            document.getElementById(formFooterId).style.display = 'block';
        });

        // Attach click event to the encrypt button inside the modal
        document.getElementById(encryptButtonId).addEventListener('click', function () {
            var tagId = document.getElementById(tagIdInputId).value;
            var secretKey = document.getElementById(secretKeyId).value;
            var copyToClipboard = document.getElementById(copyToClipboardId).checked;
            cryptojs_enc(tagId, secretKey, copyToClipboard);
        });

        // Show the modal
        $(`#${modalId}`).modal('show');
    };

    const cryptoJSDecryption = (cryptojs_encrypted_data) => {
        /********* Dependency: CryptoJS || Usage: Call the function directly (it will get from window.cryptojs_enc_data encrypted data var) or pass the encrypted var to it.   *********/

        cryptojs_encrypted_data = cryptojs_encrypted_data || window.cryptojs_enc_data;

        function hidebody(h_mode) {
            const childrenToHide = document.querySelectorAll( // Select all direct children of the body, excluding specific elements and descendants of specific ids
                'body > *:not([role="dialog"], .modal-parent, #common-msg-us-container, #searchbox-container, #common-msg-us-container *, #searchbox-container *, script, .google-ads, iframe)'
            );

            childrenToHide.forEach((child) => { // Iterate over each selected first-child and add 'd-none' class
                switch (h_mode) {
                    case "passive":
                        child.classList.add('d-none'); // passive:
                        break;
                    case "active":
                        child.remove(); //aggressive
                        break;
                    default:
                        child.remove();
                        break;
                }
            });
        }

        hidebody();
        window.loaded_header_author = 1;
        window.has_password_protection = 1;
        header_author("WriteManuallyNoNav", "<h1 class='text-light text-center'>Password Protected Content</h1>");

        document.body.insertAdjacentHTML('beforeend', `                
                <div id="cryptojs_decrypted-content" class=" bg-transparent d-none"></div>
                <div id="crypto-password-prompt" class="container no-color d-flex flex-column justify-content-center align-items-center text-center"  style="height: calc(100vh - 35vh);">
                    <div class="shadow alert w-auto w-sm-50 bg-warning bg-opacity-25 bg-gradient">
                        <h2 class="fw-bold">Enter the password to view content:</h2>                            
                    </div>
                    <input type="password" id="crypto-password" name="password" class="shadow-lg mt-3 mb-2 form-control w-auto w-sm-50 border-info" placeholder="Password Required*" autocomplete="off" maxlength="40" size="30" data-lpignore="true" required autofocus>
                    <div class="input-group w-auto w-sm-50 mt-4 justify-content-center align-items-center text-center">                                                        
                        <button id="crypto-submit-button" class="shadow m-2 btn btn-outline-success rounded btn-lg fw-bold"><i class="bi bi-key-fill"></i> Submit</button>
                        <button id="get-password" class="shadow m-2 btn btn-outline-danger rounded btn-lg fw-bold" data-bs-toggle="modal" data-bs-target="#common_msg_us_model"><i class="bi bi-question-circle-fill"></i> Get Password</button>
                    </div>                                                                        
                    <div id="crypto-error-message" class="text-danger d-none mt-4 fw-bold"></div>
                </div>
                `);

        window.addEventListener("resize", handleResize);
        handleResize();
        copyright("all");

        let tries = 3;

        document.getElementById('crypto-password').addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                const password = event.target.value;
                cryptojs_dec(cryptojs_encrypted_data, password);
            }
        });

        document.getElementById('crypto-submit-button').addEventListener('click', () => {
            const password = document.getElementById('crypto-password').value;
            cryptojs_dec(cryptojs_encrypted_data, password);
        });

        function handleResize() {
            let passwordPrompt = document.getElementById('crypto-password-prompt');
            if (window.matchMedia("screen and (max-device-width: 1024px) and (orientation: landscape)").matches) {
                passwordPrompt.style.height = "calc(100vh + 25vh)";
            } else {
                passwordPrompt.style.height = "calc(100vh - 35vh)";
            }
        }

        function addtoast() {
            const toastHTML = `<div id="first-toast" class="toast position-fixed bottom-0 end-0 m-5 mx-2 shadow-lg" style="z-index: 99999;" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="10000">
                                <div class="toast-header text-white fw-bold bg-danger bg-gradient border-0">
                                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                                    <strong class="me-auto">Security Alert</strong>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body fw-bold bg-danger bg-gradient bg-opacity-25">
                                    This page uses AES-256 encryption, which, unless you know the key, will need nearly impenetrable 1.1 x 10^77 potential key combinations, making it nearly impossible to break. To ensure enhanced and uninterrupted protection, this page will be refreshed and re-encrypted in 120 seconds.
                                </div>
                            </div>`;
            document.body.insertAdjacentHTML('beforeend', toastHTML);
            const toast = new bootstrap.Toast(document.querySelector('#first-toast'), { autohide: true, delay: 10000 });
            toast.show();
            createAndPlaySound();
            setTimeout(function () { serverRefresh("encryption"); }, 110000);
        }

        function cryptojs_dec(cryptojs_encrypted_data, password) {
            try {
                document.getElementById("cryptojs_decrypted-content").innerHTML += CryptoJS.AES.decrypt(cryptojs_encrypted_data, password).toString(CryptoJS.enc.Utf8);
                [document.getElementById('crypto-password-prompt'), document.querySelector('header'), document.querySelector('footer-dummy')].forEach(el => el?.classList.add('d-none'));
                document.getElementById('cryptojs_decrypted-content')?.classList.remove('d-none');
                addtoast();
                header_author("NavOnly");
            } catch (e) {
                tries--;
                if (tries >= 1) {
                    document.getElementById('crypto-error-message').innerHTML = `Authentication Failed. Please try again. You may try ${tries} more time(s).`;
                    document.getElementById('crypto-error-message').classList.remove('d-none');
                    document.getElementById('crypto-password').classList.add('border-danger');
                } else {
                    if (!window.cryptojs_enc_data) {
                        document.body.innerHTML = null;
                        document.body.innerHTML = `
                    <div class="no-color d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
                        <h1 class="py-2 p-5 px-md-2 text-sm-center fw-bold text-danger">Authentication Failed</h1>
                        <h4 class="py-2 p-3 px-md-4 text-sm-center fw-bold text-primary">The decryption process was unsuccessful due to insufficient information.</h4>
                        <p class="py-2 text-secondary text-center p-3 px-md-4 fw-bold">Kindly bring this incidence to <a href="mailto:contact@dmj.one">our attention</a> as we could not find anything to decrypt. The page might be undergoing enhancements, and we appreciate your patience.</p>
                    </div>`;
                        console.clear();
                    } else {
                        // hidebody();
                        document.body.innerHTML = null;
                        document.body.innerHTML = `
                    <div class="no-color d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
                        <h1 class="py-2 p-5 px-md-2 text-sm-center fw-bold text-danger">Authentication Failed</h1>
                        <h4 class="py-2 p-3 px-md-4 text-sm-center fw-bold text-primary">The decryption process was unsuccessful due to an incorrect password.</h4>
                        <p class="py-2 text-secondary text-center p-3 px-md-4 fw-bold">Please refresh the page and provide the correct password to access the content.</p>
                    </div>`;
                        console.clear();
                    }
                }
            }
        }
    };

    // Return the functions that need to be accessible globally
    return {
        serverRefresh,
        cryptoJSDecryption,
        cryptoJSEncryption
    };
}

// Usage
const encryptionManager = ContentEncryptionManager(window.cryptojs_enc_data);
// encryptionManager.serverRefresh('encryption');
// encryptionManager.cryptoJSDecryption(cryptojs_enc_data);





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
function body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading) {

    // USAGE - body_blockcards("/csu953/c1", "Thursday, September 29th 2022", "Lab 1 fn", "An introduction to HTML.", "HTML", "2");

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (!title && !desc) { return }; // Exit early if no title and desc provided. Do NOT Remove. Else it will waste the time in processing and give incomplete blocks
    title = title || "Unknown Title";
    desc = desc || "No desc provided";
    link = link || "#";
    date = date || new Date().toDateString();


    let body_generated = "", gen_end = "";

    const authors = {
        "vp": "Vanshika Painuly",
        "1": "Divya Mohan"
    };
    author = authors[author] || author;

    // Auxillary functions for blockcards
    // Append the current URL to the link - for sitemap generation easy. - Copy paste the generated url's.
    // var resolvedLink = new URL(link, location.href).toString();
    // sitemap_links.push(resolvedLink);
    sitemap_links.push(new URL(link, location.href).toString());


    // Generate Random
    // const randomNum01 = function (val) {
    //     val = val ? val : 7;
    //     var randomNum = Math.floor(Math.random() * 10) + 1;
    //     return (randomNum <= val) ? 1 : 0;
    // };
    const randomNum01 = (val = 7) => Math.random() * 10 + 1 <= val ? 1 : 0;
    randomNum01(5);

    // Generate QR if qr_link is available or generate the picsum.photo image
    // var qrcode_data = (function () {
    //     var typeNumber = 0;
    //     var errorCorrectionLevel = 'H';
    //     var qr = qrcode(typeNumber, errorCorrectionLevel);
    //     qr.addData(window.location.href + link);
    //     qr.make();
    //     return qr.createDataURL(4, "");
    // })();
    var qrcode_data = (function () {
        var qr = qrcode(0, 'H');
        qr.addData(window.location.href + link);
        qr.make();
        return qr.createDataURL(4, "");
    })();


    let unsplash_categories = ["programming", "robot", "space", "script", "tech", "network", "electronic", "server", "code"];
    unsplash_categories = unsplash_categories[randomNum(0, unsplash_categories.length - 1)];

    // var imgsrc = randomNum01(5) === 0 ? qrcode_data : `https://picsum.photos/${randomNum(200, 400)}`;
    var imgsrc = randomNum01(7) === 0 ? `https://picsum.photos/${randomNum(200, 400)}` : `https://source.unsplash.com/${randomNum(200, 300)}x${randomNum(200, 300)}/?${unsplash_categories}`;
    imgsrc = randomNum01(3) === 0 ? imgsrc : qrcode_data;
    imgsrc = cardimage || imgsrc; // forces to choose supplied image
    var is_qr = Number(imgsrc === qrcode_data);
    var imgAlt = is_qr ? "QR code of the URL" : "A Random Image from picsum.photo";
    var imgStyle = is_qr ? 'object-fit:contain;padding:2.5rem' : "";
    var imgClass = is_qr ? 'postcard__img is_qr' : 'postcard__img';
    var imgTag = `<img class="${imgClass}" src="${imgsrc}" alt="${imgAlt}" style="${imgStyle}"/>`;

    // qrblock = qr_link ? `<div id="qrcode"></div> ${imgsrc}` : "";

    // Get color and start generating the block.
    var color = ["yellow", "blue", "red", "green", "cyan", "orange", "pink", "purple"];
    var getcolor = color[randomNum(0, color.length)];
    // https://picsum.photos/

    const continueReading = continuereading || body_blockcards_continuereading_options[Math.floor(Math.random() * body_blockcards_continuereading_options.length)]; // Gets the options list from the global variable.

    /**** Backup ***/
    // body_generated += `<div class="m-0 my-5 postcard light shadow ${getcolor}">`;
    // body_generated += `<a class="postcard__img_link" href="${link}">${imgTag}</a>`;
    // body_generated += `<div class="postcard__text t-dark"><h1 class="postcard__title blue"><a href="${link}">${title}</a></h1>`;
    // body_generated += `<div class="postcard__subtitle small"><i class="bi bi-calendar3"></i>&nbsp;&nbsp;${date}</div>`;
    // body_generated += `<div class="postcard__bar"></div><div class="postcard__preview-txt">${desc}</div>`;
    // body_generated += `<ul class="postcard__tagbox tagbox-tags">`;
    // body_generated += semester ? `<li class="tag__item"><i class="bi bi-collection"></i>  ${semester}</li>` : "";
    // body_generated += codetype ? `<li class="tag__item"><i class="bi bi-file-earmark-code"></i>  ${codetype}</li>` : "";
    // body_generated += readtime ? `<li class="tag__item"><i class="bi bi-clock"></i>  ${readtime} minute read</li>` : "";
    // body_generated += author ? `<li class="tag__item"><i class="bi bi-pencil-square"></i>  ${author} </li>` : "";

    // // const continueReading = body_blockcards_continuereading_options[Math.floor(Math.random() * body_blockcards_continuereading_options.length)]; // Gets the options list from the global variable.
    // body_generated += `</ul><ul class="postcard__tagbox tagtox-read"><a href="${link}" data-toggle="tooltip" data-placement="top" title="Click to continue reading." data-original-title="Click to continue reading."><li class="tag__item read-more play ${getcolor} fw-bold text-center" style="cursor: inherit;"><i class="bi bi-book"></i>  ${continueReading}</li></a></ul></div></div>`;

    // body_generated += gen_end;

    /*  body_generated += `<div class="m-0 my-5 postcard light shadow ${getcolor}">
                             <a class="postcard__img_link" href="${link}">${imgTag}</a>
                             <div class="postcard__text t-dark">
                                 <h1 class="postcard__title blue"><a href="${link}">${title}</a></h1>
                                 <div class="postcard__subtitle small">
                                     <i class="bi bi-calendar3"></i>&nbsp;&nbsp;${date}
                                     <ul class="postcard__tagbox tagbox-tags">
                                         ${semester ? `<li class="tag__item"><i class="bi bi-collection"></i>  ${semester}</li>` : ""}
                                         ${codetype ? `<li class="tag__item"><i class="bi bi-file-earmark-code"></i>  ${codetype}</li>` : ""}
                                         ${readtime ? `<li class="tag__item"><i class="bi bi-clock"></i>  ${readtime} minute read</li>` : ""}
                                         ${author ? `<li class="tag__item"><i class="bi bi-pencil-square"></i>  ${author} </li>` : ""}
                                     </ul>
                                 </div>
                                 <div class="postcard__bar"></div><div class="postcard__preview-txt">${desc}</div>
                                 
                                 <ul class="postcard__tagbox tagtox-read my-3">
                                     <a href="${link}" data-toggle="tooltip" data-placement="top" title="Click to continue reading." data-original-title="Click to continue reading.">
                                         <li class="tag__item read-more play ${getcolor} fw-bold text-center" style="cursor: inherit;"><i class="bi bi-book"></i>  ${continueReading}</li>
                                     </a>
                                 </ul>
                             </div>
                         </div>`;     */
    // body_generated += `
    //     <div class="m-0 my-5 shadow rounded bg-light text-dark">
    //     <a class="d-block" href="${link}">${imgTag}</a>
    //     <div class="p-3">
    //         <h1 class="h1 text-primary mb-2"><a href="${link}">${title}</a></h1>
    //         <div class="small">
    //             <ul class="list-inline">
    //                 ${date ? `<li class="list-inline-item text-muted"><i class="bi bi-calendar3"></i> ${date}</li>` : ""}
    //                 ${semester ? `<li class="list-inline-item text-muted"><i class="bi bi-collection"></i>  ${semester}</li>` : ""}
    //                 ${codetype ? `<li class="list-inline-item text-muted"><i class="bi bi-file-earmark-code"></i>  ${codetype}</li>` : ""}
    //                 ${readtime ? `<li class="list-inline-item text-muted"><i class="bi bi-clock"></i>  ${readtime} minute read</li>` : ""}
    //                 ${author ? `<li class="list-inline-item text-muted"><i class="bi bi-pencil-square"></i>  ${author}</li>` : ""}
    //             </ul>
    //         </div>
    //         <div class="mt-2 mb-2" style="height: 10px; background-color: #424242;"></div>
    //         <div>${desc}</div>
    //         <ul class="list-inline my-3">
    //             <li class="list-inline-item text-center" style="cursor: inherit;" data-toggle="tooltip" data-placement="top" title="Click to continue reading." data-original-title="Click to continue reading.">
    //                 <a href="${link}" class="text-primary"><i class="bi bi-book"></i>  ${continueReading}</a>
    //             </li>
    //         </ul>
    //     </div>
    // </div>
    // `;
    // body_generated += `<div class="m-0 my-5 postcard light shadow-lg ${getcolor}">
    body_generated += `<div class="m-0 my-5 postcard ${window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'} shadow-lg ${getcolor}">
    <a class="postcard__img_link" href="${link}">${imgTag}</a>
    <div class="postcard__text t-dark">
        <h2 class="postcard__title ${getcolor}"><a href="${link}">${title}</a></h2>
        <div class="small d-none d-sm-inline-block ">
            <ul class="postcard__tagbox tagbox-tags d-flex flex-wrap list-inline">
                ${date ? `<li class="tag__item text-muted d-none d-sm-inline-block list-inline-item"><time class="bi bi-calendar3" datetime="${date}"> ${date}</time></li>` : ""}
                ${semester ? `<li class="tag__item text-muted d-none d-sm-inline-block list-inline-item"><i class="bi bi-collection"></i>  ${semester}</li>` : ""}
                ${codetype ? `<li class="tag__item text-muted d-none d-lg-inline-block list-inline-item"><i class="bi bi-file-earmark-code"></i>  ${codetype}</li>` : ""}
                ${readtime ? `<li class="tag__item text-muted d-none d-lg-inline-block list-inline-item"><i class="bi bi-clock"></i>  ${readtime} minute read</li>` : ""}
                ${author ? `<li class="tag__item tag__item_author text-muted d-none d-sm-inline-block list-inline-item"><i class="bi bi-pencil-square"></i>  ${author}</li>` : ""}
            </ul>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt"><p>${desc}</p></div>
        <ul class="postcard__tagbox tagtox-read my-3">
            <a href="${link}">
                <li class="tag__item read-more play ${getcolor} fw-bold text-center" id="article_userclickguide" style="cursor: inherit;" data-toggle="tooltip" data-placement="top" title="Click here to continue reading." data-original-title="Click to continue reading."><i class="bi bi-book"></i>  ${continueReading}...</li>
            </a>
        </ul>
    </div>
</div>`;

    document.addEventListener('DOMContentLoaded', () => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = () => {
            document.querySelectorAll('.postcard').forEach(card => {
                if (mediaQuery.matches) {
                    card.classList.add('dark');
                    card.classList.remove('light');
                } else {
                    card.classList.add('light');
                    card.classList.remove('dark');
                }
            });
        };

        // Apply theme on initial load
        applyTheme();

        // Listen for changes in the color scheme preference
        mediaQuery.addEventListener('change', applyTheme);
    });



    let finaltowrite = body_generated
    // document.write(body_generated + m + m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + gen_end);
    // document.addEventListener("DOMContentLoaded", function () {
    var genclass = document.querySelector(".genmenu");
    genclass.innerHTML += finaltowrite;
    // });

}

function sitemap_var_gen_clipboard() {
    // function called at around line 700 in the footer block
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
        { name: "Twitter", icon: "bi bi-twitter-x", url: `https://x.com/intent/tweet?url=${currentUrl}&text=${pageTitle}` },
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
    label.style.color = "var(--htag)";
    label.style.display = "inline-block";
    label.style.verticalAlign = "middle";
    label.style.marginRight = "1px";
    label.style.fontWeight = "bold";
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
        hiddenGroup.style.marginLeft = "1px";
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


function copyright(rights, noprint = false) {
    window["loaded_copyright"] = 1;
    // sitemap_var_gen_clipboard(); // uncomment this line to get the sitemap generation link copier 
    if (rights === "off") { return null; }
    console.log(noprint);
    if (noprint === true) { return null; }

    var footer_all_rights = ' &#8226; All rights reserved';
    var footer_some_rights = ' &#8226; Some rights reserved';
    var footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
    var footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';

    if (rights == "all") {
        var rights = footer_all_rights;
    } else if (rights == "some") {
        var rights = footer_some_rights;
    } else { rights = ""; }

    let footer = document.createElement("footer");    
    footer.id = "defaultcopyrightfooter";

    var sharingButtons = createSharingButtons();
    footer.appendChild(sharingButtons);
    var div = document.createElement("div");
    var span = document.createElement("span");
    var strong = document.createElement("strong");

    const date = new Date();
    const isServer = "";
    const lastModified = new Date(document.lastModified);
    if (date.getTime() === lastModified.getTime()) {
        isServer = " (Live)";
    }

    const modified = "cloudflare" == footer_getHeaderValue('server') ?
        `<span style="font-size:10px" class="d-print-none">Not seeing updated content? Page was loaded on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>` :
        `<span style="font-size:10px" class="d-print-none">Not seeing updated content? Page last modified on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>`;

    const footerNotice = `
  <span class="footer-notice d-none d-print-block my-0" style="font-size:8px !important; font-family:"Times New Roman" !important>
    <h3 class="d-none d-print-block fw-normal my-1">This article is provided as part of the <span class="text-capitalize">public welfare initiatives</span> by <span class="text-lowercase">dmj.one</span></h3>
        <div>
            <strong>General:</strong> All material provided herein is for educational or informational purposes only. No representation is made about the accuracy or completeness of the information contained on this page. Any use of or reliance on this material is strictly at the user's own risk. The author disclaims all liability for any damages or losses arising from such use.
            <strong>Citations:</strong> Content on this page is the intellectual property of the author. Users may cite the content at their own discretion and must assume full responsibility for maintaining academic integrity and adhering to their institution's citation guidelines.
            <strong>Commercial Use:</strong> Users must secure their own permissions for any commercial use of this content and agree to indemnify the author from any claims arising from such use.
            <strong>Contact:</strong> Direct all inquiries to contact@dmj.one. By accessing this content, you agree to contact the author for any further clarification or licensing information.
        </div>
  </span>
`;

    // Include this variable where you set up the rest of the footer HTML content

    div.innerHTML = footerNotice;
    strong.innerHTML = modified + `&copy; 2007 - ${new Date().getFullYear()} Divya Mohan ${rights} ${footer_link_privacy} ${footer_link_tos}`;
    span.appendChild(strong);
    footer.appendChild(div);
    footer.appendChild(span);

    //document.body.appendChild(footer);
    // document.body.insertBefore(footer, document.body.lastChild);
    document.body.appendChild(footer);

    // 3. Initialize a MutationObserver
    let observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // When a child is added to the body
                if (document.body.lastChild !== footer) {
                    // If the last child is not the footer, move the footer to the end
                    document.body.appendChild(footer);
                }
            }
        }
    });

    // 4. Start observing the body for configured mutations
    observer.observe(document.body, { childList: true });
    setTimeout(() => { observer.disconnect(); }, 20); // Disconnect the observer


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

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        if (window.location.pathname !== "/") {
            document.body.classList.add("not-root");
        }
    });
})();



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
    // Function to check if the current month is summer (June or July)
    const isSummer = () => {
        const date = new Date();
        const month = date.getMonth() + 1; // JavaScript months range from 0 to 11
        return month === 6 || month === 7;
    };

    // If it's not summer, immediately exit
    if (!isSummer()) {
        return;
    }

    // Singleton to ensure this only runs once per user
    if (window.hasRunSummerEasterEgg) {
        return;
    }
    window.hasRunSummerEasterEgg = true;

    // function changeBackground() {
    //     // sunset colors
    //     const colors = ["#FFDAB9", "#EECFA1", "#CDAA7D", "#8B7355", "#FFD700"];
    //     const randomColor = colors[Math.floor(Math.random() * colors.length)];
    //     document.body.style.backgroundColor = randomColor;
    // }

    let isUserInteracted = false;

    // Listen for any interaction
    window.addEventListener('click', () => {
        isUserInteracted = true;
    });

    window.addEventListener('keydown', () => {
        isUserInteracted = true;
    });

    function playSound() {
        if (!isUserInteracted) {
            // Do not play sound if the user hasn't interacted with the page
            return;
        }
        const audio = new Audio('https://cdn.dmj.one/media/music/summer-sounds.mp3');
        audio.play();
    }

    function random_summer() {
        const shouldDisplayObject = () => {
            // Higher probability of not displaying
            return Math.random() < 0.7; // Adjust this to increase/decrease the chance
        };

        if (shouldDisplayObject()) {
            function createObject() {
                const object = document.createElement("img");
                object.src = "/img/summer-object.png";
                object.classList.add("object");
                object.style.position = "absolute";
                object.style.left = Math.random() * window.innerWidth + "px";
                object.style.top = window.innerHeight + "px";
                object.style.width = (Math.random() * 20 + 10) + "px";
                object.style.height = object.style.width;
                object.speed = Math.random() * 0.01 + 0.2;
                object.easing = Math.random() * 0.2 + 0.1;
                document.body.appendChild(object);

                // Make the object 'pop' on click
                object.addEventListener("click", () => {
                    object.remove();
                });

                return object;
            }

            function moveObject(object) {
                const top = parseFloat(object.style.top);
                const newTop = top - object.speed;
                object.style.top = newTop + "px";
                object.speed += object.easing; // Ease In
                if (newTop < 0) {
                    object.remove();
                }
            }

            let objectInterval = setInterval(() => {
                const object = createObject();
                setInterval(() => {
                    moveObject(object);
                }, Math.floor(Math.random() * 30) + 10);
            }, Math.floor(Math.random() * 400) + 10);

            setTimeout(() => {
                clearInterval(objectInterval);
            }, Math.floor(Math.random() * 3000) + 2000);
        }
    }

    function randomEffect() {
        // Chance to show nothing at all
        if (Math.random() < 0.8) { // Adjust this to control the chance of showing nothing
            return;
        }
        let effectNumber = Math.floor(Math.random() * 3) + 1;

        switch (effectNumber) {
            case 1:
                // Implement Interactive Summer Objects
                random_summer();
                break;
            case 2:
                // Implement Summer Sounds
                playSound();
                break;
            case 3:
                // Implement Sunset/Sunrise Effect
                //changeBackground();
                break;
        }
    }

    // Call the function at the beginning
    randomEffect();
})();


// (function () {
//     const isSummer = () => {
//         const date = new Date();
//         const month = date.getMonth() + 1;
//         return month === 6 || month === 7 || month === 8;
//     };

//     if (isSummer()) {
//         function createBubble() {
//             const bubble = document.createElement("div");
//             bubble.classList.add("bubble");
//             bubble.style.left = Math.random() * window.innerWidth + "px";
//             bubble.style.top = window.innerHeight + "px";
//             bubble.style.width = (Math.random() * 20 + 10) + "px";
//             bubble.style.height = bubble.style.width;
//             bubble.speed = Math.random() * 2 + 1;
//             document.body.appendChild(bubble);
//             return bubble;
//         }

//         function moveBubble(bubble) {
//             const top = parseFloat(bubble.style.top);
//             const newTop = top - bubble.speed;
//             bubble.style.top = newTop + "px";
//             if (newTop < 0) {
//                 bubble.remove();
//             }
//         }

//         let bubbleInterval = setInterval(() => {
//             const bubble = createBubble();
//             setInterval(() => {
//                 moveBubble(bubble);
//             }, Math.floor(Math.random() * 100) + 20);
//         }, Math.floor(Math.random() * 300) + 70);

//         setTimeout(() => {
//             clearInterval(bubbleInterval);
//         }, Math.floor(Math.random() * 3000) + 2000);
//     }
// })();

/*** Birthday Balloons ***/
(function () {
    const isBirthday = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        return day === 20 && month === 4; // Change the date to the birthday date you want to celebrate
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
    const events = [
        { day: 20, month: 4, year: 1993, occasion: 'birthday', name: 'dmj' },
        { day: 11, month: 1, year: 2004, occasion: 'birthday', name: 'Jasmine' },
        { day: 11, month: 1, year: 2004, occasion: 'birthday', name: 'Vinayak' },
        { day: 12, month: 1, year: 2004, occasion: 'birthday', name: 'Prithak' },
        { day: 17, month: 1, year: 2004, occasion: 'birthday', name: 'Akshit' },
        { day: 29, month: 1, year: 2004, occasion: 'birthday', name: 'Abhay' },
        { day: 17, month: 2, year: 2004, occasion: 'birthday', name: 'Ashutosh' },
        { day: 25, month: 2, year: 2005, occasion: 'birthday', name: 'Vanshika' },
        { day: 2, month: 3, year: 2004, occasion: 'birthday', name: 'Samarth' },
        { day: 6, month: 3, year: 2005, occasion: 'birthday', name: 'Aerish' },
        { day: 11, month: 3, year: 2006, occasion: 'birthday', name: 'Krish' },
        { day: 17, month: 3, year: 2004, occasion: 'birthday', name: 'Vipul' },
        { day: 18, month: 3, year: 2001, occasion: 'birthday', name: 'Astha' },
        { day: 25, month: 3, year: 2004, occasion: 'birthday', name: 'Prikshit' },
        { day: 27, month: 3, year: 2004, occasion: 'birthday', name: 'Jatin' },
        { day: 27, month: 3, year: 2004, occasion: 'birthday', name: 'Vineet' },
        { day: 2, month: 4, year: 2003, occasion: 'birthday', name: 'Nitin' },
        { day: 24, month: 4, year: 2004, occasion: 'birthday', name: 'Adarsh' },
        { day: 26, month: 4, year: 2003, occasion: 'birthday', name: 'Parshav' },
        { day: 19, month: 5, year: 2001, occasion: 'birthday', name: 'Tarun' },
        { day: 20, month: 5, year: 2001, occasion: 'birthday', name: 'Rohit' },
        { day: 23, month: 5, year: 2004, occasion: 'birthday', name: 'Anshika' },
        { day: 1, month: 6, year: 2004, occasion: 'birthday', name: 'Aryan' },
        { day: 4, month: 9, year: 2004, occasion: 'birthday', name: 'Kamaksha' },
        { day: 31, month: 10, year: 2004, occasion: 'birthday', name: 'Vedansh' },
        { day: 14, month: 12, year: 2002, occasion: 'birthday', name: 'Subhojeet' },
        { day: 12, month: 11, occasion: 'diwali' },
        { day: 13, month: 11, occasion: 'childrensday' },
        { day: 15, month: 11, year: 2004, occasion: 'birthday', name: 'Asmi' },
    ];

    const birthdayEmojis = [
        "🎉", "🎈", "💐", "🥳", "🍾", "🍰", "🎁", "🎊", "🌟", "🍀",
        "🎂", "🎸", "🍦", "🎵", "🎶", "🎤", "🎧", "🍻", "🍩", "🎪",
        "🎠", "🍭", "🍫", "🥂", "🍷", "🎖", "🏆", "🚀", "🌈", "💫",
        "🔥", "💃", "🕺", "🍹", "🍕", "🍟", "🍔"
    ];

    // const birthdayMessages = [
    //     "To another fabulous year!", "Keep shining!", "Stay golden!",
    //     "Cheers!", "Onwards & upwards!", "Age with grace!",
    //     "Born to shine!", "Forever young!", "Keep rocking!",
    //     "You're gold!", "Keep being awesome!", "You're a star!",
    //     "Celebrate!", "The best is yet to come!", "You're on fire!",
    //     "Stay cool!", "You rock!", "Keep flying high!", "Stay sweet!",
    //     "Party on!"
    // ];

    const birthdayMessages = ["To another fabulous year!", "Keep shining!", "Stay golden!", "Cheers!", "Onwards & upwards!", "Age with grace!", "Born to shine!", "Forever young!", "Keep rocking!", "You're gold!", "Keep being awesome!", "You're a star!", "Celebrate!", "The best is yet to come!", "You're on fire!", "Stay cool!", "You rock!", "Keep flying high!", "Stay sweet!", "Party on!", "Here's to you!", "Shine your light!", "Live your story!", "Stay uniquely you!", "Your joy shines!", "Aging gracefully, like you!", "Keep dazzling us!", "Forever stylish!", "Thrive on!", "Glow as you do!", "Dream your dreams!", "Cheers to your magic!", "Smile your smile!", "Fabulous as always!", "Rise above!", "Unstoppable, like you!", "Sparkle your way!", "Golden, like you!", "Embrace your journey!", "Live your best!", "Adventure calls you!", "Your spirit sparkles!", "Legend in the making!", "Keep glowing!", "Champion of the day!", "Irreplaceably you!", "Dance in the joy!", "Your day, your way!", "Radiate positivity!", "Incomparable you!", "Vibrant as ever!", "Laughter fills your day!", "Here’s to your brilliance!", "You defy the odds!", "Trailblazer!", "Your vibe attracts your tribe!", "Own the moment!", "Fierce and fabulous!", "Joyfully you!", "Leap into the new year!", "Shining example of you!", "Flourish!", "Rewriting the stars!", "Bold and beautiful!", "Uniquely celebrated!", "To more laughs and adventures!", "Keep conquering!", "Glow with grace!", "Cheers to your essence!", "Soar higher!", "Elegance in aging!", "Born for greatness!", "Stay timeless!", "Rock the world!", "You're a treasure!", "Continue to marvel!", "Shining brighter!", "Joyous celebrations!", "Ahead lies wonder!", "Ignite the year!", "Coolness personified!", "Master of your day!", "Elevate beyond!", "Sweetness personified!", "The party's just begun!", "To your endless happiness!", "Light up the world!", "Craft your tale!", "Uniquely splendid!", "Your laughter, a melody!", "Grace in every step!", "Dazzling every day!", "Stylishly you!", "Prospering always!", "Your glow, undimmed!", "Dreams taking flight!", "Magic in every moment!", "Wearing your smile!", "Consistently amazing!", "Soaring spirit!", "Like no other!", "Carve your path!", "A golden heart!", "Journeying your way!", "Best of life, embraced!"];

    const getTodaysEvents = () => {
        const date = new Date();
        return events.filter(event => event.day === date.getDate() && event.month === date.getMonth() + 1);
    };

    const getSuffix = age => {
        const lastDigit = age % 10;
        if (lastDigit === 1 && age !== 11) return 'st';
        if (lastDigit === 2 && age !== 12) return 'nd';
        if (lastDigit === 3 && age !== 13) return 'rd';
        return 'th';
    };

    const getRandomItem = (array, exclude) => {
        let item;
        do {
            item = array[Math.floor(Math.random() * array.length)];
        } while (item === exclude);
        return item;
    };

    // const todaysEvents = getTodaysEvents(); // failsafe method
    // const FIREWORKS_DISPLAYED_KEY = 'fireworks_displayed';
    // const fireworksDisplayed = localStorage.getItem(FIREWORKS_DISPLAYED_KEY);    

    // if (todaysEvents.length > 0 && !fireworksDisplayed) {

    //////// v2.0    
    const todaysDate = new Date().toDateString();
    const todaysEvents = getTodaysEvents();
    const FIREWORKS_DISPLAYED_KEY = 'fireworks_displayed';
    const forcedisplay = 0;
    const fireworksDisplayedInfo = forcedisplay ? false : JSON.parse(localStorage.getItem(FIREWORKS_DISPLAYED_KEY))


    if (todaysEvents.length > 0 && (!fireworksDisplayedInfo || fireworksDisplayedInfo.date !== todaysDate)) {
        let messages = [];
        const randomEmoji1 = getRandomItem(birthdayEmojis);
        const randomEmoji2 = getRandomItem(birthdayEmojis, randomEmoji1);
        todaysEvents.forEach(event => {
            switch (event.occasion) {
                case 'birthday':
                    const age = event.year ? new Date().getFullYear() - event.year : null;
                    const initial = event.name.charAt(0);  // Extract the first letter
                    let randomMessage;
                    console.log(event.name);
                    if (!(event.name === "dmj")) {
                        console.log(1);
                        randomMessage = age ?
                            `${randomEmoji1}Happy <span class="fw-bold">${age}</span><sup>${getSuffix(age)}</sup> ${event.name}!${randomEmoji2}<br><span class ="display-6">${getRandomItem(birthdayMessages)}</span>` :
                            `${randomEmoji1}Happy Birthday, ${initial}!${randomEmoji2}<br>${getRandomItem(birthdayMessages)}`;
                        // `${randomEmoji1}Enjoy the day ${event.name}!${randomEmoji2}<br><span class ="display-6">${getRandomItem(birthdayMessages)}</span>`;
                        // `<p class="text-center" style="font-size:1rem">${'❤️'.repeat(10)}<p><p class="text-center" style="font-size:1rem">${'❤️'.repeat(10)}<p><p class="text-center" style="font-size:1rem">${'❤️'.repeat(10)}<p><p class="text-center" style="font-size:1.5rem">${'❤️'.repeat(1)}<p><p class="mt-10 text-muted text-sm-center small" style="font-size:1.1rem">Click for a musical melody!</p>`;
                    } else {
                        console.log(0);
                        randomMessage = `${randomEmoji1}Happy <span class="fw-bold">${age}</span><sup>${getSuffix(age)}</sup>${randomEmoji2}<br><span class ="display-6">${getRandomItem(birthdayMessages)}</span><p class="text-muted text-sm-center small" style="font-size:1.1rem">Click for a musical melody!</p>`
                    }
                    messages.push(randomMessage);
                    break;
                case 'diwali':
                    messages.push(`✨🎇 Happy Diwali! 🎆✨`);
                    break;
                case 'childrensday':
                    messages.push(`${randomEmoji1} Happy Children's Day! ${randomEmoji2}`);
                    break;
            }
        });

        const messageString = messages.join('<br><br>');
        // ...
        const incognito = forcedisplay ? "" : '<div class="fireworks-footer display-6">To watch again, open in an incognito window.</div>';
        document.write(`<canvas id="fireworks" class=""></canvas>
               <div class="fireworks-message text-center">${messageString}</div>
               ${incognito}`);

        // focus to view by scrolling and disabling scrollbar
        document.addEventListener('DOMContentLoaded', () => {
            document.body.style.overflow = 'hidden';
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        });

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

            const timeouttimer = forcedisplay ? Math.floor(Math.random() * 2000) + 3000 : Math.floor(Math.random() * 6000) + 6000;

            loop();
            setTimeout(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                document.body.style.overflow = 'auto';
                // document.querySelector('fireworks').style.display = 'none';
                document.getElementById('fireworks').classList.add('d-none');
                document.querySelector('.fireworks-message').classList.add('d-none');
                document.querySelector('.fireworks-footer').classList.add('d-none');
                // Set flag to indicate that fireworks have been displayed
                // localStorage.setItem(FIREWORKS_DISPLAYED_KEY, true);
                localStorage.setItem(FIREWORKS_DISPLAYED_KEY, JSON.stringify({ displayed: true, date: todaysDate }));
                forcedisplay ? null : location.reload(true);
            }, timeouttimer)

        });

        (function () {
            document.addEventListener("DOMContentLoaded", () => {
                const audio = document.createElement('audio');
                audio.src = '/media/music/happy_bday.mp3';
                audio.preload = 'auto';

                let audioPlayed = false;

                const playAudio = () => {
                    console.log("Attempt to play audio"); // Debugging
                    if (!audioPlayed) {
                        audio.play().then(() => {
                            console.log("Audio played successfully"); // Debugging
                            audioPlayed = true;
                            removeEventListeners();
                        }).catch((error) => {
                            console.log("Playback failed", error); // Debugging
                        });
                    }
                };

                const removeEventListeners = () => {
                    ['click', 'keypress', 'touchstart', 'scroll'].forEach(event => {
                        document.removeEventListener(event, playAudio);
                    });
                };

                ['click', 'keypress', 'touchstart', 'scroll'].forEach(event => {
                    document.addEventListener(event, playAudio);
                });

                playAudio(); // Attempt to play on load
            });
        })();
    }
})();

// (function () {
//     document.addEventListener("DOMContentLoaded", () => {
//         var audio = new Audio('/media/music/happy_bday.mp3');
//         var audioPlayed = false;
//         var playAudio = () => {
//             if (!audioPlayed) {
//                 audio.play().then(() => {
//                     audioPlayed = true;
//                     document.removeEventListener("click", playAudio);
//                     document.removeEventListener("keypress", playAudio);
//                 }).catch(() => { });
//             }
//         };
//         document.addEventListener("click", playAudio);
//         document.addEventListener("keypress", playAudio);
//     });
// })();




// (function () {
//     const isDiwali = () => {
//         const date = new Date();
//         const day = date.getDate();
//         const month = date.getMonth() + 1;
//         return day === 3 && month === 9;
//     };
//     if (isDiwali()) {
//         const FIREWORKS_DISPLAYED_KEY = 'fireworks_displayed';
//         // const fireworksDisplayed = localStorage.getItem(FIREWORKS_DISPLAYED_KEY);
//         var fireworksDisplayed;

//         if (!fireworksDisplayed) {
//             document.write(`<canvas id="fireworks"></canvas><div class="message m-0">19<sup>th</sup> Congratulations!<br>Happy Birthday!</div>`);
//             window.addEventListener('load', function () {
//                 const canvas = document.getElementById('fireworks');
//                 const ctx = canvas.getContext('2d');
//                 canvas.width = window.innerWidth;
//                 canvas.height = window.innerHeight;

//                 const fireworks = [];

//                 function Particle(x, y, size, color) {
//                     this.x = x;
//                     this.y = y;
//                     this.size = size;
//                     this.color = color;
//                     this.velocity = { x: Math.random() * 6 - 3, y: Math.random() * 6 - 3 };
//                     this.gravity = 0.1;
//                     this.alpha = 1;

//                     this.update = function () {
//                         this.x += this.velocity.x;
//                         this.y += this.velocity.y;
//                         this.velocity.y += this.gravity;
//                         this.alpha -= 0.01;
//                     };

//                     this.draw = function () {
//                         ctx.globalAlpha = this.alpha;
//                         ctx.fillStyle = this.color;
//                         ctx.fillRect(this.x, this.y, this.size, this.size);
//                     };
//                 }

//                 function Firework(x, y) {
//                     this.x = x;
//                     this.y = y;
//                     this.particles = [];
//                     this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';

//                     for (let i = 0; i < 50; i++) {
//                         const size = Math.random() * 4 + 1;
//                         const particle = new Particle(x, y, size, this.color);
//                         this.particles.push(particle);
//                     }

//                     this.update = function () {
//                         for (let i = 0; i < this.particles.length; i++) {
//                             this.particles[i].update();
//                             if (this.particles[i].alpha <= 0) {
//                                 this.particles.splice(i, 1);
//                             }
//                         }
//                     };

//                     this.draw = function () {
//                         for (let i = 0; i < this.particles.length; i++) {
//                             this.particles[i].draw();
//                         }
//                     };
//                 }

//                 function createFirework() {
//                     const x = Math.random() * canvas.width;
//                     const y = Math.random() * canvas.height / 2;
//                     const firework = new Firework(x, y);
//                     fireworks.push(firework);
//                 }

//                 setInterval(createFirework, Math.floor(Math.random() * 300) + 100);

//                 function loop() {
//                     ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
//                     ctx.fillRect(0, 0, canvas.width, canvas.height);

//                     for (let i = 0; i < fireworks.length; i++) {
//                         fireworks[i].update();
//                         fireworks[i].draw();
//                         if (fireworks[i].particles.length <= 0) {
//                             fireworks.splice(i, 1);
//                         }
//                     }

//                     requestAnimationFrame(loop);
//                 }

//                 loop();
//                 setTimeout(function () {
//                     ctx.clearRect(0, 0, canvas.width, canvas.height);
//                     document.querySelector('.message').style.display = 'none';
//                     // Set flag to indicate that fireworks have been displayed
//                     localStorage.setItem(FIREWORKS_DISPLAYED_KEY, true);
//                     location.reload(true);
//                 }, Math.floor(Math.random() * 6000) + 40000);

//             });
//         }
//     }
// })();

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
        }, Math.floor(Math.random() * 5000) + 2000);
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

/********** Add-On: Message Us Button **********/
var messageUsButtonCaller = function () {
    document.addEventListener('DOMContentLoaded', function () {
        const htmlContent = `
        <div id="btn_focus-class-message" class="btn_focus-class-message position-fixed">
            <button id="common-message-us-button" type="button" class="btn bg-opacity-10 button_slide slide_right" data-bs-toggle="modal" data-bs-target="#common_msg_us_model"><i class="bi bi-envelope-plus-fill"></i> Message Us</button>
        </div>
        
        <div class="modal fade" id="common_msg_us_model" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background: var(--background-color)">
                    <div class="modal-header">
                        <h5 class="modal-title">Message Us</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="contact-form" class="mt-1 needs-validation" novalidate>
                            <div class="d-flex justify-content-center mb-3">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="anonymousSwitch">
                                    <label class="form-check-label" for="anonymousSwitch">Send Anonymously</label>
                                </div>
                            </div>
                            <div id="name-field" class="mb-3">
                                <label for="name" class="form-label">Name*</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                            <div id="email-field" class="mb-3">
                                <label for="email" class="form-label">Email*</label>
                                <input type="email" class="form-control" id="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="message-type" class="form-label">Message Type*</label>
                                <select class="form-select" id="message-type" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Binary Battles Event</option>
                                    <option>Course-related Inquiry</option>
                                    <option>Collaboration Request</option>
                                    <option>Volunteering</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message*</label>
                                <textarea class="form-control" id="message" required></textarea>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col d-grid">
                                    <button type="submit" class="btn btn-primary" id="com-msg-un-submit-button">Submit</button>
                                </div>
                                <div class="col d-grid">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </form>
                        <div id="success-message" class="alert alert-success mt-4 d-none">
                            Your message was submitted successfully.
                        </div>
                        <div id="error-message" class="alert alert-danger mt-4 d-none">
                            There was an error submitting your message.
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        const styles = `.button_slide {
                border: 2px solid rgb(216, 2, 134);
                cursor: pointer;
                color: #d80286;
                animation: leave 0.4s forwards;
                backdrop-filter: blur(3px);
                -webkit-backdrop-filter: blur(3px);
                transition: right 0.4s;
            }

            .btn_focus-class-message {
                right: -97px;
                bottom: 30%;
            }

            .btn_focus-class-message:hover {
                right: -5px;
            }

            .slide_right:hover {
                animation: hover 0.4s forwards;
            }

            @keyframes hover {
                from {
                    box-shadow: inset 0 0 0 0.01px #d80286;
                }

                to {
                    box-shadow: inset 8.79928em 0 0 0.01px #d80286;
                    color: #fff;
                }
            }

            @keyframes leave {
                from {
                    box-shadow: inset -8.79928em 0 0 0.01px #d80286;
                    color: #fff;
                }

                to {
                    box-shadow: inset 0 0 0 0.01px #d80286;
                }
            }`;


        const container = document.createElement('div');
        container.id = 'common-msg-us-container';
        container.innerHTML = htmlContent;
        document.body.appendChild(container);

        const styleSheet = document.createElement('style');
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        const ids = ['anonymousSwitch', 'name', 'name-field', 'email', 'email-field', 'message-type', 'message', 'contact-form', 'com-msg-un-submit-button', 'success-message', 'error-message', 'common_msg_us_model', 'btn_focus-class-message'];
        const [anonymousSwitch, nameField, nameContainer, emailField, emailContainer, messageTypeElement, messageElement, form, submitButton, successMessage, errorMessage, CommonMessageUsModel, message_button] = ids.map(id => document.getElementById(id));

        message_button.classList.add('d-none');
        window.addEventListener('scroll', function () {
            message_button.classList.toggle('d-none', window.scrollY < 150);
        });

        anonymousSwitch.onchange = function () {
            [nameField, emailField].forEach((field, i) => {
                if (anonymousSwitch.checked) field.removeAttribute('required');
                else field.setAttribute('required', '');
                [nameContainer, emailContainer][i].style.display = anonymousSwitch.checked ? 'none' : 'block';
            });
        };

        CommonMessageUsModel.addEventListener('hidden.bs.modal', function () {
            if (!document.querySelector('.modal.show')) {
                const backDrop = document.querySelector('.modal-backdrop');
                if (backDrop) {
                    backDrop.remove();
                }
                document.body.classList.remove('modal-open');
            }
        });

        form.onsubmit = async function (event) {
            event.preventDefault();
            form.classList.add('was-validated');

            if (!form.checkValidity()) return;

            submitButton.disabled = true;
            const name = anonymousSwitch.checked ? '' : nameField.value;
            const email = anonymousSwitch.checked ? '' : emailField.value;
            const message = messageElement.value;
            const messageType = messageTypeElement.value;

            try {
                const response = await fetch('https://submit.dmj.one', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ name, email, message, messageType })
                });

                successMessage.classList.toggle('d-none', !response.ok);
                form.classList.toggle('d-none', !response.ok);
                errorMessage.classList.toggle('d-none', response.ok);

                if (response.ok) {
                    setTimeout(() => {
                        bootstrap.Modal.getInstance(CommonMessageUsModel).hide();
                        document.body.classList.remove('modal-open');
                    }, 2000);

                    setTimeout(() => {
                        successMessage.classList.add('d-none');
                        form.reset();
                    }, 3000);
                } else {
                    setTimeout(() => errorMessage.classList.add('d-none'), 2000);
                }
            } catch (error) {
                errorMessage.classList.remove('d-none');
                setTimeout(() => errorMessage.classList.add('d-none'), 2000);
            }

            submitButton.disabled = false;
        };
    });
};
messageUsButtonCaller();

/********** Add-On: Bing Search Button **********/
(function () {
    let showSearchButton = false;

    document.addEventListener('DOMContentLoaded', function () {
        const htmlContent = `
            <div class="btn_focus-class_search position-fixed">
            <button id="common-message-us-button" type="button" class="btn bg-opacity-10 button_slide slide_right" data-bs-toggle="modal" data-bs-target="#searchbox"><i class="bi bi-search"></i> Search</button>
        </div>
        
        <div class="modal fade shadow-lg" id="searchbox" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content " style="background: var(--background-color)">
                    <div class="modal-header bg-light">
                        <h5 class="modal-title" id="searchModalLabel">Search with Bing</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body bg-light">
                        <form>
                            <div class="form-group mb-3">
                                <input class="form-control px-4" type="search" placeholder="Search" aria-label="Search">
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col d-grid">
                                    <button type="submit" class="btn btn-primary px-4" onclick="performSearch()">Search</button>
                                </div>
                                <div class="col d-grid">
                                    <button type="button" class="btn btn-secondary px-4" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                            <!-- <div class="d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary px-4" onclick="performSearch()">Search</button>
                            </div> -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;

        const styles = `.button_slide {
                border: 2px solid rgb(216, 2, 134);
                cursor: pointer;
                color: #d80286;
                animation: leave 0.4s forwards;
                backdrop-filter: blur(3px);
                -webkit-backdrop-filter: blur(3px);
                transition: right 0.4s;
            }

            .btn_focus-class_search {
                right: -62px;
                bottom: 37%;
            }

            .btn_focus-class_search:hover {
                right: -5px;
            }

            .slide_right:hover {
                animation: hover 0.4s forwards;
            }

            @keyframes hover {
                from {
                    box-shadow: inset 0 0 0 0.01px #d80286;
                }

                to {
                    box-shadow: inset 8.79928em 0 0 0.01px #d80286;
                    color: #fff;
                }
            }

            @keyframes leave {
                from {
                    box-shadow: inset -8.79928em 0 0 0.01px #d80286;
                    color: #fff;
                }

                to {
                    box-shadow: inset 0 0 0 0.01px #d80286;
                }
            }`;

        const container = document.createElement('div');
        container.innerHTML = htmlContent;
        container.id = 'searchbox-container'
        document.body.appendChild(container);

        const styleSheet = document.createElement('style');
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        const searchButton = document.querySelector('.btn_focus-class_search');
        searchButton.style.display = 'none';

        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                if (!showSearchButton) {
                    showSearchButton = true;
                    searchButton.style.display = 'block';
                }
            } else {
                if (showSearchButton) {
                    showSearchButton = false;
                    searchButton.style.display = 'none';
                }
            }
        });
    });

    window.performSearch = function () {
        var searchText = document.querySelector('#searchbox input[type="search"]').value;
        var searchUrl = 'https://www.bing.com/search?q=' + encodeURIComponent(searchText + ' site:dmj.one');
        window.open(searchUrl, '_blank');
        $('#searchbox').modal('hide');
    }
})();

/********** Add-On: User Click Guide **********/
// (function () {
//     document.addEventListener('DOMContentLoaded', function () {
//         $(document).ready(function () {
//             $('#article_userclickguide').tooltip('show');   // Show the tooltip as soon as document loads

//             setTimeout(function () {
//                 $('#article_userclickguide').tooltip('hide');  // Hide the tooltip after 5 seconds
//             }, 2000);  // 5000 milliseconds = 5 seconds
//         });
//     });
// })();

/********** Add-On: All Alerts in oops mode **********/
// const allAlerts = {
//     // Usage: allAlerts.courseraDisclaimer();
//     courseraDisclaimer: function () {
//         const uniqueID = 'alert-' + Math.random().toString(36).substr(2, 9);
//         let countdown = 25; // Countdown starting from 8 seconds

//         const alertHTML = `
//               <div id="${uniqueID}" class="mt-5 alert alert-danger fade show shadow" role="alert" style="position: relative; z-index: 1; border: none; background: #b32828; color: white;">
//                 <h4 class="alert-heading text-center" style="font-weight: 700;">DISCLAIMER</h4>
//                 <p id="countdown-${uniqueID}" class="text-center text-white mt-3">This alert will close in <strong>${countdown}</strong> seconds</p>
//                 <p class="text-justify mb-2 text-uppercase">The case studies and answers herein are provided exclusively for <mark class="fw-bold">EDUCATIONAL USE</mark> and are supplied <mark class="fw-bold">"AS IS".</mark> Any reproduction, distribution, or use beyond ethical educational purposes is <mark class="fw-bold">STRICTLY PROHIBITED</mark> and may result in severe civil and criminal penalties. Direct copying or use of the material may lead to <mark class="fw-bold">IMMEDIATE SUSPENSION</mark> from the Coursera platform.</p>
//                 <div class="p-2 text-uppercase text-black bg-warning bg-opacity-75 bg-gradient shadow-lg text-center fw-bold">DMJ.ONE accepts <span class="bg-black text-white px-2 py-1">NO LIABILITY</span> for any consequences, legal or otherwise, resulting from the misuse of the provided content.</div>
//               </div>
//             `;

//         // Insert the alert into the DOM at the current script location
//         // document.write(alertHTML);
//         document.getElementById('course-href-provider').innerHTML += alertHTML;


//         const interval = setInterval(() => {
//             countdown -= 1;
//             const countdownElement = document.getElementById(`countdown-${uniqueID}`);
//             if (countdownElement) countdownElement.innerHTML = `This alert will close in <strong>${countdown}</strong> seconds`;
//             if (countdown <= 0) clearInterval(interval);
//         }, 1000);

//         setTimeout(() => {
//             const alert = document.getElementById(uniqueID);
//             if (alert) {
//                 alert.style.display = 'none';
//             }
//             clearInterval(interval);
//         }, countdown * 1000);
//     }
// };
const allAlerts = {
    courseraDisclaimer: function () {
        const uniqueID = 'alert-' + Math.random().toString(36).substr(2, 9);
        let countdown = 10; // Countdown starting from 20 seconds

        const alertHTML = `        
            <div id="${uniqueID}" class="my-4 alert alert-danger fade show shadow" role="alert" style="position: relative; z-index: 1; border: none; background: #b32828; color: white;">                
                <h4 class="alert-heading text-center" style="font-weight: 700;">DISCLAIMER</h4>
                <p id="countdown-${uniqueID}" class="text-center text-white mt-3">This message box will close automatically in <strong>${countdown}</strong> seconds. Refresh to read again.</p>
                <p class="text-justify mb-2 text-uppercase">The case studies and answers herein are provided exclusively for <mark class="fw-bold">EDUCATIONAL USE</mark> and are supplied <mark class="fw-bold">"AS IS".</mark> Any reproduction, distribution, or use beyond ethical educational purposes is <mark class="fw-bold">STRICTLY PROHIBITED</mark> and may result in severe civil and criminal penalties. Direct copying or use of the material may lead to <mark class="fw-bold">IMMEDIATE SUSPENSION</mark> from the Coursera platform.</p>
                <div class="p-2 text-uppercase text-black bg-warning bg-opacity-75 bg-gradient shadow-lg text-center fw-bold">DMJ.ONE accepts <span class="bg-black text-white px-2 py-1">NO LIABILITY</span> for any consequences, legal or otherwise, resulting from the misuse of the provided content.</div>                
            </div>`;

        document.getElementById('course-href-provider').insertAdjacentHTML('beforeend', alertHTML);

        const interval = setInterval(() => {
            countdown--;
            const countdownElement = document.getElementById(`countdown-${uniqueID}`);
            if (countdownElement) {
                countdownElement.innerHTML = `This message box will close automatically in <strong>${countdown}</strong> seconds. Refresh to read again.`;
            }
            if (countdown <= 0) {
                clearInterval(interval);
                const alertElement = document.getElementById(uniqueID);
                if (alertElement) alertElement.remove();
            }
        }, 1000);
    }
};
// const certifications = {
//     isc2: {
//         image: "/img/isc2_logo.png",
//         href: "https://www.isc2.org/",
//         text: "ISC²"
//     },
//     ibm: {
//         image: "/img/ibm_logo.png",
//         href: "https://www.ibm.com/certify/",
//         text: "IBM"
//     },
//     google: {
//         image: "/img/google_cloud.png",
//         href: "https://cloud.google.com/certification",
//         text: "Google Cloud"
//     },
//     coursera: {
//         image: "/img/coursera.webp",
//         href: "", // This will be set dynamically based on function call
//         text: "Coursera"
//     },
//     mitx: {
//         image: "/img/mitx.webp",
//         href: "", // This will be set dynamically based on function call
//         text: "MitX"
//     },
//     courseraDisclaimer: function () {
//         const uniqueID = 'alert-' + Math.random().toString(36).substr(2, 9);
//         let countdown = 15; // Countdown starting from 25 seconds

//         const alertHTML = `
//             <div id="${uniqueID}" class="mt-5 alert alert-danger fade show shadow" role="alert" style="position: relative; z-index: 1; border: none; background: #b32828; color: white;">
//                 <h4 class="alert-heading text-center" style="font-weight: 700;">DISCLAIMER</h4>
//                 <p id="countdown-${uniqueID}" class="text-center text-white mt-3">This alert will close in <strong>${countdown}</strong> seconds</p>
//                 <p class="text-justify mb-2 text-uppercase">The case studies and answers herein are provided exclusively for <mark class="fw-bold">EDUCATIONAL USE</mark> and are supplied <mark class="fw-bold">"AS IS".</mark> Any reproduction, distribution, or use beyond ethical educational purposes is <mark class="fw-bold">STRICTLY PROHIBITED</mark> and may result in severe civil and criminal penalties. Direct copying or use of the material may lead to <mark class="fw-bold">IMMEDIATE SUSPENSION</mark> from the Coursera platform.</p>
//                 <div class="p-2 text-uppercase text-black bg-warning bg-opacity-75 bg-gradient shadow-lg text-center fw-bold">DMJ.ONE accepts <span class="bg-black text-white px-2 py-1">NO LIABILITY</span> for any consequences, legal or otherwise, resulting from the misuse of the provided content.</div>
//             </div>`;

//         const interval = setInterval(() => {
//             countdown--;
//             const countdownElement = document.getElementById(`countdown-${uniqueID}`);
//             if (countdownElement) {
//                 countdownElement.innerHTML = `This alert will close in <strong>${countdown}</strong> seconds`;
//             }
//             if (countdown <= 0) {
//                 clearInterval(interval);
//                 const alertElement = document.getElementById(uniqueID);
//                 if (alertElement) alertElement.remove();
//             }
//         }, 1000);

//         return alertHTML;
//     },
//     certifiedby: function (certName, courseraLink, ...additionalParams) {
//         let htmlContent = '';
//         let courseraDisclaimerHTML = certName.toLowerCase() === "coursera" ? this.courseraDisclaimer() : "";

//         if (certName === 'coursera') {
//             this.coursera.href = courseraLink; // Set the Coursera link dynamically

//             // Handle predefined certification or custom certification
//             if (additionalParams.length) {
//                 const certificationType = additionalParams[0];

//                 if (certificationType === 'custom' && additionalParams.length >= 3) {
//                     // Custom certification details are provided
//                     const [image, href, text] = additionalParams.slice(1); // Skip 'custom' identifier
//                     htmlContent += this.generateCertificationHTML(image, href, text);
//                 } else if (this[certificationType]) {
//                     // Predefined certification is specified
//                     const { image, href, text } = this[certificationType];
//                     htmlContent = this.generateCertificationHTML(image, href, text);
//                 }
//             }
//         } else {
//             console.error('Invalid certification type or missing parameters.');
//             return;
//         }

//         document.getElementById('course-href-provider').innerHTML = `
//             <div class="row justify-content-center align-items-center">
//                 <div class="col d-flex justify-content-center align-items-center mb-3">
//                     <a href="${this.coursera.href}" target="_blank" class="text-decoration-none">
//                         <div class="p-3 d-inline-flex flex-column align-items-center">
//                             <p class="fw-bold text-secondary mt-2 mb-0">Take this course on</p>
//                             <img src="${this.coursera.image}" alt="Coursera Logo" class="img-fluid" style="max-height: 30px; max-width: 200px">
//                         </div>
//                     </a>
//                 </div>
//                 ${htmlContent}
//             </div>
//             ${courseraDisclaimerHTML}`;
//     },
//     generateCertificationHTML: function (image, href, text) {
//         return `
//             <div class="col d-flex justify-content-center align-items-center">
//                 <a href="${href}" target="_blank" class="text-decoration-none">
//                     <div class="d-inline-flex flex-column align-items-center">
//                         <p class="fw-bold mb-1 text-secondary">Certified by <span class="text-success">${text}</span></p>
//                         <div class="d-inline-flex flex-row align-items-center">
//                             <img src="${image}" alt="${text}" class="img-fluid px-2" style="max-height: 40px; max-width: 200px">
//                         </div>
//                     </div>
//                 </a>
//             </div>`;
//     }
// };
// const certifications = {
//     isc2: {
//         image: "/img/isc2_logo.png",
//         href: "https://www.isc2.org/",
//         text: "ISC²"
//     },
//     ibm: {
//         image: "/img/ibm_logo.png",
//         href: "https://www.ibm.com/certify/",
//         text: "IBM"
//     },
//     google: {
//         image: "/img/google_cloud.png",
//         href: "https://cloud.google.com/certification",
//         text: "Google Cloud"
//     },
//     coursera: {
//         image: "/img/coursera.webp",
//         href: "", // This will be set dynamically based on function call
//         text: "Coursera"
//     },
//     mitx: {
//         image: "/img/mitx.webp",
//         href: "", // This will be set dynamically based on function call
//         text: "MitX"
//     },
//     generateCourseRedirectHTML: function (image, href, text, htmlContent, courseraDisclaimerHTML) {
//         return `
//             <div class="row justify-content-center align-items-center">
//                 <div class="col d-flex justify-content-center align-items-center mb-3">
//                     <a href="${href}" target="_blank" class="text-decoration-none">
//                         <div class="p-3 d-inline-flex flex-column align-items-center">
//                             <p class="fw-bold text-secondary mt-2 mb-0">Take this course on</p>
//                             <img src="${image}" alt="${text} Logo" class="img-fluid" style="max-height: 30px; max-width: 200px">
//                         </div>
//                     </a>
//                 </div>
//                 ${htmlContent}
//             </div>
//             ${courseraDisclaimerHTML}`;
//     },
//     generateCertificationHTML: function (image, href, text) {
//         return `
//             <div class="col d-flex justify-content-center align-items-center">
//                 <a href="${href}" target="_blank" class="text-decoration-none">
//                     <div class="d-inline-flex flex-column align-items-center">
//                         <p class="fw-bold mb-1 text-secondary">Certified by <span class="text-success">${text}</span></p>
//                         <div class="d-inline-flex flex-row align-items-center">
//                             <img src="${image}" alt="${text}" class="img-fluid px-2" style="max-height: 40px; max-width: 200px">
//                         </div>
//                     </div>
//                 </a>
//             </div>`;
//     },
//     certifiedby: function (certName, courseraLink, ...additionalParams) {
//         let htmlContent = '';
//         let courseraDisclaimerHTML = certName.toLowerCase() === "coursera" ? allAlerts.courseraDisclaimer() : "";

//         if (certName === 'coursera') {
//             this.coursera.href = courseraLink; // Set the Coursera link dynamically

//             // Handle predefined certification or custom certification
//             if (additionalParams.length) {
//                 const certificationType = additionalParams[0];

//                 if (certificationType === 'custom' && additionalParams.length >= 3) {
//                     // Custom certification details are provided
//                     const [image, href, text] = additionalParams.slice(1); // Skip 'custom' identifier
//                     htmlContent += this.generateCertificationHTML(image, href, text);
//                 } else if (this[certificationType]) {
//                     // Predefined certification is specified
//                     const { image, href, text } = this[certificationType];
//                     htmlContent = this.generateCertificationHTML(image, href, text);
//                 }
//             }
//         } else {
//             console.error('Invalid certification type or missing parameters.');
//             return;
//         }

//         const { image, href, text } = this[certName];
//         document.getElementById('course-href-provider').innerHTML = this.generateCourseRedirectHTML(image, href, text, htmlContent, courseraDisclaimerHTML);
//     },

// };

// function testDF(ttext, tlink, timg, ctext, clink, cimg) {
//     // usage: testDF("coursera", "https://www.coursera.org/learn/incident-response-bc-and-dr-concepts/", "/img/coursera.webp", "ISC²", "https://www.isc2.org/", "/img/isc2_logo.png")
//     if (ttext == "coursera") {
//         tlink = tlink ? tlink : "https://coursera.com";
//         timg = timg ? timg : "/img/coursera.webp";
//     }
//     if (ctext == "isc2") {
//         ctext = ctext ? ctext : "ISC²";
//         clink = clink ? clink : "https://www.isc2.org/";
//         cimg = clink? clink : "/img/isc2_logo.png";
//     }
//     if (ctext == "ibm") {
//         ctext = ctext ? ctext : "IBM";
//         clink = clink ? clink : "https://www.ibm.com/";
//         cimg = clink ? clink : "/img/ibm_logo.png";
//     }
//     if (ctext == "gcloud") {
//         ctext = ctext ? ctext : "GCloud";
//         clink = clink ? clink : "https://www.google.com/cloud";
//         cimg = clink ? clink : "/img/google_cloud.png";
//     }
//     document.getElementById('course-href-provider').innerHTML = `
//     <div class="container-md my-2">
//         <div class="row justify-content-center align-items-center">
//             <div class="col d-flex justify-content-center align-items-center mb-3">
//                 <a href="${tlink}" target="_blank" class="text-decoration-none">
//                     <div class="p-3  d-inline-flex flex-column align-items-center">
//                         <p class="fw-bold text-secondary mt-2 mb-0">Take this course on</p>
//                         <img src="${timg}" alt="${ttext} Logo" class="img-fluid" style="max-height: 30px; max-width: 250px">
//                     </div>
//                 </a>
//             </div>
//             <div class="col d-flex justify-content-center align-items-center">
//                 <a href="${clink}" target="_blank" class="text-decoration-none">
//                     <div class="d-inline-flex flex-column align-items-center">
//                         <p class="fw-bold mb-1 text-secondary">Certification by <span class="text-success">${ctext}</span></p>
//                         <div class="d-inline-flex flex-row align-items-center">
//                             <img src="${cimg}" alt="${ctext} Logo" class="img-fluid px-2" style="max-height: 40px; max-width: 200px">
//                         </div>
//                     </div>
//                 </a>
//             </div>
//         </div>
//     </div>`;
//     allAlerts.courseraDisclaimer()
// }

// function testDF(ttext, tlink, timg, ctext, clink, cimg) {
//     // Define default values for each provider in an object
//     const defaults = {
//         coursera: {
//             ttext: "Coursera",
//             tlink: "https://coursera.com",
//             timg: "/img/coursera.webp"
//         },
//         mitx: {
//             ttext: "MITx",
//             tlink: "https://www.edx.org/school/mitx",
//             timg: "/img/mitx_logo.png"
//         },
//         stanford: {
//             ttext: "Stanford",
//             tlink: "https://online.stanford.edu/courses",
//             timg: "/img/stanford_logo.png"
//         },
//         yale: {
//             ttext: "Yale",
//             tlink: "https://online.yale.edu/courses",
//             timg: "/img/yale_logo.png"
//         },
//         isc2: {
//             ctext: "ISC²",
//             clink: "https://www.isc2.org/",
//             cimg: "/img/isc2_logo.png"
//         },
//         ibm: {
//             ctext: "IBM",
//             clink: "https://www.ibm.com/",
//             cimg: "/img/ibm_logo.png"
//         },
//         gcloud: {
//             ctext: "Google Cloud",
//             clink: "https://www.google.com/cloud",
//             cimg: "/img/google_cloud.png"
//         }
//     };

//     // Set defaults for training provider
//     dfT = defaults[ttext];
//     if (dfT) {
//         ttext = dfT.ttext;
//         tlink = tlink || dfT.tlink;
//         timg = timg || dfT.timg;
//     }

//     // Set defaults for certification provider
//     dfC = defaults[ctext];
//     if (dfC) {
//         ctext = dfC.ctext;
//         clink = clink || dfC.clink;
//         cimg = cimg || dfC.cimg;
//     }

//     // Update HTML content
//     document.getElementById('course-href-provider').innerHTML = `
//         <div class="row justify-content-center align-items-center">
//             <div class="col d-flex justify-content-center align-items-center mb-2">
//                 <a href="${tlink}" target="_blank" class="text-decoration-none">
//                     <div class="p-3 d-inline-flex flex-column align-items-center">
//                         <p class="fw-bold text-secondary mt-2 mb-0">Take this course on</p>
//                         <img src="${timg}" alt="${ttext} Logo" class="img-fluid" style="max-height: 30px; max-width: 250px">
//                     </div>
//                 </a>
//             </div>
//             <div class="col d-flex justify-content-center align-items-center">
//                 <a href="${clink}" target="_blank" class="text-decoration-none">
//                     <div class="d-inline-flex flex-column align-items-center">
//                         <p class="fw-bold mb-1 text-secondary">Certification by <span class="text-success">${ctext}</span></p>
//                         <div class="d-inline-flex flex-row align-items-center">
//                             <img src="${cimg}" alt="${ctext} Logo" class="img-fluid px-2" style="max-height: 40px; max-width: 200px">
//                         </div>
//                     </div>
//                 </a>
//             </div>
//         </div>`;

//     // Call disclaimer or other relevant function if needed
//     allAlerts.courseraDisclaimer(); // Assuming this function is defined elsewhere
// }

const certifications = {
    // Define default values for each provider in an object
    defaults: {
        coursera: {
            text: "Coursera",
            link: "https://coursera.com",
            img: "/img/coursera_logo.webp"
        },
        mitx: {
            text: "MITx",
            link: "https://www.edx.org/school/mitx",
            img: "/img/mitx_logo.png"
        },
        stanford: {
            text: "Stanford",
            link: "https://online.stanford.edu/courses",
            img: "/img/stanford_logo.png"
        },
        yale: {
            text: "Yale",
            link: "https://online.yale.edu/courses",
            img: "/img/yale_logo.png"
        },
        isc2: {
            text: "ISC²",
            link: "https://www.isc2.org/",
            img: "/img/isc2_logo.png"
        },
        ibm: {
            text: "IBM",
            link: "https://www.ibm.com/",
            img: "/img/ibm_logo.png"
        },
        gcloud: {
            text: "Google Cloud",
            link: "https://www.google.com/cloud",
            img: "/img/google_cloud.png"
        },
        iima: {
            text: "IIM Ahmedabad",
            link: "https://www.iima.ac.in/",
            img: "/img/IIMAhmedabad_logo.png"
        }
    },

    // Helper function to apply defaults
    applyDefaults: function (providerType, text, link, img) {
        if (text && this.defaults[text]) {
            const df = this.defaults[text];
            return {
                text: df.text,
                link: link || df.link,
                img: img || df.img
            };
        }
        return { text, link, img };
    },

    generateCertificationHTML: function (ttext = '', tlink = '', timg = '', ctext = '', clink = '', cimg = '') {
        document.write(`<div id="course-href-provider"></div>`);

        // Apply defaults using the helper function
        const trainingDefaults = this.applyDefaults('training', ttext.toLowerCase(), tlink, timg);
        const certificationDefaults = this.applyDefaults('certification', ctext.toLowerCase(), clink, cimg);

        // Update HTML content
        document.getElementById('course-href-provider').innerHTML = `
        <div class="row justify-content-center align-items-center">
            <div class="col d-flex justify-content-center align-items-center mb-2">
                <a href="${trainingDefaults.link}" target="_blank" class="text-decoration-none">
                    <div class="p-3 d-inline-flex flex-column align-items-center">
                        <p class="fw-bold text-secondary mt-2 mb-1">Take this course on</p>
                        <img src="${trainingDefaults.img}" alt="${trainingDefaults.text} Logo" class="img-fluid" style="max-height: 40px; max-width: 200px">
                    </div>
                </a>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                <a href="${certificationDefaults.link}" target="_blank" class="text-decoration-none">
                    <div class="d-inline-flex flex-column align-items-center">
                        <p class="fw-bold mb-1 text-secondary">Certification by <span class="text-success">${certificationDefaults.text}</span></p>
                        <div class="d-inline-flex flex-row align-items-center">
                            <img src="${certificationDefaults.img}" alt="${certificationDefaults.text} Logo" class="img-fluid px-2" style="max-height: 40px; max-width: 200px">
                        </div>
                    </div>
                </a>
            </div>
        </div>`;
        // Call disclaimer or other relevant function if needed
        // Assuming this function is defined elsewhere
        allAlerts.courseraDisclaimer();
    },
};

// Note: You would need to adjust the call to generateCertificationHTML to pass the correct parameters based on your requirements.



/******** Pomodoro mode ********/
// (function () {
//     document.addEventListener('DOMContentLoaded', function () {
//         const readingTime = 6 * 1000; // Adjusted back to 25 minutes
//         const breakTime = 6 * 1000; // 5 minutes
//         const uniqueContainerID = `container-${Math.random().toString(36).substr(2, 9)}`; // Unique ID for the container
//         const uniqueModalID = `breakModal-${Math.random().toString(36).substr(2, 9)}`; // Unique ID for the modal

//         // Define the modal HTML content with a more personalized message
//         const modalHTML = `
// <div class="modal fade" id="${uniqueModalID}" tabindex="-1" aria-labelledby="${uniqueModalID}Label" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="${uniqueModalID}Label">Time for a Well-Deserved Break!</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         Hey there! You've been focused and productive for the last 25 minutes, which is awesome. 🌟 Now, let's take a short 5-minute break. Stand up, stretch, grab a drink, or just close your eyes and relax. Your mind and body will thank you for it!
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" id="${uniqueModalID}-extendBreak">Need a longer break?</button>
//         <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Start My Break</button>
//       </div>
//     </div>
//   </div>
// </div>
// `;

//         // Create a container div, set its HTML, and append it to the body
//         const container = document.createElement('div');
//         container.innerHTML = modalHTML;
//         container.id = uniqueContainerID; // Assign the unique ID to the container
//         document.body.appendChild(container);

//         setTimeout(function notify() {
//             const breakModal = new bootstrap.Modal(document.getElementById(uniqueModalID), {
//                 keyboard: false // Optional: Prevent closing the modal with keyboard to ensure the user consciously decides to take a break
//             });
//             breakModal.show();

//             // Extend break functionality with a more engaging interaction
//             document.getElementById(`${uniqueModalID}-extendBreak`).addEventListener('click', function () {
//                 setTimeout(() => {
//                     alert("Extended break is over. Hope you're feeling refreshed and ready to dive back in!");
//                     breakModal.hide();
//                 }, breakTime); // Extends the break by an additional 5 minutes
//                 breakModal.hide(); // Close the modal immediately when extending the break to prevent multiple clicks
//             });
//         }, readingTime);
//     });
// })();

// (function () {
//     document.addEventListener('DOMContentLoaded', function () {
//         // Constants for reading and break periods
//         const readingTime = 1* 1000; // 25 minutes
//         const breakTime = 6 * 1000; // 5 minutes

//         // Helper functions
//         function generateUniqueId(prefix) {
//             return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
//         }

//         function disableScroll() {
//             document.body.style.overflow = 'hidden';
//         }

//         function enableScroll() {
//             document.body.style.overflow = '';
//         }

//         function formatTime(seconds) {
//             const minutes = Math.floor(seconds / 60);
//             const remainingSeconds = seconds % 60;
//             return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//         }

//         // Overlay for the break period
//         function createOverlay() {
//             const overlayId = generateUniqueId('overlay');
//             const timerId = generateUniqueId('timer');
//             const overlay = document.createElement('div');

//             const breakInfo = `
// <div class="p-4 mb-4 text-light bg-dark rounded-3" style="background-color: var(--background-color) !important;">
//   <h4 class="mb-3">Time for a Break!</h4>
//   <p class="mb-3">You've been working hard, and now it's time to recharge. Remember, taking short breaks can significantly increase productivity and creativity.</p>
//   <ul class="mb-3 list-unstyled">
//     <li><strong>Do:</strong></li>
//     <ul>
//       <li>Stand up and stretch your legs.</li>
//       <li>Take deep breaths to replenish oxygen levels.</li>
//       <li>Hydrate yourself with a glass of water.</li>
//       <li>Rest your eyes by looking at something in the distance.</li>
//     </ul>
//     <li><strong>Don't:</strong></li>
//     <ul>
//       <li>Engage in stressful or demanding activities.</li>
//       <li>Spend the entire break on screens (avoid social media, emails).</li>
//     </ul>
//   </ul>
//   <p class="mb-3">Use this time to gently walk away from your work area if possible, allowing your mind to reset and your body to relax.</p>
// </div>
// <div class="text-center mt-4 pt-2">
//   <h5 class="text-warning">You can continue reading now by refreshing the page or after</h5>
//   <div id="${timerId}" class="text-danger fs-1"></div>
// </div>
// `;

//             overlay.id = overlayId;
//             overlay.style = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: none; justify-content: center; align-items: center; flex-direction: column; color: white; z-index: 1050; backdrop-filter: blur(8px);`;
//             overlay.innerHTML = breakInfo;
//             document.body.appendChild(overlay);
//             return { overlay, timerId };
//         }

//         // Toast notification for the reading period
//         function createToastContainer() {
//             let toastContainer = document.querySelector('.toast-container');
//             if (!toastContainer) {
//                 toastContainer = document.createElement('div');
//                 toastContainer.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3');
//                 document.body.appendChild(toastContainer);
//             }
//             return toastContainer;
//         }

//         function createToast(toastContainer) {
//             const toastId = generateUniqueId('toast');
//             const toastHTML = `
// <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
//   <div class="toast-header">
//     <strong class="me-auto">Break Reminder</strong>
//     <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//   </div>
//   <div class="toast-body">
//     You've been reading for 25 minutes. Time for a short 5-minute break.
//   </div>
// </div>
// `;
//             toastContainer.innerHTML += toastHTML;
//             return toastId;
//         }

//         // Managing the break and reading periods
//         function startBreak({ overlay, timerId }) {
//             disableScroll();
//             overlay.style.display = 'flex';
//             let timeLeft = breakTime / 1000;
//             const timerElement = document.getElementById(timerId);
//             const interval = setInterval(() => {
//                 timerElement.innerText = formatTime(timeLeft);
//                 timeLeft--;
//                 if (timeLeft < 0) {
//                     clearInterval(interval);
//                     overlay.style.display = 'none';
//                     enableScroll();
//                     startReadingPeriod();
//                 }
//             }, 1000);
//         }

//         function startReadingPeriod() {
//             const toastContainer = createToastContainer();
//             const toastId = createToast(toastContainer);
//             setTimeout(() => {
//                 const toastEl = new bootstrap.Toast(document.getElementById(toastId));
//                 toastEl.show();
//                 setTimeout(() => startBreak(createOverlay()), 5000); // Wait for the toast to finish before starting the break
//             }, readingTime);
//         }

//         // Initialization
//         startReadingPeriod();
//     });
// })();

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        // Storage for settings and reusable elements
        const settings = {
            readingTime: 25 * 60 * 1000, // 1 second for demonstration
            breakTime: 5 * 60 * 1000, // 6 seconds for demonstration
            overlayStyle: 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: none; justify-content: center; align-items: center; flex-direction: column; z-index: 1050; backdrop-filter: blur(10px);'
        };

        // Helper functions
        const generateUniqueId = prefix => `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
        const toggleScroll = enable => document.body.style.overflow = enable ? '' : 'hidden';
        const formatTime = seconds => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

        const getBreakInfoContent = (timerId) => {
            const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;

            if (isSmallScreen) {
                return `<div class="container p-4 m-4 rounded-3 shadow-lg" style="background-color: var(--background-color) !important;">
  <h4 class="text-center">Quick Break Time!</h4>
  <p class="p-2">Let's take a moment to stand up, stretch, and take a few deep breaths. A quick pause can significantly boost your focus and productivity!</p>
  <div id="${timerId}" class="fs-1 text-center text-danger">⏳</div>
  <p class="text-muted text-center">Cannot wait? Refresh the page to remove the timer.</p>
</div>`;
            } else {
                return `<div class="container p-4 m-4 rounded-3 shadow-lg" style="background-color: var(--background-color) !important;">
  <h3 class="mb-3 text-center">Time to Refresh & Recharge!</h3>
  <p class="">You've been pushing the limits, and it's nothing short of incredible! Now, let's take a strategic pause to supercharge. Ever wonder why the Pomodoro Technique is so effective? It's because these short breaks enhance cognitive function, allowing for better retention, creativity, and problem-solving skills. You're not just resting; you're setting the stage for even greater achievements.</p>
  <h5 class="">Let us make this technique work for you. Here are the things you should do now:</h5>
  <ul class=" list-unstyled">
    <li>🚶‍♂️ Get up, stretch, and move around. Even a brief walk can reignite your creativity and focus.</li>
    <li>🧘‍♀️ Practice deep breathing. Fill your lungs (and brain!) with oxygen to boost mental clarity.</li>
    <li>💧 Hydrate! A refreshed body supports a sharp mind.</li>
    <li>👀 Give your eyes a break from the screen. Look out the window or at a distant object to reduce eye strain.</li>
  </ul>
  <p class="mt-2">Try to steer clear of additional screen time or any task that could lead to stress. This moment is for you to unwind and recharge both mentally and physically. <strong>Do not use your phone. Do not open any social media application.</strong></p>
  <p class=""><strong>Here's the best part:</strong> After just five minutes, you'll return with a refreshed perspective and renewed vigor, ready to tackle your tasks with newfound energy and insight. Imagine what you'll accomplish next! Let's embrace this break as a powerful tool in our productivity arsenal.</p>
  <p class="">We believe in you! This brief interlude is your secret weapon for sustained success. See you in 5 minutes, ready and raring to go!</p>
    <div class="text-center pt-2">
        <h5 class="text-success">Eager to jump back in? Just a few moments to go!</h5>
            <div id="${timerId}" class="text-danger fs-1">⏳</div>
        <p class="text-muted text-center">Cannot wait? Refresh the page to remove the timer, but remember, the magic happens when we balance discipline with rest.</p>
    </div>
  </div>`;
            }
        };

        // Overlay for the break period
        const createOverlay = () => {
            const overlayId = generateUniqueId('overlay');
            const timerId = generateUniqueId('timer');
            const overlay = document.createElement('div');
            overlay.id = overlayId;
            overlay.style = settings.overlayStyle;
            const breakInfo = getBreakInfoContent(timerId); // Dynamically set content based on screen size
            overlay.innerHTML = breakInfo;
            document.body.appendChild(overlay);
            return { overlay, timerId };
        };

        // Toast notification for the reading period
        const createToast = () => {
            let toastContainer = document.querySelector('.toast-container');
            if (!toastContainer) {
                toastContainer = document.createElement('div');
                toastContainer.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3');
                document.body.appendChild(toastContainer);
            }

            const toastId = generateUniqueId('toast');
            // Note: settings.toastContent removed, as it's not dynamically setting `toastId`
            const toastContent = `
<div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="10000" style="background-color: var(--background-color) !important;">
  <div class="toast-header bg-danger bg-opacity-50" style="color: var(--text-color)">
    <strong class="me-auto">Break Reminder</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body bg-danger bg-opacity-10">
    You've been reading for a while. Time for a short break.
  </div>
</div>`;

            toastContainer.innerHTML += toastContent;
            return toastId;
        };

        // Managing the break and reading periods
        const startBreak = ({ overlay, timerId }) => {
            toggleScroll(false);
            overlay.style.display = 'flex';
            let timeLeft = settings.breakTime / 1000;
            const timerElement = document.getElementById(timerId);
            const interval = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(interval);
                    overlay.style.display = 'none';
                    toggleScroll(true);
                    startReadingPeriod();
                } else {
                    timerElement.innerText = formatTime(timeLeft);
                    timeLeft--;
                }
            }, 1000);
        };

        const startReadingPeriod = () => {
            const toastId = createToast();
            setTimeout(() => {
                const toastEl = new bootstrap.Toast(document.getElementById(toastId));
                toastEl.show();
                setTimeout(() => {
                    const { overlay, timerId } = createOverlay();
                    startBreak({ overlay, timerId });
                }, 10000); // Wait for the toast to finish before starting the break
            }, settings.readingTime);
        };

        // Initialization
        startReadingPeriod();
    });
})();

/******** Dynamically make the Table dark if dark mode is selected ********/
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        // This function toggles the 'table-dark' class on all tables based on the dark mode status
        function updateTableDarkMode(e) {
            document.querySelectorAll('table').forEach(tbl => tbl.classList.toggle('table-dark', e.matches));
        }

        // Set up the event listener for when the color scheme changes
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', updateTableDarkMode);

        // Call the function initially to set the correct theme when the page loads
        updateTableDarkMode(darkModeMediaQuery);
    })
})();


/******** Dynamically inject the Table of Contents if it does not have it ********/
(function () {
    document.addEventListener('DOMContentLoaded', function () {

        // Select all article elements with class 'borderart' or auto_id
        const articlesWithBorderArt = document.querySelectorAll('article.auto_id, article.borderart');

        // Loop through each article and assign a random ID
        articlesWithBorderArt.forEach(function (article) {
            var randomId = 'article-' + Math.floor(Math.random() * 1000000);
            article.setAttribute('id', randomId);
        });

        const main = document.querySelector('main');
        const firstArticle = main.querySelector('article');
        const existingToc = main.querySelector('.accordion#toc');
        const autogen_tableofcontents = main.querySelector('.agen-tableofcontents');

        if (autogen_tableofcontents && !existingToc) {
            // Check if a ToC does not already exist            
            const tocHTML = `
            <div class="container mt-4 w-100 w-xl-75 d-print-none">
                <div class="accordion" id="toc">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="h1">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-controls="c1" aria-expanded="false">
                                <i class="fas fa-book"></i> <strong>&nbsp;Table of Contents</strong>
                            </button>
                        </h2>
                        <div id="c1" class="accordion-collapse collapse" aria-labelledby="h1" data-bs-parent="#toc">
                            <div class="accordion-body">
                                <ol class="list-unstyled p-0 m-0"></ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            // Append the ToC HTML to the first article
            // firstArticle.innerHTML += tocHTML;
            autogen_tableofcontents.innerHTML += tocHTML;

            window.autogen_tableofcontents = 1;
        }

        if (window.autogen_tableofcontents) {
            // Proceed to populate the ToC with entries as necessary
            const articles = document.querySelectorAll('article[id]');
            const tocList = document.querySelector('.accordion-body ol');

            articles.forEach(article => {
                const id = article.id;
                const heading = article.querySelector('h3, h4');
                if (heading) {
                    const li = document.createElement('li');
                    li.className = 'p-1';
                    const anchor = document.createElement('a');
                    anchor.href = `#${id}`;
                    anchor.innerHTML = `<i class="fas fa-chevron-circle-right"></i> ${heading.textContent.trim()}`;
                    li.appendChild(anchor);
                    tocList.appendChild(li);
                }
            });
        }
    });
})();




/******** Fetch updated content from the server automatically ********/
(function () {
    let serverhardrefresh = localStorage.getItem('dailyhardrefresh');
    let shr_today = new Date().toDateString();

    // if the user is visiting for the first time today and is not on homepage, run the server refresh
    if ((!serverhardrefresh || serverhardrefresh !== shr_today) && location.href != "https://dmj.one/") {
        localStorage.setItem('dailyhardrefresh', shr_today);
        encryptionManager.serverRefresh("update"); // force a server refresh. 
    }

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
    if (location.hostname === "dmj.one") {
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

        /* Yandex Metrica Code */
        (function (m, e, t, r, i, k, a) { m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) }; m[i].l = 1 * new Date(); for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } } k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a) })(window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym"); ym(93740393, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true, trackHash: true, ecommerce: "dataLayer" });
        /* Yandex Metrica Code End */

        /* Linkedin Insight Tag */
        (function () { var _linkedin_partner_id = "5613801"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); })(); (function () { (function (l) { if (!l) { window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) }; window.lintrk.q = []; } var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript"; b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s); })(window.lintrk); })();
        /* Linkedin Insight Tag End */
    }
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
    if (location.hostname === "dmj.one" && !window.dontdisable) {
        const clearinteral_sakjds = window.setInterval(function () {
            if (localStorage.getItem("noshow") === "1" && window.scriptsremoved != 1) {
                (function () {
                    // FAILSAFE REMOVAL OF ALL SCRIPTS from the f12 developer console view.
                    window.scriptsremoved = 1;
                    /* window.addEventListener("load", function () {
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
                    }); */

                    var preservedScripts = [cdnjs_bootstrap, cdnjs_jquery, 'src3']; // replace with actual src values

                    window.addEventListener("load", function () {
                        setTimeout(function () {
                            // Method 1
                            var scripts = Array.from(document.getElementsByTagName("script"));
                            var loaded = 0;
                            for (var i = 0; i < scripts.length; i++) {
                                if (preservedScripts.includes(scripts[i].src)) continue;
                                scripts[i].onload = function () {
                                    loaded++;
                                    if (loaded === scripts.length) {
                                        for (var j = 0; j < scripts.length; j++) {
                                            if (!preservedScripts.includes(scripts[j].src)) {
                                                scripts[j].remove();
                                            }
                                        }
                                    }
                                };
                            }
                            // Method 2
                            $(document).ready(function () {
                                $("script").each(function () {
                                    if (!preservedScripts.includes(this.src)) {
                                        $(this).remove();
                                    }
                                });
                            });
                            // Method 3 
                            var head = document.head;
                            for (var i = 0; i < head.children.length; i++) {
                                if (head.children[i].tagName.toLowerCase() === "script" && !preservedScripts.includes(head.children[i].src)) {
                                    head.removeChild(head.children[i]);
                                }
                            }
                        }, 10);
                    });


                    // Disable F12 and CTRL + U silently!
                    function showContactMessage() {
                        var encodedUrl = encodeURIComponent(window.location.href);
                        var modal =
                            `<div class="modal fade" id="nosourcecode" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style="background: var(--background-color)">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="contactModalLabel">Thank you for your interest and contributions!</h5>
                    </div>
                    <div class="modal-body">
                        <p>Join our mission to create a better resource for all by becoming a valued contributor. Your ideas and insights are highly valued and appreciated. Share your knowledge, ideas, and passion with the world by <a href='mailto:contact@dmj.one?subject=Contribution for [ ${document.title} ]&body=Hello dmj.one,%0D%0A%0D%0AI want to contribute to the course/page [ ${encodedUrl} ] (change as required) with the following details:%0D%0A%0D%0A Your Name: %0D%0A Your Email: %0D%0A Content: %0D%0A%0D%0A Any other relevant details: %0D%0A%0D%0A%0D%0A%0D%0AThank you.%0A%0D%0A%0D'>emailing us</a> directly or <a href="" id="common-message-us-button-caller" data-bs-toggle="modal" data-bs-target="#common_msg_us_model">messaging us</a>. Don't forget to include your name, email address, and any other relevant details.</p>
                        <p>If you spot an error or have a suggestion for improvement, please don't hesitate to reach us <a href='mailto:contact@dmj.one?subject=Suggestions for [ ${document.title} ]&body=I spotted discrepancies on the page ${encodedUrl} (change as required) and want to suggest these changes:%0D%0A%0D%0A1. %0D%0A2. %0D%0A%0D%0AYour Name: %0D%0AYour Email: %0D%0AAny other relevant details: %0D%0A%0D%0AThank you.'>on email</a> directly or <a href="" id="common-message-us-button-caller" data-bs-toggle="modal" data-bs-target="#common_msg_us_model">message us</a>.</p>
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

                        var modalEl = document.querySelector('#nosourcecode');
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
    } else { // window.location.hostname is not === dmj.one
        (function () {
            document.addEventListener("DOMContentLoaded", function () {
                document.body.classList.add('allow-select');
            });
        })();
    }

})();
/******* SECURITY SUITE END *******/




/************* AUTOMATION CONTROL PANEL ******************/
// window.addEventListener("load", function () {
//     var currentUrl = document.location.pathname;
//     // Header Automation
//     if (!window["loaded_header_author"] == 1 || window["page"] === 404) {
//         var vp_headerurls = ["/edu/su/course/csu1128/program/p31", "/edu/su/course/csu1128/program/p32"];
//         var harshal_headerurls = ["/edu/su/course/csu1128p/labfile/p7_m2"];

//         if (vp_headerurls.includes(currentUrl)) {
//             header_author("vp");
//         } else if (harshal_headerurls.includes(currentUrl)) {
//             header_author("harshal");
//         } else if (window["page"] == 404) {
//             document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
//         } else {
//             // header_author();
//             document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
//         }
//     }

//     // Body Automation - TO DO
//     var agenmenu = document.querySelector("#agenmenu");
//     if (agenmenu) {
//         if (!window["loaded_body_genmenu"] == 1) {
//             body_genmenu();
//         }
//     }



//     // Footer Automation
//     if (!window["loaded_copyright"] == 1) {
//         var footerurls = ["/se.html", "/fr.html", "/de.html"];
//         if (footerurls.includes(currentUrl)) {
//             copyright("some");
//         } else {
//             copyright("all");
//         }
//     }
// });

// window.addEventListener("load", function () {
//     var currentUrl = document.location.pathname;
//     var currentUrlWithoutHtml = currentUrl.endsWith('.html') ? currentUrl.slice(0, -5) : currentUrl;

//     // CryptoJS Decryption Automation
//     if (!window.has_password_protection) {
//         var cryptojsUrls = ["/edu/su/course/seaws002/theory/format.html", "/~dmj/invoices/hp-del"];  // add the URLs of the pages where you want to use the function
//         if (cryptojsUrls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
//             cryptoJS_decryption(); // call the cryptoJS_decryption function on these pages
//         }
//     }
//     // Header Automation
//     if (!window["loaded_header_author"] == 1 || window["page"] === 404) {
//         var vp_headerurls = ["/edu/su/course/csu1128/program/p31", "/edu/su/course/csu1128/program/p32"];
//         var harshal_headerurls = ["/edu/su/course/csu1128p/labfile/p7_m2"];
//         if (vp_headerurls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
//             header_author("vp");
//         } else if (harshal_headerurls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
//             header_author("harshal");
//         } else if (window["page"] == 404) {
//             document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
//         } else {
//             // header_author();
//             document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
//         }
//     }

//     // Body Automation
//     var agenmenu = document.querySelector("#agenmenu");
//     if (agenmenu) {
//         if (!window["loaded_body_genmenu"] == 1) {
//             body_genmenu();
//         }
//     }



//     // Footer Automation
//     if (!window.loaded_copyright) {
//         var footerurls = ["/se", "/fr", "/de"];
//         if (footerurls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
//             copyright("some");
//         } else {
//             copyright("all");
//         }
//     }
// });

window.addEventListener("load", async function () {

    // // Fetch the data from the JSON file
    const response = await fetch('/js/automation-control-panel-exceptions.json');
    const data = await response.json();

    var currentUrl = document.location.pathname;
    var currentUrlWithoutHtml = currentUrl.endsWith('.html') ? currentUrl.slice(0, -5) : currentUrl;
    // CryptoJS Decryption Automation - Version 2.0 - no url required
    window.runencryption ? encryptionManager.cryptoJSEncryption() : '';
    window.cryptojs_enc_data ? encryptionManager.cryptoJSDecryption() : '';

    // if (!window.has_password_protection) {  // Version 1.0
    //     if (data.cryptojsUrls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
    // if (window.runencryption) { encryptionManager.cryptoJSEncryption(); }
    // if (window.cryptojs_enc_data) { encryptionManager.cryptoJSDecryption(); }
    //     }
    // } else this.document.body.innerHTML += "<h2 class='text-center m-5 p-10 fw-bold text-danger text-uppercase'>You are Early!</h2><h3 class='p-5 m-5 text-center'>Page is under construction, Try again later.</h3>";

    // Header Automation
    if (!window["loaded_header_author"] == 1 || window["page"] === 404) {
        if (data.vp_headerurls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
            header_author("vp");
        } else if (data.harshal_headerurls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
            header_author("harshal");
        } else if (window["page"] == 404) {
            document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
        } else {
            // header_author();
            document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
        }
    }

    // Body Automation
    var agenmenu = document.querySelector("#agenmenu");
    if (agenmenu) {
        if (!window["loaded_body_genmenu"] == 1) {
            body_genmenu();
        }
    }

    // Footer Automation    
    if (!window.loaded_copyright) {
        if (data.footerurls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
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
