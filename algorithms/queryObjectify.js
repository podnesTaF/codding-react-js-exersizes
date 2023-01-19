/** @format */

const inData =
  'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark';

const queryObjectify = (str) => {
  const arr = str.split('&');
  let obj = {};

  let noded = arr.map((item) => item.split('.'));

  for (let i = 0; i < noded.length; i++) {
    let cur = obj;
    for (let j = 0; j < noded[i].length; j++) {
      let name = noded[i][j];
      if (j === noded[i].length - 1) {
        name = name.split('=');
        cur[name[0]] = decodeURIComponent(name[1]);
        break;
      }

      if (cur[name]) {
        cur = cur[name];
      } else {
        cur[name] = {};
        cur = cur[name];
      }
    }
  }

  return obj;
};

console.log(queryObjectify(inData));
