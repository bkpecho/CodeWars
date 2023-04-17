/* 

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/

multiplicationTable = function (size) {
  let arr = [];
  let x = 1;
  while (x !== size + 1) {
    let temp = [];
    for (let i = 1; i <= size; i++) {
      temp.push(i * x);
    }
    arr.push(temp);
    x++;
  }
  return arr;
};
