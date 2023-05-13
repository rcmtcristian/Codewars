// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// Main Solution
function consonantCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase()) && str[i].match(/[a-z]/i)) {
      count++;
    }
  }
  return count;
}

// Refactored Solution
function consonantCount(str: string) {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  let count: number = 0;
  for (let i: number = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase()) && str[i].match(/[a-z]/i)) {
      count++;
    }
  }
  return count;
}

// Alternative Solution
const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;
