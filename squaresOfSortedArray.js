var sortedSquares = function(A) {
  var sortedArray = [];

  for (var i = 0; i < A.length; i++) {
    var squared = Math.pow(A[i], 2);
    sortedArray.push(squared);
  }

  return sortedArray.sort((a, b) => a - b);
};
