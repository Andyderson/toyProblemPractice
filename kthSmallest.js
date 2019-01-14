var kthSmallest = function(root, k) {
  var result = null;
  var flag = false;
  var counter = 0;

  var recurse = root => {
    if (root !== null && !flag) {
      recurse(root.left);
      counter++;
      if (counter === k) {
        result = root.val;
        return;
      }
      recurse(root.right);
    }
  };
  recurse(root);
  return result;
};
