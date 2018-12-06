var reductionCost = function(array) {
  var queue = Array.from(array).sort((a, b) => a - b);
  var sum = queue.unshift();
  var cost = 0;

  while (queue.length > 0) {
    var currentElement = queue.unshift();
    if (currentElement < sum) {
      queue.push(sum);
      queue.sort((a, b) => a - b);
      sum = currentElement;
    } else {
      sum += currentElement;
      cost += sum;
      continue;
    }
    sum += queue.unshift();
    cost += sum;
  }

  return cost;
};

reductionCost([1, 2, 3]); //9
