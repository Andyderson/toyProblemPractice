var swap = function(array, i, j) {
  var store = array[i];
  array[i] = array[j];
  array[j] = store;
};

var bubbleSort = function(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
};

bubbleSort([2, 1, 3, 5, 3, 7, 8, 9, 11, 0, -1]);
