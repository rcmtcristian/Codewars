// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Good luck!

// Main solution
function alternate(n, firstValue, secondValue){
let ordered = []

for(let i =0; i < n; i++){
  if(i % 2 == 0) {
    ordered.push(firstValue)
  } else {
    ordered.push(secondValue)
  }
}
  return ordered
  
}
// Alternative solution
function alternate(n, firstValue, secondValue){
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return array;
}