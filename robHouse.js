var rob = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  var beforeRob = nums[0];
  var possibleAmount = 0;

  for (var i = 1; i < nums.length; i++) {
    var temp = beforeRob;
    beforeRob = possibleAmount + nums[i];
    possibleAmount = Math.max(temp, possibleAmount);
  }

  return Math.max(beforeRob, possibleAmount);
};

rob([2, 7, 9, 3, 1]); //12
