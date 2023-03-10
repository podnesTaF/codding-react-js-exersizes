/** @format */

const arr = [2, 1, 6, 3, 9, 4];

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let sorted = [];
  let pivotIdx = Math.floor(arr.length / 2);
  let pivot = arr[pivotIdx];
  let less = [];
  let more = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIdx) {
      continue;
    }
    if (arr[i] < pivot) {
      less.push(arr[i]);
    }
    if (arr[i] > pivot) {
      more.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(more)];
};

console.log(quickSort(arr));
