// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7

var minPathSum = function(grid) {
  var row = grid.length;
  var column = grid[0].length;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
      if (i === 0 && j > 0) {
        grid[i][j] += grid[i][j - 1];
      }
      if (i > 0 && j === 0) {
        grid[i][j] += grid[i - 1][j];
      }
      if (i > 0 && j > 0) {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }

  return grid[row - 1][column - 1];
};

minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]); //7
