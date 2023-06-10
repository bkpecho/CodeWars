/* 

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/

var greet = function (name) {
  let initial = name[0].toUpperCase();
  let remaining = name.slice(1, name.length).toLowerCase();

  return `Hello ${initial}${remaining}!`;
};
