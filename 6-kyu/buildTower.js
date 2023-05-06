/* 

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
  if (nFloors === 1) return ['*'];
  let num = nFloors * 2 - 1;

  let mid_num = Math.floor(num / 2);
  let mid = [mid_num];
  let low = mid_num;
  let high = mid_num;

  let str = '';

  let arr = [];

  for (let i = 0; i < nFloors; i++) {
    for (let j = 0; j < num; j++) {
      if (mid.includes(j)) {
        str += '*';
      } else {
        str += ' ';
      }
    }

    low--;
    high++;
    mid.unshift(low);
    mid.push(high);

    arr.push(str);
    str = '';
  }

  return arr;
}
