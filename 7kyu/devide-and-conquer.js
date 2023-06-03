// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// Main Solution
function divCon(x){
// totalNonString is the sum of all non-strings in the array
let totalNonString = 0;
// totalString is the sum of all strings in the array
let totalString = 0;

// loop through the array
for (let i = 0; i < x.length; i++) {
  // if the element is a number, add it to totalNonString
  if (typeof x[i] === 'number') {
    totalNonString += x[i];
  // if the element is a string that is a number, add it to totalString
  } else if (typeof x[i] === 'string' && /^\d+$/.test(x[i])) {
    totalString += parseInt(x[i]);
  }
}

// return the difference between the two sums
return totalNonString - totalString;
}
// Alternative Solution
function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}