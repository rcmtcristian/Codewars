// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// Main Solution
function insertDash(num) {
  let str = num.toString();

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      i < str.length - 1 &&
      parseInt(str[i]) % 2 !== 0 &&
      parseInt(str[i + 1]) % 2 !== 0
    ) {
      newStr += str[i] + "-";
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

// Alternative Solution
function insertDash(num) {
  return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}
