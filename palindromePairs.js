// Input: ["abcd","dcba","lls","s","sssll"]
// Output: [[0,1],[1,0],[3,2],[2,4]]
// Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]

var palindromePairs = function(array) {
  var results = {};

  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      var combined = array[i] + array[j];
      var reverseCombined = array[j] + array[i];

      if (array[i] === array[j]) {
        continue;
      }

      if (palindrome(combined) === true) {
        results[array[i] + array[j]] = [
          array.indexOf(array[i]),
          array.indexOf(array[j])
        ];
      }

      if (palindrome(reverseCombined) === true) {
        results[array[j] + array[i]] = [
          array.indexOf(array[j]),
          array.indexOf(array[i])
        ];
      }
    }
  }

  return Object.values(results);
};

var palindrome = function(string) {
  var reverse = string
    .split("")
    .reverse()
    .join("");

  for (var i = 0; i < string.length; i++) {
    if (reverse[i] !== string[i]) {
      return false;
    } else {
      continue;
    }
  }

  return true;
};

palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]); //[[0,1],[1,0],[3,2],[2,4]]
palindromePairs(["abc", "cba"]);
palindromePairs(["bat", "tab", "cat"]);
