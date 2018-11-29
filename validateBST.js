// Input:
//     2
//    / \
//   1   3
// Output: true

// 5
// / \
// 1   4
//   / \
//  3   6
// Output: false
// Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
//           is 5 but its right child's value is 4.

var isValidBST = function(root, upperBound = Infinity, lowerBound = -Infinity) {
  //need upper and lower bounds to check that each subtree is adhering to BST
  if (!root) {
    return true;
  }

  if (root.val >= upperBound || root.val <= lowerBound) {
    return false;
  }

  return (
    isValidBST(root.left, root.val, lowerBound) &&
    isValidBST(root.right, upperBound, root.val)
  );
};
