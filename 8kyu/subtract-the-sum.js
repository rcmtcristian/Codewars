// Complete the function which get an input number n such that n >= 10 and n < 10000, then:

// Sum all the digits of n.
// Subtract the sum from n, and it is your new n.
// If the new n is in the list below return the associated fruit, otherwise return back to task 1.
// Example
// n = 325
// sum = 3+2+5 = 10
// n = 325-10 = 315 (not in the list)
// sum = 3+1+5 = 9
// n = 315-9 = 306 (not in the list)
// sum = 3+0+6 = 9
// n =306-9 = 297 (not in the list)
// .
// .
// .
// ...until you find the first n in the list below.

// Main solution:
function SubtractSum(n) {
  const allTheNumbers = n
    .toString()
    .split("")
    .map((Num) => parseInt(Num, 10));

  //  return allTheNumbers
  // return n.reduce((a,b) => a +b)
  const sum = allTheNumbers.reduce((a, b) => a + b, 0);
  const newN = n - sum;

  //   return newN + 1
  //   if(n.includes(newN)){
  //     return newN
  //   }

  return "apple";
}

// Other solutions:
const SubtractSum = () => "apple";
