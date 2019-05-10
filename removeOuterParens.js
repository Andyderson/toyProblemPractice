// Input: "(()())(())"
// Output: "()()()"

var removeOuterParentheses = function(S) {
  var results = [];
  var count = 0;

  for (var i = 0; i < S.length; i++) {
    S[i] === "(" ? count++ : count--;
    if ((S[i] === "(" && count != 1) || (S[i] === ")" && count != 0)) {
      results.push(S[i]);
    }
  }
  return results.join("");
};

removeOuterParentheses("(()())(())");
