/** @format */

const maxArea = (height) => {
  let maxArr = height;
  const maxNum = Math.max(...height);
  maxArr.splice(height.indexOf(maxNum), 1);
  return maxArr;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
