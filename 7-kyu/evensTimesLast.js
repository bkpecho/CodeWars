/* 

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

*/

function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  let sumOfEven = 0;
  for (let [i, x] of numbers.entries()) {
    if (i % 2 === 0) {
      sumOfEven += x;
    }
  }
  return sumOfEven * numbers[numbers.length - 1];
}
