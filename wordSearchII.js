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

  var check = string => {
    if (word === string) {
      results.push(word);
      tempString = "";
    }
  };

  var bfs = (x, y, grid, letterIdx) => {
    //check left
    if (y > 0 && grid[y - 1][x] === word[letterIdx]) {
      tempString = tempString + word[letterIdx];
      bfs(y - 1, x, grid, letterIdx + 1);
    }

    //check top
    if (x > 0 && grid[y][x - 1] === word[letterIdx]) {
      tempString = tempString + word[letterIdx];
      bfs(y, x - 1, grid, letterIdx + 1);
    }

    //check right
    if (x < grid.length - 1 && grid[x + 1][y] === word[letterIdx]) {
      tempString = tempString + word[letterIdx];
      bfs(x + 1, y, grid, letterIdx + 1);
    }

    //check bottom
    if (y < grid[0].length - 1 && grid[x][y + 1] === word[letterIdx]) {
      tempString = tempString + word[letterIdx];
      bfs(x, y + 1, grid, letterIdx + 1);
    }
    check(tempString);
  };

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    for (var k = 0; k < board.length; k++) {
      for (var l = 0; l < board[k].length; l++) {
        if (board[k][l] === words[i][0]) {
          tempString = tempString + words[i][0];
          bfs(l, k, board, 1);
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
      ["k", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"]
    ],
    ["oath", "pea", "eat", "rain"]
  )
); //["eat","oath"]
