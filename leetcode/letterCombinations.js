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
  let final = [];
  let number = digits;
  let i = 0;
  while (number.length > 0) {
    const currArr = combinations[+number[i] - 2];
    number.slice(i + 1);
    currArr.reduce(
      (acc, curr, i) => acc.push(curr + combinations[+number[0] - 2][i]),
      []
    );
  }
};

console.log(letterCombinations('24'));
