// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// FUNDAMENTALS

// My solution
const reverseSeq = (n) => {
  let it = [];
  for (let i = 1; i <= n; i++) {
    it.push(i);
  }
  return it.reverse();
};

//
const reverseSeqe = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
