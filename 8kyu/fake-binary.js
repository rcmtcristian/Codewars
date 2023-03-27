// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Main Function
function fakeBin(x) {
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}

// Other Solutions
function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}
