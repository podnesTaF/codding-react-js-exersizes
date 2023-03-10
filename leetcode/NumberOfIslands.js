/** @format */

const numberOfIslands = (grid) => {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    const current = grid[i];
    for (let j = 0; j < current.length; j++) {
      if (j + 1 < current.length && j - 1 > 0) {
        if (current[j] === 1 && current[j - 1] === 0 && current[j + 1] === 0) {
          result += 1;
        }
      } else if (
        j === current.length - 1 &&
        current[j] === 1 &&
        current[j - 1] === 0
      ) {
        result += 1;
      } else if (j === 0 && current[j] === 1 && current[j + 1] === 0) {
        result += 1;
      }
    }
  }
};
