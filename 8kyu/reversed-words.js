// DESCRIPTION:
// Complete the solution so that it reverses all of the words within the string passed in.

//   Example(Input-- > Output):

// "The greatest victory is that which requires no battle" -- > "battle no requires which that is victory greatest The"
// STRINGSALGORITHMS

//my solutions

unction reverseWords(str){
  return str.split(" ").reverse().join(' ')
}


// const reverseWords = () => w.split('').reverse().join('')

//other solutions 
const reverseWords = s => s
  .split` `
  .reverse()
  .join` `;

  //

function reverseWords(str) {
  var reverse = [];
  var words = str.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i]);

  }
  return reverse.join(" ")
}