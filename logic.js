var startButton = document.getElementById("largeB");
var myQuestion = document.getElementById("question")
var myOptions = document.getElementById("option");
var myButton = document.getElementById("nextButton");
var myQuiz = document.getElementById("avQuiz");


var i = 0;
var len = avQuestions.length;

function questionPage() {
    location.href = "http://127.0.0.1:5501/questionpage.html";
}