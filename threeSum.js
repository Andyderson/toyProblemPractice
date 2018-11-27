var threeSum = function(array) {
  var results = [];
  var sorted = array.sort((a, b) => a - b);
  var first;
  var second;

  if (array.length < 3) {
    return results;
  }

  for (var i = 0; i < sorted.length; i++) {
    first = sorted[i];
    second = sorted[i + 1];

    for (var j = i + 2; j < sorted.length; j++) {
      if (first + second + sorted[j] === 0) {
        results.push([first, second, sorted[j]]);
      }
    }
  }

  return results;
};

threeSum([-1, 0, 1, 2, -1, -4]);
