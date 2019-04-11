var maxProfit = function(prices) {
  var profit = 0;
  var current = prices[0];

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > current) {
      profit += prices[i] - current;
    }
    current = prices[i];
  }
  console.log(profit);
  return profit;
};

// maxProfit([1,2,3,4,5]) //4
// maxProfit([7,6,4,3,1]) //0
maxProfit([7, 1, 5, 3, 6, 4]); //7
