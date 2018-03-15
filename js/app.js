//global variables
let item, player, allEnemies;
let bug1, bug2,bug3;

// Enemies our player must avoid
class Enemy {
  constructor() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = 71;
    this.movement;
    this.setMovement();
    this.isVisible = true;
    this.disappearTime = Date.now() / 1000;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
  }

  setMovement() {
    this.movementOptions = [60, 120, 180, 240];
    this.randomNumber = Math.floor(Math.random() * 4);
    this.movement = this.movementOptions[this.randomNumber];
  }

  // Update the enemy's position, required method for game
  update(dt) {
    let now = Date.now() / 1000;
    if (this.x >= 505) {
      this.setMovement();
      if (this.isVisible) {
        this.disappearTime = Date.now() / 1000;
        this.isVisible = false;
      }

      let randomTimeInSec = Math.floor(Math.random() * 3) + 2;
      if (now - this.disappearTime > randomTimeInSec) {
        this.x = 0;
        this.isVisible = true;
      }
    } else {
      this.x = this.x + this.movement * dt;
    }
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

};




//Player object
class Player {
  constructor() {
    this.x = 202;
    this.y = 320;
    this.previousX = 202;
    this.previousY = 320;
    this.score = 0;
    this.sprite = 'images/char-boy.png';
  }

  update() {
    if (this.y == -12) {
      wonGame();
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(arrowKey) {
    switch (arrowKey) {
      case 37: //left
        if (this.x > 0) {
          this.x = this.x - 101;
        }
        break;
      case 38: //up
        if (this.y > -12) {
          this.y = this.y - 83;
        }
        break;
      case 39: //right
        if (this.x < 404) {
          this.x = this.x + 101;
        }
        break;
      case 40: //down
        if (this.y < 403) {
          this.y = this.y + 83;
        }
        break;
    }
  }

}

class Item {
  constructor() {
    this.x = 1000;
    this.y = 0;
    this.bonusIndex = 0;
    this.timeOfLastItem = 0;
    this.timeOfInvisibility = 0;
    this.timeOfVisibility = 0;
    this.isVisible = false;
    this.sprite = 'images/Key.png';
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

}
//Reset position of game elements
function resetGame() {
  item = new Item()
  player = new Player();

  bug1 = new Enemy();
  bug2 = new Enemy();
  bug2.y += 83;
  bug3 = new Enemy();
  bug3.y += 166;
  allEnemies = [bug1, bug2, bug3];
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(e.keyCode);
});
