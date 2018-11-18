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

var twoSum = function(array, target) {
  var map = {};
  var results = [];

  for (var i = 0; i < array.length; i++) {
    var test = map[array[i]];

    if (test !== undefined) {
      results.push([test, i]);
    }
    map[target - array[i]] = i;
  }

  return results;
};

twoSum([1, 2, 3, 4, 9, 11], 12);
twoSum([2, 7, 11, 15], 9); //[0, 1]
