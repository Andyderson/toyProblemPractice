// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Answer: 16

var islandPerimeter = function(grid) {
  var perimeter = 0;

  for (var x = 0; x < grid.length; x++) {
    for (var y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === 1) {
        var left = grid[x][y - 1];
        if (left !== 1) {
          perimeter++;
        }
        var right = grid[x][y + 1];
        if (right !== 1) {
          perimeter++;
        }
        var down = grid[x + 1] && grid[x + 1][y];

        if (down !== 1) {
          perimeter++;
        }
        var up = grid[x - 1] && grid[x - 1][y];

        if (up !== 1) {
          perimeter++;
        }
      }
    }
  }
  return perimeter;
};

islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]); //16
