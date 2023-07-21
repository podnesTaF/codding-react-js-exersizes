const findBuildings = (heights) => {
  const result = [];
  let max = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      result.unshift(i);
      max = heights[i];
    }
  }

  return result;
};

const testart = [4, 2, 3, 1];

console.log(findBuildings(testart));
