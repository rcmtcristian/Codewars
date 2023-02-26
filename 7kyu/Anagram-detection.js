// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// Main solution:
var isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};
// Other solutions:
var isAnagram = function (test, original) {
  if (test.length !== original.length) return false;

  test = test.toLowerCase();
  original = original.toLowerCase();

  let obj = {};

  for (let i = 0; i < test.length; i++) {
    if (obj.hasOwnProperty(test[i])) {
      obj[test[i]] += 1;
    } else {
      obj[test[i]] = 1;
    }
  }

  for (let i = 0; i < original.length; i++) {
    if (obj.hasOwnProperty(original[i])) {
      obj[original[i]] -= 1;
      if (obj[original[i]] === 0) delete obj[original[i]];
    } else {
      return false;
    }
  }

  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
