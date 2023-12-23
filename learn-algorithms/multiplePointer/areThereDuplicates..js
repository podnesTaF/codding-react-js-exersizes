function areThereDuplicates(...args) {
  const arr = [...args];

  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      return true;
    }
    i++;
    j++;
  }

  return false;
}

console.log(areThereDuplicates("a", "b", "c", "a"));
