/* 
DESCRIPTION:
Implement a function called multiply, which takes two numbers and returns their product:

multiply(2, 3) = 6
multiply(0, 188) = 0
multiply(85, 144) = 12240

*/


// My solution 

function multiply(a, b) {
  let num = a * b

  return (num)
}
multiply(3, 5)


//Other solutions 
let multiply = (a, b) => a * b;

//

function multiply(a, b) {
  if (typeof a == 'number' && typeof b == 'number')
    return a * b;
}