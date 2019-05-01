// Input: [2, 4, 3] + [5, 6, 4]
// Output: [7, 0, 8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
  var l1Reverse = parseInt(l1.reverse().join(""));
  var l2Reverse = parseInt(l2.reverse().join(""));

  return l1Reverse + l2Reverse;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]); //[7, 0, 8]
