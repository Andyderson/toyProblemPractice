var numIslands = function(grid) {
  let numIslands = 0;

  let recurse = function(x, y) {
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

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === "1") {
        recurse(x, y);
        numIslands++;
      }
    }
  }

  return numIslands;
};

numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]);
numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]);
