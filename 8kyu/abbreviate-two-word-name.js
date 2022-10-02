// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// STRINGSARRAYSFUNDAMENTALS

//my solution
DESCRIPTION: function abbrevName(name) {
  // code away
  let sep = name.split(" ");
  let f = sep[0].charAt(0).toUpperCase();
  let b = sep[1].charAt(0).toUpperCase();

  return `${f}.${b}`;
}

//
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
