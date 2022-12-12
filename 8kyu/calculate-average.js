// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// FUNDAMENTALSARRAYS

// My solution:
function findAverage(array) {
  // your code here
  return array.reduce((a, b) => a + b, 0) / array.length || 0;
}
// other solutions:
function find_average(array) {
  return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}
