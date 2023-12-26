const findLongestSubstring = (str) => {
  let longest = 0;

  let seen = {};

  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.length(start, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
};
