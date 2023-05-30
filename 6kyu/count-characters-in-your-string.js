// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Main Solution
function count(str) {
  const charCount = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }
  
  return charCount;
}

// Alternative Solution
const count = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});