/** @format */

const threeSumClosest = (nums, target) => {
  const sorted = nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < sorted.length; i++) {
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      let currentSum = sorted[i] + sorted[left] + sorted[right];
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
      if (currentSum < target) {
        left += 1;
      } else if (currentSum > target) {
        right -= 1;
      } else {
        return currentSum;
      }
    }
  }
  return closestSum;
};

console.log(threeSumClosest([0, 1, 2], 3));
