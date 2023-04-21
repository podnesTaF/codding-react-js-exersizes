/** @format */

const lengthOfLongestSubstring = (s) => {
  let longest = 0
  let currArr = []

  for(char of s) {
    if(!s.includes(char)){
      currArr.push(char)
    } else {
      if(currArr.length > longest) {
        longest = currArr.length
      }

      currArr = currArr.slice(currArr.indexOf(char) + 1)
      currArr.push(char)
    }
  }

if(currArr.length > longest) longest = currArr.length
return longest
};

const start = new Date().getTime();

console.log(lengthOfLongestSubstring('pwwkew'));

const finish = new Date().getTime();
console.log(finish - start);
