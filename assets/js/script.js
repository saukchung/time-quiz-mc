// DEPENDENCIES =========================================
var timerEl = document.querySelector("#timerDisp");
var mainEl = document.querySelector("main");
var buttonEl = document.querySelector("#playBtn");


// STATE =========================================
var timeLeft = 100;

var qBank = [
    ["Q", "a", "b", "c", "d"],
    ["Q", "a", "b", "c", "d"],
    ["Q", "a", "b", "c", "d"],
    ["Q", "a", "b", "c", "d"],
];

// FUNCTIONS =========================================
//FUNCTION start game
function startGame() {
    startTimer();
    //loop the question phase until:
    //  Questions run out
    //  Time runs out
    quizzer();
    };

//FUNCTION startTimer
function startTimer() {
    var timerInterval = setInterval(function() {
        //Timer ticks down due to time lapse
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft;
    }, 1000);    
};

//FUNCTION quizquestion returns true or false
function quizzer() {
    buttonEl.remove();
    for (i=0; i<qBank.length; i++) {
        var questionDisp = document.createElement("h4");
        questionDisp.textContent = qBank[i][0];
        mainEl.appendChild(questionDisp);
        for (k=1; k<5; k++) {
            var choiceDisp = document.createElement("button");
            choiceDisp.textContent = qBank[i][k];
            mainEl.appendChild(choiceDisp);
        }
    
        
    }

}
quizzer();
//if false subtract time from timer
//if true return to the loop
//  Quiz
    // PLACE
    // mainEl.appendChild(questionDisp);

    // //Create choices as buttons
    // var choiceDisp = document.createElement("button");
    // choiceDisp.textContent = 


//          Show question and the choices
//          
//      Check
//      

// USER INTERACTIONS =========================================


// INITIALIZATION =========================================

