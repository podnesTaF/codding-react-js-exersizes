/** @format */

const zigzagLevelOrder = (root) => {
  if (!root) {
    return [];
  }

  let output = [];
  let queue = [root];
  let isZig = true;

  while (queue.length) {
    let temp = [];
    let temp2 = [];
    while (queue.length) {
      let current = queue.shift();

      console.log(current.val);

      temp2.push(current.val);

      if (current.right) {
        temp.push(current.right);
      }

      if (current.left) {
        temp.push(current.left);
      }
    }
    if (isZig) {
      temp2.reverse();
    }

    isZig = !isZig;

    queue = temp;

    output.push(temp2);
  }
  return output;
};

console.log(zigzagLevelOrder([3, 9, 20, null, null, 15, 7]));
