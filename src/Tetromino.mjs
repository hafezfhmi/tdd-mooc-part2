import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = new Tetromino(
    `.T.
     TTT
     ...`
  );

  static I_SHAPE = new Tetromino(
    `
     .....
     .....
     IIII.
     .....
     .....`
  );

  shape;
  constructor(shape) {
    this.shape = RotatingShape.fromString(shape);
  }
  toString() {
    return this.shape.toString();
  }
  rotateRight() {
    this.shape = this.shape.rotateRight();
    return this;
  }
}
