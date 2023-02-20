/** @format */

const lengthOfLongestSubstring = (s) => {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let j = i + 1;
    const curr = [s[i]];
    while (s.length > j && !curr.includes(s[j])) {
      curr.push(s[j]);
      j += 1;
    }
    j = i + 1;
    if (longest < curr.length) {
      longest = curr.length;
    }
  }
  return longest;
};

const start = new Date().getTime();

console.log(lengthOfLongestSubstring('pwwkew'));

const finish = new Date().getTime();
console.log(finish - start);
