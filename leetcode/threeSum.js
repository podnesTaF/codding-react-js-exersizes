/** @format */

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const final = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let current = nums[i] + nums[left] + nums[right];
      if (current === 0) {
        final.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (current < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return final;
};
