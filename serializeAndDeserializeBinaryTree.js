// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5
// as "[1, 2, 3, null, null, 4, 5]"

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function(root) {
  var results = [];
  serializer(root, results);

  return results.join(",");
};

var serializer = function(node, output) {
  if (node === null) {
    output.push("#");
    return;
  }

  output.push(node.val);
  serializer(node.left, output);
  serializer(node.right, output);
};

var deserialize = function(data) {
  data = data.split(",");
  var index = 0;

  var deserializer = function(data) {
    if (data[index] === "#" || index > data.length) {
      return null;
    }

    var node = new TreeNode(parseInt(data[index]));
    index++;

    node.left = deserializer(data);
    index++;
    node.right = deserializer(data);

    return node;
  };

  return deserializer(data);
};
