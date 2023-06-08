// Description
// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

// Main Solution
function solution(start, finish) {
  const jumps = new Array(finish + 1).fill(Infinity);
  jumps[start] = 0;
  
  for (let i = start; i < finish; i++) {
    if (jumps[i] === Infinity) continue;
    jumps[i + 1] = Math.min(jumps[i + 1], jumps[i] + 1);
    jumps[i + 3] = Math.min(jumps[i + 3], jumps[i] + 1);
  }
  
  return jumps[finish];
}

// Alternative Solution
const solution = (start, finish, difference = finish - start) =>
  Math.floor(difference / 3) + difference % 3