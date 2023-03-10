/** @format */

const factorial = (n) => {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }

  return result;
};

const cashFunction = (fn) => {
  const cash = {};
  return (n) => {
    if (cash[n]) {
      return cash[n];
    }

    let result = fn(n);
    cash[n] = result;
    return result;
  };
};

const cacheFactorial = cashFunction(factorial);

console.log(cacheFactorial(5));
console.log(cacheFactorial(4));
console.log(cacheFactorial(3));
