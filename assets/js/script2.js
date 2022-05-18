// DEPENDENCIES =========================================
var timerEl = document.querySelector("#timerDisp");
var mainEl = document.querySelector("main");
var playBtnEl = document.querySelector("#playBtn");

// STATE =========================================
//questions[0] choices[1,2,3,4] and answers[5]
var qBank = [
    ["Commonly used data types DO NOT include: ", "1. strings", "2. booleans", "3. alerts", "4. numbers", "3. alerts"],
    ["The condition in an if / else statement is enclosed within ____.", "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets", "3. parentheses"],
    ["Arrays in JavaScript can be used to store _____.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", "4. all of the above"],
    ["String values must be enclosed within _____ when being assigned to variables.", "1. commas", "2. curly brackets", "3. quotes", "4. parentheses", "3. quotes"],
];
var qCurrent = [];
var timeLeft = 100;

// FUNCTIONS ======================================
//Render Question/choices
function renderQuestion(qBankIndex) {
    var questionEl = document.createElement("h4");
    questionEl.textContent = qBank[qBankIndex][0];
    questionEl.setAttribute("style", "font-size: 30px;");
    mainEl.appendChild(questionEl);
    for (i=1; i<5; i++) {
        var choiceEl = document.createElement("button");
        choiceEl.textContent = qBank[qBankIndex][i];
        choiceEl.setAttribute("id", "choices");
        choiceEl.setAttribute("style", "font-size: 20px;");
        mainEl.appendChild(choiceEl);
    }
}


//


// USER INTERACTIONS ==============================


// INITIALIZATION =======================================
renderQuestion(0);
