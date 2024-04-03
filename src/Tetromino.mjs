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
    return new Tetromino(this.shape.rotateRight().toString());
  }

  rotateLeft() {
    return new Tetromino(this.shape.rotateLeft().toString());
  }
}
