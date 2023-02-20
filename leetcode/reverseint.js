/** @format */

var reverse = (x) => {
  if (x > Math.pow(2, 30) - 1 || x < -Math.pow(2, 31)) return 0;

  const str = x + '';
  const isMinus = str[0] === '-';
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 && isMinus) {
      continue;
    } else {
      reversed = str[i] + reversed;
    }
  }

  return isMinus ? +('-' + reversed) : +reversed;
};

console.log(reverse(1534236469));

console.log(Math.pow(2, 31));
