// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// Main Solution
function remove (string) {
  let words = string.split(' '); 
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.indexOf('!') === word.lastIndexOf('!') && word.includes('!')) {
      continue;
    }

    result.push(word);
  }

  return result.join(' ');
}

// Alternative Solution
function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}