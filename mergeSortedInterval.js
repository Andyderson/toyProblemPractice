// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;

  nums1.push(...nums2);
  return nums1.sort((a, b) => a - b);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); //[1,2,2,3,5,6]
