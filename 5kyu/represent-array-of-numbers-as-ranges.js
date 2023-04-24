// Your task is to take arrays of numbers and compress them into ranges.

// The numbers in the array are mostly consecutive. If you convert them as ranges, it will save a lot of space. You should write a function that will convert an array of numbers into a string. A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

// For example,
// The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
// The number 6 would just be "6"
// The numbers 3,4,5,6,9 would be "3_6,9"

// Using the above system, you should write two functions:
// toRange - convert an array of numbers to a range string
// toArray - convert a range string back to an array

// Warnings
// The numbers could arrive all jumbled up so you'll need to sort them Sometimes the same number may appear more than once, duplicates should be discarded.

// Edge cases
// An empty array should become an empty string if passed to toRange and vise versa for the toArray function. Also, ranges of 2 digits will take the same space whether they are represented as a sequence or a range. I.e. "5,6,8,9".length === "5_6,8_9".length so there will be no compression, but represent them as a range anyway for consistency.

// Good luck!

// If you're finding this Kata a little hard, then maybe try my other one first

// https://www.codewars.com/kata/find-the-first-non-consecutive-number

// Main solution
function toRange(arr) {
  if (arr.length === 0) return "";

  const arrOfUniqueElements = [...new Set(arr)].sort((a, b) => a - b);

  const formattedRanges = [];

  let currentStart = arrOfUniqueElements[0];

  let currentEnd = arrOfUniqueElements[0];

  for (let i = 1; i < arrOfUniqueElements.length; i++) {
    let currElement = arrOfUniqueElements[i];

    if (currElement != currentEnd + 1) {
      const range = processRange(currentStart, currentEnd);

      formattedRanges.push(range);

      currentStart = currElement;

      currentEnd = currElement;
    } else {
      currentEnd = currElement;
    }
  }
  formattedRanges.push(processRange(currentStart, currentEnd));
  return formattedRanges.join(",");
}

function processRange(start, end) {
  if (start === end) return start.toString();
  return `${start}_${end}`;
}

function toArray(str) {
  if (str === "") return [];
  let numbers = [];
  const rangesAndNums = str.split(",");
  for (let rangeOrNum of rangesAndNums) {
    if (rangeOrNum.includes("_")) {
      let rangeArr = converRangeToNumberArr(rangeOrNum);
      numbers = numbers.concat(rangeArr);
    } else {
      numbers.push(Number(rangeOrNum));
    }
  }
  return numbers.sort((a, b) => a - b);
}

function converRangeToNumberArr(rangeStr) {
  let [start, end] = rangeStr.split("_").map((ele) => +ele);

  let rangeArr = [];
  while (start <= end) {
    rangeArr.push(start);
    start++;
  }
  return rangeArr;
}

// Other solutions
function toRange(arr) {
  arr = Array.from(new Set(arr)).sort((a, b) => a - b);
  for (var i = 0, r = []; i < arr.length; ) {
    var s = i;
    while (i < arr.length && arr[i] + 1 == arr[i + 1]) i++;
    r.push(i == s ? arr[i++] : arr[s] + "_" + arr[i++]);
  }
  return r.join(",");
}
function toArray(str) {
  for (
    var arr = str.split(","), i = 0, r = [];
    str != "" && i < arr.length;
    i++
  ) {
    var [a, b] = (arr[i] + "_" + arr[i]).split("_");
    for (var j = +a; j <= +b; j++) r.push(j);
  }
  return r;
}
