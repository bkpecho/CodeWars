/* 

Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

*/

function powerOf4(param) {
  if (!Number.isInteger(param)) {
    return false;
  }

  if (param <= 0) {
    return false;
  }

  while (param !== 1) {
    if (param % 4 !== 0) {
      return false;
    }
    param /= 4;
  }

  return true;
}
