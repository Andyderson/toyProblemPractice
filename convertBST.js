var convertBST = function(root) {
  if (root == null) {
    return null;
  }

  var sum = 0;

  function convert(root) {
    if (root.left === null && root.right === null) {
      root.val = root.val + sum;
      sum = root.val;
      return;
    }
    if (root.right !== null) {
      convert(root.right);
    }

    root.val = root.val + sum;
    sum = root.val;

    if (root.left !== null) {
      convert(root.left);
    }
  }

  convert(root);
  return root;
};

convertBST([5, 2, 13]);
