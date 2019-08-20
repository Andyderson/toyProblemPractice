var removeKdigits = function(num, k) {
  if (num === "0" || k === 0) {
    return num;
  }

  var minValue = Infinity;
  var count = 0;

  var recurse = (num, k, times) => {
    if (count === k) {
      return minValue;
    }

    for (var i = 0; i < num.length; i++) {
      var tempValue = num.substring(0, i) + num.substring(i + 1);

      minValue = Math.min(minValue, Number(tempValue));
    }

    count++;
    recurse(minValue.toString(), k, count);
  };

  recurse(num, k, count);
  return minValue.toString();
};
