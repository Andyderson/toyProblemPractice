var longestOnes = function(A, K) {
  var max = 0;
  var count = 0;
  var start = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count++;
    }

    while (count > K) {
      if (A[start] === 0) {
        count--;
      }

      start++;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};
