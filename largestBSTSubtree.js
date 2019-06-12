function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var insertLevelOrder = (arr, root, i = 0) => {
  if (i < arr.length) {
    var temp = new TreeNode(arr[i]);
    root = temp;

    // insert left child
    root.left = insertLevelOrder(arr, root.left, 2 * i + 1);

    // insert right child
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
  }
  return root;
};

var leftSum = 0;
var rightSum = 0;

var addTree = tree => {
  var sum = tree.val;

  var recurse = tree => {
    if (tree.left) {
      sum += tree.left.val;
      addTree(tree.left);
    }

    if (tree.right) {
      sum += tree.right.val;
      addTree(tree.right);
    }
  };
  recurse(tree);
  return sum;
};

var solution = arr => {
  if (arr.length === 0) {
    return "";
  }

  // Used to construct the tree
  var tree = insertLevelOrder(arr, arr[0]);

  var left = addTree(tree.left); // 11
  var right = addTree(tree.right); // 11

  console.log("left", left, "right", right);

  if (left > right) {
    return "Left";
  } else if (right > left) {
    return "Right";
  } else if (right === left) {
    return "Empty String";
  } else {
    return 0;
  }
};

console.log(solution([1, 10, 5, 1, 0, 6])); // ""
