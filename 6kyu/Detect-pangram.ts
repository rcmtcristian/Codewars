// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Main solution
function isPangram(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = new Set();
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (alphabet.includes(char)) {
      letters.add(char);
    }
  }
  return letters.size === 26;
}

// Refactored solution
function isPangram(string: string): boolean{
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  const letters: Set<string> = new Set();
  for (let i: number = 0; i < string.length; i++) {
    const char: string = string[i].toLowerCase();
    if (alphabet.includes(char)) {
      letters.add(char);
    }
  }
  return letters.size === 26;
}
// Alternative solution
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}