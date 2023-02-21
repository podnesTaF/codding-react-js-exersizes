/** @format */

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let curr = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, curr);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
