// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


// Main Solution
function towerBuilder(nFloors) {
    let tower = [];
  for (let i = 1; i <= nFloors; i++) {
    let spaces = " ".repeat(nFloors - i);
    let stars = "*".repeat(2 * i - 1);
    let floor = spaces + stars + spaces;
    tower.push(floor);
  }
  return tower;
}

// Alternative Solution
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}