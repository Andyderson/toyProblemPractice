// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

var mergeInterval = function(array) {
  array.sort((a, b) => a[0] - b[0]);

  var i = 0;

  while (i < array.length - 1) {
    if (array[i][1] > array[i + 1][0]) {
      array[i][1] = Math.max(array[i][1], array[i + 1][1]);
      array.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return array;
};

mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]]);
