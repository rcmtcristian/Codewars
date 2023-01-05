// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// REGULAR EXPRESSIONS FUNDAMENTALS

// Main solution

String.prototype.digit = function () {
  return this.match(/^\d$/) ? true : false;
};

// Other solutions
String.prototype.digit = function () {
  return /^\d$/.test(this);
};
