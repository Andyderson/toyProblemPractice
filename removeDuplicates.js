var removeDupes = function(string) {
  var len = string.length;
  var charCount = {};
  var char;
  var results = [];

  for (var i = 0; i < len; i++) {
    char = string[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (var key in charCount) {
    if (charCount[key] === 1) {
      results.push(key);
    }
  }
  return results.join("");
};

removeDupes("Leetcode");
