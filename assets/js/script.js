//Note To Self: Make Sure to Console.log to check if selected correctly
// Lets First declare selectors
// Any essential variables
// Create Start Function
// Create Timer Function

//Basic HTML Elements Here
var headEl = document.querySelector("header");
var bodyEl = document.querySelector("body");
var titleEl = document.querySelector("#page-title");

//Specific Id/Classes Here
var viewEL = document.querySelector("#view-scores");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");

//Button Selectors Here
var startBtn = document.querySelector("#start");
var choiceOne = document.querySelector("#btn-1");
var choiceTwo = document.querySelector("#btn-2");
var choiceThree = document.querySelector("#btn-3");
var choiceFour = document.querySelector("#btn-4");

//Essential Variables Here
var remainingTime = 100;
var score = 0;
//Add New countdown var
var countdown = "";

//First 
var quizStart = function() {
    //First, hide opening elements by applying "hide" class containing display: none; property
    titleEl.classList.add("hide");
    viewEL.classList.add("hide");
    startBtn.classList.add("hide");
    //Display Questions and Answers by removing "hide" class
    choicesEl.classList.remove("hide");
    //Timer
    countdown = setInterval(timer, 1000);
    questionEl.textContent = "test";

};

var timer = function() {
    //Stop timer from going beyond 0
    if (remainingTime <= 0) {
        clearInterval(countdown);
    }

    timerEl.textContent = remainingTime;
    remainingTime--;
};

//Run quizStart();
startBtn.onclick = quizStart;