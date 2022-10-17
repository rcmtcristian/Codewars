// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"
// STRINGSFUNDAMENTALS

//my solution
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

//
const nameShuffler = (str) => str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);
