// DESCRIPTION:
// Complete the function which converts a binary number (given as a string) to a decimal number.

// BINARYFUNDAMENTALS

// my solution
function binToDec(bin) {
  let them = parseInt(bin, 2);
  return them;
}
//
const binToDec = (bin) => parseInt(bin, 2);

//
const binToDec = (bin) => [...bin].reduce((dec, bit) => (dec << 1) | bit, 0);
