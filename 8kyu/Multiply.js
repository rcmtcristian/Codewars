
// DESCRIPTION:
// This code does not execute properly.Try to figure out why.

//   DEBUGGING FUNDAMENTALS


//original solution 
function multiply(a, b) {
  let result = a * b
  return (result);
}
multiply(4, 6);

//new solution 
function multiply(a, b) {
  return a * b
}

//other solutions 
function multiply(a, b) {
  if (!a || !b || typeof (a) != "number" || typeof (b) != "number") {
    return 0;
  }
  return a * b;
}

//
function multiply(a, b) {
  if (undefined == a || undefined == b
    || isNaN(a) || isNaN(b))
    throw new Error('Both arguments should be numbers')
  return a * b
}
