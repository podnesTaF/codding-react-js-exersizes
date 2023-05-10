var levelOrder = function(root) {
    if(!root) return []

    const res = []
    const q = [root]

    while(q.length) {
        let len = q.length;
        res.push(q.map(node => node.val))

        while(len--) {
            const node = q.shift()
            for(let child of node.children) {
                q.push(child)
            }
        }
    }

    return res
};