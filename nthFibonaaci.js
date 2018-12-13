// Recursion
var fibonacci = function(n) {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Memoization
var fibonacci = function(n) {
  var storage = [];
  var result;

  if (storage[n] !== undefined) {
    return storage[n];
  }

  if (n <= 2) {
    result = 1;
  } else {
    result = fibonacci(n - 1) + fibonacci(n - 2);
    storage[n] = result;
  }
  return result;
};

//Bottom-Up
var fibonacci = function(n) {
  var storage = [0, 1, 1];

  if (n <= 2) {
    return 1;
  }

  for (var i = 3; i < n + 1; i++) {
    storage[i] = storage[i - 1] + storage[i - 2];
  }

  return storage[n];
};

fibonacci(8); //21
