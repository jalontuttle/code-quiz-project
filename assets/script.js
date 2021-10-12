var timeEl = $("#Timer");
var secondsLeft = 80 


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;

    }, 1000);