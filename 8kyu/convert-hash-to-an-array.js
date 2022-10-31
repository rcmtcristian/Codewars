// DESCRIPTION:
// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically.

// Good Luck!

// ARRAYSLISTSFUNDAMENTALS

/// My solution
function convertHashToArray(hash) {
  let arr = [];
  let value = Object.values(hash);
  let key = Object.keys(hash);
  for (i in value) {
    arr.push([key[i], value[i]]);
  }
  return arr.sort((a, b) => a[0] > b[0]);
}

//
const convertHashToArray = (o) => Object.entries(o).sort();

//
function convertHashToArray(hash) {
  let result = [];
  Object.keys(hash)
    .sort()
    .map((item) => result.push([item, hash[item]]));
  return result;
}
//
const convertHashToArray = (hash) =>
  Object.keys(hash)
    .map((key) => [key, hash[key]])
    .sort();
