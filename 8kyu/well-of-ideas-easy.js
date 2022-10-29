// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// FUNDAMENTALSARRAYSSTRINGSREFACTORING

// My solution
function well(x) {
  let a = 0;

  for (const idea of x) {
    if (idea === "good") {
      a += 1;
    }
  }

  return a === 0 ? "Fail!" : a > 2 ? "I smell a series!" : "Publish!";
}

//
function well(x) {
  const count = x.reduce((s, v) => s + (v == "good"), 0);
  return count ? (count > 2 ? "I smell a series!" : "Publish!") : "Fail!";
}
