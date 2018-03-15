//global variables
let item, player, allEnemies;
let bug1, bug2, bug3;

//Reset position of game elements
function resetGame() {
  item = new Item(1000, 0, 'images/Key.png');
  player = new Player(202, 320, 'images/char-boy.png');
  bug1 = new Enemy(0, 71, 'images/enemy-bug.png');
  bug2 = new Enemy(0, 71 + 83, 'images/enemy-bug.png');
  bug3 = new Enemy(0, 71 + 166, 'images/enemy-bug.png');
  allEnemies = [bug1, bug2, bug3];
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  player.handleInput(e.keyCode);
});
