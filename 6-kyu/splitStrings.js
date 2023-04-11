/* 

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']

*/

function solution(str) {
  let arr = [];

  let temp = '';
  for (let i = 0; i <= str.length; i++) {
    if (i % 2 === 0 && i !== str.length) {
      temp = str[i];
    } else if (i % 2 === 1 && i !== str.length) {
      arr.push((temp += str[i]));
    } else if (i % 2 === 0 && i === str.length) {
      return arr;
    } else {
      arr.push((temp += '_'));
    }
  }
  return arr;
}
