// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// STRINGSFUNDAMENTALS


//my solutions 

function reverseWords(str) {
let words = str.split(' ');
  for(let i = 0; i < words.length; i++){
    
    // save the reversed word to the array
    words[i] = words[i].split('').reverse().join('');    
  }
    
  // return str joined on spaces
  return words.join(' ');
}

//

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

//

function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}

