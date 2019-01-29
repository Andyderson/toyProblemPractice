var Tree = function(value) {
  this.value = value;
  this.children = [];
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

//<<<<<<<<<<<<<<<<< Prompt >>>>>>>>>>>>>>>>>>>>>>>>>>>

var findLargestLevel = function(node) {
  var results = {};
  var depth = 0;
  var sum = 0;

  var cursed = function(results) {
    //base case
    if (!node.left && !node.right) {
      sum = node.Value;
      results.depth = sum;
      depth = 0;
    }

    //recursive case
    if (node.left) {
      sum = node.Value;
      results.depth ? (results.depth += sum) : (results.depth = sum);
      depth++;
      cursed(node.left);
    }

    if (node.right) {
      sum = node.Value;
      results.depth ? (results.depth += sum) : (results.depth = sum);
      depth++;
      cursed(node.right);
    }
  };

  //Compare
  var largestLevel = 0;
  var compare = 0;

  for (var key in results) {
    if (results[key] > compare) {
      compare = results[key];
      largestLevel = key;
    }
    if (results[key] === compare && largestLevel > key) {
      largestLevel = key;
    }
  }
  cursed(results, depth);
  return largestLevel;
};

//<<<<<<<<<<<<<<<<< Test >>>>>>>>>>>>>>>>>>>>>

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

findLargestLevel(root1);
