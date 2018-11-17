var omitFalse = function(array, object) {
  var results = {};

  for (var i = 0; i < array.length; i++) {
    if (object[array[i]] !== false) {
      results[array[i]] = object[array[i]];
    } else {
      continue;
    }
  }

  return results;
};

omitFalse(["dog", "airplanes", "cell", "bay", "popcorn"], {
  dog: false,
  airplanes: "23",
  cell: "phone",
  bay: "Area",
  popcorn: false
});
