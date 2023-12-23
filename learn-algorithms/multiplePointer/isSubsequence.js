function isSubsequence(str1, str2) {
  if (!str1.length) return true;
  if (!str2.length) return false;

  let i = 0;

  let res = "";

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      res += str1[i];
      i++;
    }
  }

  return res === str1;
}

console.log(isSubsequence("abc", "acb"));
