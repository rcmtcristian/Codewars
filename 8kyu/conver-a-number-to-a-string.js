// DESCRIPTION:
// We need a function that can transform a number(integer) into a string.

// What ways of achieving this do you know ?

//   Examples(input-- > output) :
//   123  -- > "123"
// 999  -- > "999"
//   - 100 -- > "-100"
// STRINGSFUNDAMENTALS

//MY solution

function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}

//other solutions

function numberToString(num) {
  return '' + num;
}

//

const numberToString = num => `${num}`;

