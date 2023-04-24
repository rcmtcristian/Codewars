// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// Main Solution
var flatten = function (array) {
  // TODO: Program me
  return array.flat();
};

// Other Solutions
var flatten = function (array: any[]) {
  return array.flat();
};

//
const flatten = (array) => [].concat(...array);