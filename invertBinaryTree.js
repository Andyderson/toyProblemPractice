var invertTree = function(root) {
  if (!root) {
    return root;
  }

  var queue = [root];

  while (queue.length) {
    let curr = queue.shift();

    if (curr === null) {
      continue;
    }

    swap(curr);
    queue.push(curr.left);
    queue.push(curr.right);
  }
  return root;
};

var swap = tree => {
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  return tree;
};
