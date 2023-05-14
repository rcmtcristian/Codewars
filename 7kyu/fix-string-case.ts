// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// Main Solution
function solve(s){
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      uppercaseCount++;
    } else {
      lowercaseCount++;
    }
  }
  
  if (lowercaseCount >= uppercaseCount) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}

// Refactored Solution
function solve(s: string): string {
  let uppercaseCount: number = 0;
  let lowercaseCount: number = 0;
  
  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      uppercaseCount++;
    } else {
      lowercaseCount++;
    }
  }
  
  if (lowercaseCount >= uppercaseCount) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}

// Alternative Solution
function solve(s){
  let upper = s.split('').filter(x => x === x.toUpperCase()).length
  let lower = s.length - upper
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
}