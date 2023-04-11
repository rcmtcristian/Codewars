// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// Main solution
function moveTen(s) {
  return s
    .split("")
    .map((letter) =>
      letter.charCodeAt(0) + 10 > 122
        ? String.fromCharCode(letter.charCodeAt(0) - 16)
        : String.fromCharCode(letter.charCodeAt(0) + 10)
    )
    .join("");
}

// Other solutions
function moveTen(s: string): string {
  return s
    .split("")
    .map((letter) =>
      letter.charCodeAt(0) + 10 > 122
        ? String.fromCharCode(letter.charCodeAt(0) - 16)
        : String.fromCharCode(letter.charCodeAt(0) + 10)
    )
    .join("");
}

//
function moveTen(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let move10 = "klmnopqrstuvwxyzabcdefghij";
  return s.replace(/[a-z]/g, (x) => move10[alphabet.indexOf(x)]);
}
