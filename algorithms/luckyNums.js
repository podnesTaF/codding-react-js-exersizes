/** @format */

let nums = '12776525624563633';

const getLuckyNum = (str) => {
  const numbers = [...str];
  const obj = {};

  let keys;
  for (let i = 0; i < numbers.length; i++) {
    keys = Object.keys(obj);
    if (!keys.includes(numbers[i])) {
      obj[numbers[i]] = 1;
    } else {
      obj[numbers[i]] += 1;
    }
  }

  let luckyNubmers = [];

  for (let key in obj) {
    if (key === obj[key] + '') {
      luckyNubmers.push(key);
    }
  }

  return luckyNubmers;
};

console.log(getLuckyNum(nums));
