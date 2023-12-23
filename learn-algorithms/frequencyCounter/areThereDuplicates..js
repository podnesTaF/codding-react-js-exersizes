function areThereDuplicates(...args) {
  const arr = [...args];

  let obj = {};

  for (let val of arr) {
    if (obj[val]) {
      return true;
    } else {
      obj[val] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c", "a"));
