// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

//Main solution:
function fizzbuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FizzBuzz");
      } else if (i % 5 === 0) {
        arr.push("Buzz");
      } else if (i % 3 === 0) {
        arr.push("Fizz");
      } else {
        arr.push(i);
      }
    }
    return arr;
  }
}

// Other solutions:
// Return an array
var fizzify = (fizzbuzz = function (n) {
  return Array.apply(null, new Array(n)).map(function (e, i) {
    return (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i;
  });
});

//
fizzify = fizzbuzz;
function fizzbuzz(n) {
  return [...Array(n + 1).keys()]
    .slice(1)
    .map((x) =>
      x % 15 === 0
        ? "FizzBuzz"
        : x % 3 === 0
        ? "Fizz"
        : x % 5 === 0
        ? "Buzz"
        : x
    );
}
