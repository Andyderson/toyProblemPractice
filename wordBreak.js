var wordBreak = function(s, wordDict) {
  if (!wordDict || wordDict.length == 0) {
    return false;
  }

  var results = new Array(s.length + 1).fill(false);
  results[0] = true;

  for (var i = 1; i <= s.length; i++) {
    for (var j = 0; j < i; j++) {
      if (results[j] && wordDict.indexOf(s.substring(j, i)) >= 0) {
        results[i] = true;
        break;
      }
    }
  }
  return results[s.length];
};

wordBreak("leetcode", ["leet", "code"]); //true
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]); //false
