/* 

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

*/

'use strict';

function flattenAndSort(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(...array[i]);
  }
  return arr.sort((a, b) => a - b);
}
