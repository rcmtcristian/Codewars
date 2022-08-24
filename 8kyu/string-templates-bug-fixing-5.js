/* DESCRIPTION:
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!*/

//My solution 
const buildString = (...template) => `I like ${template.join(', ')}!`;


// other solutions 
function buildString(...template) {
  return `I like ${template.join(', ')}!`;
}

//
function buildString() {
  var args = Array.prototype.slice.call(arguments);
  return 'I like ' + args.join(', ') + '!';
}