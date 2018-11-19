// Find the longest repeating substring of a string

var repeatingSubstring = function(string) {
  var result = "";
  var sliced;
  var index;

  for (var i = 0; i < string.length; i++) {
    if (string[i - 1] !== string[i]) {
      index = i;
    } else if (string[i - 1] === string[i]) {
      sliced = string.slice(index, i + 1);

      if (sliced.length > result.length) {
        result = sliced;
      }
    }
  }
  return result;
};

repeatingSubstring("dbbbbbddddeeeeee"); //'eeeeee'
