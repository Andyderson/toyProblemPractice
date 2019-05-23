var majorityElement = function(nums) {
  var map = {};
  var results = [];

  nums.forEach(ele => {
    if (!map[ele]) {
      map[ele] = 1;
    } else {
      map[ele]++;
    }
  });

  for (let key in map) {
    if (map[key] > nums.length / 3) {
      results.push(key);
    }
  }

  return results;
};
