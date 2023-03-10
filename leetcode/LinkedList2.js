/** @format */

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const initLinkedListFromArray = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    current.next = newNode;
    current = current.next;
  }

  return head;
};

const printLinkedList = (head) => {
  let current = head;
  let printStr = '';
  while (current) {
    printStr += current.value + '->';
    current = current.next;
  }

  console.log(printStr);
};

const head = initLinkedListFromArray([1, 2, 3, -4]);
printLinkedList(head);
