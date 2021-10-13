var timeEl = $("#Timer");
var secondsLeft = 70;
var start = $("#Start");
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: [
      "a: Douglas Crockford",
      "b: Mark Zuckerberg",
      "c: Brendan Eich",
      "d: Mark Cuban",
    ],
    correctAnswer: "c: Brendan Eich"
  },
  {
    question: "Which type of variable is visible everywhere in the Javascript code?",
    answers: [
      "a: Global",
      "b: Local",
      "c: Both A & B",
      "d: None of the above",
    ],
    correctAnswer: "a: Global"
  },
  {
    question: "Which element is used to attach a Javascript file to our HTML file?",
    answers: [
      "a: <Scripting>",
      "b: <Link>",
      "c: <Script>",
      "d: <Java>"
    ],
    correctAnswer: "c: <Script"
  },
  {
    question: "You can change the styling of a document using Javascript instead of CSS?", 
    answers: [
    "a: True",
    "b: False",
    "c:",
    "d:", 
    ],
    correctAnswer: "a: True"
},
    { 
    question: "Javascript must always remain turned on in someone's browser?",
    answers: [
    "a: True",
    "b: False",
    "c:",
    "d:", 
    ],
    correctAnswer: "b: False"
},
];
var counter = 0;
var result = $("#result-display");
var choiceA = $("#choiceA");
var choiceB = $("#choiceB");
var choiceC = $("#choiceC");
var choiceD = $("#choiceD");




console.log(start);

function runQuiz() {
  console.log("hello");
  start.css("display", "none");
  timeEl.text("Time left: " + secondsLeft);
  showQuestions();
  setTime();
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.text("Time left: " + secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("The timer has run out, the quiz has now finished.")
    }

  }, 1000)
};

function showQuestions() {
  var questionTitle = $("#question-title");
  $("#choices-container").css("display", "block");
  questionTitle.text(myQuestions[counter].question);
  var userChoice = [choiceA, choiceB, choiceC, choiceD];
  choiceA.text(myQuestions[counter].answers[0]);
  choiceB.text(myQuestions[counter].answers[1]);
  choiceC.text(myQuestions[counter].answers[2]);
  choiceD.text(myQuestions[counter].answers[3]);
  counter++
}



console.log(showQuestions);




start.on("click", runQuiz);
choiceA.on("click", showQuestions);
choiceB.on("click", showQuestions);
choiceC.on("click", showQuestions);
choiceD.on("click", showQuestions);


