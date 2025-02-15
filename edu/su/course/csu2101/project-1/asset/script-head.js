document.addEventListener("DOMContentLoaded", function () {
    renderMathInElement(document.body, {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
        ],
        // • rendering keys, e.g.:
        throwOnError: false
    });
});

// <!-- Auto-detect and set Bootstrap dark mode -->
(function () {
    'use strict';
    const defaultTheme = 'light';
    let storedTheme;
    try {
        storedTheme = localStorage.getItem('theme');
    } catch (err) { }
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-bs-theme', defaultTheme);
    }
})();


