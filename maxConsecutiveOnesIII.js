var longestOnes = function(A, K) {
  var result = 0;
  var count = 0;
  var index = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count++;
    }

    while (count > K) {
      if (A[index] === 0) count--;
      index++;
    }

    result = Math.max(result, i - index + 1);
  }

  return result;
};
