/* 

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

function maps(x) {
  let y = [];

  x.forEach((val, i) => (y[i] = val * 2));
  return y;
}
