// DESCRIPTION:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

// FUNDAMENTALS

//solutions 

function solve(s) {
  let upper = 0;
  let lower = 0;
  let nums = 0;
  let special = 0;

  s.split("").forEach((letter) => {
    if (/[a-z]/.test(letter)) lower++;
    if (/[A-Z]/.test(letter)) upper++;
    if (/[0-9]/.test(letter)) nums++;
    if (letter.match(/[^0-9A-Za-z]/g)) special++;
  });

  return [upper, lower, nums, special];
}

//

const solve = x => {
  let u = x.match(/[A-Z]/g)||[]
  let d = x.match(/[a-z]/g)||[]
  let n = x.match(/[0-9]/g)||[]
  let s = x.match(/[^A-Z0-9]/gi)||[]
  return [u.length, d.length, n.length, s.length]
}

//

const solve = (str) => (
  [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
);

