var bank = [];

var primeTester = function(n) {
  if (typeof n !== "number" || n < 1 || n % 1 !== 0) {
    return false;
  }

  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

var returnPrime = function(n) {
  m = n * 10;
  for (var i = 0; i < m; i++) {
    if (primeTester(i) === true) {
      bank.push(i);
    }
  }

  return bank[n];
};

// returnPrime(10); //29
returnPrime(100); //541
