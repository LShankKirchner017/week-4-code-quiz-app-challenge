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

var timeValue = 120;
var que_count = 0
var que_numb = 1;
var userScore = 0;
var counterLine;
var widthValue = 0;

var restart_quiz = result_box.querySelector(".buttons .restart")
var quit_quiz = result_box.querySelector(".buttons .quit")

restart_quiz.onclick = function () {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult")
    timeValue = 120;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestion(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeCount.textContent = "Time Left";
    next_btn.classList.remove("show")
}

quit_quiz.onclick = function () {
    window.location.reload();
}

var next_btn = document.querySelector("footer .next_btn");
var bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = function () {
    if(que_count < questions.length -1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        starTimer(timeValue);
        starTimerLine(widthValue);
        timeText.textContent = "Time left";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInvertal(counterLine);
        showResult();
    }
}

// getting questions and options from array
function showQuestions(index){
    var que_text =document.querySelector(".que_text");

    // creating a new span and div tag for quetion and option and passing the value using array
    var que_tag = '<span>' + questions[index].numb + "." + questions[index].question + '</span>';
    var option_tag =
      '<div class = "option"><span>' +
      questions[index].options[0] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[1] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[2] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[3] +
      "</span></div>";
      que_text.innerHTML = que_tag; //adding new span tag inside que_tag
      option_list.innerHTML = option_tag; //adding new div tag inside option_tag

      var option = option_list.querySelectorAll(".option");

      //set onclick attribute to all available options
      for(i=0; i <option.length; i++){
       option[i].setAttribute("onclick", "optionSelected(this");
      }
}

//if user clicked on an option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInverval(counterLine); //clear counterline
    var userAns = answer.textContent; //getting user selection option
    var correctAns = questions[que_count].answer; //getting correct answer from array
    var allOptions = option_list.children.length //getting all option items

    if(userAns == correctAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //update score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option 
        console.log("Correct Answer");
        console.log("Your correct answer = " +userScore);
    }
    else{
        answer.classList.add("incorrect"); //adding red color to selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correctAns) //if there is an option which matches
                option_list.children[i].setAttribute("class", "option correct"); // adding green color to correct answer
                console.log("Auto selected correct answer.")
        }
    }
}
    for(i=0; i < allOptions; i++){
    option_list.children[i].classList.add("disabled"); //once user selects an option then disable all options
}  
    next_btn.classList.add("show"); //show the next button is user selected any option

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    var scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if used score more than 3
    //creating a new span tag and passing the user score number & total quesiton number
        var scoreTag = '<span> and congratulations! 🥳, You got <p>' + userScore + '</p> out of <p>' + questions.lenght + '</p></span>';
        scoreText.innerHTML = scoreTag; //adding new span tag inside score_text
}
}
