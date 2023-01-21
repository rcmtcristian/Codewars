// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

// Examples
// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113
// MATHEMATICSSECURITYFUNDAMENTALS

// Main Solution:
function hexHash(code) {
  //magic

  let it = code
    .split("")
    .map((a) => a.charCodeAt().toString(16), 0)
    .join()
    .replace(/\D/g, "")
    .split("")
    .reduce((a, b) => a + +b, 0);

  return it;
}

// Other Solutions:
const hexHash = (code) =>
  [...code].reduce((a, b) => a + parseInt(b.charCodeAt().toString(16), 16), 0);

// Test Cases:
hexHash("Yo"); // 20
hexHash("Hello, World!"); // 91
hexHash("Forty4Three"); // 113
