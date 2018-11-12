// Given an integer array, find the number of
// triplets that have sum more than a particular value.

var tripletSum = function(array, target) {
  var results = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      for (var k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] >= target) {
          results.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  console.log(results);
  return results.length;
};

tripletSum([0, 1, 4, 6, 7], 12);
