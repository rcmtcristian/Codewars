// DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)
// STRINGSREGULAR EXPRESSIONSFUNDAMENTALS

//My solution
const getNumberFromString = (s) => +s.replace(/[^0-9]/g, "");

//
function getNumberFromString(s) {
  return +s.replace(/\D/g, "");
}
