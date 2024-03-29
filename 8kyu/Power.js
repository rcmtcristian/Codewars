// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

// Main Solution
function numberToPower(number, power){
  console.info(Math.log2(1024));

  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

// Other Solutions
const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;