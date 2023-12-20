var uniqueOccurrences = function (arr) {
  if (arr.length === 2) return false;

  const dict = {};

  for (let i = 0; i < arr.length; i++) {
    dict[arr[i]] = (dict[arr[i]] || 0) + 1;
  }

  const values = Object.values(dict);

  values.sort();

  let curr = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[curr] === values[i]) {
      return false;
    }
    curr++;
  }

  return true;
};
