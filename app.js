//QUIZ
//code modified from tutorial by web simplified: https://youtu.be/riDzcEQbX6k
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('q')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "When is St.Patrick's Day?",
        answers: [
            {text: "March 17th", correct: true},
            {text: "Smarch 17th", correct: false},
            {text: "March 10th", correct: false},
            {text: "April 20th", correct: false}
        ]
    },
    {
        question: "What is the significance of March 17 to Patrick?",
        answers: [
            {text: "His first Guinness", correct: false},
            {text: "His Birthday", correct: false},
            {text: "The day he died", correct: true},
            {text: "Chased out the snakes", correct: false}
        ]
    },
    {
        question: "What Patrick banish from Ireland?",
        answers: [
            {text: "Sunshine", correct: false},
            {text: "Python Developers", correct: false},
            {text: "Snakes", correct: true},
            {text: "Alchohol free beer", correct: false}
        ]
    },
    {
        question: "Where was Patrick Born?",
        answers: [
            {text: "Cork", correct: false},
            {text: "Dublin", correct: false},
            {text: "Scotland", correct: false},
            {text: "Wales", correct: true}
        ]
    },
    {
        question: "What plant  is associated with Patrick?",
        answers: [
            {text: "Shamrock", correct: true},
            {text: "Marijuana", correct: false},
            {text: "Parsley", correct: false},
            {text: "Moss", correct: false}
        ]
    }
]

//DARK MODE
var checkBox = document.getElementById("switch");
var theme = window.localStorage.getItem("data-theme");

//code taken from Stack Overflow:https://stackoverflow.com/questions/56871118/change-theme-and-store-it-in-local-storage/56871343#56871343?newreg=df14292f4c21452fb9111541505d1cd2
if (theme) document.documentElement.setAttribute("data-theme", theme);
checkBox.checked = theme == "green" ? true : false;

checkBox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'green');
        window.localStorage.setItem("data-theme", "green");
    } else {
        document.documentElement.setAttribute('data-theme', 'white');
        window.localStorage.setItem("data-theme", "white");
    }
})

//IMAGE SWAP
//on mouse enter paddy winks
$('#paddy').on('mouseenter', () => {
    $('#paddy').attr('src', 'static/images/paddy-wink.png');
}).on('mouseleave', () => {
    $('#paddy').attr('src', 'static/images/paddy.png');
});


