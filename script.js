// In your script.js file (replace all existing code)
document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const menuContainer = document.getElementById('menu-container');
    const quizContainer = document.getElementById('quiz-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');
    const questionNumberEl = document.getElementById('question-number');
    const totalQuestionsEl = document.getElementById('total-questions');
    const scoreEl = document.getElementById('score');
    const blockButtonsContainer = document.getElementById('block-buttons');

    // Quiz state variables
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    // --- GLOBAL FUNCTIONS ---
    // Make functions global so inline onclick can find them
    window.startRandomQuiz = () => {
        currentQuestions = [...questions].sort(() => Math.random() - 0.5);
        startQuiz();
    };

    window.startBlockQuiz = (blockIndex) => {
        const start = blockIndex * 100;
        const end = start + 100;
        currentQuestions = questions.slice(start, end).sort(() => Math.random() - 0.5);
        startQuiz();
    };

    // --- CORE QUIZ LOGIC ---
    function startQuiz() {
        menuContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        currentQuestionIndex = 0;
        score = 0;
        scoreEl.innerText = score;
        totalQuestionsEl.innerText = currentQuestions.length;
        showQuestion();
    }

    function showQuestion() {
        resetState();
        const question = currentQuestions[currentQuestionIndex];
        questionText.innerText = `Q: ${question.question}`;
        questionNumberEl.innerText = currentQuestionIndex + 1;

        question.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-btn');
            button.addEventListener('click', selectAnswer);
            optionsContainer.appendChild(button);
        });
    }

    function resetState() {
        nextBtn.classList.add('hidden');
        feedback.innerText = '';
        while (optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.innerText === currentQuestions[currentQuestionIndex].answer;

        if (isCorrect) {
            score++;
            scoreEl.innerText = score;
            feedback.innerText = 'Correct! 🎉';
            feedback.style.color = '#155724';
        } else {
            feedback.innerText = 'Incorrect! 🙁';
            feedback.style.color = '#721c24';
        }

        Array.from(optionsContainer.children).forEach(button => {
            if (button.innerText === currentQuestions[currentQuestionIndex].answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
            button.disabled = true;
        });

        nextBtn.classList.remove('hidden');
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            alert(`Quiz Over! Your final score is ${score} out of ${currentQuestions.length}.`);
            quizContainer.classList.add('hidden');
            menuContainer.classList.remove('hidden');
        }
    });

    // --- INITIALIZATION ---
    function initializeMenu() {
        if (typeof questions === 'undefined' || questions.length === 0) {
            menuContainer.innerHTML = '<h2>Error: Could not load questions. Please check the questions.js file.</h2>';
            return;
        }

        console.log(`${questions.length} questions loaded successfully.`);
        const totalBlocks = Math.ceil(questions.length / 100);
        for (let i = 0; i < totalBlocks; i++) {
            const start = i * 100 + 1;
            const end = Math.min((i + 1) * 100, questions.length);
            const button = document.createElement('button');
            button.innerText = `Questions ${start}-${end}`;
            button.onclick = () => startBlockQuiz(i);
            blockButtonsContainer.appendChild(button);
        }
    }

    initializeMenu();
});