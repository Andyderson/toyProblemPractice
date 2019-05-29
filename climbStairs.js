var climbStairs = function(n) {
  var array = [1, 1];

  for (var i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array[array.length - 1];
};
