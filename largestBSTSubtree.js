// var solution = (arr) => {
//     if (arr.length === 0) {
//         return "";
//     }

//     var left = [];
//     var right = [];
//     var trigger = 1;

//     left.push(arr[0]);
//     right.push(arr[0]);

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] === -1) {
//             trigger = trigger * -1;
//             continue;
//         }
//         if (i % 2 !== 0 && trigger > 0) {
//             left.push(arr[i]);
//         } else if (i % 2 !== 0 && trigger < 0) {
//             right.push(arr[i]);
//         }
//         if (i % 2 === 0 && trigger > 0) {
//             right.push(arr[i]);
//         } else if (i % 2 === 0 && trigger < 0) {
//             left.push(arr[i]);
//         }
//     }

//     var leftSum = left.reduce((a, b) => a + b);
//     var rightSum = right.reduce((a, b) => a + b);

//     console.log(left, right);
// //     console.log(leftSum, rightSum);

//     if (leftSum > rightSum) {
//         return "Left";
//     } else if (rightSum > leftSum) {
//         return "Right";
//     } else if (rightSum === leftSum) {
//         return "";
//     }
// };

// console.log(solution([1,10,5,1,0,6])); // ''

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//     var left = [];
//     var right = [];
//     var flag = 0;

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
  //     // check if left and right exists
  //     // if left exists
  //     if (tree.left) {
  //         if (flag === 0) {
  //             left.push(tree.left.val);
  //             addTree(tree.left);
  //             flag += 1;
  //         }
  //         if (flag >= 1) {
  //             left.push(tree.left.val);
  //             addTree(tree.left);
  //         }
  //     }

  //     // if right exists
  //     if (tree.right) {
  //         if (flag === 0) {
  //             right.push(tree.right.val);
  //             addTree(tree.right);
  //             flag += 1;
  //         }
  //         if (flag >= 1) {
  //             right.push(tree.right.val);
  //             addTree(tree.right);
  //         }

  //     }

  if (tree.left) {
    leftSum = leftSum + tree.left.val;
  }
};

var solution = arr => {
  if (arr.length === 0) {
    return "";
  }

  // Used to construct the tree
  var tree = insertLevelOrder(arr, arr[0]);

  // Push root value into both left and right
  //     left.push(tree.val);
  //     right.push(tree.val);

  addTree(tree);

  //     var leftSum = left.reduce((a, b) => a + b);
  //     var rightSum = right.reduce((a, b) => a + b);

  if (leftSum > rightSum) {
    return "Left";
  } else if (rightSum > leftSum) {
    return "Right";
  } else if (rightSum === leftSum) {
    return "";
  } else {
    return 0;
  }
};

console.log(solution([1, 10, 5, 1, 0, 6])); // ""
