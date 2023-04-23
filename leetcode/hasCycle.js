const hasCycle = (head) => {
    let fast = head;
    let slow = head

    while(fast && fast.next) {
        fast = fast.next.next
        slow = fast.next
        if(fast === slow) return true
    }

     return false
}