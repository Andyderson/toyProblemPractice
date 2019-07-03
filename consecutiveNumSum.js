var consecutiveNumbersSum = function(N) {
  var count = 0;
  var i = 1;

  while (true) {
    var temp = N - (i * (i - 1)) / 2;

    if (temp <= 0) {
      break;
    }

    if (temp % i === 0) {
      count++;
    }

    i++;
  }
  return count;
};
