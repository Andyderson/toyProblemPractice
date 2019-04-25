// Input:
// 	Tree 1                     Tree 2
//           1                         2
//          / \                       / \
//         3   2                     1   3
//        /                           \   \
//       5                             4   7
// Output:
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \
// 	 5   4   7

var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) {
    return null;
  }

  if (!t1 || !t2) {
    return t1 || t2;
  }

  var root = new TreeNode(t1.val + t2.val);

  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);

  return root;
};
