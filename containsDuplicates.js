// Input: [1,2,3,1]
// Output: true

var containsDuplicate = function(nums) {
  if (nums.length < 1) {
    return false;
  }

  var map = {};

  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (var key in map) {
    if (map[key] > 1) {
      return true;
    }
  }

  return false;
};

// containsDuplicate([1, 2, 3, 1]); //true
containsDuplicate([2, 14, 18, 22, 22]); //true
