// Input: "()"
// Output: true

// Input: "([)]"
// Output: false

var validParens = function(string) {
  var chars = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  var results = [];
  var split = string.split("");

  for (var key of split) {
    if (chars[key]) {
      results.push(chars[key]);
    } else if (key !== results.pop()) {
      return false;
    }
  }

  return results.length === 0;
};

// validParens('([)]'); //false
validParens("()"); //true
