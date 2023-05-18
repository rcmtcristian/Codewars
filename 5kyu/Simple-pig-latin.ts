// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Main Solution
function pigIt(str){
   const words = str.split(' ');
  
  const pigLatinWords = words.map(word => {
    if (/^[^\w]+$/.test(word)) {
      return word;
    }
    const firstLetter = word[0];
    return word.slice(1) + firstLetter + 'ay';
  });
  
  return pigLatinWords.join(' ');
}

// Refactored Solution

function pigIt(str: string): string{
   const words: string[] = str.split(' ');
  
  const pigLatinWords: string[] = words.map((word: string): string => {
    if (/^[^\w]+$/.test(word)) {
      return word;
    }
    const firstLetter: string = word[0];
    return word.slice(1) + firstLetter + 'ay';
  });
  
  return pigLatinWords.join(' ');
}

// Alternative Solution
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}