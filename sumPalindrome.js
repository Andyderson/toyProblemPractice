// Choose a number, reverse its digits and add it to the  original. If the sum is not a
// palindrome (which means, it is not the same number from left to right and right to left),
// repeat this procedure.

// For example: 195 (initial number) + 591 (reverse of initial number) = 786' 786 + 687 = 1473 1473 + 3741 = 5214 5214 + 4125 = 9339 (palindrome)

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
