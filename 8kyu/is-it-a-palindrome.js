// Write a function that checks if a given string (case insensitive) is a palindrome.

// Main Solution:
function isPalindrome(x) {
  // your code here
  let reversed = x.split("").reverse().join("").toLowerCase();
  if (x.toLowerCase() === reversed) {
    return true;
  } else {
    return false;
  }
}

// Other Solutions:
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
};

//
const isPalindrome = (x) =>
  x.toLowerCase().split("").reverse().join("") == x.toLowerCase();
