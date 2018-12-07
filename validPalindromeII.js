var validPalindrome = function(s) {
  var subArray = [];

  for (var i = 0; i < s.length; i++) {
    subArray.push(s.substr(0, i) + s.substr(i + 1));
  }

  for (var j = 0; j < subArray.length; j++) {
    if (isPalindrome(subArray[j]) === true) {
      return true;
    }
  }

  return false;
};

var isPalindrome = function(s) {
  var reverse = s
    .split("")
    .reverse()
    .join("");

  for (var i = 0; i < s.length; i++) {
    if (reverse[i] !== s[i]) {
      return false;
    }
  }
  return true;
};

validPalindrome("aba"); //true
