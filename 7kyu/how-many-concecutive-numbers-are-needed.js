// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// Main Solution
function consecutive(arr) {
 arr.sort(function(a, b) { return a - b; });
  var count = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i+1]) {
      count += arr[i+1] - arr[i] - 1;
    }
  }
  return count;
}

// Alternative Solution
function consecutive(arr){
  let l = arr.length;
  return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}