var levelOrderBottom = function(root) {
    if(!root) return []
    const q = [root]
    const res = []

    while(q.length) {
        let length = q.length
        res.push(q.map(node => node.val))
        while(length--) {
            let node = q.shift()

            if(node.left) {
                q.push(node.left)
            } 
            if(node.right) q.push(node.right)
        }
    }

    return res.reverse()
};