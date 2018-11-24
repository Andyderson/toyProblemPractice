var matchString = function(word, string) {
  var split = string.split(" ");
  var count = 0;

  for (var i = 0; i < split.length; i++) {
    if (split[i] === word) {
      count++;
    }
  }
  return count;
};

matchString("cheese", "I love cheese cheese cheese");
