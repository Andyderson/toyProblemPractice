var firstUniqChar = function(string) {
  var map = {};

  for (var i = 0; i < string.length; i++) {
    if (!map[string[i]]) {
      map[string[i]] = 1;
    } else {
      map[string[i]]++;
    }
  }

  for (var key in map) {
    if (map[key] === 1) {
      return string.indexOf(key);
    }
  }
  return -1;
};

firstUniqChar("leetcode"); //0
