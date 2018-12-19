var groupAnagrams = function(array) {
  var map = {};

  for (var string of array) {
    var key = [...string].sort((a, b) => a.localeCompare(b));

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(string);
  }

  return Object.values(map);
};
