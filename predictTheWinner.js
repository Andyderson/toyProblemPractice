// Input: [1, 5, 2]
// Output: False
// Explanation: Initially, player 1 can choose between 1 and 2.
// If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2).
// So, final score of player 1 is 1 + 2 = 3, and player 2 is 5.
// Hence, player 1 will never be the winner and you need to return False.

var predictTheWinner = function(nums) {
  if (nums.length % 2 === 0) {
    return true;
  }

  var copy = nums.slice();

  for (var i = nums.length - 2; i >= 0; i--) {
    for (var j = i + 1; j < nums.length; j++) {
      copy[j] = Math.max(nums[i] - copy[j], nums[j] - copy[j - 1]);
    }
  }
  return copy[nums.length - 1] >= 0;
};

console.log(predictTheWinner([1, 5, 2])); //false
console.log(predictTheWinner([1, 5, 233, 7])); //true
