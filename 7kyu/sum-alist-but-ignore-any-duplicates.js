// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// Main Solution
function sumNoDuplicates(numList) {
return numList.filter(num => numList.indexOf(num) == numList.lastIndexOf(num)).reduce((a,b) => a + b,0)
 
}

// Alternative solutions
function sumNoDuplicates(numList) {
  const seen = new Set();
  const duplicate = new Set();
  numList.forEach(e => {
    if(seen.has(e)) duplicate.add(e);
    else seen.add(e);
  });
  return [...seen].filter(e => !duplicate.has(e)).reduce((a,b) => a + b, 0);
}