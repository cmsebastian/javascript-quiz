var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: 2
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: 2
    },
    {
      title: "True or false statements in Javascript are known as what?",
      choices: ["booleans", "arrays", "prompts", "alerts"],
      answer: 0
    },
    {
      title: "External Javascript files are linked where?"
      choices: ["head tag", "script tags", "body tags", "html tags"  ]
      answer: 1
    }];
   

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var selectedAnswer = [];
var c = 180;
var t;

//display first question
displayCurrentQuestion();
$(this).find(".quizMessage").hide();
$(this).find(".preButton").attr('disabled', 'disabled');

timedCount();



