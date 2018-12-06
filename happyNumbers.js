const happyNumbers = function(num) {
  if (num === 4) {
    return false;
  }

  var numSplit = num.toString().split("");
  var sum = numSplit.reduce((a, b) => a + Math.pow(b, 2), 0);

  if (sum === 1) {
    return true;
  } else {
    return isHappy(sum);
  }
};

happyNumbers(4); //false
happyNumbers(10); //true
happyNumbers(1); //true
