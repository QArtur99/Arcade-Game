//Player object
class Player extends GameElement {
  constructor(x, y, sprite) {
    super(x, y, sprite);
    this.previousX = 202;
    this.previousY = 320;
    this.score = 0;
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
          if (this.y == -12) {
            wonGame();
          }
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

  checkCollision(enemy) {
    if (enemy.y == this.y && this.x > enemy.x && 70 >= this.x - enemy.x) {
      loseGame();
    }
  }

  checkPosition() {
    if (this.previousX != this.x || this.previousY != this.y) {
      for (let x = 0; 5 > x; x++) {
        for (let y = 0; 3 > y; y++) {
          if (x * 101 == this.x && 71 + y * 83 == this.y) {
            this.previousX = this.x;
            this.previousY = this.y;
            this.score += 5;
            score.textContent = this.score;
          }
        }
      }
    }
  }

}
