var pathSum = function(root, targetSum) {
    if(!root) return []
    const res = []

    const dfs = (node, sum, slate) => {
        if(node.left === null && node.right === null) {
            if(sum === node.val) {
                slate.push(node.val)
                res.push(slate.slice())
                slate.pop()
            }
        }


        if(node.left) {
            slate.push(node.val)
            dfs(node.left, sum - node.val, slate)
            slate.pop()
        } 
        if(node.right) {
            slate.push(node.val)
            dfs(node.right, sum - node.val, slate)
            slate.pop()
        }
    }

    dfs(root, targetSum, [])
    return res
};