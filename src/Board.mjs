export class Board {
  width;
  height;
  block;
  dropLevel;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.dropLevel = 0;
  }

  drop(block) {
    this.block = block;
  }

  tick() {
    this.dropLevel++;
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
