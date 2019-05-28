var heightChecker = function(heights) {
  var count = 0;
  var clone = [...heights].sort((a, b) => a - b);

  for (var i = 0; i < heights.length; i++) {
    if (heights[i] !== clone[i]) {
      count++;
    }
  }

  return count;
};
