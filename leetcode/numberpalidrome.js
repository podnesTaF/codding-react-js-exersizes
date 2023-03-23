/** @format */

var isPalindrome = function (x) {
  let str = x + '';
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return str === reversed;
};

console.log(isPalindrome(11));
