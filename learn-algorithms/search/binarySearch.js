function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(right / 2);

  while (middle < arr.length && left <= right) {
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      right = middle - 1;
      middle = Math.floor(right / 2);
    } else {
      left = middle + 1;
      middle = Math.floor((right + left) / 2);
    }
  }

  return -1;
}

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
);
