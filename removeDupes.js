var removeDuplicates = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i = i - 1;
    }
  }

  return nums.length;
};
