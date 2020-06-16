var searchBST = function (root, val) {
    //helper
    //     helper = (node) => {
    //         if (!node) {
    //             return null;
    //         }
    //         if (node.val === val) {
    //             return node;
    //         }
    //         return val < node.val ? helper(node.left) : helper(node.right)
    //     }

    //     return helper(root);

    //recursion
    if (!root) {
        return null
    }
    if (root.val === val) {
        return root
    }
    return searchBST(root.left, val) || searchBST(root.right, val)
};