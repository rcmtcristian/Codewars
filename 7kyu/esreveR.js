// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// FUNCTIONAL PROGRAMMINGFUNDAMENTALS

// Main Solution:
const reverse = function (array) {
  return array.map((a, b) => array[array.length - 1 - b]);
};

// Other Solutions:
const reverse = (array) => array.slice().reverse();

//
function reverse(array) {
  return array.reduce(function (a, b) {
    return [b].concat(a);
  }, []);
}
