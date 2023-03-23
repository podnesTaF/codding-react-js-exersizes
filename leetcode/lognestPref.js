/** @format */

var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return '';
  }

  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    let current = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== current) {
        return result;
      }
    }
    result += current;
  }
  return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
