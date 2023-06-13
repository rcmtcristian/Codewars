// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Main  Solution
function noOdds(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Alternative Solution
var noOdds = values => values.filter(x => !(x % 2));