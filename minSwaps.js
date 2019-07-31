// Input: [5, 1, 3, 2]
// Output: 2
// Explanation: [5, 1, 3, 2] -> [2, 1, 3, 5] -> [1, 2, 3, 5]

// Input: [1, 3, 2]
// Output: 1
// Explanation: [1, 3, 2] -> [1, 2, 3]

// Given an array return an integer indicating the minimum number of swap operations required to sort the array into ascending order.

var minSwap = array => {
  var sortedArr = array.slice(0).sort((a, b) => a - b);
  var numDiffElem = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== sortedArr[i]) {
      numDiffElem++;
    }
  }

  return numDiffElem - 1;
};

console.log(minSwap([5, 1, 3, 2])); //2
console.log(minSwap([1, 3, 2])); //1
console.log(minSwap([2, 3, 4, 1])); //3
console.log(minSwap([4, 2, 3, 1])); //1
