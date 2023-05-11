var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder) return null;

    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(root.val)

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    return root
};