// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// FUNDAMENTALSSTRINGS

//my solution
function removeExclamationMarks(s) {
  return s.replace(/\!/g, "");
}

//
const removeExclamationMarks = (s) => s.replace(/!/g, "");

//

function removeExclamationMarks(s) {
  return s.split("!").join("");
}
