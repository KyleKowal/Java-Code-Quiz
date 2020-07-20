// Quiz
const timerEl = document.querySelector("header span#time");
const startDivEl = document.querySelector("div.start-div");
const startButton = document.querySelector("button#start");
const questionDivEl = document.querySelector("div.question-div");
const answerButtons = document.querySelector("div.buttons");
const questionEl = document.querySelector("h1#question");
const rightWrongEl = document.querySelector("div#right-wrong");

const endDivEl = document.querySelector("div.end-div");
const finalScoreEl = document.querySelector("h2 span#final-score");
const scoreForm = document.querySelector("form#score-form");
const initialsInput = document.querySelector("input#initials");

// High Scores
const hofLink = document.querySelector("header div#hs");
const hallOfFame = document.querySelector("div.high-scorers");
const scoresList = document.querySelector("ol#scores-list");
const clearHofBtn = document.querySelector("button#clear");
const goBackHofBtn = document.querySelector("button#go-back");

// Quiz questions sourced from w3 schools
// https://www.w3schools.com/js/js_quiz.asp
const questionBank = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        possibleAns: ["a. <scripting>", "b. <script>", "c. js", "d. javascript"],
        correctAns: 1
    },
    {
        question: "How does a FOR loop start??",
        possibleAns: ["a. for i = 1 to 5 ", "b. for (i <= 5; i++)", "c. for (i = 0; i <= 5)", "d. for (i = 0; i <= 5; i++) "],
        correctAns: 3
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        possibleAns: ["a. <script href='xxx.js'>", "b. <script name='xxx.js'>", "c. <script value='xxx.js'>", "d. <script src='xxx.js'>"],
        correctAns: 3
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        possibleAns: ["a. onclick  ", "b. onmouseover", "c. onmouseclick", "d. onchange"],
        correctAns: 0
    },



];

// Quiz variables

let questionIdx = 0;
let secondsLeft = 60;
let timerInterval;
let flashTimeout;

function hide(element) {
    element.setAttribute("style", "display: none;");
}

function show(element) {
    element.setAttribute("style", "display: block;");
}

// Quiz Functions


function displayQuestion() {
    const currQuestion = questionBank[questionIdx];
    questionEl.textContent = currQuestion.question;
    const possibleAnswers = currQuestion.possibleAns;
    for (let i = 0; i < possibleAnswers.length; i++) {
        answerButtons.children[i].textContent = possibleAnswers[i];
    }
}


// End Quiz
function endQuiz() {
    clearInterval(timerInterval); 
    timerEl.textContent = 0; 

    
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }

    finalScoreEl.textContent = secondsLeft;
    hide(questionDivEl); 
    show(endDivEl); 

}

// Starts timer interval
function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--; 
        timerEl.textContent = secondsLeft; 
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            
            endQuiz();
        }
    }, 1000)
}

// Starts quiz
function startQuiz() {
    hide(startDivEl);
    displayQuestion();
    show(questionDivEl);
    startTimer();
}