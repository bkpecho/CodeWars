/* 

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1) 
to_binary(5)  
to_binary(11) 
Example:

toBinary(1) 
toBinary(5) 
toBinary(11) 

*/

function toBinary(n) {
  return Number(n.toString(2));
}
