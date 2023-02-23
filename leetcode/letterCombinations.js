/** @format */

const combinations = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

var letterCombinations = function (digits) {
  if (!digits) return [];
  let res = [];
  const first = combinations[+digits[0] - 2];
  for (let k = 0; k < first.length; k++) {
    if (digits.length <= 1) res.push(first[k]);
    for (let i = 0; i < digits.length; i++) {
      const currLetComb = letterCombinations(digits.slice(1));
      for (let j = 0; j < currLetComb.length; j++) {
        if (!res.includes(first[k] + currLetComb[j])) {
          res.push(first[k] + currLetComb[j]);
        }
      }
    }
  }
  return res;
};

console.log(letterCombinations('23456789'));
