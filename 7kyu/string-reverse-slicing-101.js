/**
 * You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

Examples
'123'   ==>  ['321', '21', '1']
'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']

 */

// Main solution
function reverseSlice(str) {
  let rev = str.split("").reverse().join("");
  return [...str].map((_, i) => rev.slice(i));
}

// Alternative solution
function reverseSlice(s) {
  return [...s].reverse().map((_, i, a) => a.slice(i).join``);
}

/**

1. **Spread Operator (`[...s]`)**:
  - The function takes a string `s` as an input.
  - `[...]` is the spread operator which spreads the string into an array of its characters.
  - For example, if `s = "hello"`, then `[...s]` results in `['h', 'e', 'l', 'l', 'o']`.

2. **Reverse (`.reverse()`)**:
  - The `reverse()` method is called on the array of characters.
  - This reverses the order of the elements in the array.
  - For example, `['h', 'e', 'l', 'l', 'o'].reverse()` results in `['o', 'l', 'l', 'e', 'h']`.

3. **Map (`.map((_, i, a) => a.slice(i).join``)`)**:
  - The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
  - `(_, i, a)`:
    - `_`: The first parameter is the current element, which is ignored in this case.
    - `i`: The index of the current element.
    - `a`: The array being traversed.

4. **Slice and Join (`a.slice(i).join``)**:
  - `a.slice(i)`: The `slice` method is called on the array `a`, starting from the index `i` to the end of the array. This creates a subarray.
  - `join``: The `join` method is used to concatenate all elements of the subarray into a string. The empty template literal `` is used as a separator, effectively joining the characters without any delimiter.

### Example Walkthrough
Let's consider the input string `s = "hello"`:

1. **Spread Operator**:
   ```javascript
   [..."hello"] // Result: ['h', 'e', 'l', 'l', 'o']
   ```

2. **Reverse**:
   ```javascript
   ['h', 'e', 'l', 'l', 'o'].reverse() // Result: ['o', 'l', 'l', 'e', 'h']
   ```

3. **Map**:
   - Iteration 1 (i = 0):
     - `a.slice(0)` results in `['o', 'l', 'l', 'e', 'h']`
     - `['o', 'l', 'l', 'e', 'h'].join('')` results in `"olleh"`
   - Iteration 2 (i = 1):
     - `a.slice(1)` results in `['l', 'l', 'e', 'h']`
     - `['l', 'l', 'e', 'h'].join('')` results in `"lleh"`
   - Iteration 3 (i = 2):
     - `a.slice(2)` results in `['l', 'e', 'h']`
     - `['l', 'e', 'h'].join('')` results in `"leh"`
   - Iteration 4 (i = 3):
     - `a.slice(3)` results in `['e', 'h']`
     - `['e', 'h'].join('')` results in `"eh"`
   - Iteration 5 (i = 4):
     - `a.slice(4)` results in `['h']`
     - `['h'].join('')` results in `"h"`

4. **Result**:
   - The `map` function returns the array `["olleh", "lleh", "leh", "eh", "h"]`.
   - This array is the final result of the function.

So, the function `reverseSlice("hello")` returns `["olleh", "lleh", "leh", "eh", "h"]`.

### Summary
- The function converts the string to an array of characters, reverses it, and then creates a new array where each element is a progressively smaller slice of the reversed array, joined back into a string.
 */
