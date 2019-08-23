var countCharacters = function(words, chars) {
  var map = new Map();
  var sum = 0;

  var count;
  var flag;
  var wordMap;

  for (var i = 0; i < chars.length; i++) {
    if (map.has(chars[i])) {
      map.set(chars[i], map.get(chars[i]) + 1);
    } else {
      map.set(chars[i], 1);
    }
  }

  for (var i = 0; i < words.length; i++) {
    flag = true;
    wordMap = new Map();

    for (var letter of words[i]) {
      if (wordMap.has(letter)) {
        if ((count = wordMap.get(letter)) === 0) {
          flag = false;
          break;
        }
        wordMap.set(letter, count - 1);
      } else if (map.has(letter)) {
        wordMap.set(letter, map.get(letter) - 1);
      } else {
        flag = false;
        break;
      }
    }

    if (flag) {
      sum += words[i].length;
    }
  }

  return sum;
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); //6
