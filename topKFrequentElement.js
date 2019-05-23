var topKFrequent = function(nums, k) {
  var results = [];
  var map = {};

  if (k === 0 || nums.length === 0) {
    return results;
  }

  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k);
};
