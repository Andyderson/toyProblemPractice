var searchRange = function(nums, target) {
  var results = [];
  var temp = [];
  var count = 0;

  if (!nums.includes(target)) {
    return [-1, -1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      temp.push(i);
      count++;
    }
  }

  if (count === 1) {
    temp.push(temp[0]);
    return temp;
  }
  results.push(temp[0]);
  results.push(temp[temp.length - 1]);

  return results;
};
