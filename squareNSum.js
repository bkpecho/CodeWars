/* 

Complete the square sum function so that it squares each number passed into it and then sums the results together.

*/

// Answer

function squareSum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] * numbers[i];
  }
  return total;
}
