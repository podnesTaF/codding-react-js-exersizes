/** @format */

function scramble(str1, str2) {
  let extra1 = str1.split('');
  for (let i = 0; i < str2.length; i++) {
    const idx = extra1.indexOf(str2[i]);
    if (idx !== -1) {
      extra1.splice(idx, 1);
    } else {
      return false;
    }
  }
  return extra1.length >= 0;
}
console.log(scramble('abcdefghijklmnopqrstuvwxyz', 'zyxcba'));

const str1 = 'aba';

console.log(str1.indexOf('a'));
