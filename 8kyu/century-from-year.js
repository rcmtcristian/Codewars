// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// FUNDAMENTALSMATHEMATICSDATE TIME

//My solution

function century(year) {
  // Finish this :

  let start = Math.ceil(year / 100);
  return start;
}

//
function century(year) {
  let start = Math.floor(year - 1) / 100;
  let second = Math.floor(start) + 1;
  return second;
}

//
function century(year) {
  return ((year + 99) / 100) | 0;
}
