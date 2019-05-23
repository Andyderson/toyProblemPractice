var majorityElement = function(nums) {
  var map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  return Object.keys(map).sort((a, b) => map[b] - map[a])[0];
};
