function someRecursive(arr, cb) {
  if (arr.length < 1) return false;
  if (cb(arr[0]) === true) return true;

  return someRecursive(arr.slice(1), cb);
}

const isOdd = (num) => num % 2 !== 0;

console.log(someRecursive([4, 6, 11], (val) => val > 10));
