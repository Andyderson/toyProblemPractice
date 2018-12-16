var test = [
  {
    value: 10,
    weight: 50
  },
  {
    value: 20,
    weight: 5
  },
  {
    value: 15,
    weight: 45
  },
  {
    value: 5,
    weight: 50
  },
  {
    value: 20,
    weight: 1
  },
  {
    value: 40,
    weight: 4
  }
];

var knapsack = (selection, weight) => {
  var totalProfit = 0;

  var recurse = (items, remainingWeight, profit = 0) => {
    var flag = false;
    items.forEach((item, index) => {
      if (item.weight <= remainingWeight) {
        flag = true;

        var storage = items.slice();
        storage.splice(index, 1);

        recurse(storage, remainingWeight - item.weight, profit + item.value);
      }
    });

    if (!flag) {
      totalProfit = Math.max(totalProfit, profit);
    }
  };
  recurse(selection, weight);
  return totalProfit;
};

knapsack(test, 100);
