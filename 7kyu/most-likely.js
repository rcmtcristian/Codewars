// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

// Main Solution
function mostLikely(prob1, prob2) {
  let first = prob1.split(':');
  let second = prob2.split(':');

  let frac1 = +first[0] / +first[1];
  let frac2 = +second[0] / +second[1];

  return frac1 > frac2;
}

// Alternative Solution
const divide = (a, b) => a / b;
const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));