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
})

// INITIALIZATION =========================================

