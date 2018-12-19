var countPrimes = function(n) {
  var count = 0;
  var results = [];

  for (var i = 2; i <= n; i++) {
    if (primeTester(i) === true) {
      count++;
      results.push(i);
    }
  }
  return count;
};

var primeTester = function(n) {
  if (typeof n !== "number" || n <= 1 || n % 1 !== 0) {
    return false;
  }

  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

countPrimes(10); //4 [2, 3, 5, 7]
