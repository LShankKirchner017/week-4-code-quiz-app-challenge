// selecting all required elements
var startBtn = document.querySelector(".startBtn")
var infoBox = document.querySelector(".infoBox") 
var exitBtn = document.querySelector(".buttons .quit")
var continueBtn = document.querySelector(".buttons .restart")
var quizBox = document.querySelector(".quizbox")
var resultBox = document.querySelector(".resultBox")
var optionList = document.querySelector(".optionList")
var timeLine = document.querySelector("head .timeLine")
var timeText = document.querySelector(".timer .timeLeftTxt")
var timeCount = document.querySelector(".timer .timerSec")

// if startQuiz button is clicked
startBtn.onclick = function(){
    infoBox.classList.add("activeInfo"); //showa info box
}

// if exitQuiz button is clicked
exitBtn.onclick = function(){
    infoBox.classList.remove("activeInfo"); //hidea info box
}

// if continueQuiz button is clicked
continueBtn.onclick = function(){
    infoBox.classList.remove("activeInfo"); // hides info box
    quizBox.classList.add("activeQuiz"); //shows quiz box
    showQuestions(0); // calling showQuestions function
    questionsCounter(1); //passing 1 parameter to Question Counter
    startTimer(120); //calling startTimer function
    starTimerLine(0); // calling starTimerLine function
}

