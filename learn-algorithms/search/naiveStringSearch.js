const naiveStringSearch = (str, target) => {
  let count = 0;
  for (let i = 0; i < str.length - target.length; i++) {
    let subs = "";
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== str[i + j]) break;
      if (j === target.length - 1) {
        count++;
      }
    }
  }

  return count;
};

console.log(naiveStringSearch("adawcwacwa", "wc"));
