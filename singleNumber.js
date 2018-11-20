// Input: [2,2,1]
// Output: 1

var singleNumber = function(nums) {
  var map = {};

  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (var key in map) {
    if (map[key] === 1) {
      return parseInt(key);
    }
  }
};

// singleNumber([2, 2, 1]); //1
singleNumber([4, 1, 2, 1, 2]); //4
