// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// FUNDAMENTALSARRAYSDEBUGGING
// My solution
function arrayPlusArray(arr1, arr2) {
  let it = [...arr1, ...arr2];

  return it.reduce((a, b) => a + b);
}

//
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//
function arrayPlusArray(arr1, arr2) {
  var suma = 0;
  for (var i = 0; i < arr1.length; i++) suma += arr1[i];
  for (var i = 0; i < arr2.length; i++) suma += arr2[i];
  return suma;
}
