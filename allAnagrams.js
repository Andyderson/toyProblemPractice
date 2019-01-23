function allAnagrams(string) {
  var storage = {};

  var anagram = function(ana, string) {
    if (string === "") {
      storage[ana] = 1;
    }
    for (var i = 0; i < string.length; i++) {
      anagram(ana + string[i], string.slice(0, i) + string.slice(i + 1));
    }
  };

  anagram("", string);
  return Object.keys(storage);
}

allAnagrams("cba");
