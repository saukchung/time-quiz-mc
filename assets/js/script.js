// DEPENDENCIES =========================================
var timerEl = document.querySelector("#timerDisp");
var buttonEl = document.querySelector("#playBtn");
var mainEl = document.querySelector("main");




// STATE =========================================
var timeLeft = 100;

var qBank = [
    {
        question: "Which of these is an 'a'?", 
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
];

// FUNCTIONS =========================================
function renderQuestion(i) {
    const questionUl = document.createElement("ul");
    console.log(qBank);
    questionUl.textContent = qBank[i].question;

    for (j = 0; j < qBank[i].choices.length; j++) {
        const choiceLi = document.createElement("li");
        choiceLi.textContent = qBank[i].choices[j];
        questionUl.appendChild(choiceLi);
    };
    

    mainEl.appendChild(questionUl);
}


function startGame() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

// USER INTERACTIONS =========================================
buttonEl.addEventListener("click", function(event) {
    buttonEl.setAttribute("style", "display: none");
    timerEl.textContent = timeLeft;
    startGame();
    renderQuestion(0);
})

// INITIALIZATION =========================================

