/*
This file is created to manage the time of the game
*/

let timer = document.querySelector(".timer");
let timeCounter = 0;
let counterIntervalId = null;

function runTimeManager() {
  counterIntervalId = setInterval(startTimer, 1000);
}

function startTimer() {
  timeCounter++;
  timer.textContent = formatElapsedTime(timeCounter);
}

function formatElapsedTime(time) {
  let date = new Date(null);
  date.setSeconds(time);
  return date.toISOString().substr(11, 8);
}

function stopTimer() {
  if (counterIntervalId) {
    clearInterval(counterIntervalId);
    counterIntervalId = null;
    timeCounter = 0;
    timer.textContent = "00:00:00";
  }
}

function getTimer(){
  return timeCounter;
}

function random(range){
  return Math.floor(Math.random() * range);
}
