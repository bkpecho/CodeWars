/* 

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
  return string
    .split('')
    .map((x) => (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90 ? ` ${x}` : x))
    .join('');
}
