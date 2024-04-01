export class Board {
  width;
  height;
  block;
  dropLevel;
  falling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.dropLevel = 0;
    this.falling = true;
  }

  drop(block) {
    if (this.block) {
      throw "already falling";
    }
    this.block = block;
  }

  tick() {
    if (this.dropLevel === this.height - 1) {
      this.falling = false;
    } else {
      this.dropLevel++;
    }
  }

  hasFalling() {
    return this.falling;
  }

  toString() {
    let result = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.block && row === this.dropLevel && col === 1) {
          result += this.block;
        } else {
          result += ".";
        }
      }
      result += "\n";
    }

    return result;
  }
}
