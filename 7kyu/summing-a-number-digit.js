// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// Main  solution:
function sumDigits(number) {
  let sum = 0;
  let absoluteVal = Math.abs(number);
  const stringOfAbsVal = String(absoluteVal);

  for (const char of stringOfAbsVal) {
    const digit = Number(char);
    sum += digit;
  }
  return sum;
}

// Other Solutions
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce(function (a, b) {
      return +a + +b;
    }, 0);
}

//
const sumDigits = (number) =>
  [...`${Math.abs(number)}`].reduce((pre, val) => pre + +val, 0);
