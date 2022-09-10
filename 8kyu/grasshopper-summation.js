DESCRIPTION:
// Summation
// Write a program that finds the summation of every number from 1 to num.The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// FUNDAMENTALS

//my solution 
// var summation = function (num) {
//   let sum = 0
//   for( let i = 0; i <= num; i++){
//     sum += i
//   }
//   return sum
// }


const summation = num => num * (num + 1) / 2


//other solutions 

var summation = function f(num) {
  return num ? num + f(num - 1) : 0;
}

//
const summation = num => (
  Array(num).fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
);

