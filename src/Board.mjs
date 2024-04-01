export class Board {
  width;
  height;
  block;
  fallingRow;
  falling;
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
    this.fallingRow = 0;
    this.falling = true;

    if (this.block) {
      throw "already falling";
    }
    this.block = block;
  }

  tick() {
    if (this.fallingRow === this.height - 1) {
      this.falling = false;
    } else {
      this.fallingRow++;
    }
  }

  hasFalling() {
    return this.falling;
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
