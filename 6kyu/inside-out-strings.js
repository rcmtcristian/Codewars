// DESCRIPTION:
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// FUNDAMENTALSSTRINGSARRAYS

//my solution
function insideOut(words) {
  // split words into individual words
  let insideOutWords = words.split(" ");

  // iterate through each word
  for (let i = 0; i < insideOutWords.length; i++) {
    // replace word with invoking turnWordInsideOut on word
    insideOutWords[i] = turnWordInsideOut(insideOutWords[i]);
  }

  // return insideOutWords joined on space
  return insideOutWords.join(" ");
}

function turnWordInsideOut(word) {
  // if word length less than 3
  // return word
  if (word.length <= 3) return word;

  // create string variable for insideout word
  let insideOutWord = "";

  // create a variable called firstHalf with first half od chars
  let firstHalf = word.slice(0, Math.floor(word.length / 2)); // abcde
  // create a variable called secondHalf with second half of chars
  let secondHalf = word.slice(Math.ceil(word.length / 2));

  // invoke reverseString on first half
  firstHalf = reverseString(firstHalf);
  // add reversed Sting to insideoutword variable
  insideOutWord += firstHalf;

  // if word length is odd
  if (word.length % 2 == 1) {
    // add middle char to insideOutWord
    insideOutWord += word[Math.floor(word.length / 2)];
  }

  // invoke reverseString on secon half
  secondHalf = reverseString(secondHalf);

  // add reversed Sting to insideoutword variable
  insideOutWord += secondHalf;

  // return insideOutWord
  return insideOutWord;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

// read aloud
// summarize the problem in your own words
// clarifying questions
// examples

// 'a' => 'a'
// 'ab' => 'ab'
// 'abc' => 'abc'
// 'abcd' => 'badc'
// 'abcde' => 'baced'
// 'climbing' => 'milcgnib'
// 'climbings' => 'milcbsgni'

// other
const insideOut = (str) => {
  return str
    .split(" ")
    .map((x) => {
      let left = x
        .substring(0, Math.floor(x.length / 2))
        .split("")
        .reverse()
        .join("");
      let right = x
        .substring(Math.ceil(x.length / 2))
        .split("")
        .reverse()
        .join("");
      let middle = x[Math.floor(x.length / 2)];
      return x.length % 2 ? left + middle + right : left + right;
    })
    .join(" ");
};

//
function insideOut(x) {
  let arr = x.split(" ");
  let result = [];
  for (k of arr) {
    let half = Math.ceil(k.length / 2);
    if (k.length % 2) {
      result.push(
        k
          .slice(0, half - 1)
          .split("")
          .reverse()
          .join("") +
          k[half - 1] +
          k.slice(half).split("").reverse().join("")
      );
    } else {
      result.push(
        k.slice(0, half).split("").reverse().join("") +
          k.slice(half).split("").reverse().join("")
      );
    }
  }
  return result.join(" ");
}
