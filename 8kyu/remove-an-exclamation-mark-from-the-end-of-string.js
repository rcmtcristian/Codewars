// DESCRIPTION:
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"
// FUNDAMENTALSSTRINGS

//my solution

function remove(string) {
  return string.replace(/!$/g, "");
}

//
function remove(s) {
  return s.charAt(s.length - 1) === "!" ? s.slice(0, -1) : s;
}
