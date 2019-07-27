var canJump = function(nums) {
  var steps = 1;

  for (var i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= steps) {
      steps = 1;
    } else {
      steps++;
    }
  }

  if (steps === 1) {
    return true;
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4])); //true
