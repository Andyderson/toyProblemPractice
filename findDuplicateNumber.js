var findDuplicate = function(nums) {
  var map = {};

  nums.forEach(ele => {
    if (!map[ele]) {
      map[ele] = 1;
    } else {
      map[ele]++;
    }
  });

  for (let key in map) {
    if (map[key] >= 2) {
      return key;
    }
  }
};
