/* 

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

function highestRank(arr) {
  const freqMap = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  let mostFrequentNum = arr[0];
  let maxFrequency = freqMap[arr[0]];

  for (const num in freqMap) {
    if (
      freqMap[num] > maxFrequency ||
      (freqMap[num] === maxFrequency && num > mostFrequentNum)
    ) {
      mostFrequentNum = parseInt(num);
      maxFrequency = freqMap[num];
    }
  }

  return mostFrequentNum;
}
