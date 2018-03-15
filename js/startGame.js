/*
This file is created to manage the game panel's views
*/

let startGamePanel = document.querySelector('.startGame');
let gamePanel = document.querySelector('.gamePanel');
let wonPanel = document.querySelector('.won');
let scorePanel = document.querySelector('.score');
let scoreResult = document.querySelector('.scoreResult')

const global = this;

let playButtonList = document.getElementsByClassName('playButton');
for (let i = 0; playButtonList.length > i; i++) {
  playButtonList[i].addEventListener('click', startGame);
}

let startButton = document.querySelector('.startButton');
startButton.addEventListener('click', onRestartClick);


function onRestartClick() {
  resetGame();
  startGamePanel.style.display = "none";
  gamePanel.style.display = "";
  wonPanel.style.display = "none";
  scorePanel.textContent = 0;
  setCharacter();
  startEngine(global);
  runTimeManager();
}

function startGame() {
  startGamePanel.style.display = "";
  gamePanel.style.display = "none";
  wonPanel.style.display = "none";
}

function wonGame() {
  startGamePanel.style.display = "none";
  gamePanel.style.display = "none";
  wonPanel.style.display = "";
  scoreResult.textContent = 'Your score: ' + player.score +
    ' points! and Your time: ' + getTimer() + ' seconds!';
  stopTimer();
  player.y = 320;
}

function loseGame() {
  wonGame();
}

startGame();
