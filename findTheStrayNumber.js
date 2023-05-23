/* 

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(numbers) {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(numbers[i])) {
      map.set(numbers[i], map.get(numbers[i]) + 1);
    } else {
      map.set(numbers[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
}
