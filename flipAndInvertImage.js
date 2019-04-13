var flipAndInvertImage = function(A) {
  A.forEach((row, i) => {
    A[i] = row.reverse();
    A[i].forEach((cell, j) => {
      A[i][j] = cell ^ 1;
    });
  });

  return A;
};
