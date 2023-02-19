/* 

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

// Answer

function findAverage(array) {
  let average = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] != 'NaN') {
      average += array[i];
    } else {
      average += 0;
    }
  }

  if (average != 0) {
    average /= array.length;
  }
  return average;
}
