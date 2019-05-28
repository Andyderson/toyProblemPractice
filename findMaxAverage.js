// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

var findMaxAverage = function(nums, k) {
  var max = -Infinity;
  var sum = 0;

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i] - (nums[i - k] || 0);

    if (i >= k - 1) {
      max = Math.max(max, sum);
    }
  }
  return max / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); //12.75
