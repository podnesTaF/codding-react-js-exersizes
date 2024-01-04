// const bubbleSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   let i = 1;

//   while (i < arr.length) {
//     let j = 0;

//     while(j < arr.length - i) {
//       if(arr[j] > arr[j+1]) {
//         // swap
//         [arr[j], arr[j+1]] = [arr[j + 1], arr[j]]
//       }
//       j++
//     }
//     i++
//   }

//   return arr
// };

const bubbleSort = (arr) => {
  if (arr.length <= 1) return arr;

  let noswap;
  for (let i = 1; i < arr.length; i++) {
    noswap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noswap = false;
      }
    }
    if (noswap) {
      break;
    }
  }

  return arr;
};

console.log(bubbleSort([3, 4, 5, 1, 2, 54, 23, 99]));
