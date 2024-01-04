const selectionSort = (arr) => {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([3, 4, 5, 1, 2, 54, 23, 99]));
