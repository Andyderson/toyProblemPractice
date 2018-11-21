// Input: 123
// Output: 321

// Input: -123
// Output: -321

// Input: 120
// Output: 21

var reverse = function(x) {
  var split = x.toString().split("");
  var result = [];

  if (x === 0) {
    return 0;
  }

  if (x > Math.pow(2, 31)) {
    return 0;
  }

  if (x < Math.pow(-2, 31)) {
    return 0;
  }

  if (split[0] === "-") {
    result.push("-");
  }

  for (var i = split.length - 1; i >= 0; i--) {
    if (split[0] === "0") {
      continue;
    }
    result.push(split[i]);
  }

  if (parseInt(result.join("")) > Math.pow(2, 31)) {
    return 0;
  }

  if (parseInt(result.join("")) < Math.pow(-2, 31)) {
    return 0;
  }

  return parseInt(result.join(""));
};

reverse(123); //321
reverse(-123); //-321
reverse(120); //21
