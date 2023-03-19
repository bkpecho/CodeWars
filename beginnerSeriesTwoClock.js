/* 

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/

function past(h, m, s) {
  let arr = [h, m, s];
  let mil = [3600000, 60000, 1000];
  let result = 0;
  arr.forEach((x, i) => {
    return x != 0 ? (result += x * mil[i]) : null;
  });
  return result;
}

// couldve been this short...

/* 

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

*/
