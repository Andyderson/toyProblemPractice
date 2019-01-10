var balancedArrays = function(array) {
  var totalSum = array.reduce((a, b) => a + b);
  var leftSum = 0;

  for (var i = 0; i < array.length; i++) {
    totalSum -= array[i];

    if (leftSum === totalSum) {
      return i;
    }
    leftSum += array[i];
  }
};
