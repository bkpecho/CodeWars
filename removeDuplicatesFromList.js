/* 

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

// I tried two solutions for this challenge

/* 

FIRST SOLUTION

*/

const distinct = (a) => [...new Set(a)];

/* 

SECOND SOLUTION

*/

function distinct(a) {
  return [...new Set(a)];
}
