var lengthOfLongestSubstring = function(s) {
  let first;
  let second = 0;
  let current = "";
  let result = 0;

  for (first = 0; first < s.length; first++) {
    let currentChar = s[first];

    while (current.indexOf(currentChar) > -1 && first != second) {
      second++;
      current = s.slice(second, first);
    }

    current = s.slice(second, first + 1);
    result = current.length > result ? current.length : result;
  }

  return result;
};
