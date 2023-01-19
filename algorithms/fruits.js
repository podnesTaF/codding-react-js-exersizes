/** @format */

let words = [
  'banana',
  'grapefruit',
  'banana',
  'grapefruit',
  'banana',
  'orange',
  'banana',
  'orange',
  'orange',
  'orange',
  'orange',
];

const sortFruits = (arr) => {
  let fruitObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!Object.keys(fruitObj).includes(arr[i])) {
      fruitObj[arr[i]] = 1;
    } else {
      fruitObj[arr[i]] += 1;
    }
  }

  let counts = Object.keys(fruitObj).sort((a, b) => {
    return fruitObj[b] - fruitObj[a];
  });

  return counts;
};

console.log(sortFruits(words));

const multipyByTwo = (...args) => {
  return args.map((arg) => arg * 2);
};

console.log(multipyByTwo(1, 2, 3, 4, 5));


const sum = (a) => {
  let res = a
  return addMore = (b) => {
     res += b || 0
     return b === undefined ? res : addMore
  }
}

console.log(sum(2)(3)(3)())

const sumNum = (a, b) => {
  return a + b
}

const calculate = (func) => {
  return (a) => {
    return (b) => {
       return func(a,b)
    }
  }
}

console.log(calculate(sumNum)(2)(5))