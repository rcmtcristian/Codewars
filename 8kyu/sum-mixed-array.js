// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// FUNDAMENTALSSTRINGSARRAYS

//my solution
function sumMix(x) {
  return x.reduce((b, c) => Number(b) + Number(c), 0);
}

//
function sumMix(x) {
  let a = parseInt(x);
  x.reduce((b, c) => b + c, 0);
  return d;
  for (let i = 0; i < x.length; i++) {
    let d = parseInt(x[i]);
  }
}

//
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}

//
function sumMix(x) {
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}
