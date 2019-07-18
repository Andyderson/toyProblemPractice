function leastDis(area) {
  var count = 0;

  var recurse = function(x, y) {
    area[x][y] = 0;

    if (y < area[0].length - 1 && area[x][y + 1] === 9) {
      count++;
      return count;
    } else if (y < area[0].length - 1 && area[x][y + 1] === 1) {
      count++;
      return recurse(x, y + 1);
    }

    if (x < area[0].length - 1 && area[x + 1][y] === 9) {
      count++;
      return count;
    } else if (x < area[0].length - 1 && area[x + 1][y] === 1) {
      count++;
      return recurse(x + 1, y);
    }

    if (y > 0 && area[x][y - 1] === 9) {
      count++;
      return count;
    } else if (y > 0 && area[x][y - 1] === 1) {
      count++;
      return recurse(x, y - 1);
    }

    if (x > 0 && area[x - 1][y] === 9) {
      count++;
      return count;
    } else if (x > 0 && area[x - 1][y] === 1) {
      count++;
      return recurse(x - 1, y);
    }
  };
  recurse(0, 0);
  return count;
}

// console.log(leastDis([
//   [1,0,0],
//   [1,0,0],
//   [1,9,1]
// ])) //3

console.log(
  leastDis([[1, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 9, 0, 0, 0]])
);
