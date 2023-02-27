/* 

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
  let shortest = '';
  let array = s.split(' ');

  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      shortest = array[i];
    } else if (array[i].length < shortest.length) {
      shortest = array[i];
    }
  }
  return shortest.length;
}



