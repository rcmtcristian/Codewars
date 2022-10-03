// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// FUNDAMENTALS

//my solutions
function findShort(s) {
  //  return Math.min(s.split(' ').length)

  let less = s.split(" ");

  less.sort((a, b) => a.length - b.length);

  return less[0].length;
}

//
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

//
function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}
