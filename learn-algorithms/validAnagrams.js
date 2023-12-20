const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return fasle;
  }

  const dict = {};

  for (let i = 0; i < str1.length; i++) {
    dict[str1[i]] = (dict[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!dict[str2[i]]) {
      return false;
    } else {
      dict[str2[i]] -= 1;
    }
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram"));
