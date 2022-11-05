// DESCRIPTION:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// FUNDAMENTALS

// my solution
function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;

  if (score < 60) {
    return "F";
  } else if (score < 70) {
    return "D";
  } else if (score < 80) {
    return "C";
  } else if (score < 90) {
    return "B";
  } else {
    return "A";
  }
}
//
function getGrade(...scores) {
  let average = scores.reduce((a, b) => a + b) / scores.length;

  if (average >= 90) return "A";
  else if (average >= 80) return "B";
  else if (average >= 70) return "C";
  else if (average >= 60) return "D";
  else return "F";
}

//

const grades = { A: 90, B: 80, C: 70, D: 60, F: 0 };
const sum = (sum, item) => sum + item;
const mean = (...numbers) => numbers.reduce(sum, 0) / numbers.length;

function getGrade() {
  const score = mean(...arguments);

  for (key in grades) {
    if (!grades.hasOwnProperty(key)) continue; // Never do a for-in without this
    if (score >= grades[key]) return key;
  }
}
