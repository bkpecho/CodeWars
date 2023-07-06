/* 

Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

*/

function remove(string) {
  while (string.endsWith('!')) {
    string = string.slice(0, -1);
  }
  return string;
}
