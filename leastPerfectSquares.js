// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

var numSquares = function(n) {
  var bank = [];
  var temp = 0;
  var result = 0;

  for (let i = 1; i <= n; i++) {
    var square = i * i;
    if (square <= n) {
      bank.push(square);
    }
  }

  for (let j = 0; j < bank.length; j++) {
    // recurse
    var target = n - bank[j];

    for (let k = 0; k < bank.length; k++) {
      var multiple = target / bank[k];
      if (Number.isInteger(multiple)) {
        console.log(target + "/" + bank[k] + "=", multiple);
        temp = multiple + 1;
        if (result === 0) {
          result = temp;
        } else {
          result = Math.min(result, temp);
        }
      }
    }
  }
  console.log(bank);
  return result;
};

// numSquares(12); //3
// numSquares(13); //2
// numSquares(4); //1
numSquares(1000); //2
