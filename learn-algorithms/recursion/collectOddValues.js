const collectOddValues = (arr) => {
  let result = [];

  const helper = (input) => {
    if (input.length === 0) {
      return;
    }

    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }

    return helper(input.slice(1));
  };

  helper(arr);

  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]));
