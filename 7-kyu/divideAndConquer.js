/* 

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

*/

function divCon(x){
  let a=0
  let b=0
  
  x.forEach(x => Number.isInteger(x) ? a += x : b += Number(x))
  
  return a - b;
}
