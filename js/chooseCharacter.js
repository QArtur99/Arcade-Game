/*
This file is created to manage the startGamePanel,
creat canvas for character views and logic to switch between characters.
*/
let doc2 = this.document;
let canvasPlayer = doc2.createElement('canvas');
let ctx2 = canvasPlayer.getContext('2d');


let leftArrow = document.querySelector('.leftArrow');
let rightArrow = document.querySelector('.rightArrow');
let currentCharacter = 0;
let charactersArray = [
  'images/char-boy.png',
  'images/char-cat-girl.png',
  'images/char-horn-girl.png',
  'images/char-pink-girl.png',
  'images/char-princess-girl.png'
];

canvasPlayer.width = 101;
canvasPlayer.height = 171;
let canvasCharacter = document.querySelector('.canvasCharacter');
canvasCharacter.appendChild(canvasPlayer);

leftArrow.addEventListener('click', previousCharacter);
rightArrow.addEventListener('click', nextCharacter);

function previousCharacter() {
  if (currentCharacter > 0) {
    drawCharacter(currentCharacter - 1);
  } else {
    drawCharacter(charactersArray.length-1);
  }
}

function nextCharacter() {
  if (currentCharacter < charactersArray.length-1) {
    drawCharacter(currentCharacter + 1);
  } else {
    drawCharacter(0);
  }
}

function drawCharacter(index) {
  currentCharacter = index;
  ctx2.clearRect(0, 0, canvasPlayer.width, canvasPlayer.height);
  ctx2.drawImage(Resources.get(charactersArray[index]), 0, 0);
}

function onLoadCharacters() {
  drawCharacter(0);
}

function setCharacter(){
  player.sprite = charactersArray[currentCharacter];
}

Resources.load([
  'images/char-boy.png',
  'images/char-cat-girl.png',
  'images/char-horn-girl.png',
  'images/char-pink-girl.png',
  'images/char-princess-girl.png'
]);

Resources.onReady(onLoadCharacters);
this.ctx2 = ctx2;
