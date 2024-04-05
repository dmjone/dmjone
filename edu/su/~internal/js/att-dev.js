// Author: Divya Mohan (dmj.one)
// Last Modified: 2024-04-06 12:00:00
// Description: This script generates a random list of students for attendance and allows the user to mark absentees. The list can be copied to the clipboard for further use.
// Version: 2.0
// Changes: Added encryption for student names and roll numbers to protect privacy.

(function () {

    /********** Format ***********
    const source1 = ["name1", "name2", "nameN"];
    const source2 = {"name1": "roll1", "name2": "roll2", "nameN": "rollN"};
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(source), secretKey).toString();
    ****************************/

    const encryptedNames = 'U2FsdGVkX1/JSHMEO7weKOf7x6DoIijgIHsUwRgrozxWQ88dCfG8Y2VQgF69HyJdg1YTe2ta80OJ5OpVv0vQaMa4QcQlbJYQ+VRf4lOhMDtFPoxbqfCaskSNnjK94zTd9zefqKFQzBFRXUMTEDQ+nuZ4BGVToOMdHMtKvXQ2FKsc88MM8Rc2fnZySgnakgGdLf0BdSU0+UI2B7AHw5cwR1zi+Oyy1avfZqh2e0byuqwxlG2qjKpR+KgaQ+l5Rh/1c3uYXUIYs5G0cZBIqm6U3Tg9U83AGjvE02S5+0KwnX6D7bsPHB/Kevme0rWHt5RP7x2AtAXXdbfI54fY5HsULNaJ0yXMqlHVX5WUyi7THtNoezP0PvTHoKuc4t45679LNEHuhlRrj1PfRd4soxTGOvUnT8BplM+5lF7TSKf+HkSpLh/qJGa6XEoVTR4Xgn5JTWc6og+KOBhaMYHjaJO3oAvDoVXS/JYg8NgukIfEXh5rNnQLCchl7w7RYWsLFzYBXGxNDzNv9v2YV2/YHRV12DZYofH/GV+lUZ+KyJaXjLbNPMKbupQ75irFyqii2L4e4tuhv/ZwbDlqN1dHZ5599L7/r23WHvJwpVFrikcgE6rvoDamsSDWYbSUO0ci2QVBCI37CRwR21ekYCni2338FWptP3v8eybfRJ+MFm+jZu5RBtxCsDzoacNgT+ydsnHoqQ8o8aMeRsiBWAw5F4U/bNLjxlzrbN67+Pf88WM4Nph6z7WNw8eFwZnZK7SuupuLx/ZSx2QazJv5LohhevbvNrVnHaqOx8ttFx2TY7bFRXcozPQPx88sioCs9Y2ClLwbe6OZoPtT1lpwNxq9LZnn/aQhuTb4NzetrP3OG1JTa9puwKFRPWIgkToaBDbMgotVAGPVaOByV/Ia/J39d5Wnsve99lrIvQ1og5hADkiF0BTDERpCbArNJWyWgtoDHPkUqnLwXPMyJeC2v6HDE5qMvxZA0dDlNZHMUF+az/gUAMcFy0TtO+Rw7oxKYVyElfcjUAJ0kEipX/PMZ9GiELnA3wgXEgwb0eB97YZKlaP0mfpJI34f6Jq+dljfwxRDY3/vrhF40pG5L+/uHqIDOx+b4IWx3bTqbVD64Opz284Fzwi3B3T7JF01GiRj/5Z/UDeYiNfDfbE6Rx1siqv7V1LaMfSNFma1xB6jaF5fGeWy8kOfQjs6HGkj74Lc1e97NwWitd4BAPN/4t2VEYGNXogGpZ01nLQEDRNrFgKtNM/s+T/xs19nv8apXvRqk9VVSnZxr1GoUAIp3Akg2YSUE8ARibQm0S4Tzk9cQVWRdzWE04q1ndYNVig/ERC7uGWIQFpnYxRjyr9RY15oSJyEo304cthIO9KOJ7marGPpxmpDAY9a2qKJYE+8HJAQcfYCBHlXRmaSc5T8jVnFzLCbJ9Z65g==';
    const encryptednameRollMap = 'U2FsdGVkX1/fD8zGQ9LKDjrJefsmfZsdlf7S5vstrP3UYCAvMzNo93tBjP5Hp6vPMsbtL4N1v+Q5WSl1ltgFoFvmC3L3lxpBRQWt0h/yv8YzxiOwwaLh75aOVlUs3hrC8Ss44WPoMFW5axmtmIuz8PVz1ViyXa5XB4TkRJmsaddvlgirQG3mTjH+PG7CYvn95QV5aPqTUQKYcXrqN+cT7mFXyoT9KgPyf1V5jnOOD49OP7iQHJFlmbglLOYhn3HMcCTf1BgVs+9wZC/fPN+Siu3KU+IKrfafCe6CFdkWw7wRawOF8RqY9n1WztpHmHm4bkVIry0QrTspGm3zwoq8ZWJoLFFf/zLojd8WIaZrJlHCsRcOpOy3YC9RfZ2CiOWXThICgx+znus6u3jDmdGCsrQctS0+pavEfl+BlkdsPzK7Xqq9zaH6sLbmBHGvI7iGtd/z7iy7/KXd4FCno0AJwzkdduru+KNQAa6YAoT2/Gqh2bc2Mi3wJdMoe/B0sFxBGuuT5It5dmfHL0iJjbpq8Qo/BrWIwM0xGsKqL6Sb9qJZi5luaIG6yzBoO6I6XTVpmgu2k34zCyd5JOxKzrwkHiVgBSJ6IlhOW3lhL8h9XRnk2c7DmaHqWC2R9HeNjlr3kCrnxLLMnE/9CzqekR2dk8fbvSW2fK+DAiPhd7J9wJJl9UHaGj6jkBiujsAwWekjjB/27ZTTTR5oghOcxvksJ7RvvGQmuyp8hALlIHZACFc+FyGuPXteoXAVZYl30b56dZj5d9CzMs6+iSEel+kB5dx1dg2jShvWoGa5Y1FNbEzMJ1AorcTIickmUlBJq6h4YG31dvXGeOZrSuEv6E5S0duowQupyTzFMXFVaEqxrbvktizSxExYZsQPbWXQref0h8SoF6SFN9KT26l//Be0yqRlN2AVXtG8r5ELq43/1Ubx5e339s88FWtKtHh4DdG25A6lROXcQ7fN/mu4P3mQRpd688TWYSruKWlckuC04AjXHaS9G0wbrk6QRnhpGi3lSj1B6yHs83t/HHeVvW9C6A8Lgk4Hg2a49fCNTaa3SyGbh+Fmw5ijGEEH9GIiaNijEHYOLBHBKUALKrvA1TSMOQGwKSvd5dgyriKVc12i1Mqjn4hr6igpnL7M5NDY2DqPcWDv2iMNjG8goNC4PsHeFe0IMd1nnR6a6PT8sNrJj4ZxfEF2cng6fJvdh89sYz/sC+KLUmAUtoXB8Bg6Nvq7TU1tp2WBXEvN3sx3SjMu2ZQd2NxYFopy67bsUMhruA4nlNkQg9eV1Nzt1+XKHt8+48AP1PflUKy+Hg4P9R5gbpTVTfjtNpb1vNcvQdueeMRKA1+0Fknic01Ftse69yc4MHtYuBECigtMeghPUFKnnQo7vEQqYE6ZTncCnH8gWx+uIEjFiZp+79rbfG+sdQdIVFX+VTaa7W7KgXFSaptzzquMRWyV70Pzxk14hneYYmw7CKJ+qqGKQtxRBztYBHDq1CYK+q9C4woASLAxnE/vscD3g1b1g7Pq/GxbvkpJPmdNlGN9Dla0Nw0q76Ir+R1LbOzr7nCb7sconjYDMtWBzU1lNENomcSDpaxWl/Qg4jopWdOq74wJf7UTDp+EccpW+Ntm0j+mKtpLoaVGAPJLZAaE36FnExPb7sz4Iw1HmG96UmKMQXi4zWTdP6lybT7LNXGbqAeEVWjJny0lU+o0URFR8xzDYI3z4foY7p8JddrwV7AIC3LjYoa4VVOXLttlz0l42xik/IYEMuOY9Vx8H195nrMV+r3lBnTCBYeETQQ2X/bCuz/nX+26vAT5emX73Bbqj1Uh7auByvVVArE2fj77fEHy5WOXKhsxBzKydHILPN3+oXwqjWlKcnyUTo45S0Zpgja6/YoBgvjo0hWntDLZ3P7Rr1dB82d1WNrjoosgAmRGTGvshzfN3PBL55NqhDrMWruaPwBG+fazi9SfDIay23UtWIoKskD7JRgyTOosKXwsEjVYePnZf0Z2zE9dipkkvjJMg4CEu6VISX3rAixzUNJxmuoMR1zU1LT0GBILk0YV2fQo5inlcKm8LJWDybKSKItU1nSR+OVZjwT3mMHmRF3np6SLLsKXyh1/vIjiEfdMqW0keb4KaH6sTe6jFhtObnicrQJIhsMHlO9B8j+yDMCEO3u85P8SCR4gTwzsYTH9fzH5rs7ebdFMOJdqMCGbdhniNoTeB+4qtRL2Wv47s0NDQ5+FBeUZ1ajqq9YvAWej7geFv2VjBZ9RWqshBAOJkEiwFYYLMWzBNMQ4lggbuRIjBL4cBVGq/fINFy9GzMyx0MXKsl4x1tJAdqBz2PelYLIIAnHiAcrH0liJKb4hz8z2Z1gAi6W85Ve7DGRSlMp/O0fTm9yKsBR5EsMJe/rIbjI2fOn9krKjoY3VeRde2hwSAc5NuimWGff4co0mVXylECA7qwAloQTvcfe788TUjC+DX571Hy+MJaJDwz4OfZ53tt0MUEgIr3rBlwktT8bHwTa2lnZwJsSBUfrU94V/SgGnsXliqIp64WT1L9qyt2PS6SkLNb3mDejzPAtV2i8kn6qGAn0g5GCBKsdZmZTN5BbgXv2tQKTJWcJN5njhv2giTm0/tHphfuAyW91k8ASGERKUIcBqOJkcIZ95HoO9NihmdPFlcsGehyyBLRXPHU285pQ7PvUG9YcJHcgCPij0qphjz/mabA6CjUYuMg==';

    const secretKey = promptForSecretKey();
    if (!secretKey) return; // Exit if no secret key provided

    const courseCode = prompt("Enter the course code:", "") || "Unknown Course Code";

    const NAMES = decryptData(encryptedNames, secretKey);
    const nameRollMap = decryptData(encryptednameRollMap, secretKey);
    let isAbsent = new Array(NAMES.length).fill(false);

    document.getElementById('generate').addEventListener('click', generateRandomList);
    document.getElementById('copyBtn').addEventListener('click', copyAbsenteesToClipboard);

    function promptForSecretKey() {
        let secretKey = prompt("Please enter the password (hint: amity gmail):", "");
        if (!secretKey || secretKey.length < 5) {
            alert('A valid password is required to access this information. Please refresh the page to try again.');
            return 'shoolini2026';
        }
        return secretKey;
    }

    function decryptData(encryptedData, secretKey) {
        // Placeholder for decryption logic
        // Example: return JSON.parse(CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8));
        return JSON.parse(CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8)); // Return the decrypted data
    }

    function generateRandomList() {
        isAbsent.fill(false);
        updateAbsentList();
        const shuffledNames = [...NAMES].sort(() => 0.5 - Math.random());
        const nameListElement = document.getElementById('nameList');
        nameListElement.innerHTML = '';

        shuffledNames.forEach((name) => {
            const div = document.createElement('div');
            div.innerHTML = `${name} - ${nameRollMap[name]}`;
            div.className = 'name-item list-group-item p-3 text-center';
            div.onclick = function () {
                isAbsent[NAMES.indexOf(name)] = !isAbsent[NAMES.indexOf(name)];
                this.classList.toggle('selected');
                updateAbsentList();
            };
            nameListElement.appendChild(div);
        });
    }

    function updateAbsentList() {
        const absentListElement = document.getElementById('absentList');
        absentListElement.innerHTML = '';

        NAMES.forEach((name, index) => {
            if (isAbsent[index]) {
                const li = document.createElement('li');
                li.className = 'list-group-item p-1';
                li.textContent = `${name} - ${nameRollMap[name]}`;
                absentListElement.appendChild(li);
            }
        });
    }

    function copyAbsenteesToClipboard() {
        const datetime = new Date().toLocaleString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        let messageHeader = `Dear Professor,\n\nI hope this message finds you well. Please find the absentee list for *${courseCode}* on *${datetime}* below:\n\n`;
        let absenteesList = NAMES.filter((_, index) => isAbsent[index])
            .map((name, i) => `- ${name} _${nameRollMap[name]}_`)
            .join('\n');

        let messageFooter = `\n\n> Total Absent: *${NAMES.filter((_, index) => isAbsent[index]).length}*\n> Total Present: *${NAMES.length - NAMES.filter((_, index) => isAbsent[index]).length}*\n\nKindly let me know if further details are needed.\n\nThank you. 🙏\nDivya Mohan\n_Make the world yours at_ *dmj.one*\nStudent/CR - CSE 2026\nShoolini University, 🇮🇳`;

        let finalMessage = messageHeader + absenteesList + messageFooter;

        navigator.clipboard.writeText(finalMessage).then(() => {
            alert('Absentees list successfully copied to clipboard.');
        }, err => {
            console.error('Failed to copy text: ', err);
        });
    }

})();