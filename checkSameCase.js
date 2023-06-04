/* 

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/

function sameCase(a, b) {
  if (!a.match(/[a-z]/i) || !b.match(/[a-z]/i)) return -1;

  let arr = [];

  a === a.toLowerCase() ? arr.push('lower') : arr.push('upper');
  b === b.toLowerCase() ? arr.push('lower') : arr.push('upper');

  return arr[0] === arr[1] ? 1 : 0;
}
