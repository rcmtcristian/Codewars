// DESCRIPTION:
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.
// If you like this kata, check out the next one: Last Survivors Ep.2

// FUNDAMENTALSARRAYS

//my solutions
function lastSurvivor(letters, coords) {
  if (letters.length < 2) return letters;

  for (let i = 0; i < coords.length; i++) {
    if (coords[i] == 0) {
      letters = letters.substring(1);
    } else if (coords[i] == letters.length - 1) {
      letters = letters.substring(0, letters.length - 1);
    } else {
      letters =
        letters.substring(0, coords[i]) + letters.substring(coords[i] + 1);
    }
  }
  return letters;
}

//other solutions
function lastSurvivor(letters, coords) {
  letters = letters.split("");
  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1);
  }
  return letters.join("");
}

//
function lastSurvivor(string, indices) {
  const arr = [...string];
  for (const i of indices) arr.splice(i, 1);
  return arr[0];
}
