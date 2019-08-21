// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Input:
// board = [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
// words = ["oath","pea","eat","rain"]

// Output: ["eat","oath"]

var findWords = function(board, words) {
  var results = [];
  var tempString = "";
  var word;
  var letter;

  var bfs = (x, y, grid, currentWord) => {
    // each conditional statement
    // once element in matrix matches next letter in word
    // concat element to tempString
    // check if tempString matches a word in array of words
    // if match, push into results, reset tempString to '' and iterate the for loop to look for the next word
    if (x > 0 && grid[x - 1][y] === letter) {
      bfs(x - 1, y);
    }

    if (y > 0 && grid[x][y - 1] === letter) {
      bfs(x, y - 1);
    }

    if (x < grid.length - 1 && grid[x + 1][y] === letter) {
      bfs(x + 1, y);
    }

    if (y < grid[0].length - 1 && grid[x][y + 1] === letter) {
      bfs(x, y + 1);
    }
  };

  // for each word
  for (var i = 0; i < words.length; i++) {
    // loop through board length
    word = words[i];
    for (var j = 0; j < words[i].length; j++) {
      if (words[i][j + 1] !== undefined) {
        letter = words[i][j + 1];
      }
      for (var k = 0; k < board.length; k++) {
        // loop through board width
        for (var l = 0; l < board[k].length; l++) {
          // if letter of first word === elem on board
          if (board[k][l] === words[i][0]) {
            bfs(k, l, board, word);
          }
        }
      }
    }
  }

  return results;
};

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"]
    ],
    ["oath", "pea", "eat", "rain"]
  )
); //["eat","oath"]
