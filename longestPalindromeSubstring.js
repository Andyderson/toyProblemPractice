var longestPalindrome = function(string) {
  var result = "";

  var checkPalindrome = function(left, right) {
    while (left >= 0 && right < string.length) {
      if (string[left] == string[right]) {
        left--;
        right++;
      } else {
        break;
      }
    }

    left++;
    right--;

    if (right - left + 1 > result.length) {
      result = string.substring(left, right + 1);
    }
  };
  for (let i = 0; i < string.length; i++) {
    if (i > 0 && string[i] == string[i - 1]) {
      checkPalindrome(i - 1, i);
    }
    checkPalindrome(i, i);
  }
  return result;
};
