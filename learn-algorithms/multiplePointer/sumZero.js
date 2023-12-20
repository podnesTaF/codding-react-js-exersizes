const sumZero = (arr) => {
  let j = arr.length - 1;

  for (let i = 0; i < j; i++) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > 0) {
      j--;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-2, 0, 1, 3]));
