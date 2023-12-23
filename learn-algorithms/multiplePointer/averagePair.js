function averagePair(arr, num) {
  if (arr.length < 2) return false;

  let i = 0;

  let j = arr.length - 1;

  while (i < j) {
    const currAvg = (arr[i] + arr[j]) / 2;
    if (currAvg === num) {
      return true;
    } else if (currAvg > num) {
      j--;
    } else {
      i++;
    }
  }

  return false;
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
