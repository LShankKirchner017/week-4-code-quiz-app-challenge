// selecting all required elements
var start_btn = document.querySelector(".start_btn")
var info_box = document.querySelector(".info_box")
var exit_btn = info_box.querySelector(".buttons .quit")
var continue_btn = info_box.querySelector(".buttons .restart")
var quiz_box = document.querySelector(".quiz_box")
var result_box = document.querySelector(".result_box")
var option_list = document.querySelector(".option_list")
var time_line = document.querySelector("header .time_line")
var timeText = document.querySelector(".timer .time_left_txt")
var timeCount = document.querySelector(".timer .time_sec")

// if startQuiz button is clicked
start_btn.onclick = function() {
    info_box.classList.add("activeInfo");
}

//if existQuiz button is clicked
exit_btn.onclick = function (){
    info_box.classList.remove("activeInfo")
}

continue_btn.onclick = function () {
    info_box.classList.remove("activeInfo")
    quiz_box.classList.add("activeQuiz")
    showQuetions(0);
    queCounter(1);
    starTimer(120)
    starTimerLine(0)
}