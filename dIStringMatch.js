var diStringMatch = function(S) {
  var result = [];
  var i = 0;
  var max = S.length;
  var min = 0;

  while (result.length <= S.length) {
    if (S[i] === "I") {
      result.push(min);
      min += 1;
    } else if (S[i] === "D") {
      result.push(max);
      max -= 1;
    } else {
      result.push(min);
    }
    i++;
  }
  return result;
};
