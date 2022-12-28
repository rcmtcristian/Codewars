// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// ARRAYSSTRINGSREGULAR EXPRESSIONSALGORITHMS

// My solution
function createPhoneNumber(numbersOne) {
  let it = numbersOne.toString();
  let one = it.replace(/\,/g, "").substring(0, 3);
  let two = it.replace(/\,/g, "").substring(3, 6);
  let three = it.replace(/\,/g, "").substring(6);
  return `(${one}) ${two}-${three}`;
}

// Other solutions
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

//
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
