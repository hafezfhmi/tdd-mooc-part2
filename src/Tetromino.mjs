import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  // 1. pass currentOrientation and orientations for possible orientations.
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
    // 2. if first initialized, create a new RotatingShape object to be able to access its method
    this.shape = RotatingShape.fromString(initialShape);
    this.currentOrientation = currentOrientation;
    // 3. get all possible orientations and set it as class property. Push the orientations to orientations props and must be of type RotatingShape
    this.orientations = [
      this.shape,
      this.shape.rotateRight(),
      this.shape.rotateRight().rotateRight(),
      this.shape.rotateRight().rotateRight().rotateRight(),
    ].slice(0, orientations);
    // 6. if initialized later, there's no need to get the possible orientations, just accept the previous array. check if its type array or we can pass null as the shape because we no longer need to set shape props.
  }

  toString() {
    return this.shape.toString();
    // 4. use currentOrientation and orientations to get current shape.
  }

  rotateRight() {
    return new Tetromino(this.shape.rotateRight().toString());
    //5. use currentOrientation and orientations. Make a new Tetromino object (immutable). and use conditional to check if it exceeds the possible orientations
  }

  rotateLeft() {
    return new Tetromino(this.shape.rotateLeft().toString());
  }
}
