// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 
// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

// Main Solution
function initials(n){
  const words = n.split(' ');
  const initials = words.map((word, index) => {
    if (index === words.length - 1) {
      return word[0].toUpperCase() + word.slice(1);
    }
    return word[0].toUpperCase() + '.';
  });
  return initials.join('');
}
// Alternative Solution
function initials(n) {
  return n.split(' ').map((v, i, a) => v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')).join('');
}