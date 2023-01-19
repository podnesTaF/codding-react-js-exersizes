/** @format */

function treeByLevels(rootNode) {
  if (!rootNode || !Object.keys(rootNode).length) return [];
  const rootKeys = Object.keys(rootNode);

  let finalArr = [];
  let embeddedArr = [];

  for (let i = 0; i < rootKeys.length; i++) {
    if (typeof rootNode[rootKeys[i]] !== 'object') {
      finalArr.push(rootNode[rootKeys[i]]);
    } else {
      embeddedArr = [...embeddedArr, ...treeByLevels(rootNode[rootKeys[i]])];
    }
  }

  return [...finalArr, ...embeddedArr];
}

const node = {
  one: 2,
  two: {
    ei: 8,
    for: {
      one: 1,
      two: 3,
    },
    nine: 9,
    three: {
      one: 4,
      two: 5,
    },
  },
};

console.log(treeByLevels(node));
