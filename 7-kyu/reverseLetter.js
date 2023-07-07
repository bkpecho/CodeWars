/* 

Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/

function reverseLetter(str) {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123) {
      output.push(str[i]);
    }
  }
  return output.reverse().join('');
}
