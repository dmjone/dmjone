(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const userData = JSON.parse(localStorage.getItem('google_user'));

        const profilePicture = document.getElementById('profilePicture');
        const userName = document.getElementById('userName');
        const accountContent = document.getElementById('accountContent');
        const signOutButtons = document.querySelectorAll('.signOutButton');

        profilePicture.classList.toggle('d-none', !userData);
        accountContent.classList.toggle('d-none', !userData);

        signOutButtons.forEach(button => {
            button.classList.toggle('d-none', !userData);
        });


        if (userData) {
            const { picture, given_name, ...restData } = userData;
            document.getElementById('profilePicture').src = picture;
            document.getElementById('userName').textContent = `Welcome Back, ${given_name}!`;

            // Populate user data table
            const userDataTable = Object.entries(restData).map(([key, value]) => `
                    <tr>
                        <th>${key}</th>
                        <td>${value}</td>
                    </tr>`).join('');

            document.getElementById('inserthere').innerHTML = userDataTable;
        }
    });
})();