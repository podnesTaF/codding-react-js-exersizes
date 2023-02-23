/** @format */

const isValid = (s) => {
  let arr = s.split('');

  for (let i = 0; i < s.length; i++) {
    console.log(arr);
    if (arr.length === 1) return false;
    if (arr.length === 0) return true;
    if (s[i] === '(') {
      if (['}', ']'].includes(s[i + 1])) return false;
      const closeIdx = arr.indexOf(')');
      if (closeIdx === -1) return false;
      arr.splice(0, 1);
      arr.splice(closeIdx - 1, 1);
    }
    if (s[i] === '{') {
      if ([']', ')'].includes(s[i + 1])) return false;
      const closeIdx = arr.indexOf('}');
      if (closeIdx === -1) return false;
      arr.splice(0, 1);
      arr.splice(closeIdx - 1, 1);
    }
    if (s[i] === '[') {
      if (['}', ')'].includes(s[i + 1])) return false;
      const closeIdx = arr.indexOf(']');
      if (closeIdx === -1) return false;
      arr.splice(0, 1);
      arr.splice(closeIdx - 1, 1);
    }
  }
  return arr.length === 0;
};

console.log(isValid('([)]'));
