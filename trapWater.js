var trap = function(array) {
  var maxWater = 0;
  var count = 0;
  var leftStorage = [];
  var rightStorage = [];
  var maxLeft = 0;
  var maxRight = 0;

  for (var i = 0; i < array.length; i++) {
    leftStorage.push(maxLeft);
    if (array[i] > maxLeft) {
      maxLeft = array[i];
    }
  }

  for (var j = array.length; j >= 0; j--) {
    rightStorage[j] = maxRight;
    if (array[j] > maxRight) {
      maxRight = array[j];
    }
  }

  console.log("left", leftStorage);
  console.log("right", rightStorage);

  for (var k = 0; k < array.length; k++) {
    if (leftStorage[k] !== 0 && rightStorage[k] !== 0) {
      maxWater = Math.min(leftStorage[k], rightStorage[k]);
      if (maxWater > array[k]) {
        count += maxWater - array[k];
      }
    }
  }
  return count;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); //6
