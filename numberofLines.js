var numberOfLines = function(widths, S) {
  if (S.length === 0) {
    return [0, 0];
  }

  var count = 1;
  var sum = 0;

  for (var i = 0; i < S.length; i++) {
    if (sum + widths[S[i].charCodeAt() - 97] <= 100) {
      sum += widths[S[i].charCodeAt() - 97];
    } else {
      count++;
      sum = widths[S[i].charCodeAt() - 97];
    }
  }

  return [count, sum];
};
