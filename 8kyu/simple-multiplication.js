// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// FUNDAMENTALS

// my solution:

function simpleMultiplication(number) {
  // your code........
  return number % 2 == 0 ? number * 8 : number * 9;
}

// other solutions:
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
