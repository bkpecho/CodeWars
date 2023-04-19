/* 

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
  let string1 = [...new Set(s1)].join('');
  let string2 = [...new Set(s2)].join('');

  return [...new Set(string1 + string2)].sort().join('');
}
