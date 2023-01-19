/** @format */

const Blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
  {
    gym: true,
    school: true,
    store: true,
  },
];

const getProps = (block, props, reqs) => {
  Object.entries(block)
    .filter(([key, value]) => value && reqs.indexOf(key) !== -1)
    .forEach(([key, value]) => {
      props[key] = value;
    });
};

const objLength = (obj) => {
  return Object.keys(obj).length;
};
const reqs = ['school', 'store'];

const findBestPlace = (blocks, reqs) => {
  let bestBlock = {};
  let personalBestBlock = {};
  for (let i = 0; i < blocks.length; i++) {
    const currBlock = blocks[i];
    let personalProps = {};
    let currProps = {};
    getProps(currBlock, currProps, reqs);

    personalProps = { ...currProps };

    let leftCheck = blocks[i - 1] ? blocks[i - 1] : {};
    getProps(leftCheck, currProps, reqs);

    let rightCheck = blocks[i + 1] ? blocks[i + 1] : {};
    getProps(rightCheck, currProps, reqs);
    const bestBlockLength = objLength(bestBlock) - 1;
    if (bestBlockLength < objLength(currProps)) {
      bestBlock = { id: i, ...currProps };
    }
    if (objLength(personalProps) > bestBlockLength) {
      personalBestBlock = { id: i, ...personalProps };
    }
  }

  if (objLength(personalBestBlock) >= objLength(bestBlock)) {
    return personalBestBlock.id;
  }
  return bestBlock.id;
};

console.log(findBestPlace(Blocks, reqs));
