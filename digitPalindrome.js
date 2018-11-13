// Choose a number, reverse its digits and add it to the  original. If the sum is not a
// palindrome (which means, it is not the same number from left to right and right to left),
// repeat this procedure.

var sumPalindrome = function(number) {
  //reverse number
  var reverse = parseInt(
    number
      .toString()
      .split("")
      .reverse()
      .join("")
  );

  //add reverse to original sum
  var sum = reverse + number;
  var sumSplit = sum.toString().split("");
  var sumPalindromeCheck = sumSplit
    .toString()
    .split(",")
    .reverse();

  //palindrome check
  for (var i = 0; i < sumPalindromeCheck.length; i++) {
    if (sumSplit[i] === sumPalindromeCheck[i]) {
      return sum;
    } else {
      return sumPalindrome(sum);
    }
  }
};

sumPalindrome(195); //9339
