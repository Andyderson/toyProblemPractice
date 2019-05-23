// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.

var addDigits = function(num) {
  if (num.toString().length === 1) {
    return num;
  }

  var recurse = digits => {
    var sum = 0;
    var split = digits.toString().split("");

    split.forEach(ele => {
      sum += Number(ele);
    });

    if (sum.toString().length === 1) {
      return sum;
    } else {
      return recurse(sum);
    }
  };

  return recurse(num);
};

console.log(addDigits(38)); //2
