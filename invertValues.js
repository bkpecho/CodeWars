/* 

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

*/

function invert(array) {
  let arr = [];
  array.forEach((x, i) => (Math.abs(x) < 0 ? (arr[i] = x) : (arr[i] = -x)));
  return arr;
}
