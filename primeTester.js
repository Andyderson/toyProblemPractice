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

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function(start, end) {
  var storage = [];

  for (var i = start; i <= end; i++) {
    if (primeTester(i)) {
      storage.push(i);
    }
  }
  return storage;
};

primeTester("string");

primeSieve(2, 21);
