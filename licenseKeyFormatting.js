// Input: S = "5F3Z-2e-9-w", K = 4

// Output: "5F3Z-2E9W"

// Explanation: The string S has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.

// Input: S = "2-5g-3-J", K = 2

// Output: "2-5G-3J"

// Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

var licenseKeyFormatting = function(S, K) {
  var split = S.split("-")
    .join("")
    .toString();
  var result = "";
  var count = 0;

  for (var i = split.length - 1; i >= 0; i--) {
    result += split[i];
    count++;

    if (count === K) {
      result += "-";
      count = 0;
    }
  }

  var reverse = result
    .split("")
    .reverse()
    .join("");

  if (reverse[0] === "-") {
    return reverse.substring(1);
  }

  return reverse;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); //"5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)); //"2-5G-3J"
