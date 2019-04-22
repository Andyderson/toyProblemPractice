// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
// "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

var fizzBuzz = function(n) {
  var results = [];

  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("fizzbuzz");
    } else if (i % 5 === 0) {
      results.push("buzz");
    } else if (i % 3 === 0) {
      results.push("fizz");
    } else {
      results.push(i);
    }
  }

  return results;
};

console.log(fizzBuzz(15));
