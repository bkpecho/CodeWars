/* 

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.

*/

function inArray(array1, array2) {
  let arr = [];

  for (let a2 = 0; a2 < array2.length; a2++) {
    for (let a1 = 0; a1 < array1.length; a1++) {
      if (array2[a2].includes(array1[a1])) {
        arr.push(array1[a1]);
      }
    }
  }

  return [...new Set(arr.sort())];
}
