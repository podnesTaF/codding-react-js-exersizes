/** @format */

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const final = [];
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let current = nums[i] + nums[left] + nums[right];
      if (current === 0) {
        let isUnique = true;
        for (let j = 0; j < final.length; j++) {
          let extra = [...final[j]];
          const firstIdx = extra.indexOf(nums[i]);
          if (firstIdx !== -1) extra.splice(firstIdx, 1);
          const secondIdx = extra.indexOf(nums[left]);
          if (secondIdx !== -1) extra.splice(secondIdx, 1);
          const thirdIdx = extra.indexOf(nums[right]);
          if (thirdIdx !== -1) extra.splice(thirdIdx, 1);
          if (!extra.length) {
            isUnique = false;
          }
        }
        if (isUnique) {
          final.push([nums[i], nums[left], nums[right]]);
        }
      }
      if (current < 0) {
        left += 1;
      } else if (current >= 0) {
        right -= 1;
      }
    }
  }
  return final;
};
