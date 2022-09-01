// DESCRIPTION:
// Simple, remove the spaces from the string, then return the resultant string.

//   FUNDAMENTALSSTRINGSARRAYS

// my solution

const noSpace = x => {
  return x.replace(/ /g, '')
}


//other solutions

function noSpace(x) { return x.split(' ').join('') }

//

function noSpace(x) {
  if (typeof x === 'string') return x.replace(/ +/g, '');
  console.log(arguments.callee.name + ': Argument must be string!');
}
