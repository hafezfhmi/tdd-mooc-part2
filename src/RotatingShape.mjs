export class RotatingShape {
  shape;

  constructor(shape) {
    this.shape = shape;
  }

  static fromString(shapeString) {
    return new RotatingShape((this.shape = shapeString.replaceAll(" ", "").trim().split("\n")));
  }

  toString() {
    return this.shape.join("\n") + "\n";
  }
}
