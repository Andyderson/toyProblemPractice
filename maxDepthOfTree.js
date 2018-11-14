var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  var depth = [];
  var recurse = function(node, count) {
    if (!node.left && !node.right) {
      depth.push(count);
    }
    if (node.left) {
      recurse(node.left, count + 1);
    }
    if (node.right) {
      recurse(node.right, count + 1);
    }
  };
  recurse(root, 1);
  return Math.max(...depth);
};

maxDepth([3, 9, 20, null, null, 15, 7]); //3
