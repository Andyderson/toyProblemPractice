var isValidSudoku = function(board) {
  var row = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  var column = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  var row = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var rowIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      var c = board[i][j];
      if (c == ".") {
        continue;
      }
      if (
        row[i][c] == null &&
        column[j][c] == null &&
        row[rowIndex][c] == null
      ) {
        row[i][c] = "";
        column[j][c] = "";
        row[rowIndex][c] = "";
      } else {
        return false;
      }
    }
  }
  return true;
};
