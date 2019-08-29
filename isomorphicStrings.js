// Input: s = "egg", t = "add"
// Output: true

var isIsomorphic = function(s, t) {
  var map = {};

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

console.log(isIsomorphic("egg", "add")); //true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); //true
console.log(isIsomorphic("ab", "aa")); //false
