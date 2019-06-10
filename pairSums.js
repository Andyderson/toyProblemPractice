// Given an unsorted array with unique numbers. Find all pairs with equal sums.

// Input: [9, 4, 3, 1, 7, 12]
// Output: [1, 12] & [4, 9], [3, 7] & [1, 9], [4, 12] & [7, 9]

var pairSum = (array) => {
    var map = {};
 
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (!map[array[i]] + map[array[j]]) {
          map[array[i] + map[array[j] = [[map[array[i]], map[array[j]]
        } else {
          map[array[i]] + map[array[j]].push([array[i], array[j]]);
        }
      }
    }   
 }
