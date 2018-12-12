var occurences = function(array, k) {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === k) {
      count++;
    }
  }

  return count;
};

occurences([1, 1, 2, 2, 2, 2, 3, 3, 4, 4], 2); //4
