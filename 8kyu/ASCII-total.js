// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// Main solution:
function uniTotal(string) {
  return string === ""
    ? 0
    : string.split("").reduce((a, b) => a + b.charCodeAt(), 0);
}

// Other solutions:
const uniTotal = (str) =>
  [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
