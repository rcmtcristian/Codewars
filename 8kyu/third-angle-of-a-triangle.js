// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// Main Solution:
function otherAngle(a, b) {
  return 180 - (a + b);
}

// Other Solutions:
function otherAngle(a, b) {
  if (a < 0 || b < 0)
    //ensure no negative angles
    return 0;
  if (a + b >= 180)
    //ensure 2 angles don't sum up to 180
    return 0;
  return 180 - a - b; //return missing angle
}
