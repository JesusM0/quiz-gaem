//Note To Self: Make Sure to Console.log to check if selected correctly
// Lets First declare selectors
// Any essential variables
// Create Start Function
// Create Timer Function
// Create array of Questions

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

var javaScriptQuestions = [
    {question: "Inside which HTML element do we put the JavaScript?", option1: "<js>", option2: "<script>", option3: "<javascript>", option4: "<scripting>", answer: "4" },
    {question: "Which of the following is not a valid JavaScript variable name?", option1: "2names", option2: "_first_and_last_names", option3: "FirstAndLast", option4: "None of the above", answer: "1" },
    {question: "What is the correct JavaScript syntax to write 'Hello World?'", option1: "System.out.println('Hello World')", option2: "println ('Hello World')", option3: "document.write('Hello World')", option4: "response.write('Hello World')", answer: "3" },
    {question: "JavaScript entities start with _______ and end with _________.", option1: "Semicolon, colon", option2: "Semicolon, Ampersand", option3: "Ampersand, colon", option4: "Ampersand, Semicolon", answer: "4" },
    {question: "Which of the following is the structure of an if statement?", option1: "if (conditional expression is true) thenexecute this codeend if", option2: "if (conditional expression is true)execute this codeend if", option3: "if (conditional expression is true)   {then execute this code>->}", option4: "if (conditional expression is true) then {execute this code}", answer: "3" },
    {question: "What are variables used for in JavaScript Programs?", option1: "Storing numbers, dates, or other values", option2: "Varying randomly", option3: "Causing high-school algebra flashbacks", option4: "None of the above", answer: "1" },
    {question: "Which of the following is not considered a JavaScript operator?", option1: "new", option2: "this", option3: "delete", option4: "typeof", answer: "2" },
    {question: "JavaScript is interpreted by _________", option1: "Client", option2: "Server", option3: "Object", option4: "None Of The Above", answer: "1" },
    {question: "Using ____ statement is how you test for a specific condition.", option1: "Select", option2: "If", option3: "Switch", option4: "For", answer: "2" },
    {question: "Which of the following is the structure of an if statement?", option1: "if (conditional expression is true) thenexecute this codeend if", option2: "if (conditional expression is true)execute this codeend if", option3: "if (conditional expression is true)   {then execute this code>->}", option4: "if (conditional expression is true) then {execute this code}", answer: "3" },
    
];

//Run quizStart();
startBtn.onclick = quizStart;