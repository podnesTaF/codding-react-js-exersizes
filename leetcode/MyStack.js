class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class MyQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val)

        if(!this.size) {
            this.head === newNode;
            this.tail === newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
    }

    dequeue() {
        if(!this.size) return null

        let node = this.head;
        this.head = this.head.next
        node.next = null

        this.size--

        return node.val
    }

    peek() {
        return this.head.val
    }

    empty() {
        return this.size === 0
    }
}

class MyStack {
     constructor() {
        this.queue = new MyQueue();
     }

     push(val) {
        let rotate = this.queue.size;

        this.queue.enqueue(val);

        while(rotate) {
            this.queue.enqueue(this.queue.dequeue())
            rotate--
        }
     }

     pop() {
        return this.queue.dequeue()
     }

     top() {
        return this.queue.peek()
     }

     empty() {
        return this.queue.empty()
     }
}
