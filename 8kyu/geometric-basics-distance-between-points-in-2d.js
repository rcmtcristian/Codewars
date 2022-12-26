// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

// GEOMETRYFUNDAMENTALS

// My solution
function distanceBetweenPoints(a, b) {
  // your code here
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// Other solutions
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
