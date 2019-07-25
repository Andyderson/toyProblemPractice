// Input: [100, 200, 300, 400], k = 2;
// Output: 700

var slideWindow = (array, k) => {
  array.sort((a, b) => b - a);

  var sum = 0;

  for (var i = 0; i < k; i++) {
    sum = sum + array[i];
  }

  return sum;
};

console.log(slideWindow([100, 200, 300, 400], 2)); //700
