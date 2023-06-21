// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

// Main solution
// add the value "codewars" to the websites array 1,000 times
var websites = []


let codewarsArray = Array(1000).fill("codewars");

websites = websites.concat(codewarsArray);

// Alternative solution
var websites = new Array(1000).fill("codewars");