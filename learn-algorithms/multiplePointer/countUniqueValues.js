const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;

  let j = 0;

  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      res += 1;
      j = i;
    }
  }

  return res;
};

console.log(countUniqueValues([-1, 0, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4]));
