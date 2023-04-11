/* 

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

*/

function nameShuffler(str) {
  let s = str.split(' ');
  return `${s[1]} ${s[0]}`;
}
