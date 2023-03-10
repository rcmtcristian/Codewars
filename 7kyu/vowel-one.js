// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

// Main solution:
function vowelOne(s) {
  // ...

  return s.replace(/[^aeiou]/gi, "0").replace(/\D/gi, "1");
}

// Other solutions:
function vowelOne(str) {
  return str
    .split("")
    .map(function (char) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        return "1";
      } else {
        return "0";
      }
    })
    .join("");
}

//
function vowelOne(s) {
  return s
    .split("")
    .map((x) => ("aeiouAEIOU".includes(x) ? 1 : 0))
    .join("");
}
