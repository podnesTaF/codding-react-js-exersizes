var countPairs = function (nums, target) {
  let i = 0;
  let j = 1;
  let res = 0;
  while (i < j && i < nums.length - 1) {
    if (nums[i] + nums[j] < target) {
      res++;
    }
    if (j === nums.length - 1) {
      i += 1;
      j = i + 1;
      continue;
    }
    j++;
  }

  return res;
};
