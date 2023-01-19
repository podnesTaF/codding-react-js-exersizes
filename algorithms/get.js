/** @format */

const get = (keySequence, nestedObject) => {
  let keys = keySequence.split('.');

  if (!Object.keys(nestedObject).includes(keys[0])) return;

  let res = nestedObject[keys[0]];

  keys = keys.slice(1);

  while (keys && keys.length > 0) {
    if (!Object.keys(res).includes(keys[0])) return;

    res = res[keys[0]];
    keys = keys.slice(1);
  }
  return res;
};

console.log(get('red.big.apple', { red: { big: { apple: 'here' } } }));
