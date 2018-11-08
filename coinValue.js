// Given an array of coin values [1, 3, 6] and a value, return  the minimum
// # of coins that will add up to the value.

var coinValue = function(array, target) {
  var count = 0;
  var sorted = array.sort((a, b) => b - a);

  for (var i = 0; i < array.length; i++) {
    var leftover = Math.floor(target / array[i]);
    target = target % array[i];
    count += leftover;
  }

  return count;
};

coinValue([1, 3, 6], 15); //3
coinValue([1, 3, 6], 22); //5
coinValue([1, 2, 3], 48); //16
