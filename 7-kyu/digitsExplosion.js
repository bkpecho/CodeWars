/* 

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"

*/

function explode(s) {
  return s
    .split('')
    .map((x) => x.repeat(+x))
    .join('');
}
