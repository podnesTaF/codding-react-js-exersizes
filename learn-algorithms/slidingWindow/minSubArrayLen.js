function minSubArrayLen(nums, sum) {
  let total = 0;

  let i = 0;
  let j = 0;
  let minLen = Infinity;

  while (i < nums.length) {
    if (total < sum && j < nums.length) {
      total += nums[j];
      j++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, i - j);
      total -= nums[i];
      i++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
