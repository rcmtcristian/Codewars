// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// Main Solution
function correctPolishLetters(string) {
  const polishLetters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  // create a regular expression that matches the Polish letters with diacritics
  const polishLettersRegex = new RegExp(
    Object.keys(polishLetters).join("|"),
    "gi"
  );

  // replace all the Polish letters with diacritics with their corresponding letters without diacritics
  return string.replace(
    polishLettersRegex,
    (matched) => polishLetters[matched]
  );
}

// Other Solutions
function correctPolishLetters(string) {
  var dict = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
}
