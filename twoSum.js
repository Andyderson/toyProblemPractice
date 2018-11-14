var twoSum = function(nums, target) {
  var comp;

  for (var i = 0; i < nums.length; i++) {
    comp = target - nums[i];

    if (nums.indexOf(comp) !== -1 && nums.indexOf(comp) !== i) {
      return [i, nums.indexOf(comp)];
    } else {
      continue;
    }
  }
};

twoSum([2, 7, 11, 15], 9); //[0, 1]
