var rangeSumBST = function(root, L, R) {
  var sum = 0;
  var arr = [];

  var order = function(root) {
    if (root === null) {
      return 0;
    }

    order(root.left);

    if (root.val >= L && root.val <= R) {
      arr.push(root.val);
    }
    inOrder(root.right);
  };

  inOrder(root);

  arr.forEach(value => {
    sum += value;
  });

  return sum;
};
