var findMedianSortedArrays = function(nums1, nums2) {
  var sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  var length = sortedArray.length;
  var evenIdxA;
  var evenIdxB;

  if (length % 2 === 0) {
    evenIdxA = length / 2;
    evenIdxB = length / 2 - 1;

    return (sortedArray[evenIdxA] + sortedArray[evenIdxB]) / 2;
  } else {
    oddIdx = Math.floor(length / 2);
    return sortedArray[oddIdx];
  }
};

console.log(findMedianSortedArrays([1, 3], [2])); //2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); //2.5
