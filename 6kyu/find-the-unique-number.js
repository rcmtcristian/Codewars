// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Main  solution
/**
 * The function finds the unique number in an array of numbers.
 * @param arr - an array of numbers where all elements are the same except for one unique element. The
 * function is designed to find and return the unique element.
 * @returns This function returns the unique number in an array of numbers.
 */
function findUniq(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  if (arr[0] !== arr[1]) {
    return arr[0];
  } else {
    return arr[arr.length - 1];
  }
}

// Alternative solution
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

// Alternative solution
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
