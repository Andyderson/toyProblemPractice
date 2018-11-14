// Input: [2, 4, 3] + [5, 6, 4]
// Output: [7, 0, 8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(array1, array2) {
  var sort1 = parseInt(array1.reverse().join(""));
  var sort2 = parseInt(array2.reverse().join(""));

  var sum = (sort1 + sort2)
    .toString()
    .split("")
    .reverse();
  var results = [];

  for (var i = 0; i < sum.length; i++) {
    results.push(parseInt(sum[i]));
  }

  return results;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]); //[7, 0, 8]
