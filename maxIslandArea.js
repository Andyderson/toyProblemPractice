var maxAreaOfIsland = grid => {
  var area = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        area = Math.max(area, helper(grid, i, j, 0));
      }
    }
  }
  return area;
};

var helper = (grid, i, j, area) => {
  if (
    !(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length) ||
    grid[i][j] === 0
  ) {
    return 0;
  }

  area++;
  grid[i][j] = 0;

  return (
    area +
    helper(grid, i + 1, j, 0) +
    helper(grid, i - 1, j, 0) +
    helper(grid, i, j + 1, 0) +
    helper(grid, i, j - 1, 0)
  );
};
