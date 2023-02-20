/** @format */

const longestPalindrome = (s) => {
  let longest = '';
  if (s.length === 1) {
    return s;
  }
  for (let i = 0; i < s.length - 1; i++) {
    let j = i + 1;
    let currStr = s[i];
    let reversedStr = currStr;
    while (j < s.length) {
      currStr += s[j];
      reversedStr = s[j] + reversedStr;
      if (currStr === reversedStr && longest.length < currStr.length) {
        longest = currStr;
      }
      j++;
    }
  }
  return longest;
};

console.log(longestPalindrome('babab'));
