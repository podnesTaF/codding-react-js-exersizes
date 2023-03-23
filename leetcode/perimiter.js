/** @format */

const matrix = ['X00X0', 'X00X0', '000X0', 'XX0X0', '0X000'];

const perimiter = (matrix) => {
  let p = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'X') {
        p += j === 0 || matrix[i][j - 1] === '0';
        p += i === 0 || matrix[i - 1][j] === '0';
        p += i === matrix.legnth - 1 || matrix[i + 1][j] === '0';
        p += j === matrix[i].length - 1 || matrix[i][j + 1] === '0';
      }
    }
  }

  return perimiter;
};

console.log(perimiter(matrix));
