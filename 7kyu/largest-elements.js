// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// Main solution:
function largest(n, xs) {
  // Find the n highest elements in a list
  // P: n and xs
  // R: new array made up of lowest to highest number as decided by n
  // E: n=2, xs=[10,9,8,7,6,5,4,3,2,1]), returns [9,10]
  // P: loop and map it to new array and then math min and math math to new array
  //E: sort the array from high to lowest, then slice the array from 0 to n, after that sort them again by reversing it

  return xs
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse();
}

// Other solutions:
function largest(n, xs) {
  return xs
    .sort(function (a, b) {
      return a - b;
    })
    .slice(xs.length - n);
}
