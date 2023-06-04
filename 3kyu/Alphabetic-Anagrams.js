// Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

// We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

// Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

// For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.

// Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).

// C# is using a long, which may not have the best precision, but the tests are locked so we can't change it.

// Sample words, with their rank:
// ABAB = 2
// AAAB = 1
// BAAA = 4
// QUESTION = 24572
// BOOKKEEPER = 10743

// Main Solution
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function getPositions(min, digitsNum, valuesNum, permutations, counter) {
  const positions = new Array(valuesNum);
  positions[0] = min;
  let sum = min;
  for (let i = 1; i < valuesNum; i++) {
    sum += (permutations / digitsNum) * counter[i - 1];
    positions[i] = sum;
  }
  return positions;
}

function calculatePermutations(counter, digitsNum) {
  let denominator = counter.reduce((acc, value) => acc * factorial(value), 1);
  return factorial(digitsNum) / denominator;
}

function listPosition(word) {
  let array = word.split('');
  let digitsNum = array.length;
  let values = [...new Set(word)].sort();
  let valuesNum = values.length;
  let counter = new Array(valuesNum);
  let solution = null;
  let positions;

  // Count letter repetitions
  for (let i = 0; i < valuesNum; i++) {
    counter[i] = array.filter((char) => char === values[i]).length;
  }

  // Algorithm
  let permutations = calculatePermutations(counter, digitsNum);
  let min = 1;
  let max = permutations;
  let loopmax = digitsNum;

  for (let i = 0; i < loopmax; i++) {
    positions = getPositions(min, digitsNum, valuesNum, permutations, counter);

    for (let j = 0; j < valuesNum; j++) {
      if (array[i] === values[j]) {
        if (counter[j] > 1) {
          counter[j]--;
        } else {
          values.splice(j, 1);
          counter.splice(j, 1);
          valuesNum = values.length;
        }

        digitsNum--;
        permutations = calculatePermutations(counter, digitsNum);
        min = positions[j];
        max = positions[j + 1] === undefined ? min + permutations - 1 : positions[j + 1] - 1;
        break;
      }
    }

    if (min === max) {
      solution = min;
      break;
    }
  }

  return solution;
}

// Explanation
// This is a very difficult kata. I had to do a lot of research to find the right algorithm. I found this article: https://www.nayuki.io/page/next-lexicographical-permutation-algorithm, which explains how to find the next lexicographical permutation of a word. I used this algorithm to find the position of the word in the list of all permutations of the word. I also found this article: https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering, which explains how to find the position of a word in the list of all permutations of a word. I used this algorithm to find the position of the word in the list of all permutations of the word. 

javascript
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// - This function calculates the factorial of a given number `num` using a loop. It initializes `result` to 1 and then multiplies it with each number from 2 to `num`. The final result is returned.


function getPositions(min, digitsNum, valuesNum, permutations, counter) {
  const positions = new Array(valuesNum);
  positions[0] = min;
  let sum = min;
  for (let i = 1; i < valuesNum; i++) {
    sum += (permutations / digitsNum) * counter[i - 1];
    positions[i] = sum;
  }
  return positions;
}

// - This function calculates the positions of each unique value in the word based on the given parameters. It initializes an array `positions` with the length of `valuesNum` and sets the first element to `min`.
// - It then iterates from 1 to `valuesNum - 1` and calculates each position by adding `(permutations / digitsNum) * counter[i - 1]` to the previous position.
// - The positions array is populated with these calculated values and then returned.


function calculatePermutations(counter, digitsNum) {
  let denominator = counter.reduce((acc, value) => acc * factorial(value), 1);
  return factorial(digitsNum) / denominator;
}

// - This function calculates the number of permutations of a word based on the counter array and digitsNum.
// - It uses the `reduce` function on the counter array to calculate the denominator by multiplying each value with the accumulator, starting from 1.
// - The total number of permutations is calculated by dividing the factorial of digitsNum by the denominator, and it is returned.


function listPosition(word) {
  const array = word.split('');
  const digitsNum = array.length;
  const values = [...new Set(word)].sort();
  let valuesNum = values.length;
  const counter = new Array(valuesNum);
  let solution = null;
  let positions;

  // Count letter repetitions
  for (let i = 0; i < valuesNum; i++) {
    counter[i] = array.filter((char) => char === values[i]).length;
  }

  // Algorithm
  let permutations = calculatePermutations(counter, digitsNum);
  let min = 1;
  let max = permutations;
  let loopmax = digitsNum;

  for (let i = 0; i < loopmax; i++) {
    positions = getPositions(min, digitsNum, valuesNum, permutations, counter);

    for (let j = 0; j < valuesNum; j++) {
      if (array[i] === values[j]) {
        if (counter[j] > 1) {
          counter[j]--;
        } else {
          values.splice(j, 1);
          counter.splice(j, 1);
          valuesNum = values.length;
        }

        digitsNum--;
        permutations = calculatePermutations(counter, digitsNum);
        min = positions[j];
        max = positions[j + 1] === undefined ? min + permutations - 1 : positions[j + 1] - 1;
        break;
      }
    }

    if (min === max) {
      solution = min;
      break;
    }
  }

  return solution;
}

// - This is the main function, `listPosition`, which takes a word as input and calculates its numerical

//  position based on its letter positions.
// - The word is split into an array of characters, `array`, and the number of digits is stored in `digitsNum`.
// - The `values` array is created by converting the unique characters of the word into an array and sorting them.
// - The `counter` array is initialized with the same length as `valuesNum`.
// - The loop counts the repetitions of each character and stores the counts in the `counter` array.
// - The number of permutations is calculated using the `calculatePermutations` function.
// - Variables like `min`, `max`, `loopmax`, `positions`, and `solution` are declared for later use in the algorithm.
// - The algorithm starts with a loop from 0 to `loopmax`, where `loopmax` is initially equal to `digitsNum`.
// - Inside the loop, the positions array is calculated using the `getPositions` function.
// - Another loop iterates over the values array to find the current character in the array and perform the necessary operations.
// - If the counter for the character is greater than 1, it is decremented. Otherwise, the character is removed from the values and counter arrays, and `valuesNum` is updated.
// - The digitsNum and permutations are updated, and the range (`min` to `max`) is adjusted based on the positions array.
// - If `min` is equal to `max`, it means the solution has been found, and the value of `min` is assigned to `solution`. The loop breaks.
// - Finally, the solution is returned.

// I hope this explanation clarifies each line of the code and how the function works. Let me know if you have any further questions!

// Alternative Solution
var fact = [1];
while(fact.length<=25) fact.push(fact.length*fact[fact.length-1]);

function listPosition(word) {
  if (word.length==1) return 1;
  var w = word.split('').sort();
  var abc = Array.from(new Set(w));
  var equals = abc.map(x => w.filter(y => x==y).length).reduce((res,i) => res*fact[i], 1);
  return fact[word.length-1] / equals * w.indexOf(word[0]) + listPosition(word.slice(1));
}


