// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.

//Main solution
function giveMeFive(obj) {
  let five = [];
  for (const key in obj) {
    if (key.length == 5) five.push(key);
    if (obj[key].length == 5) five.push(obj[key]);
  }
  return five;
}

//Other solutions
const giveMeFive = (obj) =>
  []
    .concat(...Object.entries(obj, `for( in `))
    .filter((val) => val.length === 5);

//
giveMeFive = (obj) =>
  Object.entries(obj) // converting instead for ( in )
    .join(",")
    .split(",")
    .filter((i) => i.length == 5);
