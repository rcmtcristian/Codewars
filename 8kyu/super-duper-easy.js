// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// Main solution:
function problem(x) {
  return typeof x === "string" ? "Error" : x * 50 + 6;
}

// Other Solution
const problem = (x) => (Number.isFinite(x) ? x * 50 + 6 : `Error`);
