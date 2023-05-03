// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// Main Solution
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}


// Refactored Solution

function createArray(number: number): number[]{
  var newArray: number[] = [];
  
  for(var counter: number = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

// Other Solutions
const createArray = n => Array(...Array(n)).map((v, i) => i + 1);