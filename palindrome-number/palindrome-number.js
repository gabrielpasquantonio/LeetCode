/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 x = x + '';
  return x === x.split('').reverse().join('')
}
    
   
