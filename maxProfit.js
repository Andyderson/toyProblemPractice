// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

var maxProfit = function(prices) {
  var min = prices[0];
  var temp = 0;
  var results = 0;
  var index = prices.indexOf(min);

  if (index === prices.length) {
    return 0;
  }

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] > min) {
      temp = prices[i] - min;
      if (temp > results) {
        results = temp;
      }
    }
  }
  return results;
};

maxProfit([7, 1, 5, 3, 6, 4]); //5
