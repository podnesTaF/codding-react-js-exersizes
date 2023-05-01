var average = function(salary) {
  const lowest = Math.min(...salary)
  const max = Math.max(...salary)

  const sum = salary.reduce((acc, curr) => curr === lowest || curr === max ? acc : acc + curr, 0)

  return sum / (salary.length - 2)
};

console.log(average([33333,3000,844,2000]))