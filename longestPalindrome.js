var longestPalindrome = function(s) {
  var result = "";
  var current = "";
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < i + 2; j++) {
      var left = i;
      var right = j;
      while (s[left] && s[left] === s[right]) {
        current = s.substring(left, right + 1);
        if (current.length > result.length) result = current;
        left--;
        right++;
      }
    }
  }
  return result;
};
