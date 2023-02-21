/** @format */

const romanToInt = (roman) => {
  const symbols = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

  const numbers = roman.split('');
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (
      i + 1 < numbers.length &&
      symbols[numbers[i]] < symbols[numbers[i + 1]]
    ) {
      sum += symbols[numbers[i + 1]] - symbols[numbers[i]];
      i++;
    } else {
      sum += symbols[numbers[i]];
    }
  }

  return sum;
};

console.log(romanToInt('MCMXCIV'));
