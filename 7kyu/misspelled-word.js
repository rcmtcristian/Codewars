// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

// Main Solution
var mispelled = function(word1, word2) {
  if (word1 === word2) {
    return true;
  }
  
  const difference = Math.abs(word1.length - word2.length);
  
  if (difference > 1) {
    return false; 
  }
  
  let count = 0;
  
  for (let i = 0, j = 0; i < word1.length && j < word2.length; i++, j++) {
    if (word1[i] !== word2[j]) {
      count++;
      
      if (count > 1) {
        return false; 
      }
      
      if (word1.length > word2.length) {
        j--; 
      } else if (word2.length > word1.length) {
        i--; 
      }
    }
  }
  
  return true; 
}

// Alternative Solution

var mispelled = function(word1, word2) {
  if (Math.abs(word1.length - word2.length) > 1) return false;
  if (~word1.indexOf(word2) || ~word2.indexOf(word1)) return true;
  return word1.split('').filter((e, i) => e != word2[i]).length == 1;
}

// Explanation 

// 1. The function is defined using the `var` keyword and assigned to the variable `mispelled`.
// 2. The function takes two parameters, `word1` and `word2`, which represent the words to be checked for misspelling.

// Now let's go through the logic within the function:

// 3. The first `if` statement checks if the absolute difference in length between `word1` and `word2` is greater than 1. If it is, it means that the words have a difference in length of more than one character, which would make them more than just misspelled versions. In this case, the function immediately returns `false` to indicate that they are not misspelled versions of each other.

// 4. The second `if` statement uses the `indexOf` method to check if either `word1` is a substring of `word2` or vice versa. The `indexOf` method returns the index of the first occurrence of the specified substring, or -1 if the substring is not found. In this code, the `~` operator is used as a bitwise NOT operator, so `~x` is equivalent to `-x - 1`. If either `word1` or `word2` is a substring of the other, the result of `indexOf` will be a non-negative value, and the bitwise NOT operator will convert it to a negative value. Therefore, if either condition is true, indicating that one word is a substring of the other, the function returns `true`.

// 5. If the execution reaches this point, it means that neither of the previous conditions were satisfied. The last line of the function checks if `word1` can be transformed into `word2` by changing only one character. It does this by converting `word1` into an array of characters using the `split('')` method, then using the `filter` method to keep only the characters that are not equal to the corresponding character in `word2`. Finally, it checks if the length of the resulting array is equal to 1, indicating that only one character is different between the two words. If this condition is met, the function returns `true`; otherwise, it returns `false`.

// To summarize, the function checks if two words are misspelled versions of each other by considering the difference in length, checking for substring relationship, and allowing for only one character change.