// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// max_product([2, 1, 5, 0, 4, 3])              # => 20
// max_product([7, 8, 9])                       # => 72
// max_product([33, 231, 454, 11, 9, 99, 57])   # => 104874

// Main Solution
function maxProduct(a) {
//  let sorted = a.sort((numOne, numTwo) => numTwo - numOne,0)
//  return sorted[0] * sorted[1]
  
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max1) {
      max2 = max1;
      max1 = a[i];
    } else if (a[i] > max2) {
      max2 = a[i];
    }
  }

  return max1 * max2;
}

// Alternate Solution
function maxProduct(a) {
  var biggest = Math.max.apply(Math, a);
  a.splice(a.indexOf(biggest), 1);
  return biggest * Math.max.apply(Math, a);
}