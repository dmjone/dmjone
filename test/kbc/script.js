function checkAnswer(selectedOption) {
    const correctAnswer = 'C'; // Correct answer is Paris

    if (selectedOption === correctAnswer) {
        document.getElementById('option' + selectedOption).classList.add('correct');
        document.getElementById('result').innerText = 'Correct Answer!';
    } else {
        document.getElementById('option' + selectedOption).classList.add('incorrect');
        document.getElementById('result').innerText = 'Incorrect Answer!';
    }

    // Disable all options after selection
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
}
