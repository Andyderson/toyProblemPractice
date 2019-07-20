var longestPalindromeSubseq = function(s) {
  var split = s.split("").reverse();
  var bank = new Array(s.length + 1);

  for (var i = 0; i <= s.length; i++) {
    bank[i] = new Array(s.length + 1).fill(0);
  }

  for (var i = 1; i <= s.length; i++) {
    for (var j = 1; j <= s.length; j++) {
      if (s[i - 1] === split[j - 1]) {
        bank[i][j] = 1 + bank[i - 1][j - 1];
      } else {
        bank[i][j] = Math.max(bank[i - 1][j], bank[i][j - 1]);
      }
    }
  }
  return bank[s.length][s.length];
};
