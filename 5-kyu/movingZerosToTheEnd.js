/* 

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

function moveZeros(arr) {
  let count = 0;
  let filtered = [];
  arr.forEach((x) => (x === 0 ? count++ : filtered.push(x)));
  for (let i = 0; i < count; i++) {
    filtered.push(0);
  }
  return filtered;
}

//my first 5 kyu!!!!!! :D