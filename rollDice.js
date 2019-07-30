// Input: A = [1, 2, 3]
// Output: 2
// Explanation: You can pick the first two dice and rotate each of them in one move so that they all show three pips on the top face.
// Notice that you can also pick any other pair of dice in this case.

// Input: A = [1, 1, 6]
// Output: 2
// Explanation: The only optimal answer is to rotate the last die so that it shows one pip. It is necessary to use two rotations to achieve this.

// Input: A = [1, 6, 2, 3]
// Output: 3
// Explanation: For instance, you can make all dice show 2: just rotate each die which is not showing 2.
// Notice that for each die you can do this in one move.

var rollDice = array => {
  for (var i = 1; i <= 6; i++) {
    var count = 0;
    for (var n in array) {
      if (n === i) {
        continue;
      } else if (n + i === 7) {
        count += 2;
      } else {
        count += 1;
      }
    }
  }

  return count - 1;
};

console.log(rollDice([1, 2, 3])); //2
console.log(rollDice([1, 1, 6])); //2
console.log(rollDice([1, 6, 2, 3])); //3
