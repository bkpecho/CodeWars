/* 

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

function removeUrlAnchor(url) {
  let str = '';
  for (let i = 0; i < url.length; i++) {
    if (url[i] === '#') {
      return str;
    } else {
      str += url[i];
    }
  }
  return str;
}
