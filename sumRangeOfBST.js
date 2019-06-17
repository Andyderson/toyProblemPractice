var rangeSumBST = (root, L, R) => {
  var sum = 0;
  var node = root;
  var stack = [];

  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else if (stack.length > 0) {
      node = stack.pop();

      var current = node.val;

      if (current > R) {
        break;
      } else if (L <= current && current <= R) {
        sum += current;
      }
      node = node.right;
    }
  }
  return sum;
};
