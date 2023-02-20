/** @format */

const convert = (s, numRows) => {
  let output = '';
  const arr = [];
  const length = s.length;
  for (let i = 0; i < length; i++) {
    let curr;
    curr = s.slice(i, numRows + i);
    output += curr[numRows - 1];
    arr.push(curr);
  }
  return output;
};

console.log(convert('PAYPALISHIRING', 3));
