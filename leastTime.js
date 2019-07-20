function leastTime(times, array) {
  var total = 0;
  var sum = 0;

  array.sort((a, b) => a - b);

  for (var i = 0; i < times - 1; i++) {
    array.sort((a, b) => a - b);

    sum = array[0] + array[1];

    total += sum;
    array.shift();
    array.shift();
    array.unshift(sum);
  }

  return total;
}


