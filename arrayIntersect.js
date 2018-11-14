var intersect = function(array1, array2) {
  var results = [];
  // Preprocessing for better time complexity
  var map = {};

  for (var i = 0; i < array1.length; i++) {
    map[array1[i]] = 1;
  }

  for (var j = 0; j < array2.length; j++) {
    if (map[array2[j]] === 1) {
      map[array2[j]]++;
      results.push(array2[j]);
    }
  }

  //   var max = Math.max(array1.length, array2.length);
  //   for (var i = 0; i < max; i++) {
  //     for (var j = 0; j < max; j++) {
  //       if (array1[i] === array2[j]) {
  //         results.push(array1[i]);
  //       }
  //     }
  //   }

  return results;
};

intersect([1, 4, 5, 6], [3, 4, 6, 7]); //[4, 6]
