function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(5);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(6);

var flatten = function(root) {
  var temp = [];

  if (!root) {
    return;
  }

  var traverse = root => {
    temp.push(root.val);

    if (root.left) {
      traverse(root.left);
    }

    if (root.right) {
      traverse(root.right);
    }
  };

  traverse(root);

  if (root.left) {
    root.left = null;
  }

  if (root.right) {
    root.right = null;
  }

  var nodePtr = root;
  for (let i = 1; i < temp.length; i++) {
    nodePtr.right = new TreeNode(temp[i]);
    nodePtr = nodePtr.right;
  }
};
