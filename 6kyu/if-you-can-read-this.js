// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

// Main Solution
function to_nato(words) {
  let arr = words.split('').filter(x => x !== ' ')
  let r = arr.map(x => NATO[x.toLowerCase()] || x).join(' ')
  return r
}

// function to_nato(words) {
//   const nato = {
//     A: 'Alfa',
//     B: 'Bravo',
//     C: 'Charlie',
//     D: 'Delta',
//     E: 'Echo',
//     F: 'Foxtrot',
//     G: 'Golf',
//     H: 'Hotel',
//     I: 'India',
//     J: 'Juliett',
//     K: 'Kilo',
//     L: 'Lima',
//     M: 'Mike',
//     N: 'November',
//     O: 'Oscar',
//     P: 'Papa',
//     Q: 'Quebec',
//     R: 'Romeo',
//     S: 'Sierra',
//     T: 'Tango',
//     U: 'Uniform',
//     V: 'Victor',
//     W: 'Whiskey',
//     X: 'Xray',
//     Y: 'Yankee',
//     Z: 'Zulu'
//   };
//   let result = '';
//   let isLastCharLetter = false;
//   for (let i = 0; i < words.length; i++) {
//     const char = words[i].toUpperCase();
//     if (/[A-Z]/.test(char)) {
//       result += (isLastCharLetter ? ' ' : '') + nato[char];
//       isLastCharLetter = true;
//     } else {
//       result += char;
//       isLastCharLetter = false;
//     }
//   }
  
  
// //    result.lastIndexOf(" ", lastSpaceIndex - 1)
//   let lastSpaceIndex = result.lastIndexOf(" ");
// let penultimateIndex = result.lastIndexOf(" ", lastSpaceIndex - 1);
// let string = result.substring(0, penultimateIndex) + result.substring(penultimateIndex + 1);
// return string
// }

// Alternative Solution
function to_nato(words) {
	var NATO = {
    A: 'Alfa',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'Xray',
    Y: 'Yankee',
    Z: 'Zulu'
  };
  return words.toUpperCase().replace(/ +?/g, '').split('').map(function(el) {
    if(NATO.hasOwnProperty(el)) {
      return el = NATO[el] + ' ';
    }
    return el + ' ';
  }).join('').trim();
}