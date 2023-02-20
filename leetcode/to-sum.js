/** @format */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (curr + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSortedSum = function (numbers, target) {
  let j = 0;
  let i = 1;

  while (i < numbers.length) {
    if (numbers[j] + numbers[i] < target) {
      i += 1;
      j += 1;
    } else if (numbers[j] + numbers[i] === target) {
      return [j + 1, i + 1];
    } else if (numbers[j] + numbers[i] > target) {
      j -= 1;
    }
  }
};

console.log(twoSortedSum([-1, 0], -1));
