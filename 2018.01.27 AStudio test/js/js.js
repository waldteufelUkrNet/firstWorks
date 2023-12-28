/* REVERSED TIMER */

var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

function reversedTimer() {
  var stopDate = new Date(2018,6,30,23,59);
  var nowDate = new Date();
  var date = stopDate - nowDate; // різниця в мс
  var delta;

  var days = Math.floor(date/86400000);
  if (days < 10) days = '0' + days;
  day.innerHTML = days;
  delta = date - days*86400000;

  var hours = Math.floor(delta/3600000);
  if (hours < 10) hours = '0' + hours;
  hour.innerHTML = hours;
  delta = delta - hours*3600000;

  var minutes = Math.floor(delta/60000);
  if (minutes < 10) minutes = '0' + minutes;
  minute.innerHTML = minutes;
  delta = delta - minutes*60000;

  var seconds = Math.floor(delta/1000);
  if (seconds < 10) seconds = '0' + seconds;
  second.innerHTML = seconds;
}

function startReversedTimer() {
  setInterval(reversedTimer, 1000);
  reversedTimer();
}

startReversedTimer();

/* nav button */

$(document).ready(function(){
  var isOpen = false;
  $("#navbtn").click(function(){

    if (isOpen == true) {
      $(".navigation").css({"height":"86"});
      isOpen = false;
      return;
    };

    if (isOpen == false) {
      $(".navigation").css({"height":"250"});
      isOpen = true;
      return;
    };


  });
});