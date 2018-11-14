// Given a string, find the length of the longest substring without
// repeating characters.

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(string) {
  var current = 1;
  var i = 0;

  for (let j = 1; j < string.length; j++) {
    for (var k = i; k < j; k++) {
      if (string.charAt(k) === string.charAt(j)) {
        break;
      }
    }
    if (k === j) {
      current = Math.max(current, j - i + 1);
    } else {
      i = k + 1;
    }
  }
  return string ? current : 0;
};

lengthOfLongestSubstring("abcabcbb"); //3
lengthOfLongestSubstring("bbbbb"); //1
lengthOfLongestSubstring("pwwkew"); //3
lengthOfLongestSubstring("dvdf"); //3
