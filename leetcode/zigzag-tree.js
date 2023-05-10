/** @format */

const zigzagLevelOrder = (root) => {
  if (!root) {
    return [];
  }

  let output = [];
  let queue = [root];
  let count = 0

  while (queue.length) {
    let len = queue.length
    if(count % 2 === 0) {
      output.push(queue.map(node => node.val))
    } else {
      output.push(queue.map(node => node.val).reverse())
      count++
    }

    while(len--) {
      let node = queue.shift()
      if(node.left) {
        queue.push(node.left)
    } 
    if(node.right) queue.push(node.right)
    }
  }
  return output;
};

