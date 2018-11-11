var findMedianSortedArrays = function(array1, array2) {
  var sorted = [...array1, ...array2].sort((a, b) => a - b);

  if (sorted.length % 2 !== 0) {
    return sorted[Math.ceil(sorted.length / 2) - 1];
  } else {
    return (
      (sorted[Math.ceil(sorted.length / 2) - 1] +
        sorted[Math.ceil(sorted.length / 2)]) /
      2
    );
  }
};

findMedianSortedArrays([1, 2], [3, 4]);
