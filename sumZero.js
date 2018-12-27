// Write a function that takes in an integer array (unsorted), and return true if there are 3 integers in the array that add up 0, false otherwise. The trick is that you can repeat numbers, so an input of [1, -1, -2] would be true because you can add 1 + 1 + -2. An array with a 0 in it would also return true.

var sumZero = function(array) {
  if (array.includes(0)) {
    return true;
  }

  var positive = [];
  var negative = [];

  for (var x = 0; x < array.length; x++) {
    for (var y = 0; y < array.length; y++) {
      for (var z = 0; z < array.length; z++) {
        if (array[x] + array[y] + array[z] === 0) {
          return true;
        }
      }
    }
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive.push(array[i]);
    } else {
      negative.push(array[i]);
    }
  }

  var pLength = positive.length;
  var nLength = negative.length;

  var length = Math.max(nLength, pLength);

  for (var j = 0; j < length; j++) {
    for (var k = 0; k < length; k++) {
      if (negative[j] * 2 + positive[k] === 0) {
        return true;
      } else if (positive[j] * 2 + negative[k] === 0) {
        return true;
      }
    }
  }
  return false;
};

// sumZero([1, -1, -2]); //true
// sumZero([0, 0, 0]); //true
// sumZero([-1, -1, -1]); //false
// sumZero([1, -1, -5, 20, 2]); //true
// sumZero([1, 2, 3, 4, 5, 77, 8, -100]); //false
sumZero([-1, -2, 3]); //true
