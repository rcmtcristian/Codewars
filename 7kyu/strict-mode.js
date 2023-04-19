// Write a function that returns whether it is running in strict mode.

// Main Solution
function isInStrictMode() {
  var isStrict = (function () {
    return !this;
  })();
  return isStrict;
}
// Other Solutions
function isInStrictMode() {
  return !this;
}
