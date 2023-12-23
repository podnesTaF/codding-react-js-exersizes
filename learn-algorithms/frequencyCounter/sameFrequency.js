const sameFrequency = (num1, num2) => {
  let numStr1 = num1 + "";
  let numStr2 = num2 + "";

  if (numStr1.length !== numStr2) {
    return false;
  }

  let dict = {};

  for (let i = 0; i < numStr1.length; i++) {
    dict[numStr1[i]] = (dict[numStr1[i]] || 0) + 1;
  }

  for (let i = 0; i < numStr2.length; i++) {
    let letter = numStr2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      letter[letter] -= 1;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281));
