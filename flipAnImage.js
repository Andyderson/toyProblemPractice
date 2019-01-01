// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

var flipAndInvertImage = function(array) {
  var flipinvert = [];

  for (var i = 0; i < array.length; i++) {
    flipinvert.push(array[i].reverse());
  }

  for (var j = 0; j < flipinvert.length; j++) {
    for (var k = 0; k < flipinvert.length; k++) {
      if (flipinvert[j][k] === 1) {
        flipinvert[j][k] = 0;
      } else if (flipinvert[j][k] === 0) {
        flipinvert[j][k] = 1;
      }
    }
  }

  return flipinvert;
};

flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]); //[[1,0,0],[0,1,0],[1,1,1]]
