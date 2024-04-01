export class Board {
  width;
  height;
  block;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drop(block) {
    this.block = block;
  }

  toString() {
    let result = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.block && row === 0 && col === 1) {
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
