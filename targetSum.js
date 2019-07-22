var findTargetSumWays = function(nums, S) {
  var map = {};

  function recurse(i, sum) {
    var result = 0;

    if (map[i + "," + sum] === null) {
      if (i === nums.length) {
        if (sum === S) {
          return 1;
        } else {
          return 0;
        }
      }
      var num = nums[i];

      result += recurse(i + 1, sum - num);
      result += recurse(i + 1, sum + num);
      map[i + "," + sum] = result;
    } else {
      result = map[i + "," + sum];
    }

    return result;
  }

  return recurse(0, 0);
};
