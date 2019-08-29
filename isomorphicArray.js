// Input: ["apple", "apply", "dog", "cog", "romi", 'appla']
// Output: [["dog", "cog"], ["romi"], ["apple", "apply"]]

var isomorphicArray = array => {
  var results = [];
  var temp = [];
  var length = array.length;

  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (isIsomorphic(array[i], array[j])) {
        temp.push(array[j]);
      }
    }
    results.push(temp);
    temp = [];
  }
  var resultsLength = results.length;

  for (var k = 0; k < resultsLength; k++) {
    for (var l = k + 1; l < resultsLength; l++) {
      if (results[k].toString() === results[l].toString()) {
        results.splice(l, 1);
        resultsLength = resultsLength - 1;
      }
    }
  }

  return results;
};

var isIsomorphic = function(s, t) {
  var map = {};

  if (s.length !== t.length) {
    return false;
  }

  for (var i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = t[i];
    } else if (map[s[i]] && map[s[i]] !== t[i]) {
      return false;
    }
  }

  var values = Object.values(map);

  values.sort((a, b) => a.localeCompare(b));

  for (var j = 0; j < values.length; j++) {
    if (values[j] === values[j + 1]) {
      return false;
    }
  }

  return true;
};

console.log(isomorphicArray(["apple", "apply", "dog", "cog", "romi", "appli"]));
// Output: [["dog", "cog"], ["romi"], ["apple", "apply"]]
