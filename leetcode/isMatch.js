/** @format */

var isMatch = (s, p) => {
  let final = '';
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '.') {
      final += s[i];
    } else if (p[i] === '*') {
      if (i === p.length - 1) {
        final += s.replace('*', s[i] * s.length - 1 - i);
      } else {
        final += s.replace('*', s[i + 1]);
      }
    } else {
      final += s[i];
    }
  }

  return final;
};

const reg = (s, p) => {
  const regex = new RegExp(`^${p}$`);
  const isMatch = regex.test(s);
  return isMatch;
};

console.log(reg('aab', '.*b'));
