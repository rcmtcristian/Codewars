// DESCRIPTION:
// Create a method sayHello / say_hello / SayHello that takes as input a name, city, and state to welcome a person.Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

//   Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// STRINGSFUNDAMENTALS


//my solution 
const sayHello = ((name, city, state) => {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
})

// other solutions
function sayHello(a, b, c) {
  return 'Hello, ' + a.join(' ') + '! Welcome to ' + [b, c].join(', ') + '!';
}

//
var sayHello = (n, c, s) => `Hello, ${n.join(' ')}! Welcome to ${c}, ${s}!`;