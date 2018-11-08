//Find the missing number from 1 to n numbers in an array

var missingNums = function(array, number) {
  var results = [];

  for (var i = 0; i <= number; i++) {
    if (!array.includes(i)) {
      results.push(i);
    }
  }

  return results;
};

missingNums([1, 3, 5, 6, 7, 9, 10], 12);
