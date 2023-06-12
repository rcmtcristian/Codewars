// Given an array of positive integers a and an integer k, find the first and last index of the longest subarray of a that consists only of k.

// If the array contains multiple subarrays of the same length, return indices of the last one.

// If k doesn't exist in a, return (-1, -1).

// Input/Output
// [input] integer array a
// A non-empty array. For each valid i 1 ≤ a[i] ≤ 9.

// [input] integer k
// 1 ≤ k ≤ 9.

// [output] an integer array
// The first and the last indices of the longest subarray consisting of k only, as an array in the format (start, end), or (-1, -1) if k is not present in a.

// Example
// For a = [2,1,1,1,1,3,3,4,5,1,1,1] and k = 3,

// the output should be (5, 6).

// The longest subarray of a that contains 3s starts at index 5 and ends at index 6.

// For a = [2,1,1,1,1,3,3,4,5,1,1,1,1] and k = 1,

// the output should be (9, 12).

// There are two subarrays of 1, and they have equal length. One goes from index 1 to 4, and another one from index 9 to 12. The answer should be (9, 12) as it is the last to occur.

// For a = [1, 2, 3] and k = 9,

// the output should be (-1, -1).

// Main Solution
function findSubArrayWithSameElement(a, k) {
  let longestStart = -1;
  let longestEnd = -1;
  let currentStart = -1;
  let currentEnd = -1;
  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === k) {
      if (currentLength === 0) {
        currentStart = i;
      }
      currentEnd = i;
      currentLength = currentEnd - currentStart + 1;
      if (currentLength >= maxLength) {
        longestStart = currentStart;
        longestEnd = currentEnd;
        maxLength = currentLength;
      }
    } else {
      currentLength = 0;
    }
  }

  if (longestStart === -1 && longestEnd === -1) {
    return [-1, -1];
  } else {
    return [longestStart, longestEnd];
  }
}

// Alternative Solution
function findSubArrayWithSameElement(a, k) {
  let result = [-1, -1];
  let count = [-1, -1];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === k) {
      if (a[i] !== a[i - 1]) {
        count[0] = i;
      }
      count[1] = i;
      if (count[1] - count[0] >= result[1] - result[0]) {
        result[0] = count[0];
        result[1] = count[1];
      }
    }
  }

  return result;
}
