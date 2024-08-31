/* A Messy Playground! - This file contains all the js combined for experiments. NOT FOR PRODUCTION USE.
 * To Minify Visit https://codebeautify.org/minify-js?url=https://dmj.one/js/dev.js
*/

/*************** Fixed Functions and Variables START **************/
const body_blockcards_continuereading_options = ['Expand Your Knowledge', 'Keep Learning', 'Feed Your Curiosity', 'Keep Your Mind Active', 'Learn More With Us', 'Stay Curious', 'Keep Discovering', 'Feed Your Brain', "Don't Stop Learning", 'Keep Exploring', 'Keep Absorbing', 'Continue Your Learning Journey', 'Unlock More Learning', 'Keep Developing Your Understanding', 'Expand Your Perspective', 'Keep Your Mind Engaged', 'The Learning Continues', 'Stay Inquisitive', 'Keep Your Brain Engaged', 'Keep Your Intellectual Fire Burning', 'Keep Challenging Yourself', 'Stay On The Learning Path', 'The Adventure Continues', 'Keep Your Mind Open', 'Stay Focused On Learning', 'Keep Your Learning Moving', 'Keep Expanding Your Mind', 'Keep Progressing In Your Learning', 'The Learning Never Stops', 'Keep Your Intellect Fueled', 'Keep Your Brain Buzzing', 'Keep Your Learning Journey Thriving', 'Keep Your Curiosity Alive', 'Keep Your Mind Alert', 'Keep Building Your Knowledge', 'Stay Invested In Your Learning', 'Keep Building Your Expertise', 'The Learning Journey Continues', 'Keep Your Understanding Evolving', 'Keep Your Learning Momentum Going', 'Keep Pushing Your Limits', 'Stay On The Path To Learning', 'Keep Unleashing Your Potential', 'Unlock More Insights', 'Dive Deeper Into Knowledge', 'Embrace the Learning Adventure', 'Ignite Your Intellectual Spark', 'Pursue Your Quest for Knowledge', 'Embark on Your Learning Voyage', 'Unearth More Wisdom', 'Uncover More Learning Treasures', 'Boost Your Brainpower', 'Elevate Your Understanding', 'Experience the Joy of Learning', 'Extend Your Intellectual Horizons', 'Accelerate Your Learning Journey', 'Illuminate Your Mind', 'Foster Your Learning Growth', 'Cultivate Your Knowledge Garden', 'Propel Your Learning Forward', 'Stoke Your Curiosity', 'Nurture Your Thirst for Knowledge', 'Enrich Your Learning Experience', 'Amplify Your Knowledge', 'Advance Your Learning Expedition', 'Expand Your Learning Universe', 'Sharpen Your Intellect', 'Reveal More Knowledge Mysteries', 'Bolster Your Learning Power', 'Invigorate Your Mind', 'Fuel Your Learning Journey', 'Boost Your Educational Enthusiasm', 'Extend Your Learning Odyssey', 'Broaden Your Knowledge Base', 'Deepen Your Understanding', 'Unfold More Learning Secrets', 'Unravel More Learning Mysteries', 'Explore Further into Knowledge', 'Progress Along Your Learning Path', 'Supercharge Your Learning', 'Venture Deeper into Knowledge', 'Advance Your Knowledge Quest', 'Quench Your Knowledge Thirst', 'Continue Your Intellectual Journey', 'Further Your Learning Adventure', 'Magnify Your Learning Experience', 'Dive Into the Knowledge Ocean', 'Illuminate Your Learning Path', 'Pioneer Your Learning Journey', 'Elevate Your Learning Endeavor', 'Enhance Your Learning Expedition', 'Galvanize Your Learning Pursuit', 'Deepen Your Knowledge Dive'];

const cdnjs_jquery = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
const cdnjs_bootstrap = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js";
const cdnjs_highlightjs = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
const cdnjs_highlightjs_asm = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/armasm.min.js";
const cdnjs_katex = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js";
const cdnjs_katex_autorender = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js";
const cdnjs_font_awesome = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js";
const cdnjs_cryptoJS = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js";
const google_login_js = "https://accounts.google.com/gsi/client";
const cdnjs_DOMPurify = "https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.5/purify.min.js";
const GLOBAL_login_page_path = window.location.hostname === 'localhost' ? '/login.html' : '/login';

const GLOBAL_SERVICEWORKER_REINSTALL = 0;
const GLOBAL_SERVICEWORKER_INSTALL = 1;
const GLOBAL_SERVICEWORKER_UNINSTALL = 0;

const indevmode = false;

const randomidgenerator = (i = 10) => [...Array(i)].map(() => 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRTUVWXYZ23456789'[Math.floor(Math.random() * 55)]).join('');

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('article').forEach(article => {
            if (!article.id && !article.classList.contains('nogenid')) {
                article.id = randomidgenerator(20);
            }
        });
    });
})();


const notification_maintainence_mode = 0;
const GLOBAL_maintainence_message = "Some links, images, and features may not work as expected. Thank you for your patience.";

const notification_feature_update = 0;
// const GLOBAL_FeatureUpdate_message = `Learn about different breathing techniques to enhance your focus and relaxation. <a href="/my/features/breathing-techniques" class="alert-link">Read more</a>.`;
const GLOBAL_FeatureUpdate_message = `Follow the Billionaire's Checklist everyday and become one! <a href="/my/features/billionaires-checklist" class="alert-link">Start today</a>.`;

const notification_new_article = 0;
const GLOBAL_NewArticle_message = `A new article has been published. <a href="/my/articles/2022/01/01/sample-article" class="alert-link">Read more</a>.`;

const notification_article_update = 0;
const GLOBAL_ArticleUpdate_message = `An article has been updated. <a href="/my/articles/2022/01/01/sample-article" class="alert-link">Read more</a>.`;

const notification_new_course = 1;
const GLOBAL_NewCourse_message = `A new course CN has been added. <a href="/edu/su/course/csu359/" class="alert-link">Explore now</a>.`;

const GLOBAL_crawler_mode = 0;

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
            GLOBAL_crawler_mode ? '' : console.log(`${variable} = ${window[variable]}`);
        }
    }
})();

////////// Set dark mode to light mode for bootstrap.
(() => {
    if (GLOBAL_crawler_mode) {
        return;
    }

    const setTheme = () => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', theme);
    };

    if (window.location.pathname !== GLOBAL_login_page_path) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);

        // Initial theme setting
        setTheme();
    }
})();
/*************** Fixed Functions and Variables END **************/

/*************** Disallow robots on dev.dmj.one, localhost, test.dmj.one ******************/
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        if (["dev.dmj.one", "test.dmj.one", "localhost"].includes(window.location.hostname)) {
            const metaTag = document.createElement('meta');
            metaTag.name = "robots";
            metaTag.content = "noindex, nofollow";
            document.head.appendChild(metaTag);
        }
    });
})();


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
    window.GetCourseSpecificBaseFile = getJsUrl;
    try {
        document.write(`<script src='${getJsUrl("var.js")}'></script>`);
    } catch (e) { console.log("Could not load js".e) }

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

    // (function () {
    //     if (!window.dnfetchenc) {
    //         try {            
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
    //         } catch (e) {'Could Not load encrytion.'}
    //     }
    // })();

    // (function () {
    //     if (!window.dnfetchenc) {
    //         try {
    //             fetch(getJsUrl("encvar.json"))
    //                 .then(response => {
    //                     if (!response.ok) {
    //                         if (response.status === 404) {
    //                             throw new Error('404');
    //                         } else {
    //                             throw response;
    //                         }
    //                     }
    //                     // if responce is empty json throw it
    //                     if (response.headers.get('content-length') === '0') {
    //                         return;
    //                     }
    //                     return response.json();
    //                 })
    //                 .then(data => {
    //                     // your code here
    //                     if (!data) {
    //                         return;
    //                     }
    //                     let cryptojs_enc_map = data;
    //                     let urlParts = window.location.pathname.split('/').filter(Boolean);
    //                     let current_map = cryptojs_enc_map;
    //                     for (let part of urlParts) {
    //                         current_map = current_map[part.replace('.html', '')];
    //                         if (typeof current_map === "string") {
    //                             let cryptojs_enc_data = window["cryptojs_enc_data"] = current_map;
    //                             // console.log('cryptojs_enc_data:', current_map);
    //                             return;
    //                         }
    //                     }
    //                 })
    //                 .catch((error) => {
    //                     if (error.message === '404') {
    //                         console.log('Resource not found. Exiting function.');
    //                         return; // Exit early
    //                     } else {
    //                         console.error('Error:', error);
    //                     }
    //                 });
    //         } catch (e) {
    //             console.error('Could not load encryption.');
    //         }
    //     }
    // })();

    // Version 3.0
    (function () {
        try {
            // Fetch the automation-control-panel-exceptions.json
            fetch('/js/automation-control-panel-exceptions.json')
                .then(response => {
                    if (!response.ok) {
                        if (response.status === 404) {
                            throw new Error('404');
                        } else {
                            throw response;
                        }
                    }
                    return response.json();
                })
                .then(data => {
                    if (!data) {
                        return;
                    }
                    const cryptojsUrls = data.cryptojsUrls;
                    const currentUrl = window.location.pathname.replace(/\.html$/, '');

                    // Check if the current URL (with or without .html) is in the list of cryptojsUrls
                    if (cryptojsUrls.includes(currentUrl) || cryptojsUrls.includes(currentUrl + '.html')) {
                        // Fetch the encvar.json only if the URL is in the list
                        fetch(getJsUrl("encvar.json"))
                            .then(response => {
                                if (!response.ok) {
                                    if (response.status === 404) {
                                        throw new Error('404');
                                    } else {
                                        throw response;
                                    }
                                }
                                // if response is empty json throw it
                                if (response.headers.get('content-length') === '0') {
                                    return;
                                }
                                return response.json();
                            })
                            .then(data => {
                                // your code here
                                if (!data) {
                                    return;
                                }
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
                                if (error.message === '404') {
                                    console.log('Resource not found. Exiting function.');
                                    return; // Exit early
                                } else {
                                    console.error('Error:', error);
                                }
                            });
                    }
                })
                .catch((error) => {
                    if (error.message === '404') {
                        console.log('Resource not found. Exiting function.');
                        return; // Exit early
                    } else {
                        console.error('Error:', error);
                    }
                });
        } catch (e) {
            console.error('Could not load encryption.');
        }

    })();



    var common_variables = "/js/comvar.js";
    document.write(`<script src='${common_variables}'></script>`);

    // from "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
    var qrcode_js = "/js/qrcode.js";
    document.write(`<script src='${qrcode_js}'></script>`);

    let allScripts;
    if (GLOBAL_crawler_mode) {
        allScripts = [cdnjs_jquery, cdnjs_bootstrap, cdnjs_DOMPurify];
    } else {
        allScripts = [google_login_js, cdnjs_jquery, cdnjs_bootstrap, cdnjs_DOMPurify, cdnjs_highlightjs, cdnjs_font_awesome, cdnjs_cryptoJS, cdnjs_highlightjs_asm];
    }

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
        if (!GLOBAL_crawler_mode) return loadScript(cdnjs_katex_autorender);
    }).then(function () {
        return Promise.all(allScripts.map(loadScript));
    }).then(function () {
        if (GLOBAL_crawler_mode) {
            return;
        }
        hljs.highlightAll(); // Highlight Js Automatic rendering init 
        renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false,
            ignoredClasses: ['no-katex'] // Ignore the class no-math-render
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

/* let header_navbar = function (flags) {
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

    const getBreathingOption = () => {
        const storedPreference = JSON.parse(localStorage.getItem("breathingAnimation"));
        return storedPreference && storedPreference.isEnabled ? storedPreference.selectedAnimation : "";
    };
    const breathingoption = (!document.getElementById('global_breathinganimationblock')) ? getBreathingOption() : '';

    const finallinks = `    
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark">
        <div class="container-fluid">
            ${headerNavHTML}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto">
                    ${allLinksHTML}
                    <div id="userMenu">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="${GLOBAL_login_page_path}?redirect=${encodeURIComponent(window.location.pathname)}">
                                Login
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    ${breathingoption ? `<div class="breathing-animation sticky-top cursor-pointer m-1 p-0 mx-auto ${breathingoption}" id="global_breathinganimationblock" onclick="location.href='/my/features/breathing-techniques'"></div>` : ''}
`;

    return finallinks;
}; */

/* let header_navbar = async function (flags) {
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

    const dropdown = (year, links) => {
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

    const fetchCourseData = async () => {
        const response = await fetch('/js/courselist.json');
        const courses = await response.json();
        return courses;
    }

    const groupCoursesBySemester = (courses) => {
        const semesters = {};

        courses.forEach(course => {
            const semester = course.details.semester;
            if (!semesters[semester]) {
                semesters[semester] = [];
            }
            semesters[semester].push(course.id);
        });

        return semesters;
    }

    const generateNavLinks = async () => {
        const courses = await fetchCourseData();
        const semesters = groupCoursesBySemester(courses);

        let allLinksHTML = '';

        Object.keys(semesters).forEach((semester, index) => {
            const yearLabel = `${index + 1}<sup>${index === 0 ? 'st' : (index === 1 ? 'nd' : 'rd')}</sup> Year`;
            const links = [yearLabel, ...semesters[semester]];
            allLinksHTML += dropdown(links[0], links.slice(1));
        });

        const visible_links = ["wip"];
        allLinksHTML += mainNav(visible_links);

        return allLinksHTML;
    }

    const allLinksHTML = await generateNavLinks();

    const getBreathingOption = () => {
        const storedPreference = JSON.parse(localStorage.getItem("breathingAnimation"));
        return storedPreference && storedPreference.isEnabled ? storedPreference.selectedAnimation : "";
    };
    const breathingoption = (!document.getElementById('global_breathinganimationblock')) ? getBreathingOption() : '';

    const finallinks = `    
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark">
        <div class="container-fluid">
            ${headerNavHTML}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto">
                    ${allLinksHTML}
                    <div id="userMenu">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="${GLOBAL_login_page_path}?redirect=${encodeURIComponent(window.location.pathname)}">
                                Login
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    ${breathingoption ? `<div class="breathing-animation sticky-top cursor-pointer m-1 p-0 mx-auto ${breathingoption}" id="global_breathinganimationblock" onclick="location.href='/my/features/breathing-techniques'"></div>` : ''}
    `;
    return finallinks;
}; */

/* let header_navbar = async function (flags) {
    if (flags) return 0;

    const url = new URL(window.location.href);
    const pathname = url.pathname.split('/');
    const base = '/edu/su/';
    const coursesBase = `${base}course/`;
    const nav_folder = pathname[4] ? `${coursesBase}${pathname[4]}` : '';
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
        `<i class="bi bi-${icon}"></i></a></li>`
    ).join('');

    const headerNavHTML = `<nav aria-label="breadcrumb" class="navbar-brand">` +
        `<ol class="breadcrumb" style="margin:auto">${breadcrumbHTML}</ol></nav>`;
   
    const navItem = (link, specialLinks) => {
        const linkPath = `${coursesBase}${link.id}/`;
        const linkActive = window.location.pathname.startsWith(linkPath) ? 'active" aria-current="page' : '';

        if (specialLinks.hasOwnProperty(link.id.toLowerCase())) {
            const specialHref = specialLinks[link.id.toLowerCase()];
            if (specialHref === 'WIP') {
                return `<li><a class="dropdown-item disabled" href="#" title="Work In Progress">${link.title} [WIP]</a></li>`;
            } else {
                return `<li class="nav-item"><a class="nav-link ${linkActive}" href="${specialHref}" title="Go to ${link.title}">${link.title}</a></li>`;
            }
        } else {
            return `<a class="dropdown-item ${linkActive}" href="${linkPath}">${link.title}</a>`;
        }
    };


    const dropdown = (year, links) => {
        links.sort((a, b) => a.title.localeCompare(b.title));
        const dropdownItems = links.map(link =>
            `<li>${navItem(link, { 'wip': 'WIP', 'csu5543': 'WIP' })}</li>`
        ).join('');

        return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a>` +
            `<ul class="dropdown-menu mt-3">${dropdownItems}</ul></li>`;
    }

    const mainNav = links => {
        links.sort((a, b) => a.title.localeCompare(b.title));
        const navItems = links.map(link => `<li class="nav-item">${navItem(link, { 'wip': 'WIP', 'news': '/updates/', 'contact': 'mailto:contact@dmj.one' })}</li>`).join('');
        return navItems;
    }

    const fetchCourseData = async () => {
        const response = await fetch('/js/courselist.json');
        const courses = await response.json();
        return courses;
    }

    const groupCoursesBySemester = (courses) => {
        const semesters = {};

        courses.forEach(course => {
            const semester = course.details.semester;
            if (!semesters[semester]) {
                semesters[semester] = [];
            }
            semesters[semester].push({ id: course.id, title: course.title });
        });

        return semesters;
    }

    const generateNavLinks = async () => {
        const courses = await fetchCourseData();
        const semesters = groupCoursesBySemester(courses);

        let allLinksHTML = '';

        Object.keys(semesters).forEach((semester, index) => {
            // const yearLabel = `Semester ${index + 1}<sup>${index === 0 ? 'st' : (index === 1 ? 'nd' : 'rd')}</sup>`;
            const yearLabel = `Semester ${index + 1}`;
            const links = [yearLabel, ...semesters[semester]];
            allLinksHTML += dropdown(links[0], links.slice(1));
        });

        const visible_links = [{ id: "wip", title: "WIP" }];
        allLinksHTML += mainNav(visible_links);

        return allLinksHTML;
    }

    const allLinksHTML = await generateNavLinks();

    const getBreathingOption = () => {
        const storedPreference = JSON.parse(localStorage.getItem("breathingAnimation"));
        return storedPreference && storedPreference.isEnabled ? storedPreference.selectedAnimation : "";
    };
    const breathingoption = (!document.getElementById('global_breathinganimationblock')) ? getBreathingOption() : '';

    const finallinks = `    
    <nav class="navbar navbar-expand-md sticky-top mw-100 px-3 py-3 shadow-lg bg-blur-2">
        <div class="container-fluid">
            ${headerNavHTML}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto">
                    ${allLinksHTML}
                    <div id="userMenu">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="${GLOBAL_login_page_path}?redirect=${encodeURIComponent(window.location.pathname)}">
                                Login
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    ${breathingoption ? `<div class="breathing-animation sticky-top cursor-pointer m-1 p-0 mx-auto ${breathingoption}" id="global_breathinganimationblock" onclick="location.href='/my/features/breathing-techniques'"></div>` : ''}
    `;
    return finallinks;
}; */

/* let header_navbar = async function (flags) {
    if (flags) return 0;

    const url = new URL(window.location.href);
    const pathname = url.pathname.split('/');
    const base = '/edu/su/';
    const coursesBase = `${base}course/`;
    const nav_folder = pathname[4] ? `${coursesBase}${pathname[4]}` : '';
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
        `<i class="bi bi-${icon}"></i></a></li>`
    ).join('');

    const headerNavHTML = `<nav aria-label="breadcrumb" class="navbar-brand">` +
        `<ol class="breadcrumb" style="margin:auto">${breadcrumbHTML}</ol></nav>`;

    const navItem = (link, specialLinks) => {
        const linkPath = `${coursesBase}${link.id}/`;
        const linkActive = window.location.pathname.startsWith(linkPath) ? 'active" aria-current="page' : '';

        if (specialLinks.hasOwnProperty(link.id.toLowerCase())) {
            const specialHref = specialLinks[link.id.toLowerCase()];
            if (specialHref === 'WIP') {
                return `<li><a class="dropdown-item disabled" href="#" title="Work In Progress">${link.title} [WIP]</a></li>`;
            } else {
                return `<li class="nav-item"><a class="nav-link ${linkActive}" href="${specialHref}" title="Go to ${link.title}">${link.title}</a></li>`;
            }
        } else {
            return `<a class="dropdown-item ${linkActive}" href="${linkPath}">${link.title}</a>`;
        }
    };

    const dropdown = (year, links) => {
        links.sort((a, b) => a.title.localeCompare(b.title));
        const dropdownItems = links.map(link =>
            `<li>${navItem(link, { 'wip': 'WIP', 'csu5543': 'WIP' })}</li>`
        ).join('');

        return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a>` +
            `<ul class="dropdown-menu mt-3">${dropdownItems}</ul></li>`;
    }

    const mainNav = links => {
        links.sort((a, b) => a.title.localeCompare(b.title));
        const navItems = links.map(link => `<li class="nav-item">${navItem(link, { 'wip': 'WIP', 'news': '/updates/', 'contact': 'mailto:contact@dmj.one' })}</li>`).join('');
        return navItems;
    }

    const fetchCourseData = async () => {
        const response = await fetch('/js/courselist.json');
        const courses = await response.json();
        return courses;
    }

    const groupCoursesBySemester = (courses) => {
        const semesters = {};

        courses.forEach(course => {
            const semester = course.details.semester;
            if (!semesters[semester]) {
                semesters[semester] = [];
            }
            semesters[semester].push({ id: course.id, title: course.title });
        });

        return semesters;
    }

    const generateNavLinks = async () => {
        const courses = await fetchCourseData();
        const semesters = groupCoursesBySemester(courses);

        let allLinksHTML = '';

        Object.keys(semesters).forEach((semester) => {
            const yearLabel = semester;
            const links = [yearLabel, ...semesters[semester]];
            allLinksHTML += dropdown(links[0], links.slice(1));
        });

        const visible_links = [{ id: "wip", title: "WIP" }];
        allLinksHTML += mainNav(visible_links);

        return allLinksHTML;
    }

    const allLinksHTML = await generateNavLinks();

    const getBreathingOption = () => {
        const storedPreference = JSON.parse(localStorage.getItem("breathingAnimation"));
        return storedPreference && storedPreference.isEnabled ? storedPreference.selectedAnimation : "";
    };
    const breathingoption = (!document.getElementById('global_breathinganimationblock')) ? getBreathingOption() : '';

    const finallinks = `    
    <nav class="navbar navbar-expand-md sticky-top mw-100 px-3 py-3 shadow-lg bg-blur-2">
        <div class="container-fluid">
            ${headerNavHTML}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto">
                    ${allLinksHTML}
                    <div id="userMenu">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="${GLOBAL_login_page_path}?redirect=${encodeURIComponent(window.location.pathname)}">
                                Login
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    ${breathingoption ? `<div class="breathing-animation sticky-top cursor-pointer m-1 p-0 mx-auto ${breathingoption}" id="global_breathinganimationblock" onclick="location.href='/my/features/breathing-techniques'"></div>` : ''}
    `;
    return finallinks;
};
 */

let header_navbar = async function (flags) {
    if (flags) return 0;

    const url = new URL(window.location.href);
    const pathname = url.pathname.split('/');
    // const base = '/edu/su/';
    const base = `/${pathname[1]}/${pathname[2]}/`;
    const coursesBase = `${base}${pathname[3]}/`;
    const courseID = pathname[4]; // Extracting the course ID from the URL
    const nav_folder = pathname[4] ? `${coursesBase}${pathname[4]}` : '';
    // console.log(base, coursesBase, courseID, nav_folder);
    const nav_subfolder = pathname[5] || '';
    const nav_filename = pathname.pop() || '';

    const breadcrumb = [
        // { href: `//${window.location.host}`, icon: 'house-fill', title: 'Home' },
        nav_folder && { href: `${nav_folder}/`, icon: 'journals', title: nav_folder },
        nav_subfolder && { href: `${nav_folder}/${nav_subfolder}/`, icon: 'card-list', title: nav_subfolder },
        nav_filename && { href: nav_filename, icon: 'journal-code', title: nav_filename }
    ].filter(Boolean);

    const breadcrumbHTML = breadcrumb.map(({ href, icon, title }) =>
        `<li class="breadcrumb-item${title === nav_filename ? ' active' : ''}"${title === nav_filename ? ' aria-current="page"' : ''}>` +
        `<a href="${href}" data-toggle="tooltip" data-placement="top" title="${title}">` +
        `<i class="bi bi-${icon}"></i></a></li>`
    ).join('');

    const headerNavHTML = `<nav aria-label="breadcrumb" class="navbar-brand">` +
        `<ol class="breadcrumb m-auto text-decoration-none">${breadcrumbHTML}</ol></nav>`;

    const navItem = (link, specialLinks) => {
        const linkPath = `${coursesBase}${link.id}/`;
        const linkActive = window.location.pathname.startsWith(linkPath) ? 'active" aria-current="page' : '';

        if (specialLinks.hasOwnProperty(link.id.toLowerCase())) {
            const specialHref = specialLinks[link.id.toLowerCase()];
            if (specialHref === 'WIP') {
                return `<li><a class="dropdown-item disabled" href="#" title="Work In Progress">${link.title} [WIP]</a></li>`;
            } else {
                return `<li class="nav-item"><a class="nav-link ${linkActive}" href="${specialHref}" title="Go to ${link.title}">${link.title}</a></li>`;
            }
        } else {
            return `<a class="dropdown-item ${linkActive}" href="${linkPath}">${link.title}</a>`;
        }
    };

    const dropdown = (year, links) => {
        links.sort((a, b) => a.title.localeCompare(b.title));
        const dropdownItems = links.map(link =>
            `<li>${navItem(link, { 'wip': 'WIP', 'csu35888': 'WIP' })}</li>`
        ).join('');

        return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a>` +
            `<ul class="dropdown-menu mt-3">${dropdownItems}</ul></li>`;
    }

    const mainNav = links => {
        links.sort((a, b) => a.title.localeCompare(b.title));
        const navItems = links.map(link => `<li class="nav-item">${navItem(link, { 'wip': 'WIP', 'news': '/updates/', 'contact': 'mailto:contact@dmj.one' })}</li>`).join('');
        return navItems;
    }

    const fetchCourseData = async () => {
        const response = await fetch('/js/courselist.json');
        const courses = await response.json();
        return courses;
    }

    const getProgramForCourse = (courses, courseID) => {
        const course = courses.find(course => course.id === courseID);
        return course ? course.details.program : null;
    }

    const groupCoursesBySemester = (courses, program) => {
        const semesters = {};

        courses.forEach(course => {
            if (course.details.program === program) {
                const semester = course.details.semester;
                if (!semesters[semester]) {
                    semesters[semester] = [];
                }
                semesters[semester].push({ id: course.id, title: course.title });
            }
        });

        return semesters;
    }

    const generateNavLinks = async (courseID) => {
        const courses = await fetchCourseData();
        const program = getProgramForCourse(courses, courseID);

        if (!program) {
            console.error(`Program not found for course ID: ${courseID}`);
            return '';
        }

        const semesters = groupCoursesBySemester(courses, program);
        let allLinksHTML = '';

        Object.keys(semesters).forEach((semester) => {
            const yearLabel = semester;
            const links = [yearLabel, ...semesters[semester]];
            allLinksHTML += dropdown(links[0], links.slice(1));
        });

        const visible_links = [{ id: "wip", title: "WIP" }];
        allLinksHTML += mainNav(visible_links);

        return allLinksHTML;
    }

    const allLinksHTML = await generateNavLinks(courseID);

    const getBreathingOption = () => {
        const storedPreference = JSON.parse(localStorage.getItem("breathingAnimation"));
        return storedPreference && storedPreference.isEnabled ? storedPreference.selectedAnimation : "";
    };
    const breathingoption = (!document.getElementById('global_breathinganimationblock')) ? getBreathingOption() : '';

    const finallinks = `    
    <nav class="navbar navbar-expand-md sticky-top mw-100 px-3 py-sm-0 shadow-lg bg-blur-12">
        <div class="container-fluid">
        <a href="/"><img src="/logo.png" alt="DMJ Logo" class="navbar-brand" style="height: 50px;"></a>            
            ${headerNavHTML}            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>            
            <div class="collapse navbar-collapse" id="navbar">            
                <ul class="navbar-nav ms-auto">
                    ${allLinksHTML}
                    <div id="userMenu">
                        <li class="nav-item dropdown">
                        ${GLOBAL_crawler_mode ? '' : `
                            <a class="nav-link" href="${GLOBAL_login_page_path}?redirect=${encodeURIComponent(window.location.pathname)}">
                                Login
                            </a>`}
                        </li>
                    </div>
                </ul>
                <div id="time" class="fw-bold cursor-default"></div>
            </div>
        </div>
    </nav>    
    ${breathingoption ? `<div class="breathing-animation sticky-top cursor-pointer m-1 p-0 mx-auto ${breathingoption}" id="global_breathinganimationblock" onclick="location.href='/my/features/breathing-techniques'"></div>` : ''}
    `;

    return finallinks;
};


/********************** Public the author to window variable **************************/
function extractTextFromStrongTag(htmlString) {
    // function used in next block header_author. It extracts the text from the strong tag. 
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

/* let header_author = function (...args) {
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
            // console.log(extractTextFromStrongTag(pA_author));
            window.GLOBAL_get_formatted_Author_Name_ = extractTextFromStrongTag(pA_author);
            
            const { line1, line2, line3, line4 } = processFolder(allAuthors, author_bio);

            const finalheaders = "<header>" + line1 + line2 + line3 + line4 + "</header>" + header_navbar();
            document.body.insertAdjacentHTML('afterbegin', finalheaders);
        },
    };

    header_author_internal.header_author_main(...args);
    header_author_internal.activateNavbar();
}; */

let header_author = async function (...args) {
    const header_author_internal = {
        activateNavbar() {
            const navLinks = document.querySelectorAll('.navbar-nav a');
            const currentUrl = window.location.pathname;
            navLinks.forEach(link => {
                if (currentUrl.startsWith(link.getAttribute('href'))) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            (async () => {
                const timeElement = document.getElementById('time');

                const padZero = number => number.toString().padStart(2, '0');

                const updateTime = () => {
                    const now = new Date();
                    const hours = padZero(now.getHours());
                    const minutes = padZero(now.getMinutes());
                    const seconds = padZero(now.getSeconds());
                    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
                };

                setInterval(updateTime, 1000);
                updateTime(); // initial call to display time immediately
            })();
        },
        async header_author_main(...args) {
            if (args[0] === "off") { window.loaded_header_author = 1; return null; }
            if (args[0] === "WriteManually") {
                window.loaded_header_author = 1;
                const finalheaders = "<header>" + args[1] + "</header>" + await header_navbar();
                document.body.insertAdjacentHTML('afterbegin', finalheaders);
                return null;
            }
            if (args[0] === "WriteManuallyNoNav") {
                window.loaded_header_author = 1;
                const finalheaders = "<header>" + args[1] + "</header>";
                document.body.insertAdjacentHTML('afterbegin', finalheaders);
                return null;
            }
            if (args[0] === "NavOnly") {
                window.loaded_header_author = 1;
                const navOnlyHTML = await header_navbar();
                document.body.insertAdjacentHTML('afterbegin', navOnlyHTML);
                return null;
            }

            window["loaded_header_author"] = 1;

            const { pA_author, pA_bio } = processAuthors(args);
            const allAuthors = `<span id="authorlist">${pA_author}</span>`, author_bio = pA_bio;

            // Added to display when user prints the article
            window.GLOBAL_get_Author_Name_ = pA_author;
            // console.log(extractTextFromStrongTag(pA_author));
            window.GLOBAL_get_formatted_Author_Name_ = extractTextFromStrongTag(pA_author);

            const { line1, line2, line3, line4 } = processFolder(allAuthors, author_bio);

            const finalheaders = "<header>" + line1 + line2 + line3 + line4 + "</header>" + await header_navbar();
            document.body.insertAdjacentHTML('afterbegin', finalheaders);
        },
    };

    await header_author_internal.header_author_main(...args);
    header_author_internal.activateNavbar();
};




/************************* Print Specific Layout Generator ****************************/
(function () {

    // support functions ----- adds a link to the print-article-APA6.css file if the path length is 6
    document.addEventListener('DOMContentLoaded', function () {
        const path = window.location.pathname.split('/').filter(Boolean); // Split the path and remove empty segments

        // Check if the path length is exactly 6
        if (path.length >= 5) {
            // Create a link element for the CSS
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.type = 'text/css';
            // linkElement.media = 'print';
            linkElement.href = '/css/print-article-APA6.css'; // Adjust the path as needed
            document.head.appendChild(linkElement);
        }
    });

    // Print event listener ----- adds a print event listener to the document to handle Ctrl+P and scroll to top
    document.addEventListener('keydown', function (event) {
        // Check if Ctrl key is pressed along with the 'P' key
        if (event.ctrlKey && event.key === 'p') {
            // Prevent the default print behavior
            event.preventDefault();

            // Scroll to the top of the page
            window.scrollTo(0, 0);

            // Allow some time for the scroll action to complete before opening the print preview
            setTimeout(function () {
                window.print();
            }, 100);
        }
    });

})();

(function () {
    document.addEventListener('DOMContentLoaded', function () {

        // GLOBAL CONTROL CENTER - For manual entry just add like this 'Your Text Here' || null || previous values.
        const IS_STUDENT_MODE = window.GLOBAL_get_isstudentmode_ || 0;
        const SITE_URL = 'https://dmj.one';
        // const CURRENT_LOCATION = `https://dmj.one/${urlpart1}/${urlpart2}/${urlpart3}/${urlpart4}/` || null || SITE_URL + window.location.pathname.replace(/\.html$/, '') || window.location.href;
        const CURRENT_LOCATION = SITE_URL + window.location.pathname.replace(/\.html$/, '') || window.location.href;
        const QR_CODE_MODE = 4;
        const QR_CODE_MAX_WIDTH = '1.25in';
        const QR_CODE_MAX_HEIGHT = '1.25in';
        const SHOOLINI_LOGO_SRC = '/img/shoolini_logo.png';
        const DMJ_LOGO_SRC = '/logo.png';
        const PRINT_STYLE_CONTENT = `@media print { *,*::before { background: #fff !important; -webkit-print-color-adjust: exact !important; color-adjust: exact !important; print-color-adjust: exact !important; }}`;
        const PRINT_STYLE_DISPLAY_NONE = `@media print { #defaultcopyrightfooter{ display: none; }}`;
        const AUTHOR_NAME = null || window.GLOBAL_get_formatted_Author_Name_;
        AUTHOR_NAME_WINDOW_WITH_ETAL = null || formatAuthorsEtAl(window.GLOBAL_get_Author_Name_);
        const AUTHOR_TEXT_STUDENT_MODE = 'Divya Mohan <em>(GF202214698)</em>';
        const AUTHOR_DEPT_STUDENT_MODE = 'Yogananda School of AI, Computers and Data Science';
        const AUTHOR_DEPT_OTHER_MODE = 'Faculty of Engineering and Technology';
        const UNIVERSITY_NAME = 'Shoolini University, Solan, Himachal Pradesh, India';
        const FACULTY_NAME = null || window.GLOBAL_get_Faculty_Name_;
        const COURSE = null || window.GLOBAL_get_course_;
        const COURSE_DETAILS = null || window.GLOBAL_get_course_detail_;
        const DATE_OPTIONS = { month: 'long', day: 'numeric', year: 'numeric' };
        const RETRIEVED_DATE = new Date().toLocaleDateString('en-US', DATE_OPTIONS);
        // 2 more global setting defined after 30 lines due to try block constraint.

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


        try {
            let noactualarticle, studentmode, logocontent_dmj_shoolini_qr;


            studentmode = IS_STUDENT_MODE;


            // Retrive elements of the page 
            let articleElement = document.querySelector('article.agen-tableofcontents');
            if (typeof articleElement === 'undefined' || articleElement === null) {
                noactualarticle = 1;
                articleElement = document.querySelector('main');
            }

            // DEPENDEDS ON THE PAGE STRUCTURE
            // const TITLE_OF_THE_PAGE = `${COURSE_DETAILS} (${COURSE})`; // For Creating course related main header page
            // Get the title of the page and the date of the page
            const TITLE_OF_THE_PAGE = null || articleElement.querySelector('h2').innerText;
            const DATE_OF_THE_PAGE = null || articleElement.querySelector('.contentdate') ? articleElement.querySelector('.contentdate').innerText : "n.d."


            let titleofthepage = TITLE_OF_THE_PAGE;
            let dateofthepage = DATE_OF_THE_PAGE;
            let h2 = articleElement.querySelector('h2');
            h2.classList.add('d-print-none');


            // Get the location of the page
            // var currentlocation = 'https://dmj.one/' + window.location.pathname.split('/').pop().replace('.html', '');        
            let currentlocation = CURRENT_LOCATION;



            // Create QR code data URL
            var qr = qrcode(0, 'H');
            // qr.addData(window.location.href);
            qr.addData(currentlocation);
            qr.make();
            var qrcode_data = qr.createDataURL(QR_CODE_MODE, "");
            window.GLOBAL_get_qr_code_data = qrcode_data;

            // Create and configure the QR code image
            var qrImage = new Image();
            qrImage.src = qrcode_data;
            qrImage.alt = 'QR Code to visit the website of the article';
            qrImage.className = 'img-fluid ';
            // qrImage.style = 'max-width: 150px; max-height: 150px;';            
            qrImage.style = 'max-width:' + QR_CODE_MAX_WIDTH + ';' + 'max-height:' + QR_CODE_MAX_HEIGHT + ';';
            // qrImage.style = 'max-width: 1in;';

            var qrDiv = document.createElement('div');
            qrDiv.className = 'd-none d-none d-print-block mx-auto mt-7';
            qrDiv.appendChild(qrImage);

            if (!studentmode) {
                const style = document.createElement('style');
                style.textContent = `@media print { *,*::before { background: #fff !important; -webkit-print-color-adjust: exact !important; color-adjust: exact !important; print-color-adjust: exact !important; }}`;
                document.head.appendChild(style);
            }

            logocontent_dmj_shoolini_qr = () => {
                let data; // Define data variable to hold the HTML string
                if (studentmode) {
                    // Create a <style> element
                    const style = document.createElement('style');
                    style.textContent = `@media print { #defaultcopyrightfooter{ display: none; }}`;
                    document.head.appendChild(style);



                    // Only display the Shoolini logo when in student mode
                    data = `<div class="col-12">
                  <img src="${SHOOLINI_LOGO_SRC}" class="img-fluid" alt="Shoolini University Logo" style="max-width:40%;">
                </div>
                <!--<div class="col-6">
                  <img src="/img/icf_logo.jpg" class="img-fluid" alt="ICF Logo" style="max-width:80%;">
                </div>-->`;
                } else {
                    // Base structure for other modes
                    data = `<div class="col-6 col">
                  <img src="${DMJ_LOGO_SRC}" class="img-fluid" alt="DMJ Logo" style="max-width:40%;">
                </div>`;

                    if (noactualarticle) {
                        // Add QR code for no article mode
                        data += `<div class="col-6 col">
                       <img src="${qrcode_data}" class="img-fluid" alt="QR Code" style="max-width:40%;">
                     </div>`;
                    } else {
                        // Add Shoolini logo for normal mode
                        data += `<div class="col-6 col">
                       <img src="${SHOOLINI_LOGO_SRC}" class="img-fluid" alt="Shoolini University Logo" style="max-width:80%;">
                     </div>`;
                    }
                }
                return data;
            };



            // Create a div for logos
            var logodiv = document.createElement('div');
            // logodiv.innerHTML = noactualarticle ? `<div class="row d-none d-print-flex"><img src="/logo.png" class="img-fluid" alt="Logo" style="max-width:40%"></div>` : `<div class="row d-none d-print-flex justify-content-between">${logocontent_dmj_shoolini_qr}</div>`;
            logodiv.innerHTML = `<div class="row d-none d-print-flex justify-content-between">${logocontent_dmj_shoolini_qr()}</div>`;
            logodiv.className = 'd-none d-print-flex mx-auto mb-7';
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


            // function extractTextFromStrongTag(htmlString) {
            //     var tempDiv = document.createElement('div');
            //     tempDiv.innerHTML = htmlString;
            //     var authorNames = Array.from(tempDiv.querySelectorAll('strong'), el => el.textContent);

            //     // If there's more than one name, format the string with "and" before the last name
            //     if (authorNames.length > 1) {
            //         var lastAuthor = authorNames.pop();
            //         return authorNames.join(', ') + ' and ' + lastAuthor;
            //     } else {
            //         return authorNames.join('');
            //     }
            // }

            // Prepare the titleofthepage div with the titleofthepage as text content
            var titleDiv = document.createElement('div');
            titleDiv.className = 'd-none d-print-block mx-auto mt-2';
            titleDiv.innerHTML = `<h2 class="text-center text-uppercase">${titleofthepage}</h2>`;

            // Prepare the author and faculty divs with text content
            // var authorsText = extractTextFromStrongTag(window.GLOBAL_get_Author_Name_);
            // var authorsText = 'Divya Mohan <em>(GF202214698)</em>';
            // const formattedauthorname = extractTextFromStrongTag(window.GLOBAL_get_Author_Name_);
            const formattedauthorname = AUTHOR_NAME;
            // window.GLOBAL_get_formatted_Author_Name_ = formattedauthorname;
            // console.log(formattedauthorname);
            var authorsText = studentmode ? AUTHOR_TEXT_STUDENT_MODE : formattedauthorname;
            var authorsdept = studentmode ? AUTHOR_DEPT_STUDENT_MODE : AUTHOR_DEPT_OTHER_MODE;
            var authorsDiv = document.createElement('div');
            authorsDiv.className = 'd-none d-print-block mx-auto mt-3 mb-4';
            authorsDiv.innerHTML = authorsText ? `<p class="text-center text-uppercase">${authorsText}</p><p class="text-uppercase text-center" style="font-size:8pt!important">${authorsdept}</p><p class="text-uppercase text-center fw-bold" style="font-size:10pt!important">${UNIVERSITY_NAME}</p>` : '';


            var facultyDiv = document.createElement('div');
            facultyDiv.className = 'd-none d-print-block mx-auto';
            facultyDiv.innerHTML = COURSE_DETAILS ? COURSE ? `<p class="text-center fst-italic">Under the guidance of <span class="text-capitalize">${FACULTY_NAME}</span> in the subject of <span class="text-capitalize">${COURSE_DETAILS} (${COURSE})</span></p>` : `<p class="text-center">${COURSE_DETAILS}</p>` : '';
            // facultyDiv.innerHTML = window.GLOBAL_get_course_detail_ ? window.GLOBAL_get_course_ ? `<p class="text-center fst-italic">Under the guidance of <span class="text-capitalize">Asst. Prof. Payal Khanna</span> in the subject of <span class="text-capitalize">Enhancing Leadership through Coaching Skills (CSU1806)</span></p>` : `<p class="text-center">${window.GLOBAL_get_course_detail_}</p>` : '';
            // facultyDiv.innerHTML += window.GLOBAL_get_Faculty_Name_ ? `<p class="text-center text-uppercase"><span class="fw-bold"></span> ${window.GLOBAL_get_Faculty_Name_}</p>` : '';
            facultyDiv.innerHTML += `<p class="text-center text-uppercase" style="font-size:8pt!important">${studentmode ? 'Submitted on' : 'Printed on'} ${RETRIEVED_DATE}</p>`;

            var authorsetal = AUTHOR_NAME_WINDOW_WITH_ETAL;
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
        } catch (e) {
            //console.log("Could Not apply Print Specific Styles")
        }
    });
})();
// })(forprint_manualmode,forprint_authorname, forprint_subjectcode, forprint_teachername);





/***********************  Random Quiz **************************/

//////////// Version 1.0
// (function () {
//     // if (window.location.pathname.split('/').filter(Boolean).length !== 6 || !window.QuizMode) return console.log('Not a quiz page');
//     // if (urlpart3 !== 'placements') return console.log('Placements page');
//     document.addEventListener('DOMContentLoaded', function () {

//         if (!window.placementquiz) return console.log('Not a quiz page');

//         if (window.placementquiz) {
//             // Prepare the quiz page for loading questions.
//             var quiznewlinkhref = document.createElement('link');
//             quiznewlinkhref.setAttribute('rel', 'stylesheet');
//             quiznewlinkhref.setAttribute('href', '/css/quiz.css');
//             document.head.appendChild(quiznewlinkhref);

//             document.body.innerHTML = `<div class="name-container" id="name-container"></div>
//                 <div class="timer-container" id="timer-container">
//                     <div class="timer text-center" id="timer">Start Answering!</div>
//                 </div>
//                 <div class="score-container" id="score-container">0/0</div>
//                 <div class="container">
//                     <h2 class="my-9 text-center display-3">Lets get you trained!</h2>
//                     <div class="negative-marking-warning bg-danger py-3 text-center bg-opacity-50 my-4 d-none" id="negative-marking-warning"></div>
//                     <div id="questions-container" class="row row-cols-1 row-cols-md-2 g-4"></div>
//                 </div>

//                 <div class="modal fade" id="endModal" tabindex="-1" aria-labelledby="endModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
//                     <div class="modal-dialog modal-dialog-centered">
//                         <div class="modal-content text-center p-5">
//                             <h2 id="final-score"></h2>
//                             <p id="congrats-message"></p>
//                             <p id="time-taken" class="text-center"></p>
//                             <p class="text-center fw-bold">The page will refresh automatically in 15 seconds.</p>
//                         </div>
//                     </div>
//                 </div>`;

//             const MIN_QUESTIONS = 7;
//             const MAX_QUESTIONS = 7;
//             const MIN_TIME_PER_QUESTION = 5;
//             const MAX_TIME_PER_QUESTION = 60;
//             const SCORE_CONTAINER_ID = 'score-container';
//             const TIMER_ELEMENT_ID = 'timer';
//             const NAME_CONTAINER_ID = 'name-container';
//             const QUESTIONS_CONTAINER_ID = 'questions-container';
//             const FINAL_SCORE_ID = 'final-score';
//             const CONGRATS_MESSAGE_ID = 'congrats-message';
//             const TIME_TAKEN_ID = 'time-taken';
//             const END_MODAL_ID = 'endModal';
//             let NEGATIVE_MARKING_ENABLED = 'auto';
//             let negativeMarkingValue;
//             let selectedcorrect = 0;

//             var getJsUrl = function (fileName) {
//                 var currentUrl = window.location.href,
//                     urlParts = currentUrl.split('/').map(encodeURIComponent),
//                     lastFolderIndex = urlParts.length - 1;
//                 for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) {
//                     lastFolderIndex = i;
//                     break;
//                 }
//                 var jsUrl;
//                 if (lastFolderIndex >= 4 && lastFolderIndex <= 6)
//                     jsUrl = '/' + urlParts.slice(3, lastFolderIndex).join('/') + '/' + fileName;
//                 else if (lastFolderIndex > 6)
//                     jsUrl = '/' + urlParts.slice(3, 7).join('/') + '/' + fileName;
//                 else
//                     jsUrl = '/' + fileName;

//                 return jsUrl;
//             };

//             if (NEGATIVE_MARKING_ENABLED === 'auto') {
//                 NEGATIVE_MARKING_ENABLED = Math.random() < 0.5;
//             }

//             if (NEGATIVE_MARKING_ENABLED) {
//                 negativeMarkingValue = getRandomNumber(0.5 * 10, 2.0 * 10) / 10;
//                 const warningElement = document.getElementById('negative-marking-warning');
//                 warningElement.textContent = `Negative marking is enabled. Each incorrect answer will deduct ${negativeMarkingValue} points.`;
//                 warningElement.classList.toggle('d-none');
//             }

//             let score = 0;
//             const answeredQuestions = new Set();
//             const attempts = {};
//             let timerInterval;
//             let startTime;
//             const totalQuestions = getRandomNumber(MIN_QUESTIONS, MAX_QUESTIONS);
//             const name = getUserName();

//             document.getElementById(NAME_CONTAINER_ID).textContent = `${name}`;

//             function getUserName() {
//                 let name = localStorage.getItem('userName');
//                 if (!name) {
//                     name = prompt('Please enter your name:');
//                     if (name) {
//                         localStorage.setItem('userName', name);
//                     }
//                 }
//                 return name || 'Guest';
//             }

//             function getRandomNumber(min, max) {
//                 return Math.floor(Math.random() * (max - min + 1)) + min;
//             }

//             function calculateTimePerQuestion() {
//                 const randomTimePerQuestion = getRandomNumber(MIN_TIME_PER_QUESTION, MAX_TIME_PER_QUESTION);
//                 return totalQuestions * randomTimePerQuestion;
//             }

//             // console.log(getJsUrl('qb.txt'));
//             async function fetchQuestions() {
//                 try {
//                     const response = await fetch(getJsUrl('qb.txt'));
//                     if (!response.ok) throw new Error('Network response was not ok');
//                     const data = await response.text();
//                     const questions = parseQuestions(data);
//                     const selectedQuestions = getRandomQuestions(questions, totalQuestions);
//                     displayQuestions(selectedQuestions);
//                     const totalTime = calculateTimePerQuestion();
//                     startTimer(totalTime);
//                     startTime = new Date();
//                 } catch (error) {
//                     console.error('Error fetching the questions:', error);
//                 }
//             }

//             function parseQuestions(data) {
//                 const lines = data.split('\n');
//                 let questions = [];
//                 let currentQuestion = null;

//                 lines.forEach(line => {
//                     line = line.trim();
//                     if (line.startsWith('ANSWER:')) {
//                         if (currentQuestion) {
//                             currentQuestion.answer = line.split(' ')[1];
//                             questions.push(currentQuestion);
//                             currentQuestion = null;
//                         }
//                     } else if (line.match(/^[A-Z][).]/)) {
//                         if (currentQuestion) {
//                             currentQuestion.options.push(line);
//                         }
//                     } else if (line) {
//                         if (currentQuestion) questions.push(currentQuestion);
//                         currentQuestion = { text: line, options: [], answer: '' };
//                     }
//                 });
//                 return questions;
//             }

//             function shuffle(array) {
//                 for (let i = array.length - 1; i > 0; i--) {
//                     const j = Math.floor(Math.random() * (i + 1));
//                     [array[i], array[j]] = [array[j], array[i]];
//                 }
//                 return array;
//             }

//             function getRandomQuestions(questions, num) {
//                 return shuffle(questions).slice(0, num);
//             }

//             function createOption(option, i, questionIndex, cardBodyDiv, cardHeader) {
//                 const originalOptionLetter = option.charAt(0);
//                 const optionDiv = document.createElement('div');
//                 optionDiv.className = 'option';

//                 const input = document.createElement('input');
//                 input.type = 'radio';
//                 input.name = `question-${questionIndex}`;
//                 input.value = originalOptionLetter;
//                 input.className = 'form-check-input';
//                 input.id = `question-${questionIndex}-option-${i}`;

//                 const label = document.createElement('label');
//                 label.htmlFor = input.id;
//                 label.textContent = option.slice(2);

//                 optionDiv.appendChild(input);
//                 optionDiv.appendChild(label);
//                 optionDiv.addEventListener('click', () => handleOptionClick(optionDiv, cardBodyDiv, cardHeader));

//                 return optionDiv;
//             }

//             function handleOptionClick(optionDiv, cardBodyDiv, cardHeader) {
//                 const radio = optionDiv.querySelector('input[type="radio"]');
//                 radio.checked = true;
//                 const allOptions = optionDiv.closest('.options').querySelectorAll('.option');
//                 allOptions.forEach(div => div.classList.remove('selected'));
//                 optionDiv.classList.add('selected');

//                 const questionIndex = cardBodyDiv.dataset.index;
//                 const correctAnswer = cardBodyDiv.dataset.answer;

//                 attempts[questionIndex]++;

//                 if (radio.value === correctAnswer) {
//                     optionDiv.classList.add('selected');
//                     cardBodyDiv.classList.add('correct');
//                     cardHeader.classList.add('correct');
//                     if (!answeredQuestions.has(questionIndex)) {
//                         score++;
//                         selectedcorrect++;
//                         answeredQuestions.add(questionIndex);
//                         updateScore();
//                         checkCompletion();
//                     }
//                     disableQuestion(cardBodyDiv);
//                 } else {
//                     optionDiv.classList.add('bg-danger');
//                     if (attempts[questionIndex] >= 1) {
//                         if (NEGATIVE_MARKING_ENABLED) {
//                             if (score > 0 && score - negativeMarkingValue >= 0) {
//                                 score -= negativeMarkingValue;
//                                 updateScore();
//                             }
//                         }
//                         cardBodyDiv.classList.add('incorrect');
//                         cardHeader.classList.add('incorrect');
//                         disableQuestion(cardBodyDiv);
//                         checkCompletion();
//                     }
//                 }
//             }

//             function displayQuestions(questions) {
//                 const container = document.getElementById(QUESTIONS_CONTAINER_ID);
//                 questions.forEach((q, index) => {
//                     attempts[index] = 0;

//                     const colDiv = document.createElement('div');
//                     colDiv.className = 'col';

//                     const cardDiv = document.createElement('div');
//                     cardDiv.className = 'card';

//                     const cardHeader = document.createElement('div');
//                     cardHeader.className = 'card-header';
//                     cardHeader.innerHTML = `Q${index + 1}. ${q.text}`;

//                     const cardBodyDiv = document.createElement('div');
//                     cardBodyDiv.className = 'card-body';
//                     cardBodyDiv.dataset.index = index;
//                     cardBodyDiv.dataset.answer = q.answer;

//                     const questionText = document.createElement('p');
//                     questionText.textContent = q.text;
//                     questionText.classList = 'fw-bold d-none';

//                     const optionsDiv = document.createElement('div');
//                     optionsDiv.className = 'options';

//                     q.options.forEach((option, i) => {
//                         const optionDiv = createOption(option, i, index, cardBodyDiv, cardHeader);
//                         optionsDiv.appendChild(optionDiv);
//                     });

//                     cardBodyDiv.appendChild(questionText);
//                     cardBodyDiv.appendChild(optionsDiv);
//                     cardDiv.appendChild(cardHeader);
//                     cardDiv.appendChild(cardBodyDiv);
//                     colDiv.appendChild(cardDiv);
//                     container.appendChild(colDiv);
//                 });
//             }

//             function disableQuestion(cardBodyDiv) {
//                 cardBodyDiv.classList.add('disabled');
//                 const inputs = cardBodyDiv.querySelectorAll('input[type="radio"]');
//                 inputs.forEach(input => input.disabled = true);
//             }

//             function updateScore() {
//                 const scoreContainer = document.getElementById(SCORE_CONTAINER_ID);
//                 scoreContainer.textContent = `${Math.round(score)} / ${totalQuestions}`;
//                 scoreContainer.classList.remove('d-none');
//                 scoreContainer.classList.add('animate');
//                 setTimeout(() => {
//                     scoreContainer.classList.remove('animate');
//                 }, 500);
//             }

//             function startTimer(duration) {
//                 let timer = duration,
//                     minutes,
//                     seconds;
//                 const timerElement = document.getElementById(TIMER_ELEMENT_ID);
//                 timerInterval = setInterval(() => {
//                     minutes = parseInt(timer / 60, 10);
//                     seconds = parseInt(timer % 60, 10);

//                     minutes = minutes < 10 ? "0" + minutes : minutes;
//                     seconds = seconds < 10 ? "0" + seconds : seconds;

//                     timerElement.textContent = `${minutes}:${seconds}`;

//                     if (--timer < 0) {
//                         clearInterval(timerInterval);
//                         endQuiz();
//                     }
//                 }, 1000);
//             }

//             function endQuiz() {
//                 disableAllQuestions();
//                 showFinalScore();
//             }

//             function disableAllQuestions() {
//                 const questionCards = document.querySelectorAll('.card-body');
//                 questionCards.forEach(cardBody => {
//                     cardBody.classList.add('disabled');
//                     const inputs = cardBody.querySelectorAll('input[type="radio"]');
//                     inputs.forEach(input => input.disabled = true);
//                 });
//             }

//             function showFinalScore() {
//                 const finalScore = document.getElementById(FINAL_SCORE_ID);
//                 const congratsMessage = document.getElementById(CONGRATS_MESSAGE_ID);
//                 const timeTaken = document.getElementById(TIME_TAKEN_ID);
//                 const totalTime = Math.round((new Date() - startTime) / 1000);
//                 const minutes = Math.floor(totalTime / 60);
//                 const seconds = totalTime % 60;
//                 const timeTakenText = `Time taken: ${minutes} minutes and ${seconds} seconds`;

//                 // const correctPercentage = Math.round((score / totalQuestions) * 100);
//                 const correctPercentage = Math.round((score / totalQuestions) * 100);
//                 // const incorrectAnswers = totalQuestions - score;
//                 const incorrectAnswers = totalQuestions - selectedcorrect;
//                 const accuracy = (score / totalQuestions * 100).toFixed(2);

//                 finalScore.textContent = `Your score is: ${Math.round(score)} / ${totalQuestions}`;
//                 timeTaken.textContent = timeTakenText;

//                 let analysisMessage = `
//                         <strong>Analysis:</strong><br>
//                         Total Questions: ${totalQuestions}<br>
//                         Correct Answers: ${selectedcorrect}<br>
//                         Incorrect Answers: ${incorrectAnswers}<br>
//                         Accuracy: ${accuracy}%<br><br>
//                 `;

//                 const messages = [
//                     { threshold: totalQuestions, message: `Fantastic job ${name}!</p><p>You got a perfect score! Keep up the great work!` },
//                     { threshold: totalQuestions - 1, message: `Excellent work ${name}!</p><p>Almost perfect, keep striving for that 100%!` },
//                     { threshold: Math.ceil(totalQuestions * 0.9), message: `Great job ${name}!</p><p>You're doing really well! Just a bit more practice to reach perfection!` },
//                     { threshold: Math.ceil(totalQuestions * 0.8), message: `Very good effort ${name}!</p><p>You're scoring high, keep practicing and you'll get even better!` },
//                     { threshold: Math.ceil(totalQuestions * 0.7), message: `Good job ${name}!</p><p>You're on the right track, keep up the hard work!` },
//                     { threshold: Math.ceil(totalQuestions * 0.6), message: `Nice effort ${name}!</p><p>Keep practicing and you'll see continuous improvement!` },
//                     { threshold: Math.ceil(totalQuestions * 0.5), message: `Well done ${name}!</p><p>You're halfway there, keep practicing to improve your score!` },
//                     { threshold: Math.ceil(totalQuestions * 0.4), message: `Not bad ${name}!</p><p>Keep practicing and you'll get better each time!` },
//                     { threshold: Math.ceil(totalQuestions * 0.3), message: `Nice try ${name}!</p><p>Don't get discouraged, practice makes perfect!` },
//                     { threshold: Math.ceil(totalQuestions * 0.2), message: `Keep going ${name}!</p><p>Each attempt is a step towards improvement!` },
//                     { threshold: Math.ceil(totalQuestions * 0.1), message: `Don't give up ${name}!</p><p>Every effort counts, keep practicing and you'll get there!` },
//                     { threshold: 0, message: `Don't be disheartened ${name}!</p><p>Keep trying and you'll see progress! Refresh the page to try again.` },
//                     { threshold: -Infinity, message: `Oops ${name}!</p><p>It looks like your score went below zero. Don't worry, you can always try again and improve! Keep practicing!` },
//                 ];

//                 const motivationalEnding = `Keep practicing on dmj.one, where we believe in "Quality Education for All". Your continuous effort and practice will surely lead to success!`;


//                 const selectedMessage = messages.find(m => score >= m.threshold).message;

//                 congratsMessage.innerHTML = `<p class='fw-bold text-center'>${selectedMessage}</p>${analysisMessage}<p>${motivationalEnding}</p>`;

//                 document.querySelector('.name-container').classList.add('d-none');
//                 document.querySelector('.timer-container').classList.add('d-none');
//                 document.querySelector('.score-container').classList.add('d-none');

//                 const body = document.querySelector('body');
//                 body.classList.add('darken');
//                 const container = document.querySelector('.container');
//                 container.classList.add('blur');

//                 const endModal = new bootstrap.Modal(document.getElementById(END_MODAL_ID));
//                 endModal.show();

//                 setTimeout(() => {
//                     location.reload();
//                 }, 15000);
//             }

//             function checkCompletion() {
//                 if (Object.values(attempts).filter(attempt => attempt > 0).length === totalQuestions) {
//                     clearInterval(timerInterval);
//                     endQuiz();
//                 }
//             }

//             fetchQuestions();
//         }
//     });
// })();

////////////////////  Version 1.1 - Working
(function () {
    if (GLOBAL_crawler_mode) {
        return;
    }

    document.addEventListener("DOMContentLoaded", function () {
        if (!(window.PlacementQuiz || window.SubjectQuiz || window.ReviewSubjectQuestions)) {
            return null;
        }

        window.cL(); // Force Login

        ////////// Control Panel //////////

        const MIN_QUESTIONS = 3;
        const MAX_QUESTIONS = 11;
        const MIN_TIME_PER_QUESTION = 5;
        const MAX_TIME_PER_QUESTION = 45;
        const SCORE_CONTAINER_ID = 'score-container';
        const TIMER_ELEMENT_ID = 'timer';
        const NAME_CONTAINER_ID = 'name-container';
        const QUESTIONS_CONTAINER_ID = 'questions-container';
        const FINAL_SCORE_ID = 'final-score';
        const CONGRATS_MESSAGE_ID = 'congrats-message';
        const TIME_TAKEN_ID = 'time-taken';
        const END_MODAL_ID = 'endModal';
        const FETCH_FILE_NAME = 'qb.txt';
        const FETCH_FILE_NAME_WITH_DYNAMIC_PATH = GetCourseSpecificBaseFile(FETCH_FILE_NAME);
        const FETCH_FILE_NAMES = ['qb.txt', '/edu/su/course/csu360/qb.txt']; // All Subject QuestionBank files
        let NEGATIVE_MARKING_ENABLED = 'auto';
        let negativeMarkingValue;
        let fetchQuestions;
        let selectedcorrect = 0;

        if (window.PlacementQuiz || window.SubjectQuiz) {
            ///////// Prerequisites //////////

            const quiznewlinkhref = document.createElement('link');
            quiznewlinkhref.setAttribute('rel', 'stylesheet');
            quiznewlinkhref.setAttribute('href', '/css/quiz.css');
            document.head.appendChild(quiznewlinkhref);

            document.body.innerHTML += `<div class="name-container" id="name-container"></div>
                        <div class="timer-container" id="timer-container">
                            <div class="timer text-center" id="timer">Start Answering!</div>
                        </div>
                        <div class="score-container" id="score-container">0/0</div>
                        <div class="container">
                            <h2 class="my-9 text-center display-3">Lets get you trained!</h2>
                            <div class="negative-marking-warning bg-warning py-3 text-center bg-opacity-25 bg-gradient h4 my-8 d-none" id="negative-marking-warning"></div>
                            <!-- <div id="questions-container" class="g-4"></div> -->
                            <div id="questions-container" class="row row-cols-1 row-cols-md-2 g-4"></div>
                        </div>
                    
                        <div class="modal fade" id="endModal" tabindex="-1" aria-labelledby="endModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-center p-5">
                                    <h2 id="final-score"></h2>
                                    <p id="congrats-message"></p>
                                    <p id="time-taken" class="text-center"></p>
                                    <p class="text-center fw-bold">The page will refresh automatically in 15 seconds.</p>
                                </div>
                            </div>
                        </div>`;


            ////////// LOGIC /////////////                

            if (NEGATIVE_MARKING_ENABLED === 'auto') {
                NEGATIVE_MARKING_ENABLED = Math.random() < 0.5;
            }

            if (NEGATIVE_MARKING_ENABLED) {
                negativeMarkingValue = getRandomNumber(0.5 * 10, 2.0 * 10) / 10;
                const warningElement = document.getElementById('negative-marking-warning');
                warningElement.textContent = `Negative marking is enabled. Each incorrect answer will deduct ${negativeMarkingValue} points.`;
                warningElement.classList.toggle('d-none');
            }

            let score = 0;
            const answeredQuestions = new Set();
            const attempts = {};
            let timerInterval;
            let startTime;
            let totalQuestions = getRandomNumber(MIN_QUESTIONS, MAX_QUESTIONS);
            totalQuestions = totalQuestions % 2 == 0 ? totalQuestions : totalQuestions + 1; // always even number of questions.
            const name = getUserName();

            function getUserName() {
                let name = localStorage.getItem('userName');
                // const GLOBAL_login_page_path = window.location.hostname === 'localhost' ? '/login' : '/login.html';
                if (!name) {
                    const redirectUrl = encodeURIComponent(window.location.pathname);
                    window.location.href = `${GLOBAL_login_page_path}?redirect=${redirectUrl}`;
                } else {
                    document.getElementById(NAME_CONTAINER_ID).textContent = name;
                }
                return name;
            }

            function getRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function calculateTimePerQuestion() {
                const randomTimePerQuestion = getRandomNumber(MIN_TIME_PER_QUESTION, MAX_TIME_PER_QUESTION);
                return totalQuestions * randomTimePerQuestion;
            }

            if (window.PlacementQuiz) {
                fetchQuestions = async function () {
                    try {
                        const questionData = await Promise.all(FETCH_FILE_NAMES.map(async (fileName) => {
                            const response = await fetch(fileName);
                            if (!response.ok) throw new Error('Network response was not ok');
                            return response.text();
                        }));

                        const questions = questionData.flatMap(data => parseQuestions(data));
                        const selectedQuestions = getRandomQuestions(questions, totalQuestions);
                        displayQuestions(selectedQuestions);
                        const totalTime = calculateTimePerQuestion();
                        startTimer(totalTime);
                        startTime = new Date();
                    } catch (error) {
                        console.error('Error fetching the questions:', error);
                    }
                };
            } else { // case for subject quiz
                fetchQuestions = async function () {
                    try {
                        const response = await fetch(FETCH_FILE_NAME_WITH_DYNAMIC_PATH);
                        if (!response.ok) throw new Error('Network response was not ok');
                        const data = await response.text();
                        const questions = parseQuestions(data);
                        const selectedQuestions = getRandomQuestions(questions, totalQuestions);
                        displayQuestions(selectedQuestions);
                        const totalTime = calculateTimePerQuestion();
                        startTimer(totalTime);
                        startTime = new Date();
                    } catch (error) {
                        console.error('Error fetching the questions:', error);
                    }
                };
            }

            function parseQuestions(data) {
                const lines = data.split('\n');
                let questions = [];
                let currentQuestion = null;

                lines.forEach(line => {
                    line = line.trim();
                    if (line.startsWith('ANSWER:')) {
                        if (currentQuestion) {
                            currentQuestion.answer = line.split(' ')[1];
                            currentQuestion.options = shuffle(currentQuestion.options); // shuffle options
                            questions.push(currentQuestion);
                            currentQuestion = null;
                        }
                    } else if (line.match(/^[A-Z][).]/)) {
                        if (currentQuestion) {
                            currentQuestion.options.push(line);
                        }
                    } else if (line) {
                        if (currentQuestion) questions.push(currentQuestion);
                        currentQuestion = { text: line, options: [], answer: '' };
                    }
                });
                return questions;
            }

            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }

            function getRandomQuestions(questions, num) {
                return shuffle(questions).slice(0, num);
            }

            function createOption(option, i, questionIndex, cardBodyDiv, cardHeader) {
                const originalOptionLetter = option.charAt(0);
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';

                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question-${questionIndex}`;
                input.value = originalOptionLetter;
                input.className = 'form-check-input';
                input.id = `question-${questionIndex}-option-${i}`;

                const label = document.createElement('label');
                label.htmlFor = input.id;
                label.textContent = option.slice(2);

                optionDiv.appendChild(input);
                optionDiv.appendChild(label);
                optionDiv.addEventListener('click', () => handleOptionClick(optionDiv, cardBodyDiv, cardHeader));

                return optionDiv;
            }

            function handleOptionClick(optionDiv, cardBodyDiv, cardHeader) {
                const radio = optionDiv.querySelector('input[type="radio"]');
                radio.checked = true;
                const allOptions = optionDiv.closest('.options').querySelectorAll('.option');
                allOptions.forEach(div => div.classList.remove('selected'));
                optionDiv.classList.add('selected');

                const questionIndex = cardBodyDiv.dataset.index;
                const correctAnswer = cardBodyDiv.dataset.answer;

                attempts[questionIndex]++;

                if (radio.value === correctAnswer) {
                    optionDiv.classList.add('selected');
                    cardBodyDiv.classList.add('correct');
                    cardHeader.classList.add('correct');
                    if (!answeredQuestions.has(questionIndex)) {
                        score++;
                        selectedcorrect++;
                        answeredQuestions.add(questionIndex);
                        updateScore();
                        checkCompletion();
                    }
                    disableQuestion(cardBodyDiv);
                } else {
                    optionDiv.classList.add('bg-danger');
                    if (attempts[questionIndex] >= 1) {
                        if (NEGATIVE_MARKING_ENABLED) {
                            if (score > 0 && score - negativeMarkingValue >= 0) {
                                score -= negativeMarkingValue;
                                updateScore();
                            }
                        }
                        cardBodyDiv.classList.add('incorrect');
                        cardHeader.classList.add('incorrect');
                        disableQuestion(cardBodyDiv);
                        checkCompletion();
                    }
                }
            }

            function displayQuestions(questions) {
                const container = document.getElementById(QUESTIONS_CONTAINER_ID);
                questions.forEach((q, index) => {
                    attempts[index] = 0;

                    const colDiv = document.createElement('div');
                    colDiv.className = 'col';

                    const cardDiv = document.createElement('div');
                    cardDiv.className = 'card';

                    const cardHeader = document.createElement('div');
                    cardHeader.className = 'card-header';
                    cardHeader.innerHTML = `Q${index + 1}. ${q.text}`;

                    const cardBodyDiv = document.createElement('div');
                    cardBodyDiv.className = 'card-body';
                    cardBodyDiv.dataset.index = index;
                    cardBodyDiv.dataset.answer = q.answer;

                    const questionText = document.createElement('p');
                    questionText.textContent = q.text;
                    questionText.classList = 'fw-bold d-none';

                    const optionsDiv = document.createElement('div');
                    optionsDiv.className = 'options';

                    q.options.forEach((option, i) => {
                        const optionDiv = createOption(option, i, index, cardBodyDiv, cardHeader);
                        optionsDiv.appendChild(optionDiv);
                    });

                    cardBodyDiv.appendChild(questionText);
                    cardBodyDiv.appendChild(optionsDiv);
                    cardDiv.appendChild(cardHeader);
                    cardDiv.appendChild(cardBodyDiv);
                    colDiv.appendChild(cardDiv);
                    container.appendChild(colDiv);
                });
            }

            function disableQuestion(cardBodyDiv) {
                cardBodyDiv.classList.add('disabled');
                const inputs = cardBodyDiv.querySelectorAll('input[type="radio"]');
                inputs.forEach(input => input.disabled = true);
            }

            function updateScore() {
                const scoreContainer = document.getElementById(SCORE_CONTAINER_ID);
                scoreContainer.textContent = `${Math.round(score)} / ${totalQuestions}`;
                scoreContainer.classList.remove('d-none');
                scoreContainer.classList.add('animate');
                setTimeout(() => {
                    scoreContainer.classList.remove('animate');
                }, 500);
            }

            function startTimer(duration) {
                let timer = duration,
                    minutes,
                    seconds;
                const timerElement = document.getElementById(TIMER_ELEMENT_ID);
                timerInterval = setInterval(() => {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    timerElement.textContent = `${minutes}:${seconds}`;

                    if (--timer < 0) {
                        clearInterval(timerInterval);
                        endQuiz();
                    }
                }, 1000);
            }

            function endQuiz() {
                disableAllQuestions();
                showFinalScore();
            }

            function disableAllQuestions() {
                const questionCards = document.querySelectorAll('.card-body');
                questionCards.forEach(cardBody => {
                    cardBody.classList.add('disabled');
                    const inputs = cardBody.querySelectorAll('input[type="radio"]');
                    inputs.forEach(input => input.disabled = true);
                });
            }

            function showFinalScore() {
                const finalScore = document.getElementById(FINAL_SCORE_ID);
                const congratsMessage = document.getElementById(CONGRATS_MESSAGE_ID);
                const timeTaken = document.getElementById(TIME_TAKEN_ID);
                const totalTime = Math.round((new Date() - startTime) / 1000);
                const minutes = Math.floor(totalTime / 60);
                const seconds = totalTime % 60;
                const timeTakenText = `Time taken: ${minutes} minutes and ${seconds} seconds`;

                // const correctPercentage = Math.round((score / totalQuestions) * 100);
                const correctPercentage = Math.round((score / totalQuestions) * 100);
                // const incorrectAnswers = totalQuestions - score;
                const incorrectAnswers = totalQuestions - selectedcorrect;
                const accuracy = (score / totalQuestions * 100).toFixed(2);

                finalScore.textContent = `Your score is: ${Math.round(score)} / ${totalQuestions}`;
                timeTaken.textContent = timeTakenText;

                let analysisMessage = `
                            <strong>Analysis:</strong><br>
                            Total Questions: ${totalQuestions}<br>
                            Correct Answers: ${selectedcorrect}<br>
                            Incorrect Answers: ${incorrectAnswers}<br>
                            Accuracy: ${accuracy}%<br><br>     
                        `;

                const messages = [
                    { threshold: totalQuestions, message: `Fantastic job ${name}!</p><p>You got a perfect score! Keep up the great work!` },
                    { threshold: totalQuestions - 1, message: `Excellent work ${name}!</p><p>Almost perfect, keep striving for that 100%!` },
                    { threshold: Math.ceil(totalQuestions * 0.9), message: `Great job ${name}!</p><p>You're doing really well! Just a bit more practice to reach perfection!` },
                    { threshold: Math.ceil(totalQuestions * 0.8), message: `Very good effort ${name}!</p><p>You're scoring high, keep practicing and you'll get even better!` },
                    { threshold: Math.ceil(totalQuestions * 0.7), message: `Good job ${name}!</p><p>You're on the right track, keep up the hard work!` },
                    { threshold: Math.ceil(totalQuestions * 0.6), message: `Nice effort ${name}!</p><p>Keep practicing and you'll see continuous improvement!` },
                    { threshold: Math.ceil(totalQuestions * 0.5), message: `Well done ${name}!</p><p>You're halfway there, keep practicing to improve your score!` },
                    { threshold: Math.ceil(totalQuestions * 0.4), message: `Not bad ${name}!</p><p>Keep practicing and you'll get better each time!` },
                    { threshold: Math.ceil(totalQuestions * 0.3), message: `Nice try ${name}!</p><p>Don't get discouraged, practice makes perfect!` },
                    { threshold: Math.ceil(totalQuestions * 0.2), message: `Keep going ${name}!</p><p>Each attempt is a step towards improvement!` },
                    { threshold: Math.ceil(totalQuestions * 0.1), message: `Don't give up ${name}!</p><p>Every effort counts, keep practicing and you'll get there!` },
                    { threshold: 0, message: `Don't be disheartened ${name}!</p><p>Keep trying and you'll see progress! Refresh the page to try again.` },
                    { threshold: -Infinity, message: `Oops ${name}!</p><p>It looks like your score went below zero. Don't worry, you can always try again and improve! Keep practicing!` },
                ];

                const motivationalEnding = `Keep practicing on dmj.one, where we believe in "Quality Education for All". Your continuous effort and practice will surely lead to success!`;


                const selectedMessage = messages.find(m => score >= m.threshold).message;

                congratsMessage.innerHTML = `<p class='fw-bold text-center'>${selectedMessage}</p>${analysisMessage}<p>${motivationalEnding}</p>`;

                document.querySelector('.name-container').classList.add('d-none');
                document.querySelector('.timer-container').classList.add('d-none');
                document.querySelector('.score-container').classList.add('d-none');

                const body = document.querySelector('body');
                body.classList.add('darken');
                const container = document.querySelector('.container');
                container.classList.add('blur');

                const endModal = new bootstrap.Modal(document.getElementById(END_MODAL_ID));
                endModal.show();

                setTimeout(() => {
                    location.reload();
                }, 15000);
            }

            function checkCompletion() {
                if (Object.values(attempts).filter(attempt => attempt > 0).length === totalQuestions) {
                    clearInterval(timerInterval);
                    endQuiz();
                }
            }

            fetchQuestions();
        }

        if (window.ReviewSubjectQuestions) {
            (function () {
                const reviewcss = document.createElement('link');
                reviewcss.setAttribute('rel', 'stylesheet');
                reviewcss.setAttribute('href', '/css/reviewaiken.css');
                document.head.appendChild(reviewcss);

                const APA6 = document.createElement('link');
                APA6.setAttribute('rel', 'stylesheet');
                APA6.setAttribute('href', '/css/print-article-APA6.css');
                document.head.appendChild(APA6);




                document.body.innerHTML = `
                    <article class="agen-tableofcontents" style="break-after: avoid !important;">
                    <h3 class="text-center fw-bold display-4">Review Of Questions</h3>
                    <p class="bg-warning bg-opacity-25 p-3 fw-bold text-center d-print-none">Press Ctrl + P to Print or to Save as PDF.</p>
                    <div class="instructionsforprofessor">
                        <div class="row py-3 w-100">
                            <div class="col-6">
                                <p class="text-start">Subject:_____________________________</p>
                            </div>
                            <div class="col-6">
                                <p class="text-end">Professor:_____________________________</p>
                            </div>
                        </div>

                        <p class="text-left">Dear ${window.GLOBAL_get_Faculty_Name_ ? 'Dr. / Shri. / Smt. ' + window.GLOBAL_get_Faculty_Name_ : 'Subject Expert'},<br><br>
                        Thank you for sparing your valuable time to review these questions. Education is the foundation upon which we build our future. By diligently reviewing each question, you contribute to a more informed, educated, and empowered student community. By committing to accurate and thorough reviews, you help shape the minds of tomorrow's leaders. Your effort in this review process is greatly appreciated.</p>
                        <p>At dmj.one, we believe in "Quality Education for All." Your dedication to reviewing and ensuring the correctness of the answers is crucial to this mission. Accurate answers in these quizzes ensure effective learning for students.<br>Please follow the instructions below to review the questions and mark the correct options for the incorrect ones you find. <span class="fw-bold">I thank you for your invaluable contribution.</span></p>
                        
                        <br>
                        <p class="">Divya Mohan<br>Founder, dmj.one | CTO, Biopronut Pvt. Ltd.</p>
                        <hr>

                        <p class="py-3">
                            <strong>Instructions:</strong>
                            <ul>                                
                                <li>For each question you found to be incorrect, please write down the question number in the top row and the correct option in the bottom row.</li>
                                <li>Please ensure to fill each box correctly as per the question and option provided.</li>
                                <li>Kindly double-check each entry to ensure accuracy.</li>
                            </ul>
                        </p>

                        ${Array.from({ length: 1 }, () => `
                            <table class="table table-bordered" style="width: 100%; margin-top: 20px; table-layout: fixed;">
                                <thead>
                                    <tr>
                                        <th colspan="20" class="text-center">Please write the wrong question number below this.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        ${Array.from({ length: 20 }, () => `
                                            <td>
                                                <input type="text" placeholder="" style="width: 100%; border: none; text-align: center;">
                                            </td>
                                        `).join('')}
                                    </tr>
                                    <tr>
                                        ${Array.from({ length: 20 }, () => `
                                            <td>
                                                <input type="text" placeholder="" style="width: 100%; border: none; text-align: center;">
                                            </td>
                                        `).join('')}
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colspan="20" class="text-center">Please write the correct option for that question above.</th>
                                    </tr>
                                </tfoot>
                            </table>
                            `).join('')}
                            <table class="table table-bordered" style="width: 100%; margin-top: 20px; table-layout: fixed;">
                                <tbody>
                                    <tr>
                                        ${Array.from({ length: 20 }, () => `
                                            <td>
                                                <input type="text" placeholder="" style="width: 100%; border: none; text-align: center;">
                                            </td>
                                        `).join('')}
                                    </tr>
                                    <tr>
                                        ${Array.from({ length: 20 }, () => `
                                            <td>
                                                <input type="text" placeholder="" style="width: 100%; border: none; text-align: center;">
                                            </td>
                                        `).join('')}
                                    </tr>
                                </tbody>            
                            </table>
                        </article>
                    </div>
                    <hr class="m-0">
                    <article id="questions-container" class="m-0 p-0 pb-5"></article>
                `;

                async function fetchQuestions() {
                    try {
                        const response = await fetch(FETCH_FILE_NAME_WITH_DYNAMIC_PATH);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await response.text();
                        const questions = parseQuestions(data);
                        displayQuestions(questions);
                    } catch (error) {
                        console.error('Error fetching the questions:', error);
                    }
                }

                function parseQuestions(data) {
                    const lines = data.split('\n');
                    let questions = [];
                    let currentQuestion = null;

                    lines.forEach(line => {
                        line = line.trim();
                        if (line.startsWith('ANSWER:')) {
                            if (currentQuestion) {
                                currentQuestion.answer = line.split(' ')[1];
                                questions.push(currentQuestion);
                                currentQuestion = null;
                            }
                        } else if (line.match(/^[A-Z][).]/)) {
                            if (currentQuestion) {
                                currentQuestion.options.push(line);
                            }
                        } else if (line) {
                            if (currentQuestion) {
                                questions.push(currentQuestion);
                            }
                            currentQuestion = { text: line, options: [], answer: '' };
                        }
                    });
                    return questions;
                }

                function shuffle(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                }

                function displayQuestions(questions) {
                    const container = document.getElementById('questions-container');
                    const fragment = document.createDocumentFragment();

                    questions.forEach((q, index) => {
                        const questionDiv = document.createElement('div');
                        questionDiv.className = 'question';

                        const questionText = document.createElement('div');
                        questionText.className = 'question-text';
                        questionText.textContent = `Q${index + 1}: ${q.text}`;
                        questionDiv.appendChild(questionText);

                        const optionsDiv = document.createElement('div');
                        optionsDiv.className = 'options';

                        const shuffledOptions = shuffle([...q.options]);
                        const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

                        shuffledOptions.forEach((option, i) => {
                            const optionLetter = option.charAt(0);
                            const isCorrect = optionLetter === q.answer;
                            const optionDiv = document.createElement('div');
                            optionDiv.className = isCorrect ? 'correct-answer' : '';
                            optionDiv.textContent = `${optionLabels[i]}) ${option.slice(2)}`;
                            optionsDiv.appendChild(optionDiv);
                        });
                        questionDiv.appendChild(optionsDiv);
                        fragment.appendChild(questionDiv);
                    });

                    container.appendChild(fragment);
                }

                fetchQuestions();
            })();

        }
    });
})();

/************************** CHANGE SVG COLOR TO CONTRAST THE DISPLAY ***************************/
(function () {
    document.addEventListener('DOMContentLoaded', (event) => {
        function applyColorScheme(scheme) {
            // Select all SVG elements
            const svgs = document.querySelectorAll('svg');
            svgs.forEach(svg => {
                // Set SVG background to transparent
                svg.style.backgroundColor = 'transparent';

                // Update text color based on the color scheme
                svg.querySelectorAll('text').forEach(text => {
                    text.style.fill = scheme === 'dark' ? '#FFFFFF' : '#000000';
                });

                // Update the stroke for ellipses and paths
                svg.querySelectorAll('ellipse, path').forEach(shape => {
                    shape.style.stroke = scheme === 'dark' ? '#FFFFFF' : '#000000';
                });

                // Handle polygons - the first polygon is typically the background
                const polygons = svg.querySelectorAll('polygon');
                if (polygons.length > 0) {
                    //polygons[0].style.fill = 'transparent'; // Make the background transparent
                    // polygons[0].style.stroke = 'transparent';
                    // Style the remaining polygons (arrowheads) accordingly
                    for (let i = 0; i < polygons.length; i++) {
                        polygons[i].style.fill = scheme === 'dark' ? '#FFFFFF' : '#000000';
                        polygons[i].style.stroke = scheme === 'dark' ? '#FFFFFF' : '#000000';
                    }
                }
            });
        }

        // Apply initial color scheme
        const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        applyColorScheme(colorScheme);

        // Listen for changes in the color scheme
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            applyColorScheme(event.matches ? 'dark' : 'light');
        });

    });
})();

/************************** GOOGLE OAUTH LOGIN SYSTEM WITH MYACCOUNT ****************************/
(function () {

    if (GLOBAL_crawler_mode) {
        return;
    }

    // const GLOBAL_login_page_path = '/test/google/signin/alogin';
    // const local_account_page_path = '/test/google/signin/account';
    // if its localhost then use /login else use.html    
    const local_account_page_path = '/my/';

    function setCookie(name, value, expiryTime) {
        const expires = new Date(expiryTime).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
    }

    function getCookie(name) {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
    }

    function createSession(userData) {
        const expiryTime = userData.exp * 1000; // Convert exp to milliseconds                 
        localStorage.setItem('google_user', JSON.stringify(userData));
        localStorage.setItem('userName', userData.name);
        setCookie('sid', 'true', expiryTime);
    }

    function destroySession() {
        localStorage.removeItem('google_user');
        localStorage.removeItem('userName');
        document.cookie = 'sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        const timeoutExpiry = Date.now() + 5 * 60 * 1000;
        setCookie('logout_timeout', 'true', timeoutExpiry);
    }

    function signOut() {
        destroySession();
        window.location.reload(true);
    }

    function savetoworkerforsecuritylog(response) {
        fetch('https://dmj.one/api/googlelogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)
        }).then(res => {
            if (!res.ok) {
                console.error('Failed to store security log');
            }
        }).catch(err => {
            console.error('Error creating security log', err);
        });
    }

    window.handleCredentialResponse = function (response) {
        // console.log(response);
        const userObject = JSON.parse(atob(response.credential.split('.')[1]));
        // console.log(userObject);
        userObject.timestamp = Date.now();
        savetoworkerforsecuritylog(response);
        createSession(userObject);
        displayLogin();
    };

    function checkLogin() {
        const userData = localStorage.getItem('google_user');
        const skipPromptCookie = getCookie('sid');

        if (!userData || !skipPromptCookie) {
            destroySession();
            return false;
        }

        if (userData && skipPromptCookie) {
            try {
                const parsedUserData = JSON.parse(userData);
                const currentTime = Date.now();
                const expiryTime = parsedUserData.exp * 1000;

                if (currentTime >= expiryTime) {
                    destroySession();
                    return false;
                } else {
                    return true;
                }
            } catch (e) {
                destroySession();
                return false;
            }
        } else {
            return false;
        }
    }

    console.log(checkLogin());

    function getRedirectUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        let redirectto = urlParams.get('redirect');
        if (redirectto) {
            // Ensure that the redirect path begins with a '/' to prevent unintended URLs
            if (!redirectto.startsWith('/')) {
                redirectto = '/' + redirectto;
            }
            // Prepend the origin if it's a relative path
            if (!redirectto.startsWith('http') && !redirectto.startsWith('https')) {
                redirectto = window.location.origin + redirectto;
            }
        }
        console.log('Redirect to: ', redirectto);
        return redirectto;
    }

    function displayLogin() {
        const redirectto = getRedirectUrl();
        const isloggedin = checkLogin();

        if (!isloggedin) {
            console.log('User not logged in from displayLogin');
            // Redirect to login page if not logged in and currently on the account page
            if (window.location.pathname !== GLOBAL_login_page_path && window.location.pathname !== '/') { globalautologinprompt(); }
            if (window.location.pathname === local_account_page_path) {
                window.location.href = GLOBAL_login_page_path + '?redirect=' + encodeURIComponent(window.location.pathname);
            }
        } else {
            console.log('User logged in');
            // If there's a valid redirect URL, navigate there
            if (redirectto) {
                window.location.href = redirectto;
            } else {
                // Redirect to the account page if no specific redirect provided and currently on the login page
                if (window.location.pathname === GLOBAL_login_page_path) {
                    window.location.href = local_account_page_path;
                }
            }
            displayUserLoggedInNav(); // Assuming this function updates the navigation for logged-in users
        }
    }

    function globalautologinprompt() {
        const logout_timeout = getCookie('logout_timeout');
        document.body.innerHTML += `<div id="g_id_onload"
                        data-client_id="107722137045-s1shk381lhpsu132999cl102kdlgs7c3.apps.googleusercontent.com"
                        data-context="signin"
                        data-ux_mode="popup"
                        data-callback="handleCredentialResponse"
                        data-auto_select=${logout_timeout ? "false" : "true"}
                        data-skip_prompt_cookie="sid"
                        data-itp_support="true">
                    </div>`;
    }

    // function displayUserLoggedInNav() {
    //     isloggedin = checkLogin();
    //     if (!isloggedin) {
    //         console.log('User not logged in from displayUserLoggedInNav');
    //         return;
    //     }
    //     if (isloggedin && localStorage.getItem('google_user')) {
    //         try {
    //             const userDetails = JSON.parse(localStorage.getItem('google_user'));
    //             const userMenu = document.getElementById('userMenu');
    //             userMenu.innerHTML = `<li class="nav-item dropdown">
    //                 <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    //                     <img src="${userDetails.picture}" alt="User Picture" class="rounded-circle" width="25" height="25" id="userPic">
    //                 </a>
    //                 <ul class="dropdown-menu">
    //                     <li>
    //                         <a class="dropdown-item" href="${GLOBAL_login_page_path}">My Account</a>
    //                     </li>
    //                         <!-- <a class="dropdown-item" href="#">${userDetails.name}</a>                
    //                         <a class="dropdown-item" href="#">${userDetails.email}</a> -->
    //                     <li>                
    //                         <div class="dropdown-divider"></div>
    //                         <button class="dropdown-item signOutButton">Logout</button>
    //                     </li>        
    //                 </ul>
    //                 </li>`;
    //             const signOutButtons = document.querySelectorAll('.signOutButton');
    //             signOutButtons.forEach(button => {
    //                 button.addEventListener('click', signOut);
    //             });
    //         } catch (e) {
    //             console.log('Could not parse user details from localStorage', e);
    //         }
    //     }
    // }

    function displayUserLoggedInNav() {
        isloggedin = checkLogin();
        if (!isloggedin) {
            console.log('User not logged in from displayUserLoggedInNav');
            return;
        }
        if (isloggedin && localStorage.getItem('google_user')) {
            try {
                const userDetails = JSON.parse(localStorage.getItem('google_user'));
                const startTime = Date.now();

                (function pollForUserMenu() {
                    const userMenu = document.getElementById('userMenu');
                    if (userMenu) {
                        userMenu.innerHTML = `<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="${userDetails.picture}" alt="User Picture" class="rounded-circle" height="25" id="userPic">
                        </a>
                        <ul class="dropdown-menu mt-3 bg-auto">
                            <li>
                                <a class="dropdown-item" href="${local_account_page_path}">My Account</a>
                            </li>
                            <li>
                                <div class="dropdown-divider"></div>
                                <button class="dropdown-item signOutButton text-danger fw-bold">Logout</button>
                            </li>
                        </ul>
                    </li>`;
                        const signOutButtons = document.querySelectorAll('.signOutButton');
                        signOutButtons.forEach(button => {
                            button.addEventListener('click', signOut);
                        });
                    } else if (Date.now() - startTime < 3000) { // 3 seconds
                        setTimeout(pollForUserMenu, 666); // Check every 100ms
                    } else {
                        console.log('userMenu element not found within 3 seconds');
                    }
                })();
            } catch (e) {
                console.log('Could not parse user details from localStorage', e);
            }
        }
    }


    window.cL = () => {
        if (GLOBAL_crawler_mode) {
            return;
        }

        try {
            let l = checkLogin();
            let main = document.querySelector('main');
            if (!l) {
                // get the main tag                        
                const redirectUrl = encodeURIComponent(window.location.pathname);
                window.location.href = `${GLOBAL_login_page_path}?redirect=${redirectUrl}`;
                main.innerHTML = `<div class="alert alert-danger container my-10 text-center" role="alert">You must be logged in to access this content. Please <a href="${GLOBAL_login_page_path}?redirect=${redirectUrl}">log in</a> to continue.</div>`;
                main.classList.remove('d-none');
                main.style.display = '';
            } else {
                main.classList.remove('d-none');
                main.style.display = '';
            }
            return l;
        } catch (e) {
            console.log('Error: ', e)
        }
    };

    (() => {
        try {
            const isBot = /bot|crawl|slurp|spider/i.test(navigator.userAgent);

            if (!isBot) {
                // Calls cL for sure if the path is under /my/ or else it has 0.1 (10%) chance that it will require login on any page. Don't run on the host url
                if (window.location.pathname.match(/\/my\/(.*)/)) {
                    document.addEventListener('DOMContentLoaded', cL);
                } else {
                    if (window.location.pathname !== GLOBAL_login_page_path && window.location.pathname !== '/') {
                        document.addEventListener('DOMContentLoaded', () => {
                            if (Math.random() < 0.1) {
                                cL();
                            }
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Error in conditional loading script:', error);
            // You might want to log this error to your server for debugging purposes
        }
    })();


    document.addEventListener('DOMContentLoaded', displayLogin);
})();




/************************************* Body *********************************/
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

/************ Update --bs-box-shadow values **********/
(function () {
    function getRandomHexPair(isLight) {
        const hexChars = isLight ? '56789ABCDEF' : '0123456789A';
        return hexChars[Math.floor(Math.random() * hexChars.length)];
    }

    function getRandomColor(isLight) {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += getRandomHexPair(isLight);
        }
        return color;
    }

    function updateBoxShadowVariables(baseColor) {
        const shadowColor = `${baseColor}50`; // 26 Adding 15% opacity in hex
        const shadowColorLg = `${baseColor}50`; // 2C Adding 17.5% opacity in hex
        const shadowColorSm = `${baseColor}50`; // 2C Adding 17.5% opacity in hex

        document.documentElement.style.setProperty('--bs-box-shadow', `0 0.5rem 1rem ${shadowColor}`);
        document.documentElement.style.setProperty('--bs-box-shadow-lg', `0 1rem 3rem ${shadowColorLg}`);
        document.documentElement.style.setProperty('--bs-box-shadow-sm', `0 0.125rem 0.25rem ${shadowColorSm}`);
    }

    // Detect if dark mode is enabled
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set isLight based on the mode
    const isLight = isDarkMode ? true : false;

    // Generate and apply random color based on the mode
    const baseColor = getRandomColor(isLight);
    updateBoxShadowVariables(baseColor);

    // Listen for changes in color scheme and update the shadows accordingly
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const isLight = event.matches;
        const baseColor = getRandomColor(isLight);
        updateBoxShadowVariables(baseColor);
    });
})();

/******************** Style Cards with gradient Globally anywhere ***********/
(function () {
    function getRandomLightColor() {
        var letters = 'BCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    function getRandomDarkColor() {
        var letters = '012345'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    function styleCards() {
        var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var cards = document.querySelectorAll('.card');
        for (var i = 0; i < cards.length; i++) {
            var randomColor1, randomColor2;

            if (prefersDarkMode) {
                randomColor1 = getRandomDarkColor();
                randomColor2 = getRandomDarkColor();
            } else {
                randomColor1 = getRandomLightColor();
                randomColor2 = getRandomLightColor();
            }

            cards[i].style.background = `linear-gradient(270deg, ${randomColor1}, ${randomColor2})`;
        }
    }

    // Expose the styleCards function to the global window object
    window.applyCardStyles = styleCards;

    // Call styleCards to apply the styles
    // styleCards();

    // Listen for changes in the color scheme preference to re-apply styles
    window.matchMedia('(prefers-color-scheme: dark)').addListener(styleCards);
    window.matchMedia('(prefers-color-scheme: light)').addListener(styleCards);
})();


/******************** Hide / Show on scroll **********************/
(function () {
    // Function to generate a random ID
    function generateRandomID() {
        return 'navbar-' + Math.random().toString(36).substr(2, 9);
    }

    // Function to wait until the navbar is available in the DOM
    async function waitForNavbar() {
        return new Promise((resolve) => {
            const checkNavbar = () => {
                const navbarElement = document.querySelector('.navbar');
                if (navbarElement) {
                    resolve(navbarElement);
                } else {
                    requestAnimationFrame(checkNavbar);
                }
            };
            checkNavbar();
        });
    }

    // Function to handle the navbar behavior
    async function handleNavbar() {
        const navbarElement = await waitForNavbar();

        // Check if the navbar already has an ID
        let navbarID = navbarElement.id;

        if (!navbarID) {
            // Generate a random ID and assign it to the navbar if no ID exists
            navbarID = generateRandomID();
            navbarElement.id = navbarID;
        }

        let lastScrollTop = 0;
        let navbarHidden = false;
        const scrollThreshold = 50; // Scroll threshold in pixels

        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Check if user has scrolled more than the threshold
            if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
                if (scrollTop > lastScrollTop && !navbarHidden) {
                    // Scroll down and navbar is not hidden - hide it
                    navbarElement.classList.add('d-none');
                    navbarHidden = true;
                } else if (scrollTop < lastScrollTop && navbarHidden) {
                    // Scroll up and navbar is hidden - show it
                    navbarElement.classList.remove('d-none');
                    navbarHidden = false;
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Update lastScrollTop only if threshold is met
            }
        });
    }

    // Invoke the function to handle navbar behavior
    handleNavbar();
})();


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
        if (!window.loaded_copyright) copyright("all");

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
                if (!window.loaded_header_author) { header_author("NavOnly") }
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


    /**********  AUTOMATION CONTROL **********/
    body_genmenu.processData = function (arr, def_date, def_author, options = {}) {
        // Get Random date near the entered date.
        function gendate(date) {
            var inputDate = new Date(date);
            var offset = Math.floor(Math.random() * 20 - 10) * 24 * 60 * 60 * 1000;
            var newDate = new Date(inputDate.getTime() + offset);
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var outputDate = weekdays[newDate.getUTCDay()] + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear();
            return outputDate;
        }

        function r(t) { if (!t) { return; } return Math.floor(Math.random() * 10) + t }


        const { isMainCategory = false } = options;
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            const title = _data.title || options.title || null;
            if (!title) continue;
            const link = window.location.hostname === 'localhost' ? _data.link.endsWith('/') ? _data.link : _data.link + '.html' || options.link || null : _data.link || options.link || null;
            const date = _data.date || options.date || `${gendate(def_date)}`;
            const desc = _data.desc || options.desc || null;
            const codetype = _data.codetype || options.codetype;
            let readtime = r(_data.readtime) || r(options.readtime) || r(4);
            if (isMainCategory) readtime = null; // Null readtime - Special Case for main category
            let author = _data.author || options.author || def_author;
            if (isMainCategory) author = null; // Null author - Special Case for main category
            const semester = _data.semester || options.semester || null;
            const cardimage = _data.cardimage || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : null) || options.cardimage || null;
            const continuereading = _data.continuereading || options.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
        }
    }


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
    desc = desc || null;
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
    var imgsrc = randomNum01(1) === 0 ? `https://picsum.photos/${randomNum(200, 400)}` : `https://source.unsplash.com/${randomNum(200, 300)}x${randomNum(200, 300)}/?${unsplash_categories}`;
    imgsrc = randomNum01(9) === 0 ? imgsrc : qrcode_data;
    imgsrc = cardimage || imgsrc; // forces to choose supplied image
    var is_qr = Number(imgsrc === qrcode_data);
    var imgAlt = is_qr ? "QR code of the URL" : "A Random Image from picsum.photo";
    var imgStyle = is_qr ? 'object-fit:contain;padding:2.5rem' : "";
    var imgClass = is_qr ? 'postcard__img is_qr' : 'postcard__img';
    var imgTag = `<img class="${imgClass}" src="${imgsrc}" alt="${imgAlt}" style="${imgStyle}" loading="lazy"/>`;

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
        <div class="postcard__preview-txt d-none ${desc ? 'd-sm-block' : ''}"><p>${desc}</p></div>
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

(function () {
    function applyBackground() {
        const today = new Date();
        const month = today.getMonth() + 1; // JavaScript months are 0-11
        const day = today.getDate();

        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        document.body.classList.remove('indian-flag-background', 'default-background');

        if (!isDarkMode) {
            if ((month === 1 && day === 26) || (month === 8 && day === 15)) {
                document.body.classList.add('indian-flag-background');
            } else {
                document.body.classList.add('default-background');
            }
        }
    }

    document.addEventListener('DOMContentLoaded', applyBackground);

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', applyBackground);
})();

/************* Truncate the whitespace of all the codes inside pre code for highlight js **************/
// (function () {
//     function removelines (element, lines) {
//         // Split the code into lines


//         // Extract variable names (this is a simple example and may need adjustment for complex cases)
//         const variableRegex = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g;
//         let variables = new Set();

//         lines.forEach(line => {
//             let match;
//             while ((match = variableRegex.exec(line)) !== null) {
//                 variables.add(match[0]);
//             }
//         });

//         // Filter out common keywords to focus on actual variables
//         const keywords = ['int', 'float', 'double', 'char', 'void', 'const', 'std', 'size_t', 'if', 'else', 'for', 'while', 'return'];
//         variables = Array.from(variables).filter(variable => !keywords.includes(variable));

//         if (variables.length > 0) {
//             // Pick a random variable to rename
//             const randomVariable = variables[Math.floor(Math.random() * variables.length)];
//             const newVariableName = 'changed_' + randomVariable;

//             // Replace the variable in the code
//             element.textContent = element.textContent.split(randomVariable).join(newVariableName);

//             // Inform the user about the changed variable
//             const info = document.createElement('div');
//             info.className = 'bg-info bg-opacity-25 p-2 mb-2 rounded-3 small';
//             info.textContent = `Information: To encourage critical thinking and prevent unreflective copying, the variable/text "${randomVariable}" has been renamed to "${newVariableName}". As a result, the code may not function correctly. Please review and understand the code thoroughly. You will need to revert the changed variable/text name back to "${randomVariable}" to restore the code's functionality.`;
//             element.parentElement.insertAdjacentElement('beforebegin', info);
//         }
//     }
//     document.addEventListener('DOMContentLoaded', function () {
//         try {
//             document.querySelectorAll('pre code').forEach(element => {
//                 element.textContent = element.textContent.trim();
//                 const lines = element.textContent.split('\n');
//                 Math.random() < 0.5 ? removelines(element, lines) : '';
//             });
//             hljs.highlightElement(element);
//         } catch (e) { console.warn("Nothing to render") }
//     });
// })();

(function () {

    /* function removelines(element, lines) {
        // Extract variable names (this is a simple example and may need adjustment for complex cases)
        const variableRegex = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g;
        let variables = new Set();

        lines.forEach(line => {
            let match;
            while ((match = variableRegex.exec(line)) !== null) {
                variables.add(match[0]);
            }
        });

        // Filter out common keywords to focus on actual variables
        const keywords = ['int', 'float', 'double', 'char', 'void', 'const', 'std', 'size_t', 'if', 'else', 'for', 'while', 'return'];
        variables = Array.from(variables).filter(variable => !keywords.includes(variable));

        if (variables.length > 0) {
            // Pick a random variable to rename
            const randomVariable = variables[Math.floor(Math.random() * variables.length)];
            const newVariableName = 'changed_' + randomVariable;

            // Store original text if not already stored
            if (!element.dataset.originalText) {
                element.dataset.originalText = element.textContent;
            }

            // Replace the variable in the code
            element.textContent = element.textContent.split(randomVariable).join(newVariableName);

            // Inform the user about the changed variable
            const info = document.createElement('div');
            info.className = 'bg-info bg-opacity-25 p-2 mb-2 rounded-3 small notice';
            info.textContent = `Notice: To encourage critical thinking and prevent unreflective copying, the variable/text "${randomVariable}" has been renamed to "${newVariableName}". As a result, the code may not function correctly. Please review and understand the code thoroughly. You will need to revert the changed variable/text name back to "${randomVariable}" to restore the code's functionality.`;
            element.parentElement.insertAdjacentElement('beforebegin', info);
        }
    } */

    function removelines(element, lines) {
        // Extract variable names (this is a simple example and may need adjustment for complex cases)
        const variableRegex = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g;
        let variables = new Set();

        lines.forEach(line => {
            let match;
            while ((match = variableRegex.exec(line)) !== null) {
                variables.add(match[0]);
            }
        });

        // Filter out common keywords to focus on actual variables
        const keywords = ['int', 'float', 'double', 'char', 'void', 'const', 'std', 'size_t', 'if', 'else', 'for', 'while', 'return', 'include', 'iostream', 'vector', 'static', 'main', 'print', 'printf', 'scanf', 'input', 'cin', 'cout', 'private', 'public', 'protected', 'class', 'in', 'elif', 'def', 'import', 'as', 'from', 'try', 'except', 'finally', 'with', 'assert', 'del', 'lambda', 'yield', 'global', 'nonlocal', 'pass', 'break', 'continue', 'True', 'False', 'None', 'and', 'or', 'not', 'is', 'raise', 'exec', 'await', 'async', 'str', 'list', 'dict', 'set', 'tuple', 'range', 'len', 'append', 'remove', 'insert', 'keys', 'values', 'items', 'interface', 'extends', 'implements', 'abstract', 'enum', 'package', 'throws', 'null', 'true', 'false', 'instanceof', 'new', 'this', 'super', 'synchronized', 'transient', 'volatile', 'case', 'switch', 'default', 'goto', 'sizeof', 'typedef', 'union', 'struct', 'namespace', 'template', 'catch', 'throw', 'select', 'update', 'delete', 'create', 'drop', 'alter', 'table', 'view', 'index', 'trigger', 'grant', 'revoke', 'commit', 'rollback', 'savepoint', 'declare', 'begin', 'end', 'function', 'procedure', 'cursor', 'when', 'then', 'elsif', 'loop', 'fetch', 'open', 'close', 'exit', 'foreach', 'do', 'repeat', 'until', 'echo', 'require', 'use', 'final', 'die', 'clone', 'self', '__construct', '__destruct', '__call', '__callStatic', '__get', '__set', '__isset', '__unset', '__sleep', '__wakeup', '__toString', '__invoke', '__set_state', '__clone', '__debugInfo', '__autoload'];
        // Make it unique and change it to the format 'data', 'data2', data3' and so on.
        // data = (Array.from(new Set(keywords)))        
        // navigator.clipboard.writeText(data.map(link => `'${link}'`).join(', '));

        variables = Array.from(variables).filter(variable => keywords.includes(variable));

        if (variables.length > 0) {
            // Pick a random variable to rename
            const randomVariable = variables[Math.floor(Math.random() * variables.length)];
            const newVariableName = 'changed_' + randomVariable;

            // Store original text if not already stored
            if (!element.dataset.originalText) {
                element.dataset.originalText = element.textContent.trim();
                // console.log(element.dataset.originalText);
            }

            // Replace the variable in the code (only whole words)
            const wordBoundaryRegex = new RegExp(`\\b${randomVariable}\\b`, 'g');
            if (!wordBoundaryRegex.test(element.textContent)) {
                console.log(False)
                return; // Exit if the variable is not found
            }
            element.textContent = element.textContent.replace(wordBoundaryRegex, newVariableName);

            const info = document.createElement('div');
            info.className = 'bg-info bg-opacity-25 p-2 mb-2 rounded-3 small notice';
            info.textContent = `Notice: To encourage critical thinking and prevent unreflective copying, the variable/text "${randomVariable}" has been renamed to "${newVariableName}". As a result, the code may not function correctly. Please review and understand the code thoroughly. You will need to revert the changed variable/text name back to "${randomVariable}" to restore the code's functionality.`;
            element.parentElement.insertAdjacentElement('beforebegin', info);
        }
    }

    function trimWhitespace(element) {
        element.textContent = element.textContent.trim();
        return element.textContent;
    }

    function revertChanges(element) {
        if (element.dataset.originalText) {
            element.textContent = element.dataset.originalText.trim();
        }
    }

    function applyChanges(element) {
        // Check if the element has the class 'no-code-change'
        if (element.classList.contains('no-code-change')) {
            return;
        }
        const lines = element.textContent.split('\n');
        if (Math.random() < 0.5) {
            removelines(element, lines);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        try {
            document.querySelectorAll('pre code').forEach(element => {
                element.textContent = trimWhitespace(element);
                applyChanges(element);
            });

            window.addEventListener('beforeprint', function () {
                document.querySelectorAll('pre code').forEach(element => {
                    trimWhitespace(element);
                    revertChanges(element);
                    element.removeAttribute('data-highlighted');
                });
                document.querySelectorAll('.notice').forEach(notice => {
                    notice.classList.add('d-none');
                });
                hljs.highlightAll();
            });

            window.addEventListener('afterprint', function () {
                document.querySelectorAll('pre code').forEach(element => {
                    trimWhitespace(element);
                    applyChanges(element);
                    element.removeAttribute('data-highlighted');
                });
                // document.querySelectorAll('.notice').forEach(notice => {
                //     notice.classList.remove('d-none');
                // });
                hljs.highlightAll();
            });
        } catch (e) {
            console.warn("Nothing to render");
        }
    });
})();



/***************** Toast Notification Generator - GLOBAL Function ******************/
// (function () {
//     // TO USE DO THIS --------- EXAMPLE
//     // showNotification('Your system will undergo maintenance tonight.');
//     // showNotification('Your system will undergo maintenance tonight.', { autohide: false, delay: 10000, playSound: false });
//     // showNotification('Update completed successfully.', {
//     //     headerText: 'Update Notification',
//     //     bodyClass: 'toast-body bg-success text-white',
//     //     delay: 3000,
//     //     autohide: true
//     // });
//     // showNotification('A new feature has been enabled.', {
//     //     headerText: 'Feature Update',
//     //     playSound: true,
//     //     soundSrc: '/media/music/notification-sound.mp3',
//     //     autohide: false
//     // });

//     // Configuration defaults
//     const defaults = {
//         id: randomidgenerator(),
//         headerClass: 'toast-header bg-primary',
//         headerIcon: 'bi bi-exclamation-triangle-fill',
//         headerText: 'Notification',
//         bodyClass: 'toast-body',
//         autohide: true,
//         delay: 5000,
//         playSound: true,
//         soundSrc: '/media/music/click-sound.mp3'
//     };

//     // Sound manager to handle audio elements
//     const soundManager = {
//         alertSound: null,
//         playSound: function (src) {
//             if (!this.alertSound) {
//                 this.alertSound = document.createElement("audio");
//                 this.alertSound.id = 'toastAlertSound';
//                 this.alertSound.src = src;
//                 document.body.appendChild(this.alertSound);
//             }
//             this.alertSound.src = src; // Ensure the src is always up-to-date
//             this.alertSound.play().catch(err => console.error("Sound play failed:", err));
//         }
//     };

//     // Function to show the toast
//     const showToast = (settings) => {
//         const toastElement = document.querySelector(`#${settings.id}-toast`);
//         if (toastElement && typeof bootstrap !== 'undefined' && bootstrap.Toast) {
//             const toast = new bootstrap.Toast(toastElement, { autohide: settings.autohide, delay: settings.delay });
//             toast.show();
//             if (settings.playSound) {
//                 soundManager.playSound(settings.soundSrc);
//             }
//         } else {
//             // Retry showing the toast after a delay if Bootstrap is not ready
//             setTimeout(() => showToast(settings), 2000);
//         }
//     };

//     // Function to generate and append toast HTML
//     const generateToast = (settings) => {
//         const toastHTML = `
//             <div id="${settings.id}-toast" class="toast position-fixed bottom-0 end-0 m-2 mx-2 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="${settings.autohide}" data-bs-delay="${settings.delay}">
//                 <div class="${settings.headerClass} d-flex align-items-center">
//                     <i class="${settings.headerIcon} me-2"></i>
//                     <strong class="me-auto">${settings.headerText}</strong>
//                     <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//                 </div>
//                 <div class="${settings.bodyClass}">${settings.bodyText}</div>
//             </div>
//         `;
//         let toastContainer = document.getElementById('toastContainer');
//         if (!toastContainer) {
//             toastContainer = document.createElement('div');
//             toastContainer.id = randomidgenerator();
//             toastContainer.setAttribute('aria-live', 'polite');
//             toastContainer.setAttribute('aria-atomic', 'true');
//             toastContainer.classList.add('position-fixed', 'bottom-0', 'end-0', 'p-3', 'd-none', 'd-sm-block');            
//             document.body.appendChild(toastContainer);
//         }
//         toastContainer.innerHTML = toastHTML;
//         showToast(settings);
//     };

//     // Initialization on user interaction, executes only once
//     const onUserInteraction = (fn) => {
//         const events = ['click', 'mousemove', 'keydown', 'touchstart'];
//         const handler = () => {
//             fn();  // Execute the passed function
//             // Remove all event listeners after the function has executed
//             events.forEach(event => window.removeEventListener(event, handler));
//         };
//         events.forEach(event => window.addEventListener(event, handler));
//     };

//     const showNotification = (message = '', options = {}) => {
//         if (!message) return;
//         const settings = { ...defaults, ...options, bodyText: message };
//         document.readyState === 'loading' ?
//             document.addEventListener('DOMContentLoaded', () => onUserInteraction(() => generateToast(settings))) :
//             onUserInteraction(() => generateToast(settings));
//     };

//     window.showNotification = showNotification;
// })();


(function () {
    // Configuration defaults
    const defaults = {
        id: randomidgenerator(),
        headerClass: 'toast-header bg-primary',
        headerIcon: 'bi bi-exclamation-triangle-fill',
        headerText: 'Notification',
        bodyClass: 'toast-body',
        autohide: true,
        delay: 5000,
        playSound: true,
        soundSrc: '/media/music/click-sound.mp3'
    };

    // Sound manager to handle audio elements
    const soundManager = {
        alertSound: null,
        playSound: function (src) {
            if (!this.alertSound) {
                this.alertSound = document.createElement("audio");
                this.alertSound.id = 'toastAlertSound';
                this.alertSound.src = src;
                document.body.appendChild(this.alertSound);
            }
            this.alertSound.src = src; // Ensure the src is always up-to-date
            this.alertSound.play().catch(err => console.error("Sound play failed:", err));
        }
    };

    // Notification queue
    const notificationQueue = [];
    let isShowingNotification = false;

    const showNextNotification = () => {
        if (notificationQueue.length === 0) {
            isShowingNotification = false;
            return;
        }

        isShowingNotification = true;
        const settings = notificationQueue.shift();
        generateToast(settings);
    };

    // Function to show the toast
    const showToast = (settings) => {
        const toastElement = document.querySelector(`#${settings.id}-toast`);
        if (toastElement && typeof bootstrap !== 'undefined' && bootstrap.Toast) {
            const toast = new bootstrap.Toast(toastElement, {
                autohide: settings.autohide,
                delay: settings.delay
            });
            toast.show();
            if (settings.playSound) {
                soundManager.playSound(settings.soundSrc);
            }
            toastElement.addEventListener('hidden.bs.toast', () => {
                toastElement.remove();  // Remove the toast element after it is hidden
                showNextNotification(); // Show the next notification in the queue
            });
        } else {
            // Retry showing the toast after a delay if Bootstrap is not ready
            setTimeout(() => showToast(settings), 2000);
        }
    };

    // Function to generate and append toast HTML
    const generateToast = (settings) => {
        const toastHTML = `
            <div id="${settings.id}-toast" class="toast shadow-lg m-2" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="${settings.autohide}" data-bs-delay="${settings.delay}">
                <div class="${settings.headerClass} d-flex align-items-center">
                    <i class="${settings.headerIcon} me-2"></i>
                    <strong class="me-auto">${settings.headerText}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="${settings.bodyClass}">${settings.bodyText}</div>
            </div>
        `;
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3');
            document.body.appendChild(toastContainer);
        }
        toastContainer.innerHTML += toastHTML;
        showToast(settings);
    };

    // Initialization on user interaction, executes only once
    const onUserInteraction = (fn) => {
        const events = ['click', 'mousemove', 'keydown', 'touchstart'];
        const handler = () => {
            fn();  // Execute the passed function
            // Remove all event listeners after the function has executed
            events.forEach(event => window.removeEventListener(event, handler));
        };
        events.forEach(event => window.addEventListener(event, handler));
    };

    // const showNotification = (message = '', options = {}) => {
    //     if (!message) return;
    //     const settings = { ...defaults, ...options, bodyText: message };       
    //     notificationQueue.push(settings);
    //     if (!isShowingNotification) {
    //         showNextNotification();
    //     }
    // };

    // window.showNotification = showNotification;

    // Wrapped showNotification to trigger on user interaction

    const showNotification = (message = '', options = {}) => {
        if (!message) return;
        const settings = { ...defaults, ...options, bodyText: message };
        document.readyState === 'loading' ?
            document.addEventListener('DOMContentLoaded', () => onUserInteraction(() => {
                notificationQueue.push(settings);
                if (!isShowingNotification) {
                    showNextNotification();
                }
            })) :
            onUserInteraction(() => {
                notificationQueue.push(settings);
                if (!isShowingNotification) {
                    showNextNotification();
                }
            });
    };

    // Initialize notifications on first user interaction    
    window.showNotification = showNotification;
})();


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


// function copyright(rights, noprint) {
//     window["loaded_copyright"] = 1;
//     // sitemap_var_gen_clipboard(); // uncomment this line to get the sitemap generation link copier
//     if (rights === "off") { return null; }
//     // console.log(noprint);
//     if (noprint === true) { return null; }

//     var footer_all_rights = ' &#8226; All rights reserved';
//     var footer_some_rights = ' &#8226; Some rights reserved';
//     var footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
//     var footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';

//     if (rights == "all") {
//         var rights = footer_all_rights;
//     } else if (rights == "some") {
//         var rights = footer_some_rights;
//     } else { rights = ""; }

//     let footer = document.createElement("footer");
//     footer.id = "defaultcopyrightfooter";

//     var sharingButtons = createSharingButtons();
//     footer.appendChild(sharingButtons);
//     var div = document.createElement("div");
//     var span = document.createElement("span");
//     var strong = document.createElement("strong");

//     const date = new Date();
//     const isServer = "";
//     const lastModified = new Date(document.lastModified);
//     if (date.getTime() === lastModified.getTime()) {
//         isServer = " (Live)";
//     }

//     const modified = "cloudflare" == footer_getHeaderValue('server') ?
//         `<span style="font-size:10px" class="d-print-none">Not seeing updated content? Page was loaded on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>` :
//         `<span style="font-size:10px" class="d-print-none">Not seeing updated content? Page last modified on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>`;

//     const footerNotice = `
//   <span class="footer-notice d-none d-print-block my-0" style="font-size:8pt !important; font-family:"Times New Roman" !important>
//     <h2 class="d-none d-print-block fw-normal my-1 mx-o px-0 text-center">This article is provided as part of the <span class="text-capitalize">public welfare initiatives</span> by <span class='text-lowercase'>dmj.one</span></h2>
//         <div>
//             <strong>General:</strong> All material provided herein is for educational or informational purposes only. No representation is made about the accuracy or completeness of the information contained on this page. Any use of or reliance on this material is strictly at the user's own risk. The author disclaims all liability for any damages or losses arising from such use.
//             <strong>Citations:</strong> Content on this page is the intellectual property of the author. Users may cite the content at their own discretion and must assume full responsibility for maintaining academic integrity and adhering to their institution's citation guidelines.
//             <strong>Commercial Use:</strong> Users must secure their own permissions for any commercial use of this content and agree to indemnify the author from any claims arising from such use.
//             <strong>Contact:</strong> Direct all inquiries to contact@dmj.one. By accessing this content, you agree to contact the author for any further clarification or licensing information.
//         </div>
//   </span>
// `;

//     // Include this variable where you set up the rest of the footer HTML content

//     div.innerHTML = footerNotice;
//     strong.innerHTML = modified + `&copy; 2007 - ${new Date().getFullYear()} ${window.GLOBAL_get_formatted_Author_Name_ ? window.GLOBAL_get_formatted_Author_Name_ + ' |' : ''} dmj.one ${rights} ${footer_link_privacy} ${footer_link_tos}`;
//     span.appendChild(strong);
//     footer.appendChild(div);
//     footer.appendChild(span);

//     document.body.appendChild(footer);


//     const article = document.createElement("article");
//     article.className = 'agen-the-end d-none d-print-block';
//     article.innerHTML = `<h2 class="text-center">The End</h2><div class="text-center">&copy; 2007 - ${new Date().getFullYear()} ${window.GLOBAL_get_formatted_Author_Name_ ? window.GLOBAL_get_formatted_Author_Name_ + ' |' : ''} dmj.one ${rights} ${footer_link_privacy} ${footer_link_tos}</div>`;

//     document.body.appendChild(article);

//     // I want the clipboard to be displayed after footer.
//     // var article = document.createElement("article");
//     // article.className = 'agen-the-end d-none d-print-block';
//     // article.innerHTML = `<h2 class="text-center">The End</h2><div class="text-center">&copy; 2007 - ${new Date().getFullYear()} ${window.GLOBAL_get_formatted_Author_Name_ ? window.GLOBAL_get_formatted_Author_Name_ + ' |' : ''} dmj.one ${rights} ${footer_link_privacy} ${footer_link_tos}</div>`;
//     // footer.appendChild(article); // Append "The End" section to the footer


//     //document.body.appendChild(footer);
//     // document.body.insertBefore(footer, document.body.lastChild);
//     // document.body.appendChild(footer);
//     // document.body.appendChild(article);

//     // 3. Initialize a MutationObserver
//     // let observer = new MutationObserver((mutationsList, observer) => {
//     //     for (let mutation of mutationsList) {
//     //         if (mutation.type === 'childList') {
//     //             // When a child is added to the body
//     //             if (document.body.lastChild !== footer) {
//     //                 // If the last child is not the footer, move the footer to the end
//     //                 document.body.appendChild(footer);
//     //             }
//     //         }
//     //     }
//     // });

//     const observer = new MutationObserver((mutationsList) => {
//         mutationsList.forEach((mutation) => {
//             if (mutation.type === 'childList' && document.body.lastChild !== article) {
//                 document.body.appendChild(footer);
//                 document.body.appendChild(article);
//             }
//         });
//     });

//     // 4. Start observing the body for configured mutations
//     observer.observe(document.body, { childList: true });
//     setTimeout(() => { observer.disconnect(); }, 20); // Disconnect the observer


//     //define service worker
//     if (typeof navigator.serviceWorker !== 'undefined') {
//         navigator.serviceWorker.register('/sw.js')
//     }

//     // Notification cookie
//     //if (!(localStorage.getItem("noshow"))) { dcevars(notify_cookie); }

//     window.onload = function () {
//         // Syntax highlighter - Enable is using highlight js.
//         // hljs.highlightAll();

//         // renderMathInElement(document.body, {
//         //     // customised options
//         //     // • auto-render specific keys, e.g.:
//         //     delimiters: [
//         //         { left: '$$', right: '$$', display: true },
//         //         { left: '$', right: '$', display: false },
//         //         { left: '\\(', right: '\\)', display: false },
//         //         { left: '\\[', right: '\\]', display: true }
//         //     ],
//         //     // • rendering keys, e.g.:
//         //     throwOnError: false
//         // });
//     };
// }

// function copyright(rights, noprint) {
//     function initializeCopyright() {
//     window["loaded_copyright"] = 1;
//     if (rights === "off") return null;
//     if (noprint) return null;

//     const footer_all_rights = ' &#8226; All rights reserved';
//     const footer_some_rights = ' &#8226; Some rights reserved';
//     const footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
//     const footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';

//     rights = rights === "all" ? footer_all_rights : rights === "some" ? footer_some_rights : "";

//     const footer = document.createElement("footer");
//     footer.id = "defaultcopyrightfooter";

//     footer.appendChild(createSharingButtons());

//     const div = document.createElement("div");
//     const span = document.createElement("span");
//     const strong = document.createElement("strong");

//     const date = new Date();
//     let isServer = "";
//     const lastModified = new Date(document.lastModified);
//     if (date.getTime() === lastModified.getTime()) {
//         isServer = " (Live)";
//     }

//     const modified = `cloudflare` === footer_getHeaderValue('server')
//         ? `<span style="font-size:10px" class="d-print-none">Not seeing updated content? Page was loaded on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>`
//         : `<span style="font-size:10px" class="d-print-none">Not seeing updated content? Page last modified on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>`;

//     const footerNotice = `
//         <span class="footer-notice d-none d-print-block my-0" style="font-size:8pt !important; font-family:'Times New Roman' !important">
//             <h2 class="d-none d-print-block fw-normal my-1 mx-o px-0 text-center">This article is provided as part of the <span class="text-capitalize">public welfare initiatives</span> by <span class='text-lowercase'>dmj.one</span></h2>
//             <div>
//                 <strong>General:</strong> All material provided herein is for educational or informational purposes only. No representation is made about the accuracy or completeness of the information contained on this page. Any use of or reliance on this material is strictly at the user's own risk. The author disclaims all liability for any damages or losses arising from such use.
//                 <strong>Citations:</strong> Content on this page is the intellectual property of the author. Users may cite the content at their own discretion and must assume full responsibility for maintaining academic integrity and adhering to their institution's citation guidelines.
//                 <strong>Commercial Use:</strong> Users must secure their own permissions for any commercial use of this content and agree to indemnify the author from any claims arising from such use.
//                 <strong>Contact:</strong> Direct all inquiries to contact@dmj.one. By accessing this content, you agree to contact the author for any further clarification or licensing information.
//             </div>
//         </span>`;

//     div.innerHTML = footerNotice;
//     strong.innerHTML = `${modified}&copy; 2007 - ${new Date().getFullYear()} ${window.GLOBAL_get_formatted_Author_Name_ ? window.GLOBAL_get_formatted_Author_Name_ + ' |' : ''} dmj.one ${rights} ${footer_link_privacy} ${footer_link_tos}`;
//     span.appendChild(strong);
//     footer.appendChild(div);
//     footer.appendChild(span);

//     const article = document.createElement("article");
//     article.className = 'agen-the-end d-none d-print-flex';
//     // article.style = 'page-break-before: always !important; page-break-inside: avoid !important; page-break-after: avoid !important;';
//     article.innerHTML = `<div class="text-center theend fw-bold"><img class="img-fluid" src="${window.GLOBAL_get_qr_code_data}" alt="QR Code of the link" width="400px" height="400px"></div>`;
//     // document.body.appendChild(article);
//     footer.appendChild(article);

//     document.body.appendChild(footer);
//     // const observer = new MutationObserver((mutationsList) => {
//     //     mutationsList.forEach((mutation) => {
//     //         if (mutation.type === 'childList' && document.body.lastChild !== footer) {
//     //             document.body.appendChild(footer);
//     //         }
//     //     });
//         // });

//     // observer.observe(document.body, { childList: true });
//     // setTimeout(() => observer.disconnect(), 2000);

//         if ('serviceWorker' in navigator) {
//             navigator.serviceWorker.register('/sw.js');
//         }

//     window.onload = function () { };
//     }

//     if (document.readyState === 'loading') {
//         document.addEventListener('DOMContentLoaded', initializeCopyright);
//     } else {
//         initializeCopyright();
//     }
// }

function copyright(rights, noprint) {
    function initializeCopyright() {
        window["loaded_copyright"] = 1;
        let onlyrights, dontprint;
        if (rights === "off") return null;
        if (noprint) return null;
        if (rights === "onlyrights") onlyrights = true;
        if (rights === "d-print-none") dontprint = true;


        const footer_all_rights = ' &#8226; All rights reserved';
        const footer_some_rights = ' &#8226; Some rights reserved';
        const footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
        const footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';

        rights = rights === "all" ? footer_all_rights : rights === "some" ? footer_some_rights : "";

        ////////////// DISQUS comments and recommendations section /////////////
        (function () {
            if (GLOBAL_crawler_mode) {
                return;
            }

            try {
                if (window.nodisqus || window.page == 404) return;
                // const urlPattern = /^\/edu\/su\/course\/\w+\/(theory|lab)\/\w+/;
                const urlPattern = /^\/edu\/su\/course\/\w+\/\w+\/\w+/;
                if (!urlPattern.test(window.location.pathname)) return;

                const disqus = document.createElement("article");
                const disqusdiv = document.createElement("div");
                let isDarkTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark';

                disqus.className = `mb-0 p-5 d-print-none text-center ${isDarkTheme ? '' : ''}`;

                disqusdiv.id = "disqus_thread";
                disqusdiv.className = "container";
                disqus.appendChild(disqusdiv);
                document.body.appendChild(disqus);

                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

                if (mediaQuery.matches) {
                    // Add the IntersectionObserver code here
                    const observerOptions = {
                        root: null, // use the viewport as the root
                        rootMargin: '0px',
                        threshold: 0.05 // 5% of the element should be visible
                    };

                    const observerCallback = (entries, observer) => {
                        entries.forEach(entry => {
                            console.log('IntersectionObserver entry:', entry); // Debug log
                            if (entry.isIntersecting) {
                                console.log('disqus_thread is visible'); // Debug log
                                if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
                                    document.documentElement.setAttribute('data-bs-theme', 'light');
                                }
                            } else {
                                console.log('disqus_thread is not visible'); // Debug log
                                if (document.documentElement.getAttribute('data-bs-theme') === 'light') {
                                    document.documentElement.setAttribute('data-bs-theme', 'dark');
                                }
                            }
                        });
                    };


                    const observer = new IntersectionObserver(observerCallback, observerOptions);
                    observer.observe(disqusdiv);

                    // Cleanup the observer if needed (e.g., on page unload)
                    window.addEventListener('beforeunload', () => observer.disconnect());
                }


                ////////////// Disqus recomendation section ////////////////////
                // const disqusrecomendation = document.createElement("div");//
                // disqusrecomendation.id = "disqus_recommendations"; ////////
                // disqusrecomendation.className = "container my-5"; ////////
                // document.body.appendChild(disqusrecomendation); /////////
                ////////////// Section end ////////////////////////////////

                /**
                    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

                var disqus_config = function () {
                    var base_url = 'https://dmj.one';
                    var pathname = window.location.pathname;
                    this.page.url = base_url + pathname;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };

                (function () { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://dmjone.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();

                // (function () { // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
                //     var d = document, s = d.createElement('script'); // IMPORTANT: Replace EXAMPLE with your forum shortname!
                //     s.src = 'https://dmjone.disqus.com/recommendations.js';
                //     s.setAttribute('data-timestamp', +new Date());
                //     (d.head || d.body).appendChild(s);
                // })();
            } catch (e) { console.log("Something failed in Disqus Code") }
        })();
        ////////////////////////// DISQUS Section end    ///////////////////////////////

        const footer = document.createElement("footer");
        footer.id = "defaultcopyrightfooter";
        footer.className = dontprint ? 'd-print-none' : '';

        footer.appendChild(createSharingButtons());

        const div = document.createElement("div");
        const span = document.createElement("span");        
        const strong = document.createElement("strong");        

        const date = new Date();
        let isServer = "";
        const lastModified = new Date(document.lastModified);
        if (date.getTime() === lastModified.getTime()) {
            isServer = " (Live)";
        }

        const modified = `cloudflare` === footer_getHeaderValue('server')
            ? `<span style="font-size:10px" class="d-print-none">Not seeing updated content? Page was loaded on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>`
            : `<span style="font-size:10px" class="d-print-none">Not seeing updated content? Page last modified on ${document.lastModified} ${isServer}. Refresh with <kbd>CTRL</kbd> + <kbd>R</kbd> to check again.</span> <br>`;

        const footerNotice = `
            <span class="footer-notice d-none d-print-block my-0" style="font-size:8pt !important; font-family:'Times New Roman' !important">
                <h2 class="d-none d-print-block fw-normal my-1 mx-o px-0 text-center">This article is provided as part of the <span class="text-capitalize">public welfare initiatives</span> by <span class='text-lowercase'>dmj.one</span></h2>
                <div>
                    <strong>General:</strong> All material provided herein is for educational or informational purposes only. No representation is made about the accuracy or completeness of the information contained on this page. Any use of or reliance on this material is strictly at the user's own risk. The author disclaims all liability for any damages or losses arising from such use.
                    <strong>Citations:</strong> Content on this page is the intellectual property of the author. Users may cite the content at their own discretion and must assume full responsibility for maintaining academic integrity and adhering to their institution's citation guidelines.
                    <strong>Commercial Use:</strong> Users must secure their own permissions for any commercial use of this content and agree to indemnify the author from any claims arising from such use.
                    <strong>Contact:</strong> Direct all inquiries to contact@dmj.one. By accessing this content, you agree to contact the author for any further clarification or licensing information.
                </div>
            </span>`;

        div.innerHTML = onlyrights || noprint ? '' : footerNotice;
        strong.innerHTML = `${modified}&copy; 2007 - ${new Date().getFullYear()} ${window.GLOBAL_get_formatted_Author_Name_ ? window.GLOBAL_get_formatted_Author_Name_ + ' |' : ''} dmj.one ${rights} ${footer_link_privacy} ${footer_link_tos}`;
        span.appendChild(strong);
        footer.appendChild(div);
        footer.appendChild(span);

        const article = document.createElement("article");
        article.className = 'agen-the-end d-none d-print-flex';
        article.innerHTML = `<div class="text-center theend fw-bold"><img class="img-fluid" src="${window.GLOBAL_get_qr_code_data}" alt="QR Code of the link" width="400px" height="400px"></div>`;

        onlyrights ? '' : footer.appendChild(article); // dont append the qr code if onlyrights is true

        document.body.appendChild(footer);

        // Disconnect the observer after a short delay to prevent infinite loop
        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'childList' && !document.body.contains(footer)) {
                    document.body.appendChild(footer);
                }
            });
        });

        observer.observe(document.body, { childList: true });

        setTimeout(() => observer.disconnect(), 5000);

        if (GLOBAL_SERVICEWORKER_INSTALL) {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
            }
        }

        if (GLOBAL_SERVICEWORKER_REINSTALL) {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function (registrations) {
                    for (let registration of registrations) {
                        registration.unregister();
                    }
                }).then(function () {
                    // Register the new service worker
                    navigator.serviceWorker.register('/sw.js').then(function (registration) {
                        console.log('Service worker registered with scope:', registration.scope);
                    }).catch(function (error) {
                        console.error('Service worker registration failed:', error);
                    });
                }).catch(function (error) {
                    console.error('Error unregistering service workers:', error);
                });
            }
        }

        if (GLOBAL_SERVICEWORKER_UNINSTALL) {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function (registrations) {
                    for (let registration of registrations) {
                        registration.unregister().then(function () {
                            console.log('Service worker unregistered:', registration);
                        }).catch(function (error) {
                            console.error('Error unregistering service worker:', error);
                        });
                    }
                }).catch(function (error) {
                    console.error('Error getting service worker registrations:', error);
                });
            }
        }


        window.onload = function () { };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCopyright);
    } else {
        initializeCopyright();
    }
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
    var quoteblock = `
    <div class="text-center bg-warning bg-gradient bg-opacity-25 pt-2 rounded-5 border border-1 border-warning shadow-lg lh-lg">
        <div class="showquote py-3 h5 px-2 syne-mono fs-4"></div>
        <div class="showauthor p-2 rounded-bottom-5 bebas-neue fs-5" style="background:var(--background-color)"></div>
    </div>`;
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

/******** Indent Paragraph if lines are more than 1 *********/
// (function () {
// applies it everywhere
//     document.addEventListener("DOMContentLoaded", function () {
//         var paragraphs = document.querySelectorAll('p');

//         paragraphs.forEach(function (p) {
//             var lineHeight = parseFloat(getComputedStyle(p).lineHeight);
//             var height = p.offsetHeight;

//             if (height > lineHeight) {
//                 p.style.textIndent = '0.5in';
//             }
//         });
//     });
// })();
(function () {
    if (GLOBAL_crawler_mode) {
        return;
    }

    document.addEventListener("DOMContentLoaded", function () {
        function applyIndentation() {
            var paragraphs = document.querySelectorAll('p');

            paragraphs.forEach(function (p) {
                var lineHeight = parseFloat(getComputedStyle(p).lineHeight);
                var height = p.offsetHeight;

                if (height > lineHeight) {
                    p.style.textIndent = '0.5in';
                }
            });
        }

        window.addEventListener('beforeprint', applyIndentation);
        window.addEventListener('afterprint', function () {
            var paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(function (p) {
                p.style.textIndent = '';
            });
        });
    });
})();



/******** Display Cookie Notice ********/
(function () {
    if (GLOBAL_crawler_mode) {
        return;
    }

    if (!localStorage.getItem("noshow")) {
        document.addEventListener('DOMContentLoaded', function () {
            const cookieNotice = document.createElement("div");
            cookieNotice.id = "cookie-notice";
            cookieNotice.classList.add("w-100", "bg-dark", "text-white", "pt-3", "px-4", "pb-1", "position-fixed", "d-print-none");
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
        return month === 4 || month === 7;
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
        return day === 5 && month === 6; // Change the date to the birthday date you want to celebrate
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
        { day: 15, month: 6, year: 1967, occasion: 'birthday', name: 'dmj' },
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
        { day: 7, month: 5, year: 2003, occasion: 'birthday', name: 'Kaustuv' },
        { day: 19, month: 5, year: 2001, occasion: 'birthday', name: 'Tarun' },
        { day: 20, month: 5, year: 2001, occasion: 'birthday', name: 'Rohit' },
        { day: 23, month: 5, year: 2004, occasion: 'birthday', name: 'Anshika' },
        { day: 1, month: 6, year: 2004, occasion: 'birthday', name: 'Aryan' },
        { day: 3, month: 6, year: 2004, occasion: 'birthday', name: 'Adarsh' },
        { day: 4, month: 6, year: 2004, occasion: 'birthday', name: 'Aarushi' },
        { day: 13, month: 6, year: 2004, occasion: 'birthday', name: 'Anshuman' },
        { day: 16, month: 6, year: 2000, occasion: 'birthday', name: 'Yuvraj' },
        { day: 10, month: 7, year: 2004, occasion: 'birthday', name: 'Riyant' },
        { day: 2, month: 8, year: 2004, occasion: 'birthday', name: 'Aryan' },
        { day: 2, month: 8, year: 1996, occasion: 'birthday', name: 'Palvinder' },
        { day: 11, month: 8, year: 2001, occasion: 'birthday', name: 'Paras' },
        { day: 17, month: 8, year: 1990, occasion: 'birthday', name: 'Dr. BB Sharma' },
        { day: 19, month: 8, year: 2004, occasion: 'birthday', name: 'Shruti' },
        { day: 20, month: 8, year: 2004, occasion: 'birthday', name: 'Piyush' },
        { day: 4, month: 9, year: 2004, occasion: 'birthday', name: 'Kamaksha' },
        { day: 28, month: 9, year: 1998, occasion: 'birthday', name: 'Stephen' },
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
        return day === 5 && month === 6;
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
    if (GLOBAL_crawler_mode) {
        return;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const htmlContent = `
        <div id="btn_focus-class-message" class="btn_focus-class-message position-fixed">
            <button id="common-message-us-button" type="button" class="btn bg-opacity-10 button_slide slide_right" data-bs-toggle="modal" data-bs-target="#common_msg_us_model"><i class="bi bi-envelope-plus-fill"></i> Message Us</button>
        </div>
        
        <div class="modal fade" id="common_msg_us_model" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-auto">
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
    if (GLOBAL_crawler_mode) {
        return;
    }

    let showSearchButton = false;

    document.addEventListener('DOMContentLoaded', function () {
        const htmlContent = `
            <div class="btn_focus-class_search position-fixed">
            <button id="common-message-us-button" type="button" class="btn bg-opacity-10 button_slide slide_right" data-bs-toggle="modal" data-bs-target="#searchbox"><i class="bi bi-search"></i> Search</button>
        </div>
        
        <div class="modal fade shadow-lg" id="searchbox" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content bg-auto">
                    <div class="modal-header">
                        <h5 class="modal-title" id="searchModalLabel">Search with Bing</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
    if (GLOBAL_crawler_mode) {
        return;
    }

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
                return `<div class="container p-4 m-4 rounded-3 border shadow-lg" style="background-color: var(--background-color) !important;">
  <h4 class="text-center">Quick Break Time!</h4>
  <p class="p-2">Let's take a moment to stand up, stretch, and take a few deep breaths. A quick pause can significantly boost your focus and productivity!</p>
  <div id="${timerId}" class="fs-1 text-center text-danger">⏳</div>
  <p class="text-muted text-center">Cannot wait? Refresh the page to remove the timer.</p>
</div>`;
            } else {
                return `<div class="container p-4 m-4 rounded-3 shadow-lg border border-1 border-warning-subtle" style="background-color: var(--background-color) !important;">
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
<div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="10000" >
  <div class="toast-header bg-danger bg-opacity-50" ">
    <strong class="me-auto"> <i class="fas fa-exclamation-triangle"></i> Break Reminder</strong>
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
// (function () {
//     document.addEventListener('DOMContentLoaded', function () {
//         try {

//             // Select all article elements with class 'borderart' or auto_id
//             const articlesWithBorderArt = document.querySelectorAll('article.auto_id, article.borderart, article.genautoid');

//             // Loop through each article and assign a random ID
//             articlesWithBorderArt.forEach(function (article) {
//                 var randomId = 'article-' + Math.floor(Math.random() * 1000000);
//                 article.setAttribute('id', randomId);
//             });

//             const main = document.querySelector('main');
//             const firstArticle = main.querySelector('article');
//             const existingToc = main.querySelector('.accordion#toc');
//             const autogen_tableofcontents = main.querySelector('.agen-tableofcontents');

//             if (autogen_tableofcontents && !existingToc) {
//                 // Check if a ToC does not already exist
//                 const tocHTML = `
//             <div class="container mt-4 w-100 w-xl-75 d-print-none">
//                 <div class="accordion" id="toc">
//                     <div class="accordion-item">
//                         <h2 class="accordion-header" id="h1">
//                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-controls="c1" aria-expanded="false">
//                                 <i class="fas fa-book"></i> <strong>&nbsp;Table of Contents</strong>
//                             </button>
//                         </h2>
//                         <div id="c1" class="accordion-collapse collapse" aria-labelledby="h1" data-bs-parent="#toc">
//                             <div class="accordion-body">
//                                 <ol class="list-unstyled p-0 m-0"></ol>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>`;

//                 // Append the ToC HTML to the first article
//                 // firstArticle.innerHTML += tocHTML;
//                 autogen_tableofcontents.innerHTML += tocHTML;

//                 window.autogen_tableofcontents = 1;
//             }

//             if (window.autogen_tableofcontents) {
//                 // Proceed to populate the ToC with entries as necessary
//                 const articles = document.querySelectorAll('article[id]');
//                 const tocList = document.querySelector('.accordion-body ol');

//                 articles.forEach(article => {
//                     const id = article.id;
//                     const heading = article.querySelector('h3, h4');
//                     if (heading) {
//                         const li = document.createElement('li');
//                         li.className = 'p-1';
//                         const anchor = document.createElement('a');
//                         anchor.href = `#${id}`;
//                         anchor.innerHTML = `<i class="fas fa-chevron-circle-right"></i> ${heading.textContent.trim()}`;
//                         li.appendChild(anchor);
//                         tocList.appendChild(li);
//                     }
//                 });
//             }
//         } catch (e) { console.log('Could Not insert Automatically Generated Table of Contents') }
//     });
// })();
// (function () {
// document.addEventListener('DOMContentLoaded', function () {
//     try {
//         // Select all article elements with class 'borderart', 'auto_id', or 'genautoid'
//         const articlesWithBorderArt = document.querySelectorAll('article.auto_id, article.borderart, article.genautoid');

//         // Loop through each article and assign a random ID
//         articlesWithBorderArt.forEach(function (article) {
//             var randomId = 'article-' + Math.floor(Math.random() * 1000000);
//             article.setAttribute('id', randomId);
//         });

//         const main = document.querySelector('main');
//         const existingToc = main.querySelector('.accordion#toc');
//         const autogen_tableofcontents = main.querySelector('.agen-tableofcontents');

//         if (autogen_tableofcontents && !existingToc) {
//             const accordionId = randomidgenerator();
//             const collapseId = randomidgenerator();

//             // Check if a ToC does not already exist
//             const tocHTML = `
//                         <div class="container mt-4 w-100 w-xl-75 d-print-none">
//                             <div class="accordion" id="toc">
//                                 <div class="accordion-item">
//                                     <h2 class="accordion-header" id="h1">
//                                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-controls="c1" aria-expanded="false">
//                                             <i class="fas fa-book"></i> <strong>&nbsp;Table of Contents</strong>
//                                         </button>
//                                     </h2>
//                                     <div id="c1" class="accordion-collapse collapse" aria-labelledby="h1" data-bs-parent="#toc">
//                                         <div class="accordion-body">
//                                             <ol class="list-unstyled p-0 m-0"></ol>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>`;

//             // Append the ToC HTML to the autogen_tableofcontents
//             autogen_tableofcontents.innerHTML += tocHTML;

//             window.autogen_tableofcontents = 1;
//         }

//         if (window.autogen_tableofcontents) {
//             // Proceed to populate the ToC with entries as necessary
//             const articles = document.querySelectorAll('article[id]');
//             const tocList = document.querySelector('.accordion-body ol');

//             articles.forEach(article => {
//                 const id = article.id;
//                 const heading = article.querySelector('h3, h4');
//                 if (heading) {
//                     const li = document.createElement('li');
//                     li.className = 'p-1';
//                     const anchor = document.createElement('a');
//                     anchor.href = `#${id}`;
//                     anchor.innerHTML = `<i class="fas fa-chevron-circle-right"></i> ${heading.textContent.trim()}`;
//                     li.appendChild(anchor);
//                     tocList.appendChild(li);
//                 }
//             });
//         }
//     } catch (e) {
//         console.log('Could Not insert Automatically Generated Table of Contents', e);
//     }
// });
// })();
// (function () {
//     document.addEventListener('DOMContentLoaded', () => {
//         try {
//             // Select all article elements with class 'borderart', 'auto_id', or 'genautoid'
//             const articlesWithBorderArt = document.querySelectorAll('article.auto_id, article.borderart, article.genautoid, article.autoid, article.auto-id');

//             // Loop through each article and assign a random ID
//             articlesWithBorderArt.forEach(article => {
//                 const randomId = 'article-' + randomidgenerator();
//                 article.id = randomId;
//             });

//             const main = document.querySelector('main');
//             const existingToc = main.querySelector('.accordion#toc');
//             const autogenTableOfContents = main.querySelector('.agen-tableofcontents');

//             // Check if there are any articles with IDs to be listed in the ToC
//             const articles = main.querySelectorAll('article[id]');

//             if (autogenTableOfContents && !existingToc && articles.length > 0) {
//                 // Generate a random ID for the accordion
//                 const accordionId = randomidgenerator();
//                 const collapseId = randomidgenerator();

//                 // Check if a ToC does not already exist
//                 const tocHTML = `
//                         <div class="container mt-4 w-100 w-xl-75 d-print-none">
//                             <div class="accordion" id="${accordionId}">
//                                 <div class="accordion-item">
//                                     <h2 class="accordion-header" id="h1">
//                                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-controls="${collapseId}" aria-expanded="false">
//                                             <i class="fas fa-book"></i> <strong>&nbsp;Table of Contents</strong>
//                                         </button>
//                                     </h2>
//                                     <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="h1" data-bs-parent="#${accordionId}">
//                                         <div class="accordion-body">
//                                             <ol class="list-unstyled p-0 m-0"></ol>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>`;

//                 // Append the ToC HTML to the autogen_tableofcontents
//                 autogenTableOfContents.innerHTML += tocHTML;

//                 // Proceed to populate the ToC with entries as necessary
//                 const tocList = document.querySelector('.accordion-body ol');

//                 articles.forEach(article => {
//                     const id = article.id;
//                     const heading = article.querySelector('h3, h4');
//                     if (heading && id) {
//                         const li = document.createElement('li');
//                         li.className = 'p-1';
//                         const anchor = document.createElement('a');
//                         anchor.href = `#${id}`;
//                         // anchor.innerHTML = `<i class="fas fa-chevron-circle-right"></i> ${heading.textContent.trim()}`;
//                         // Use DOMPurify to sanitize the HTML
//                         console.log('DOMPurify is:', DOMPurify);
//                         // const cleanHTML = DOMPurify.sanitize(`<i class="fas fa-chevron-circle-right"></i> ${heading.textContent.trim()}`);
//                         anchor.innerHTML = cleanHTML;
//                         console.log('Sanitized HTML:', cleanHTML);
//                         li.appendChild(anchor);
//                         tocList.appendChild(li);
//                     }
//                 });
//             }
//         } catch (e) {
//             console.log('Could not insert Automatically Generated Table of Contents', e);
//         }
//     });
// })();

(function () {
    if (GLOBAL_crawler_mode) {
        return;
    }

    document.addEventListener('DOMContentLoaded', () => {
        function checkAndExecute() {
            if (typeof DOMPurify !== 'undefined' && DOMPurify.sanitize) {
                // Your code that requires DOMPurify
                try {
                    const articlesWithBorderArt = document.querySelectorAll('article.auto_id, article.borderart, article.genautoid, article.autoid, article.auto-id');
                    articlesWithBorderArt.forEach(article => {
                        const randomId = 'article-' + Math.random().toString(36).substr(2, 9);
                        article.id = randomId;
                    });

                    const main = document.querySelector('main');
                    const existingToc = main.querySelector('.accordion#toc');
                    const autogenTableOfContents = main.querySelector('.agen-tableofcontents');
                    const articles = main.querySelectorAll('article[id]');

                    if (autogenTableOfContents && !existingToc && articles.length > 0) {
                        const accordionId = Math.random().toString(36).substr(2, 9);
                        const collapseId = Math.random().toString(36).substr(2, 9);

                        const tocHTML = `
                            <div class="container mt-4 w-100 w-xl-75 d-print-none">
                                <div class="accordion" id="${accordionId}">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="h1">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-controls="${collapseId}" aria-expanded="false">
                                                <i class="fas fa-book"></i> <strong>&nbsp;Table of Contents</strong>
                                            </button>
                                        </h2>
                                        <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="h1" data-bs-parent="#${accordionId}">
                                            <div class="accordion-body">
                                                <ol class="list-unstyled p-0 m-0"></ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                        autogenTableOfContents.innerHTML += tocHTML;
                        const tocList = document.querySelector('.accordion-body ol');

                        articles.forEach(article => {
                            const id = article.id;
                            const heading = article.querySelector('h3, h4');
                            if (heading && id) {
                                const li = document.createElement('li');
                                li.className = 'p-1';
                                const anchor = document.createElement('a');
                                anchor.href = `#${id}`;
                                const cleanHTML = DOMPurify.sanitize(`<i class="fas fa-chevron-circle-right"></i> ${heading.textContent.trim()}`);
                                anchor.innerHTML = cleanHTML;
                                li.appendChild(anchor);
                                tocList.appendChild(li);
                            }
                        });
                    }
                } catch (e) {
                    console.log('Could not insert Automatically Generated Table of Contents', e);
                }
            } else {
                // Retry after 100 milliseconds
                setTimeout(checkAndExecute, 1000);
            }
        }

        checkAndExecute();
    });
})();



/********* Add Spaced Repeatition LocalStorage ************/
// (function () {    
//     const currentUrl = window.location.href;
//     if (currentUrl) {
//         const visitDate = Date.now();
//         localStorage.setItem(`SpacedRepeatpageLoadTime-${currentUrl}`, visitDate);
//         console.log(`Logged visit for ${currentUrl} at ${new Date(visitDate)}`);
//     }
// })();


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


/****************** Get the name from the user using bootstrap modal ***********************/
// (function () {
//     if (localStorage.getItem('userName')) return;
//     document.addEventListener("DOMContentLoaded", function () {
//         // append jquery to head
//         var jq = document.createElement('script');
//         jq.src = cdnjs_jquery;
//         document.head.appendChild(jq);
//         // ensure jquery is loaded before continuing
//         jq.onload = function () {
//             // append bootstrap to head
//             var bs = document.createElement('script');
//             bs.src = cdnjs_bootstrap;
//             document.head.appendChild(bs);
//             // ensure bootstrap is loaded before continuing
//             bs.onload = function () {

//                 const warningId = 'warning-' + Math.random().toString(36).substr(2, 9);
//                 let isWarningDisplayed = false;

//                 const showModal = () => {
//                     if (!document.getElementById('nameModal')) {
//                         document.body.innerHTML += `
//                             <div class="modal fade" id="nameModal" tabindex="-1" aria-labelledby="nameModalLabel" aria-hidden="true">
//                                 <div class="modal-dialog">
//                                     <div class="modal-content">
//                                         <div class="modal-header">
//                                             <h5 class="modal-title" id="nameModalLabel">Welcome</h5>
//                                             <button type="button" class="btn-close" id="closeModalButton" aria-label="Close"></button>
//                                         </div>
//                                         <div class="modal-body">
//                                             <p>Please enter your name so we can personalize your experience. All data is stored locally on your system and never sent to our servers.</p>
//                                             <form id="nameForm">
//                                                 <div class="mb-3">
//                                                     <label for="userName" class="form-label">Please enter your first name:</label>
//                                                     <input type="text" class="form-control" id="userName" required>
//                                                     <div id="${warningId}" class="mt-2" style="display: none; color: red; font-size: 0.9em;">If you want to use the name "Guest", please click Save or Close again.</div>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                         <div class="modal-footer">
//                                             <button type="button" class="btn btn-primary" id="saveNameButton">Save</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         `;
//                     }

//                     const nameModal = new bootstrap.Modal(document.getElementById('nameModal'));
//                     nameModal.show();

//                     const saveName = () => {
//                         const userName = document.getElementById('userName').value.trim();
//                         if (!userName && !isWarningDisplayed) {
//                             document.getElementById(warningId).style.display = 'block';
//                             isWarningDisplayed = true;
//                         } else {
//                             localStorage.setItem('userName', userName || 'Guest');
//                             nameModal.hide();
//                             location.reload();
//                         }
//                     };

//                     document.getElementById('saveNameButton').addEventListener('click', saveName);
//                     document.getElementById('userName').addEventListener('keypress', (e) => {
//                         if (e.key === 'Enter') {
//                             e.preventDefault();
//                             saveName();
//                         }
//                     });

//                     document.getElementById('closeModalButton').addEventListener('click', () => {
//                         if (!isWarningDisplayed) {
//                             document.getElementById(warningId).style.display = 'block';
//                             isWarningDisplayed = true;
//                         } else {
//                             localStorage.setItem('userName', 'Guest');
//                             nameModal.hide();
//                             location.reload();
//                         }
//                     });

//                     document.getElementById('nameModal').addEventListener('hidden.bs.modal', () => {
//                         if (!localStorage.getItem('userName')) {
//                             nameModal.show();
//                         }
//                     });
//                 };

//                 if (!localStorage.getItem('userName')) {
//                     showModal();
//                 }
//             };
//         };
//     });
// })();

/***************** GOOGLE LOGIN SUITE START *********************/
(function () {
    function test() {
        var script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }
})();
/***************** SECURITY SUITE START *************************/
(function () {
    if (location.hostname === "dmj.one" && !window.dontdisable && !indevmode) {
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
            await header_author("vp");
        } else if (data.harshal_headerurls.some(url => url === currentUrl || url === currentUrlWithoutHtml)) {
            await header_author("harshal");
        } else if (window["page"] == 404) {
            document.body.insertAdjacentHTML('afterbegin', await header_navbar());  // special case of 404 page
        } else {
            // header_author();
            document.body.insertAdjacentHTML('afterbegin', await header_navbar());  // special case of 404 page
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

    // Maintenence Mode    
    notification_maintainence_mode ? showNotification(GLOBAL_maintainence_message, {
        headerClass: 'toast-header bg-warning bg-opacity-50',
        headerIcon: 'bi bi-tools',
        headerText: 'Undergoing Maintenance',
        bodyClass: 'toast-body text-justify bg-warning-subtle',
        playSound: false,
    }) : null;

    // Feature Update
    notification_feature_update ? showNotification(GLOBAL_FeatureUpdate_message, {
        headerClass: 'toast-header bg-info bg-opacity-50',
        headerIcon: 'bi bi-bell',
        headerText: 'New Feature Available!',
        bodyClass: 'toast-body text-justify bg-info-subtle',
        playSound: false,
    }) : null;

    // New Article
    notification_new_article ? showNotification(GLOBAL_NewArticle_message, {
        headerClass: 'toast-header bg-info bg-opacity-50',
        headerIcon: 'bi bi-bell',
        headerText: 'New Article Available!',
        bodyClass: 'toast-body text-justify bg-info-subtle',
        playSound: false,
    }) : null;

    // Article Update
    notification_article_update ? showNotification(GLOBAL_ArticleUpdate_message, {
        headerClass: 'toast-header bg-info bg-opacity-50',
        headerIcon: 'bi bi-bell',
        headerText: 'Article Updated!',
        bodyClass: 'toast-body text-justify bg-info-subtle',
        playSound: false,
    }) : null;

    // New Course
    notification_new_course ? showNotification(GLOBAL_NewCourse_message, {
        headerClass: 'toast-header bg-info bg-opacity-50',
        headerIcon: 'bi bi-bell',
        headerText: 'New Course Available!',
        bodyClass: 'toast-body text-justify bg-info-subtle',
        playSound: false,
    }) : null;

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

