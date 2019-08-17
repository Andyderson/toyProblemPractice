var isValidSudoku = function(board) {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];

    for (var j = 0; j < row.length; j++) {
      var char = row[j];

      if (char === ".") {
        continue;
      }

      if (row.some((val, index) => index !== j && char === val)) {
        return false;
      }

      if (board.some((r, index) => index !== i && char === r[j])) {
        return false;
      }

      var boxX = i - (i % 3);
      var boxY = j - (j % 3);

      for (var x = boxX; x < boxX + 3; x++) {
        for (var y = boxY; y < boxY + 3; y++) {
          if (x === i && j === y) {
            continue;
          }
          if (board[x][y] === char) {
            return false;
          }
        }
      }
    }
  }

  return true;
};
