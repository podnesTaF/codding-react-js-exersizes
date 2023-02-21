/** @format */

const threeSum = (nums) => {
  let triplets = [];

  for (let i = 0; i < nums.length; i++) {
    let curr = [];
    let j = i;
    let k = i;
    for (let j = 1; j < nums.length; j++) {
      const sum = curr.reduce((acc, curr) => acc + curr, 0);
      if (sum + nums[j]) {
      }
    }
  }
};
