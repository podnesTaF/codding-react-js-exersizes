const power = (num, pow) => {
  if (pow === 0) return 1;

  while (pow > 0) {
    return num * power(num, pow - 1);
  }
};

console.log(power(3, 3));
