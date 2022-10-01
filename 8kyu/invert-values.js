// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// LISTS FUNDAMENTALS

//My solution
function invert(array) {
  let invert = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      invert.push(array[i] - array[i] * 2);
    }

    if (array[i] < 0) {
      invert.push(Math.abs(array[i]));
    }

    if (array[i] == 0) {
      invert.push(-0);
    }
  }
  return invert;
}

//
const invert = (array) => array.map((num) => -num);

//
const invert = (a) => a.map((x) => (x !== 0 ? -x : x));
