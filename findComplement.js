// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits),
// and its complement is 010. So you need to output 2.

var findComplement = function(num) {
  const bin = num.toString(2);
  return Math.pow(2, bin.length) - 1 - parseInt(bin, 2);
};
