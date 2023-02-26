/*

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" 

*/

function repeatStr(n, s) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}
