// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var generateParenthesis = function(n) {
  var results = [];

  var recurse = function(numLeft, numRight, remaining, iteration) {
    if (remaining === 0) {
      results.push(iteration);
      return;
    }

    if (numRight < numLeft && numLeft < n) {
      recurse(numLeft, numRight + 1, remaining - 1, iteration + ")");
      recurse(numLeft + 1, numRight, remaining - 1, iteration + "(");
    } else if (numRight < numLeft) {
      recurse(numLeft, numRight + 1, remaining - 1, iteration + ")");
    }

    if (numRight === numLeft) {
      recurse(numLeft + 1, numRight, remaining - 1, iteration + "(");
    }
  };
  recurse(0, 0, 2 * n, "");
  return results;
};

generateParenthesis(7);
