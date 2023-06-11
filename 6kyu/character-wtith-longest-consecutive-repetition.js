// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]


// Main Solution 
function longestRepetition(s) {
 let maxChar = "";
  let maxLength = 0;
  let currentChar = "";
  let currentLength = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== currentChar) {
      currentChar = s[i];
      currentLength = 1;
    } else {
      currentLength++;
    }
    
    if (currentLength > maxLength) {
      maxLength = currentLength;
      maxChar = currentChar;
    }
  }
  
  return [maxChar, maxLength];
}

// Alternative Solution
const longestRepetition = s => s ?
  s.match(/(.)\1*/g)
    .map((s, i) => [s[0], s.length, i])
    .sort((a, b) => (b[1] - a[1]) || (a[2] - b[2]))[0]
    .splice(0, 2) :
  ['', 0];