// Enemies our player must avoid
class Enemy extends GameElement {
  constructor(x, y, sprite) {
    super(x, y, sprite);
    this.movement;
    this.setMovement();
    this.isVisible = true;
    this.disappearTime = Date.now() / 1000;
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
}
