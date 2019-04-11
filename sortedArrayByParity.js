var sortArrayByParity = function(A) {
  var oddArray = [];
  var evenArray = [];

  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evenArray.push(A[i]);
    } else {
      oddArray.push(A[i]);
    }
  }

  return evenArray.concat(oddArray);
};
