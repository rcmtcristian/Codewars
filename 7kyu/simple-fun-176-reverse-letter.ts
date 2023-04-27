// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// Main Solution
function reverseLetter(str) {
  //coding and coding..
  
  return str.replace(/[^a-zA-Z\s]/g, "").split('').reverse().join('').replace(/\s+/g, '')
  
}

// Other Solutions
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

//
function reverseLetter(str: string) : string {
  //coding and coding..
  
  return str.replace(/[^a-zA-Z\s]/g, "").split('').reverse().join('').replace(/\s+/g, '')
  
}