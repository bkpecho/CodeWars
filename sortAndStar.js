/* 

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

// My Answer

function twoSort(s) {
  let sortArr = s.sort((a, b) => (a > b ? 1 : -1));
  return sortArr[0]
    .split('')
    .map((x) => `${x}***`)
    .join('')
    .slice(0, -3);
}

//a shorter answer
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}