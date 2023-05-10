var rightSideView = function(root) {
    if(!root) return []
    const q = [root]
    const res = []

    while(q.length) {
        let len = q.length
        res.push(q[q.length - 1].val)
        while(len--) {
            let node = q.shift()
            if(node.left) {
                q.push(node.left)
            } 
            if(node.right) q.push(node.rightSideView)
        }
    }

    return res
};