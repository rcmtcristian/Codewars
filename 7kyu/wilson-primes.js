// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// Main Solution

function amIWilson(p) {

  if ( p === 5) {
    return true
  } else if ( p === 13) {
    return true
  } else if ( p === 563) {
    return true
  } else {
    return false
  }
}