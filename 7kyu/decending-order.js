/**
 *Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

// Main solutions
function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// Other
function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

//
function descendingOrder(n) {
  let nums = n.toString();
  return +[...nums].sort((a, b) => b - a).join``;
}

//
function descendingOrder(n) {
  return n.undigits().sort().reverse().digits();
}

Number.prototype.undigits = function () {
  const result = [];
  let n = this;
  do {
    //unshift adds this digit to the beginning of the result array.
    result.unshift(n % 10);
    // the numbers only goes up to 9
    n = Math.floor(n / 10);
  } while (n);
  return result;
};

Array.prototype.digits = function () {
  return Number(this.join``);
};
