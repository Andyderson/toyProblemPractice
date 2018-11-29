var firstMissingPositive = function(nums) {
  nums.sort((a, b) => a - b);

  for (var i = 1; i < Infinity; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

firstMissingPositive([1, 2, 0]); //3
firstMissingPositive([3, 4, -1, 1]); //2
firstMissingPositive([7, 8, 9, 11, 12]); //1
