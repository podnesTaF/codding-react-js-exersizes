const maxSubarraySum = (arr, num) => {
  if (arr.length < num) {
    return null;
  }

  let maxSum = arr.slice(0, num).reduce((acc, curr) => acc + curr, 0);

  let j = num;
  let i = 0;

  while (j < arr.length) {
    const currSum = maxSum + arr[j] - arr[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }

    i++;
    j++;
  }

  return maxSum;
};

console.log(maxSubarraySum([], 4));
