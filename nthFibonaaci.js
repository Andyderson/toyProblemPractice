// Recursion
var fibonacci = function(n) {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(8); //21
