// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// Main Solution
function alphanumeric(str){
  return /^[a-zA-Z0-9]+$/.test(str)
}

// /: Delimiters to indicate the start and end of the regular expression.
// ^: Anchors the match to the start of the string. It ensures that the entire string is checked from the beginning.
// [a-zA-Z0-9]: Character set that matches any uppercase or lowercase letter or digit. The range a-z represents lowercase letters, A-Z represents uppercase letters, and 0-9 represents digits.
// +: Quantifier that specifies that the preceding character set should match one or more times. It ensures that the string has at least one alphanumeric character.
// $: Anchors the match to the end of the string. It ensures that the entire string is checked until the end.

// Alternative Solution
const alphanumeric = (str) => {
  if (!str.length) return false;
  const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let char of str) {
    if (!ALLOWED_CHARS.includes(char)) return false;
  }
  return true;
};