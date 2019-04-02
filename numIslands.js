var numIslands = function(grid) {
  var count = 0;

  var recurse = function(x, y) {
    grid[x][y] = "0";

    if (x > 0 && grid[x - 1][y] === "1") {
      recurse(x - 1, y);
    }

    if (y > 0 && grid[x][y - 1] === "1") {
      recurse(x, y - 1);
    }

    if (x < grid.length - 1 && grid[x + 1][y] === "1") {
      recurse(x + 1, y);
    }

    if (y < grid[0].length - 1 && grid[x][y + 1] === "1") {
      recurse(x, y + 1);
    }
  };

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        recurse(i, j);
      }
    }
  }

  return count;
};
