class Item extends GameElement {
  constructor(x, y, spirite) {
    super(x, y, spirite);
    this.bonusIndex = 0;
    this.timeOfLastItem = 0;
    this.timeOfInvisibility = 0;
    this.timeOfVisibility = 0;
    this.isVisible = false;
  }

  //logic to generate the item
  generateItem() {
    let itemArray = [
      'images/Gem-Blue.png',
      'images/Gem-Green.png',
      'images/Gem-Orange.png',
      'images/Heart.png',
      'images/Key.png'
    ];
    let waitTimeArray = [2, 4, 6];

    if (this.isVisible) {
      if (getTimer() > (this.timeOfLastItem + this.timeOfVisibility)) {
        let randomNumber = random(3);
        this.x = 1000;
        this.y = 0;
        this.isVisible = false;
        this.timeOfLastItem = getTimer();
        this.timeOfInvisibility = waitTimeArray[randomNumber];
      }
    } else if (!this.isVisible) {
      if (getTimer() > (this.timeOfLastItem + this.timeOfInvisibility)) {
        let randomNumber = random(3);
        let randomNumberPic = random(5);
        let randX = random(5);
        let randY = random(3);
        this.x = randX * 101;
        this.y = randY * 83 + 71;
        this.isVisible = true;
        this.timeOfLastItem = getTimer();
        this.timeOfVisibility = waitTimeArray[randomNumber];
        this.sprite = itemArray[randomNumberPic];
        this.bonusIndex = randomNumberPic;
      }
    }
  }

  checkItem(player) {
    if (this.x == player.x && this.y == player.y) {
      this.x = 1000;
      this.y = 0;
      this.isVisible = false;
      player.score += 20 + this.bonusIndex * 25;
    }
  }
}
