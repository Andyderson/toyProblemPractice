// Input: nums = [3,5,2,1,6,4]
// Output: One possible answer is [3,5,1,6,2,4]

var wiggleSort = function(nums) {
  var temp;

  for (var i = 0; i < nums.length; i++) {
    if (i % 2 === 0 && nums[i] <= nums[i + 1]) {
      continue;
    } else {
      //evaluate remaining values in array
      for (var j = i; j < nums.length; j++) {
        //swap a value with nums[i] that is greater than nums[i - 1]
        temp = nums[i];
        if (nums[j] >= temp) {
          nums[i] = nums[j];
          nums[j] = temp;
        }
      }
    }
    if (i % 2 !== 0 && nums[i] >= nums[i + 1]) {
      continue;
    } else {
      //evaluate remaining values in array
      for (var k = i; k < nums.length; k++) {
        //swap a value with nums[i] that is less than nums[i - 1]
        temp = nums[i];
        if (nums[k] <= temp) {
          nums[i] = nums[k];
          nums[k] = temp;
        }
      }
    }
  }
  return nums;
};
