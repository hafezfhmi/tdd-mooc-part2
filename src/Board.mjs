export class Board {
  width;
  height;
  block;
  fallingRow;
  memory;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.memory = new Array(height);

    for (let row = 0; row < this.height; row++) {
      this.memory[row] = new Array(width).fill(".");
    }
  }

  drop(block) {
    if (this.block) {
      throw "already falling";
    }

    this.fallingRow = 0;
    this.block = block;
  }

  tick() {
    if (this.fallingRow === this.height - 1 || this.memory[this.fallingRow + 1][1] !== ".") {
      this.memory[this.fallingRow][1] = this.block;
      this.block = null;
    } else {
      this.fallingRow++;
    }
  }

  hasFalling() {
    return !!this.block;
  }

  toString() {
    let result = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.block && row === this.fallingRow && col === 1) {
          result += this.block;
        } else {
          result += this.memory[row][col];
        }
      }
      result += "\n";
    }

    return result;
  }
}
