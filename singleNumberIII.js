var singleNumber = function(nums) {
  var map = {};
  var results = [];

  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (var key in map) {
    if (map[key] === 1) {
      results.push(key);
    }
  }

  return results;
};
