/** @format */

var minEatingSpeed = function (piles, h) {
  const sum = Math.ceil(piles.reduce((acc, curr) => acc + curr, 0) / h);

  if (piles.length === h) {
    let max = 0;
    for (let i = 0; i < piles.length; i++) {
      if (piles[i] > max) {
        max = piles[i];
      }
    }

    return max;
  }

  const diffs = [];

  const biggerDiffs = [];

  for (let i = 0; i < piles.length; i++) {
    if (piles[i] < sum) {
      const diff = sum - piles[i];
      diffs.push(diff);
    } else if (piles[i] > sum) {
      const diff = piles[i] - sum;
      biggerDiffs.push(diff);
    }
  }

  const diffSum = Math.ceil(diffs.reduce((acc, curr) => acc + curr, 0) / h);

  const biggerSum = Math.ceil(
    biggerDiffs.reduce((acc, curr) => acc + curr, 0) / h
  );

  return sum - biggerSum + diffSum;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
