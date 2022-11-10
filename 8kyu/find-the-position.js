// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// FUNDAMENTALS

//my solutions
function position(letter) {
  let it = letter.charCodeAt() - 96;
  return `Position of alphabet: ${it}`;
}

//

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}
