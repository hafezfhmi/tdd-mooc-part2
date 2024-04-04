import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = new Tetromino(
    `.T.
     TTT
     ...`,
    0,
    4
  );

  static I_SHAPE = new Tetromino(
    `
     .....
     .....
     IIII.
     .....
     .....`,
    0,
    2
  );

  shape;
  currentOrientation;
  orientations;

  constructor(initialShape, currentOrientation, orientations) {
    this.currentOrientation = currentOrientation;
    if (initialShape === null) {
      this.orientations = orientations;
    } else {
      this.shape = RotatingShape.fromString(initialShape);
      this.currentOrientation = 0;
      this.orientations = [
        this.shape,
        this.shape.rotateRight(),
        this.shape.rotateRight().rotateRight(),
        this.shape.rotateRight().rotateRight().rotateRight(),
      ].slice(0, orientations);
    }
  }

  toString() {
    return this.orientations[this.currentOrientation].toString();
  }

  rotateRight() {
    return new Tetromino(
      null,
      this.currentOrientation === this.orientations.length - 1 ? 0 : this.currentOrientation + 1,
      this.orientations
    );
  }

  rotateLeft() {
    return new Tetromino(
      null,
      this.currentOrientation === 0 ? this.orientations.length - 1 : this.currentOrientation - 1,
      this.orientations
    );
  }
}
