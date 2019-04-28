var consecutiveLetters = function(string) {
  var results = [];
  var temp = [];
  var previous = string[0];
  var pointer;
  var firstIndex;
  var lastIndex;
  var count = 1;

  if (string === undefined || string === "" || typeof string !== "string") {
    return results;
  }

  for (var i = 1; i < string.length; i++) {
    pointer = string[i];
    if (pointer === previous) {
      firstIndex = string.indexOf(previous);
      count++;
    }

    if (pointer !== previous) {
      lastIndex = string.indexOf(pointer);
      if (firstIndex !== undefined && lastIndex !== undefined && count >= 3) {
        temp.push(firstIndex, lastIndex - 1);
      }
    }

    if (i === string.length - 1 && pointer === previous) {
      lastIndex = string.length - 1;
      if (firstIndex !== undefined && lastIndex !== undefined && count >= 3) {
        temp.push(firstIndex, lastIndex);
      }
    }

    previous = string[i];

    if (temp.length === 2) {
      results.push(temp);
      temp = [];
      count = 1;
      firstIndex = undefined;
      lastIndex = undefined;
    }
  }
  return results;
};

console.log(consecutiveLetters("hellloooowwww"));
// consecutiveLetters('hii');
// consecutiveLetters('');
// consecutiveLetters(8);
