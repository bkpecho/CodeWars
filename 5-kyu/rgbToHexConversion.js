/*

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

function rgb(r, g, b){
  
  let rr = calculate(r)
  let gg = calculate(g)
  let bb = calculate(b)
  
  return `${rr}${gg}${bb}`
}

function calculate(n){
  if(n < 0){
    return `00`
  }
  if(n > 255){
    return 'FF'
  }
  
  let chart = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  let left = n / 16
  let right = (left - Math.floor(left)) * 16
  
  return `${chart[Math.floor(left)]}${chart[right]}`
}
