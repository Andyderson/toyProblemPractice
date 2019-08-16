var rob = function(nums) {
  var even = [];
  var odd = [];

  for (var i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  var sumEven = even.reduce((a, b) => a + b);
  var sumOdd = odd.reduce((a, b) => a + b);

  return Math.max(sumEven, sumOdd);
};
