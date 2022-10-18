// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// FUNDAMENTALS

// my solution

function doubleChar(str) {
  // Your code here
  return str
    .split("")
    .map((l) => l + l)
    .join("");
}

//
function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}

//
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1");
}
