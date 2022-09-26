// DESCRIPTION:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// FUNDAMENTALS

//my solution
function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}
//
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

//
function boolToWord(bool) {
  return ["No", "Yes"][+bool];
}
