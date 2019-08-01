var permute = function(nums) {
  var temp = [];
  var result = [];

  helper(nums, [], result, temp);
  return result;
};

var helper = (nums, array, res, temp) => {
  if (array.length === nums.length) {
    res.push(array.slice(0));
    return;
  }

  for (var i = 0; i < nums.length; i++) {
    if (!temp[i]) {
      temp[i] = true;
      array.push(nums[i]);
      helper(nums, array, res, temp);
      temp[i] = false;
      array.pop();
    }
  }
};
