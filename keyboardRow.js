var findWords = words => {
  var keyboard = {
    row1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    row2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    row3: ["z", "x", "c", "v", "b", "n", "m"]
  };

  var results = [];
  var r1 = keyboard.row1;
  var r2 = keyboard.row2;
  var r3 = keyboard.row3;
  var word;

  for (var i = 0; i < words.length; i++) {
    word = words[i].toLowerCase();

    if (r1.includes(word[0]) && check(word, r1)) {
      results.push(words[i]);
    }

    if (r2.includes(word[0]) && check(word, r2)) {
      results.push(words[i]);
    }

    if (r3.includes(word[0]) && check(word, r3)) {
      results.push(words[i]);
    }
  }
  return results;
};

var check = (word, r) => {
  for (var i = 1; i < word.length; i++) {
    if (!r.includes(word[i])) {
      return false;
    }
  }
  return true;
};
