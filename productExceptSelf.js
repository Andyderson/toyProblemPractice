let productExceptSelf = function(array) {
  let results = [];

  for (var i = 0; i < array.length; i++) {
    let product = 1;
    for (var j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      } else {
        product = product * array[j];
      }
    }
    results.push(product);
  }

  return results;
};
