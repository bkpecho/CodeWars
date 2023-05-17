/* 

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

*/

function switchItUp(number) {
  let arr = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine'
  ];

  return arr[number];
}
