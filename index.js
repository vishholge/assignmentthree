var readlineSync = require("readline-sync");


function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "! \n Here is the Quiz for you ,if you know me well you will win");
}

var score = 0;

// data of high score
var highScores = [
  {
    name: "Keshav",
    score: 3,
  },

  {
    name: "Dinesh",
    score: 2,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Aurangabad"
}, {
  question: "what is my nick name? ",
  answer: "Appa"
},
{
  question: "which is my favorite sporst? ",
  answer: "Vollyball"
}];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("************")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }




}
function showScores() {
  console.log("done! You SCORED: ", score);

  console.log("Check out the high scores, Have you loss or win please let me know. based on your score I can figure out you know me or not");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome()
game()
showScores()