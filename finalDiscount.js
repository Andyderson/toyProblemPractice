var prices = [5, 1, 3, 4, 6, 2];

var finalDiscount = function(array) {
  var results = [];
  var subtract;
  var length = array.length;

  for (var i = 0; i < length; i++) {
    var curr = array[i];

    for (var j = i + 1; j < length; j++) {
      if (array[j] < curr) {
        subtract = curr - array[j];
        results.push(subtract);
        break;
      } else if (j === length - 1) {
        results.push(curr);
      } else {
        continue;
      }
    }
  }

  results.push(array[array.length - 1]);
  var sum = results.reduce((a, b) => a + b);

  return sum;
};

finalDiscount(prices); //[4, 1, 1, 2, 4, 2], sum = 14
