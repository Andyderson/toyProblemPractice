var moveZeroes = function(nums) {
  var length = nums.length;
  var diff;

  for (var i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
    }
  }

  diff = length - nums.length;

  while (diff > 0) {
    nums.push(0);
    diff--;
  }
};
