export class RotatingShape {
  shape;

  constructor(shape) {
    this.shape = shape;
  }

  static fromString(shapeString) {
    return new RotatingShape((this.shape = shapeString.replaceAll(" ", "").trim().split("\n")));
  }

  rotateRight() {
    let rotatedShape = [];
    for (let col = 0; col < this.shape.length; col++) {
      let str = "";
      for (let row = this.shape[col].length - 1; row >= 0; row--) {
        str += this.shape[row][col];
      }
      rotatedShape.push(str);
    }
    return new RotatingShape(rotatedShape);
  }

  rotateLeft() {
    let rotatedShape = [];
    for (let col = this.shape[0].length - 1; col >= 0; col--) {
      let str = "";
      for (let row = 0; row < this.shape.length; row++) {
        str += this.shape[row][col];
      }
      rotatedShape.push(str);
    }
    return new RotatingShape(rotatedShape);
  }

  toString() {
    return this.shape.join("\n") + "\n";
  }
}
