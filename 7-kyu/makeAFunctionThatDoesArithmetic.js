/* 

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!

*/

function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
          return a + b
        break;
      case 'subtract':
          return a - b
        break;
      case 'multiply':
          return a * b
        break;
      default:
          return a / b
    }
  }