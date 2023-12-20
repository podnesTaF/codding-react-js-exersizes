const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3], [1, 4, 9]));
