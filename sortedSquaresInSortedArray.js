var sortedSquares = function(A) {
  var sortedArray = [];

  for (var i = 0; i < A.length; i++) {
    var squared = Math.pow(A[i], 2);
    sortedArray.push(squared);
  }

  return sortedArray.sort((a, b) => a - b);
};

sortedSquares([-4, -1, 0, 3, 10]); //[0,1,9,16,100]
