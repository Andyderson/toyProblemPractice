var minimumUniqueSum = function(array) {
  array.sort((a, b) => a - b);
  var length = array.length;
  var sum = array[0];
  var previous = array[0];

  for (var i = 0; i < length; i++) {
    var curr = array[i];
    if (prev >= curr) {
      curr = prev + 1;
    }
    sum += curr;
    prev = curr;
  }
  return sum;
};
