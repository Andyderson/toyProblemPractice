var findCircleNum = M => {
  var circles = 0;

  for (var i = 0; i < M.length; i++) {
    for (var j = 0; j < M[0].length; j++) {
      var temp = [];

      if (M[i][j] === 1) {
        temp.push(j);
        M[i][j] = -1;
        M[j][i] = -1;
      }

      if (temp.length > 0) {
        circles++;
      }

      while (temp.length !== 0) {
        var pos = temp.pop();

        for (var k = 0; k < M[0].length; k++) {
          if (M[pos][k] === 1) {
            temp.push(k);
            M[pos][k] = -1;
            M[k][pos] = -1;
          }
        }
      }
    }
  }
  return circles;
};
