var maxSubArray = function(array) {
  var results = array[0];
  var sum = array[0];

  for (var i = 1; i < array.length; i++) {
    sum = Math.max(array[i], sum + array[i]);
    results = Math.max(sum, results);
  }

  return results;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6
