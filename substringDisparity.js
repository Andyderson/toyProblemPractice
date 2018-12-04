var usernameDisparity = function(string) {
  var results = [];
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    results.push(
      string
        .split("")
        .splice(i)
        .join("")
    );
  }

  for (var j = 0; j < results.length; j++) {
    for (var k = 0; k < results[j].length; k++) {
      if (results[j][k] === string[k]) {
        count++;
        continue;
      }
    }
  }
  return count;
};

usernameDisparity("ababa"); //9
