// Author: Divya Mohan (dmj.one)
// Last Modified: 2024-08-15 12:00:00
// Description: This script generates a random list of students for attendance and allows the user to mark absentees. The list can be copied to the clipboard for further use.
// Version: 3.0
// Changes: Added encryption for student names and roll numbers to protect privacy.

(function () {

    /********** Format ***********
    const source1 = ["name1", "name2", "nameN"];
    const source2 = {"name1": "roll1", "name2": "roll2", "nameN": "rollN"};
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(source), secretKey).toString();
    ****************************/


    // wait for the page to load
    document.addEventListener('DOMContentLoaded', function () {

        function controlVisibility() {
            const userEmail = localStorage.getItem('userEmail')?.toLowerCase();
            const allowedEmails = [
                atob('ZGl2eWFtb2hhbjE5OTNAZ21haWwuY29t'),
            ];

            console.log("inside")
            if (!allowedEmails.includes(userEmail)) {
                const mainElement = document.querySelector('main');
                if (mainElement) {
                    mainElement.innerHTML = '<div class="text-danger text-center display-1 page-center justify-content-center">401: Unauthorized</div>';
                    mainElement.classList.remove('d-none');
                    mainElement.style.display = 'block';
                }
            } else {
                const mainElement = document.querySelector('main');
                if (mainElement) {
                    mainElement.classList.remove('d-none');
                    mainElement.style.display = 'block';
                }
            }
            return;
        }

        controlVisibility();

        document.getElementById('sortAlphabetically').addEventListener('change', function () {
            updateAbsentList(); // Re-render the list whenever the toggle changes
        });
        
        // Update the generated list dynamically when the toggle changes
        document.getElementById('toggleSwitch').addEventListener('change', function () {
            updateAbsentList(); // Refresh the list when mark present/absent toggle is switched
        });

        let encryptedNames, encryptednameRollMap;

        const encryptedNamesMerged = 'U2FsdGVkX1/JSHMEO7weKOf7x6DoIijgIHsUwRgrozxWQ88dCfG8Y2VQgF69HyJdg1YTe2ta80OJ5OpVv0vQaMa4QcQlbJYQ+VRf4lOhMDtFPoxbqfCaskSNnjK94zTd9zefqKFQzBFRXUMTEDQ+nuZ4BGVToOMdHMtKvXQ2FKsc88MM8Rc2fnZySgnakgGdLf0BdSU0+UI2B7AHw5cwR1zi+Oyy1avfZqh2e0byuqwxlG2qjKpR+KgaQ+l5Rh/1c3uYXUIYs5G0cZBIqm6U3Tg9U83AGjvE02S5+0KwnX6D7bsPHB/Kevme0rWHt5RP7x2AtAXXdbfI54fY5HsULNaJ0yXMqlHVX5WUyi7THtNoezP0PvTHoKuc4t45679LNEHuhlRrj1PfRd4soxTGOvUnT8BplM+5lF7TSKf+HkSpLh/qJGa6XEoVTR4Xgn5JTWc6og+KOBhaMYHjaJO3oAvDoVXS/JYg8NgukIfEXh5rNnQLCchl7w7RYWsLFzYBXGxNDzNv9v2YV2/YHRV12DZYofH/GV+lUZ+KyJaXjLbNPMKbupQ75irFyqii2L4e4tuhv/ZwbDlqN1dHZ5599L7/r23WHvJwpVFrikcgE6rvoDamsSDWYbSUO0ci2QVBCI37CRwR21ekYCni2338FWptP3v8eybfRJ+MFm+jZu5RBtxCsDzoacNgT+ydsnHoqQ8o8aMeRsiBWAw5F4U/bNLjxlzrbN67+Pf88WM4Nph6z7WNw8eFwZnZK7SuupuLx/ZSx2QazJv5LohhevbvNrVnHaqOx8ttFx2TY7bFRXcozPQPx88sioCs9Y2ClLwbe6OZoPtT1lpwNxq9LZnn/aQhuTb4NzetrP3OG1JTa9puwKFRPWIgkToaBDbMgotVAGPVaOByV/Ia/J39d5Wnsve99lrIvQ1og5hADkiF0BTDERpCbArNJWyWgtoDHPkUqnLwXPMyJeC2v6HDE5qMvxZA0dDlNZHMUF+az/gUAMcFy0TtO+Rw7oxKYVyElfcjUAJ0kEipX/PMZ9GiELnA3wgXEgwb0eB97YZKlaP0mfpJI34f6Jq+dljfwxRDY3/vrhF40pG5L+/uHqIDOx+b4IWx3bTqbVD64Opz284Fzwi3B3T7JF01GiRj/5Z/UDeYiNfDfbE6Rx1siqv7V1LaMfSNFma1xB6jaF5fGeWy8kOfQjs6HGkj74Lc1e97NwWitd4BAPN/4t2VEYGNXogGpZ01nLQEDRNrFgKtNM/s+T/xs19nv8apXvRqk9VVSnZxr1GoUAIp3Akg2YSUE8ARibQm0S4Tzk9cQVWRdzWE04q1ndYNVig/ERC7uGWIQFpnYxRjyr9RY15oSJyEo304cthIO9KOJ7marGPpxmpDAY9a2qKJYE+8HJAQcfYCBHlXRmaSc5T8jVnFzLCbJ9Z65g==';
        const encryptednameRollMapMerged = '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';

        const encryptedNamesCC = 'U2FsdGVkX1+sqwTt2xbNSAzEGCksPLsXMum5/j1jGkNfI1eGNgVrr5pOa1wedYp1lVBJZWf1Fnu47UxfL8VIkZlVEaWoIGCJZL+0Qxyyt5nid8uztmapZG1+gyEM/ulm0OrDzjuJy1KbrUn/wu0V3Cv52IuxZzOhGNhnWw+2RVYvMxCm4/5utkMbP4Y5Xrom/watqihnQiYn/DcfJfrvU9ND9h85uQCVWOFCc4H9Duf3mt64DSC8BDBDmwC8sReL7jEAPmXN6+Q2vlkXb7BlOLparYsKbEtQCI2fDSeg6s/IDA0B/hCYskDnkvysBX4yNhVmrzT0LDsxY3yT3ZqUVWyPFlf3cie8Ey+9CgwVTWq64Q5xhiqAOTttJvSGpXJfOyUjKhQC22Qb9eZXrD9Lqnn1tW9xHdJ8munxMfzLXd6LFp6Uf0Yz84PV5WandAA3';
        const encryptednameRollMapCC = 'U2FsdGVkX18Lj+SxOKaliniti0zIhqJ0LGVXWTy5A3Ih6gt65qC1DPCSVztWzSdaa0yrbQbxeLr+cB89P4zZr37lF2kONTKhxg4tRI2A+J9XzqEDJzDgfod6CGhxErwgRq/aVlYszqyS02WAxBfEc1Q636NwZNsT6Kb2fYTfhrDdjcw4nl8Y2SxAtcu2MBV1oYsQmSWTjY8x/RRzknj7CReidWC1Sz98B5F4qKjGkVSG7O6zzkLOJXfYjvPQMPAL1K/INCzBdh5adTl2mTx9mSOJxV5ea5e4IBdVNDEy0xmo9yWV4y24sQ2jJy/Vay52X+ca8cmg+Sq5p6PLPxolVwkpvBDvIgNYCeiSOxiGeWCrs6husQaewpelg7MzbCnDLLzVtW+2j026EajFRiEu5KfjCm5GL7VrdoCjRJ5+1qpQEbvnMqOXs2+yOfufuveCmSHUgy/ahfWwpA21sJuJgs+hQ2CIS9aUbHyBqJZ92xORj01YLRjtuglPBykhOjDlN4jkhKGQMiK4PVEb0zNLGdtQqLSwYnMLXG+k+h/YvhBgjrCYBM0XqbVpLyZcJijSS/ijtu3YzjBTTYMK7yQS6MgSA4S2a8JPCGZcf1E1zTGelvqK3h/7AXudtVoouf1QXQkpHNQl/atD/UipbowDOtnd+zgXdui3WW0Hlz+s4uD5SOgowShxcyzPpQL8ydNtm0RnC6LwffZaUGevSXXtBp7yw+nElT5Em4n0Kl5EX39b68us7WpyIYbdA4WlJSG84LWYj8ZzmMPNH/041+fz7A==';

        const encryptedNamesCS = 'U2FsdGVkX1+X20cCq6RgEQjJ36PN5mMqKhNmC7iGNZmleEB70E1XhPapa3rhFWfzGSEC4b/CfMFTSiTTaLgIJ+UiIgnScwuP4I5alWQES7I8Z3Lj6SSHMprt4hWDKZC3H0p3KRhEpj2kRPYVuL7I5vkGq1rmOQMC2osMvbHxp7hGetee7WRGAdhi7StAisNXnkrcM0wBDmxdwMGjyNsqrg9gsyX8H6sT7EZAc4xpieDowxEK0+bKTefAuRAb9OOupAiGr8uAWvwJSg9BluS2fZ098k6YQXlq0v8GecE45OV4U6enuzuDJM602sIwEXwS5MGINEPFHeBj2LvQMu+tE6IpP2ly7dDZBY2+Xc+6OsNU0I3xfPzOfON40rGljRNa1WwIhP9hJO5A4ng2dQM3nrwgHFYe/ZwCerXd9XmuLlg=';
        const encryptednameRollMapCS = 'U2FsdGVkX1/YYgFkWV4oVvI7Znn8ZSXQip0/pPcN78OyMO46jfW5BoHWWZHBwVjaSLbdNVp2EAa9KgdEV2I5o5owXHEgFNBghWFJuacig8r1ga+ONBN9lwoFvbJBe844HZ/YaTG/mwCQ/jNNNmHneQ9LYRA+/z5afO+cyFtQ2aIGFa1RHV9zn72cWvFdM1+991eZIcOsZiuuAusRw62ZJRHPleOWqrfkrVhz7AsoBYyEq6Unt6A9Llg6vBmkFlFTBFiiQ0HJHDxqJoLbhC7Di9rPFDMkvnBk7YSuGUc7jwngLkubM/tpCVmlSrBcIYvKfn4e0nrHih8zScShx3cMXSyD2KwHG3WM5497h+IpI71v7ZkJILPGH5LFndZnLjMMBRcmfsacXl1TNQZkFUCVsL7IWqZ0sy67+3P7WMh5w5x/bvyY5D7vRv39A01TSZj0b+T+F+oqDG4Kj9+fQyr7Y+O95AiMRgqbMB8MJKI3xYm95Ds8ZPIRUeRz7eu4QVEDsNYzhYWnKheK40YIwJ1gGZumDFx6S8YmY5kO6WKKd/ve5bQP/fIigNXWd1oYT43Iq7Hh7g8iQ09aUgYVR4lv1TMhRUZ3o+wU1uP6sY2eXV9oOcc94OoWcuNps9YxsyzmItr7Me8oWt1+ehLgVIMM0WcV80LXZVn06GpEREJAahXhXxFC+iRHOpvjKLoQ7/Ei1JMXsMRIClt6Nk75eXTbTmHTT7S0TyJ524g3wMVVlLZx6XG8311nHULBdPprYphe/VQOOmaFpQqdVmBZIkNQXQalgIIWDjNSkqaby2XGWjc=';

        const encryptedNamesDS = 'U2FsdGVkX1/BbUmmcWWELA6R9C3zST3PlzyG63Iahx1LyHheFSVMejBjhLQvbtWqFBPN1tFf+wIg7jGskdUQYLNoCwF7c3W5gq+YzVYcEghfhnotkr2Snlto8qMA1BP37pwjY1rdUKFYBib9akwuyK734TW9J94hVMUqKe0n2gP4bH5ENh6a8tNgBD+EuisZjbpNYlmodifyaw35sG8sHDrO60GZEZMi0KnELvVJ3Pv/aMEUlxS+bUDG+dztZxdd2Ilx3SS6y/zR+6IOGYKfqJEQiAaFV4DSbQlp5H74Xblk1FFDRhAGEqWAEXADCwqNdIVmrsY/Xaj5E4MC0CMUIgeJ2GFXnydrfwY0IkQzxa/WxhHu6N38wSuzIQlFiDmlZZNhVfLM6USIdW59O2DkMHOLRbWuPW/6TqZY5/7BqmNgGWazMb5lr/tdT5YOJzAvWWLqL76+l0c0AS/OPajQAw5IwE8H/zjAg5tcBCNfd7UHhGt1HXetLkJldgosxvMDsbrmoj2WjxpFIKEhtdyLdrL6gcc2emnqt0t2ShuI9J6VBGanhqF3tQ72TMRWo1Kv8p5gQ1jQzlQio8RjYWi3undkElyQVGDTsKP/V3ZJCzfOHNpRjK3Kc2pbIVUaQcGI';
        const encryptednameRollMapDS = 'U2FsdGVkX181Kq37oxhRSJSQJBnAQKQGLn4ih6Zkv5WjcFrIymHkP9aU3+y+WCRng3J76uymT1P6kAGnOYbMu7jaBDCp+k0lddVoTGzJonwdIzeTYFA5y+H3fiA3CK2yvfU2gC+0SDe9gP+srpXuXgwBK95MK4ZpCmp2gMwWPAPC+AB28bH9ysqQVEBRcvDe1fv4SpZo+sVpzlmmhNXt5icpZ411tSIo/DdlPQbYw/fwBoR/HxdA6OrlvSvcaVOPbumYcWPWj/sjzqf/cdDtjzaSDB+iDeU9TDCFRzO5489rmNqcxwRYBzr5XdskBruC9Oumo/A8zZMvPG9cSjoRzWjcFjGWyc2/9KsaylKd7e7AJNZhxGIG93ILoIRIl95dU6xAdpbrgMNN4sLJtLbgrJXhujNelzWPj5/yJyoQQW64I3XRMgYeWfCdHyB1RM8xkKDxLfs+6FJurY6AfwbewQQdR102JA82ASLbXFAtsRupOGpg4l5QqKxVkKPxOI4E6nWEGfBa8tiHjhENEIwTSKizoXrzArpuAGKjtZ32l863Xc1nl/dP081VrgPvxpH14X2dUyNM+wL4/jDFgzJ6LtOmDpZ7KPdts1N9AQj5+wDMUZcGepxTr6+PA8r1jlEqu9OXeuXaIOdT3DGw/PSJ2l4WM+ONt5T2JiEduwCyce/9xpxmvUdOJteMZY3R5GUqQ8BQWsoItEBi53zMy+WBIyrml8OvMDazH9tgLvBtGTx47HZQig8BzRI7HSD9KpmBmhj/00Jn8djnIL6xKkjcPSLtsJh3OfIpPx0CrIQ2LN9aL+6CRb301kHLjP4ZzSjgxLLaPL3j/nKFeFr9AC+pgt36KSGTC6PJyLiTibdm0PLrz/rv25rklRqjhe295Dk0m/9zieVX6ZC53+gdYjfHkX9nBony4YwmBWkGcPKNMxzD8GfZzoIk/Yi41YEKSLXpXmbDjPYFrK0IlHgAdSu+Vqjkzcs1lqg4r4EFVKxn1cDwStt1ABF7R4TS+U7ZBsEcaYl7wCo5utnY4euSXH7ZNGyGMfE/l5qcgym2yMEfvrnhhc0KBW2pxXGV0X/Gbo6eqUQ0R2aX3nlwcnHK/5OtSg2diR9rlz5VkncozeQ/3/t2NYCF0w/R6p8Y0n3IWZdo5ujFBH7ZQAh8Qq0ZozQlig==';

        document.getElementById('classSelector').addEventListener('change', function () {            
            switch (this.value) {
                case 'merged':
                    encryptedNames = encryptedNamesMerged;
                    encryptednameRollMap = encryptednameRollMapMerged;
                    break;
                case 'cc':
                    encryptedNames = encryptedNamesCC;
                    encryptednameRollMap = encryptednameRollMapCC;
                    break;
                case 'cs':
                    encryptedNames = encryptedNamesCS;
                    encryptednameRollMap = encryptednameRollMapCS;
                    break;
                case 'ds':
                    encryptedNames = encryptedNamesDS;
                    encryptednameRollMap = encryptednameRollMapDS;
                    break;
                default:
                    break;
            }


            const secretKey = promptForSecretKey();
            if (!secretKey) return;            

            const courseCode = prompt("Enter the course code:", "") || "Unknown Course Code";

            const NAMES = decryptData(encryptedNames, secretKey);
            const nameRollMap = decryptData(encryptednameRollMap, secretKey);
            let isAbsent = new Array(NAMES.length).fill(false);

            document.getElementById('generate').addEventListener('click', generateRandomList);
            // document.getElementById('copyBtn').addEventListener('click', copyAbsenteesToClipboard);
            document.getElementById('copyBtn').addEventListener('click', copyOrSendAbsentees);
            document.getElementById('toggleSwitch').addEventListener('change', updateToggleState);

            function promptForSecretKey() {                
                let secretKey = prompt("Please enter the password:", "");
                if (!secretKey || secretKey.length < 5) {
                    alert('A valid password is required to access this information. Please refresh the page to try again.');
                    return null;
                }
                return secretKey;
            }

            function decryptData(encryptedData, secretKey) {
                return JSON.parse(CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8));
            }

            function encryptData(data, secretKey) {
                return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
            }

            function generateRandomList() {
                isAbsent.fill(false);
                updateAbsentList();
                const shuffledNames = [...NAMES].sort(() => 0.5 - Math.random());
                const nameListElement = document.getElementById('nameList');
                nameListElement.innerHTML = '';
                const markPresent = document.getElementById('toggleSwitch').checked;

                shuffledNames.forEach((name) => {
                    const div = document.createElement('div');
                    div.innerHTML = `${name} - ${nameRollMap[name]}`;
                    div.className = 'name-item list-group-item p-4 text-center';
                    div.onclick = function () {
                        isAbsent[NAMES.indexOf(name)] = !isAbsent[NAMES.indexOf(name)];
                        if (!markPresent) { this.classList.toggle('selected'); }
                        else { this.classList.toggle('absent'); }
                        updateAbsentList();
                    };
                    nameListElement.appendChild(div);
                });
            }

            // function updateAbsentList() {
            //     const absentListElement = document.getElementById('absentList');
            //     absentListElement.innerHTML = '';

            //     const markPresent = document.getElementById('toggleSwitch').checked;

            //     NAMES.forEach((name, index) => {
            //         if ((markPresent && !isAbsent[index]) || (!markPresent && isAbsent[index])) {
            //             const li = document.createElement('li');
            //             li.className = 'list-group-item p-1';
            //             li.textContent = `${name} - ${nameRollMap[name]}`;
            //             absentListElement.appendChild(li);
            //         }
            //     });
            // }

            function updateAbsentList() {
                const absentListElement = document.getElementById('absentList');
                absentListElement.innerHTML = '';

                const markPresent = document.getElementById('toggleSwitch').checked;

                // let filteredNames = NAMES.filter((_, index) =>
                //     // (markPresent && !isAbsent[index]) || (!markPresent && isAbsent[index])                    
                // );
                let filteredNames = NAMES.filter((_, index) => isAbsent[index]);

                // Check if alphabetical sorting is enabled
                if (document.getElementById('sortAlphabetically').checked) {
                    filteredNames.sort();
                }

                filteredNames.forEach((name) => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item p-1';
                    li.textContent = `${name} - ${nameRollMap[name]}`;
                    absentListElement.appendChild(li);
                });
            }

            function updateToggleState() {
                updateAbsentList();
            }

            // function copyAbsenteesToClipboard() {
            //     const datetime = new Date().toLocaleString('en-US', {
            //         year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
            //     });

            //     const markPresent = document.getElementById('toggleSwitch').checked;
            //     const absentees = NAMES.filter((_, index) => isAbsent[index]);

            //     // Check if alphabetical sorting is enabled
            //     if (document.getElementById('sortAlphabetically').checked) {
            //         absentees.sort();
            //     }

            //     const presentCount = NAMES.length - absentees.length;


            //     let messageHeader = `Dear Professor,\n\nI hope this message finds you well. Please find the ${markPresent ? 'present' : 'absentee'} list for *${courseCode}* on *${datetime}* below:\n\n`;
            //     let absenteesList = absentees
            //         .map((name) => `- ${name} _${nameRollMap[name]}_`)
            //         .join('\n');

            //     let messageFooter = `\n\n> Total Present: ${markPresent ? `*${absentees.length}*` : `*${presentCount}*`} \n> Total Absent: ${!markPresent ? `*${absentees.length}*` : `*${presentCount}*`}\n\nKindly let me know if further details are needed.\n\nThank you. 🙏\nDivya Mohan\n_Make the world yours at_ *dmj.one*\nStudent/CR - CSE 2026\nShoolini University, 🇮🇳`;

            //     let finalMessage = messageHeader + absenteesList + messageFooter;

            //     navigator.clipboard.writeText(finalMessage).then(() => {
            //         alert('Absentees list successfully copied to clipboard.');
            //     }, err => {
            //         console.error('Failed to copy text: ', err);
            //     });
            // }  
            function copyOrSendAbsentees() {
                const datetime = new Date().toLocaleString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                });

                const markPresent = document.getElementById('toggleSwitch').checked;
                const absentees = NAMES.filter((_, index) => isAbsent[index]);

                // Check if alphabetical sorting is enabled
                if (document.getElementById('sortAlphabetically').checked) {
                    absentees.sort();
                }

                const presentCount = NAMES.length - absentees.length;

                let messageHeader = `Dear Professor,\n\nI hope this message finds you well. Please find the ${document.getElementById('sortAlphabetically').checked ? 'alphabetically sorted ' : ''}${markPresent ? 'present' : 'absentee'} list for *${courseCode}* on *${datetime}* below:\n\n`;
                let absenteesList = absentees
                    .map((name) => `- ${name} _${nameRollMap[name]}_`)
                    .join('\n');

                let messageFooter = `\n\n> Total Present: ${markPresent ? `*${absentees.length}*` : `*${presentCount}*`} \n> Total Absent: ${!markPresent ? `*${absentees.length}*` : `*${presentCount}*`}\n\nKindly let me know if further details are needed.\n\nThank you. 🙏\nDivya Mohan\n_Make the world yours at_ *dmj.one*\nStudent/CR - CSE 2026\nShoolini University, 🇮🇳`;

                let finalMessage = encodeURIComponent(messageHeader + absenteesList + messageFooter);

                // WhatsApp sharing URL
                // let whatsappUrl = `https://wa.me/?text=${finalMessage}`;
                let whatsappUrl = `whatsapp://send?text=${finalMessage}`;

                // Ask user for action: Copy or Send via WhatsApp
                let userChoice = confirm("Do you want to send the list via WhatsApp? Click 'Cancel' to copy to clipboard.");

                if (userChoice) {
                    // Open WhatsApp with pre-filled message
                    window.open(whatsappUrl, '_blank');
                } else {
                    // Copy to clipboard if user chooses not to send via WhatsApp
                    navigator.clipboard.writeText(decodeURIComponent(finalMessage)).then(() => {
                        alert('Absentees list successfully copied to clipboard.');
                    }, err => {
                        console.error('Failed to copy text: ', err);
                    });
                }
            }
           
        });                
        
    });

})();