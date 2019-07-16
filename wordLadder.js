// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.includes(endWord) === false) {
    return 0;
  }

  var transformation = 0;

  var recurse = function(newWord) {
    var count = 0;

    // base case
    if (newWord === endWord) {
      return transformation;
    }

    for (var i = 0; i < wordList.length; i++) {
      for (var j = 0; j < newWord.length; j++) {
        for (var k = 0; k < wordList[i].length; k++) {
          if (newWord[k] !== wordList[i][k]) {
            // console.log('newWord', newWord[j])
            // console.log('count up', wordList[i])
            count++;
            // console.log('count', count);
          }
        }

        if (count > 1) {
          count = 0;
          break;
        }
        if (count === 1) {
          transformation++;
          recurse(wordList[i]);
        }
      }
    }
  };

  recurse(beginWord);
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); //5
