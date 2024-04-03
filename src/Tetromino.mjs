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

  constructor(shape) {
    return RotatingShape.fromString(shape);
  }
}
