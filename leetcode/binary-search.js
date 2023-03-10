/** @format */

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  let found = false;
  let position;
  while (found === false && left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === num) {
      found = true;
      position = middle;
      return position;
    }
    if (arr[middle] > num) {
      end = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return position;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));

const resursiveBinarySearch = (arr, num, start, end) => {
  let middle = Math.floor((start + end) / 2);

  if (num === arr[middle]) {
    return middle;
  }

  if (num < arr[middle]) {
    return resursiveBinarySearch(arr, num, 0, middle - 1);
  } else {
    return resursiveBinarySearch(arr, num, middle + 1, end);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(resursiveBinarySearch(arr, 7, 0, arr.length));
