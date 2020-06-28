//Basic HTML Elements Here
//Note To Self: Make Sure to Console.log to check if selected correctly
var headEl = document.querySelector("header");
var bodyEl = document.querySelector("body");
var titleEl = document.querySelector("#page-title");
var descriptionEl = document.querySelector("#description");

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

var quizStart = function() {
    //First, hide opening elements by applying "hide" class containing display: none; property
    headEl.classList.add("hide");
    titleEl.classList.add("hide");
    viewEL.classList.add("hide");
    startBtn.classList.add("hide");
    descriptionEl.classList.add("hide");
    //Display Questions and Answers by removing "hide" class
    choicesEl.classList.remove("hide");
    //Timer
    countdown = setInterval(timer, 1000);

};

//Run quizStart();
startBtn.onclick = quizStart;