// Input:
// 	   1
// 	  / \
// 	 2   3
// 	/ \ /
//  4   5

// Output:

//      1			        1
//     / \			     / \
//    2   3    or	  2   3
//   / \ 			     /    /
//  4   5		      4    5

// Explanation: We can remove either 3-5 or 2-5.

// Given a binary tree, where an arbitary node has 2 parents i.e two nodes in the tree have the same child. Identify the defective node and remove an extra edge to fix the tree.

function TreeNode(val) {
  this.val = val;
  this.visit = false;
  this.left = this.right = null;
}

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = tree.left.right;

var removeEdge = node => {
  var traverse = node => {
    if (node === null) {
      return node;
    }

    node.visit = !node.visit;

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }

    if (node.left !== null && node.left.visit === false) {
      node.left = null;
    }

    if (node.right !== null && node.right.visit === false) {
      node.right = null;
    }
  };

  traverse(node);
  return node;
};

console.log(removeEdge(tree));
