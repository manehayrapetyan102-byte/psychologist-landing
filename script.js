const testContainer = document.getElementById("test-container");
const startBtn = document.getElementById("start-btn");

const questions = [
    {
        question: "Как часто вы чувствуете тревогу?",
        answers: [
            { text: "Редко", score: 1 },
            { text: "Иногда", score: 2 },
            { text: "Часто", score: 3 }
        ]
    },
    {
        question: "Как вы спите?",
        answers: [
            { text: "Хорошо", score: 1 },
            { text: "Иногда плохо", score: 2 },
            { text: "Плохо", score: 3 }
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

startBtn.addEventListener("click", startTest);

function startTest() {
    currentQuestion = 0;
    totalScore = 0;
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    testContainer.innerHTML = `<p>${q.question}</p>`;

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.className = "answer";
        btn.onclick = () => {
            totalScore += answer.score;
            nextQuestion();
        };
        testContainer.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let resultText = "";

    if (totalScore <= 3) {
        resultText = "Низкий уровень напряжения.";
    } else if (totalScore <= 5) {
        resultText = "Средний уровень напряжения.";
    } else {
        resultText = "Высокий уровень напряжения.";
    }

    testContainer.innerHTML = `<h3>Результат</h3><p>${resultText}</p>`;
}