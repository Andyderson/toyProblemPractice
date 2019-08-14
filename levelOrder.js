var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  var result = [];
  var queue = [];

  queue.push(root);

  while (queue.length > 0) {
    var temp = [];
    for (let i = 0; i < queue.length; i++) {
      var node = queue.shift();
      temp.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(temp);
  }
  return result;
};
