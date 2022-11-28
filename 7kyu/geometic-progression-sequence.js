// DESCRIPTION:
// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

// Result should be separated by comma and space.

// Example
// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
// More info: https://en.wikipedia.org/wiki/Geometric_progression

// FUNDAMENTALS
// My solution

function geometricSequenceElements(a, r, n) {
  let arr = [a];
  for (let i = 0; i < n - 1; i++) {
    arr.push(arr[i] * r);
  }
  return arr.join(", ");
}

// Other solutions
// function geometricSequenceElements(a, r, n) {

function geometricSequenceElements(a, r, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(a * r ** i);
  }
  return result.join(", ");
}

//
function geometricSequenceElements(a, r, n) {
  return [...Array(n)].map((_, i) => a * r ** i).join(", ");
}
