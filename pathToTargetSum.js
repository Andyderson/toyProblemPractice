var Tree = function(value) {
  this.value = value;
  this.children = [];
  this.left = null;
  this.right = null;
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

var hasPathToSum = (node, targetSum) => {
  var sum = 0;
  var flag = false;

  if (!node || !targetSum) {
    return false;
  }

  var recur = node => {
    sum += node.value;
    console.log("this is sum", sum);

    if (sum === targetSum) {
      flag = true;
    }
    if (sum !== targetSum) {
      if (flag === false && node.left) {
        recur(node.left);
      } else if (flag === false && node.right) {
        recur(node.right);
      }
    }
  };
  recur(node);
  return flag;
};

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var leaf8 = leaf6.addChild(3);
var leaf9 = leaf4.addChild(7);

root1.left = branch2;
root1.right = branch3;
branch2.left = leaf4;
branch2.right = leaf5;
branch3.left = leaf6;
branch3.right = leaf7;
leaf6.left = leaf8;
leaf4.left = leaf9;

hasPathToSum(root1, 14);
