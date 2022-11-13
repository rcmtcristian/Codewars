// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// FUNDAMENTALSSTRINGS

/// My solution

var countSheep = function (num) {
  let them = "";
  for (let i = 1; i <= num; i++) {
    them += i + " sheep...";
  }
  return them;
};

//
countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;

//
var countSheep = function (n) {
  return [...Array(n)].map((_, i) => i + 1 + " sheep...").join``;
};
