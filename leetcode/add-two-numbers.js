/** @format */

'use strict';

const addTwoNumbers = (l1, l2) => {
  const reverseOne = reverseList(l1, 'str');
  const reverseTwo = reverseList(l2, 'str');

  let num = +reverseOne.join('') + +reverseTwo.join('') + '';

  const res = reverseList(num, 'num');

  return res;
};

const reverseList = (list, type) => {
  const reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    if (type === 'str') {
      reversed.push(list[i] + '');
    } else if (type === 'num') {
      reversed.push(+list[i]);
    }
  }
  return reversed;
};

console.log(addTwoNumbers([], []));
