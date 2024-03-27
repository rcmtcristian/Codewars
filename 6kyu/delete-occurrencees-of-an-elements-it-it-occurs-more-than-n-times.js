// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// Main Solution
function deleteNth(arr, n) {
  const result = [];
  // create a set to filter out uniques
  const set = new Set();

  for (const key of arr) {
    // see if the value from the array is already in the set
    if (set.has(key)) {
      // compare to n and check the amount of times it appears
      const count = result.filter((item) => item === key).length;
      // if it appears less than n, push it to the array
      if (count < n) {
        result.push(key);
      }
    } else {
      //If the key is not in the set, we add it to both the result array and the set
      result.push(key);
      set.add(key);
    }
  }

  return result;
}

// Alternative Solution
function deleteNth(arr, n) {
  let result = [];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    count[num] = (count[num] || 0) + 1;
    if (count[num] <= n) {
      result.push(num);
    }
  }
  return result;
}

// Sample Test
const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
    assert.sameOrderedMembers(
      deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
      [1, 1, 3, 3, 7, 2, 2, 2]
    );
    assert.sameOrderedMembers(
      deleteNth([12, 39, 19, 39, 39, 19, 12], 1),
      [12, 39, 19]
    );
  });
});
