var rotate = function(nums, k) {
  var count = 0;

  while (count < k) {
    var popped = nums.pop();
    nums.unshift(popped);
    count++;
  }

  return nums;
};
