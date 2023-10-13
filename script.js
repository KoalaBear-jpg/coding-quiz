const questions = document.querySelectorAll('.question');
const nextButton = document.getElementById('next-button');
let currentQuestionIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        questions[currentQuestionIndex].style.display = 'none';
        currentQuestionIndex++;
        questions[currentQuestionIndex].style.display = 'block';
    } else {
        alert('Quiz complete! You can handle the submission logic here.');
    }
});

// Displays the first question
questions[currentQuestionIndex].style.display = 'block';
