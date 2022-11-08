DESCRIPTION:
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'
// FUNDAMENTALS

// my solution

const combineNames = (...a) => a.join(' ')

//

const combineNames = (a, b) => `${a} ${b}`;

