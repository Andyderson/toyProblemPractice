// Input: nums = [1, 5, 1, 1, 6, 4]
// Output: One possible answer is [1, 4, 1, 5, 1, 6].

var wiggleSortII = function(array) {
  array.sort((a, b) => a - b);
  var mid = Math.ceil(array.length / 2);
  var firstHalf = array.slice(0, mid);
  var secondHalf = array.slice(mid);

  for (var i = 0; i < array.length; i += 2) {
    array[i] = firstHalf.pop();
  }

  for (var j = 1; j < array.length; j += 2) {
    array[j] = secondHalf.pop();
  }

  return array;
};
