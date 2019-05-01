// A = [12, 28, 46, 32, 50]
// B = [50, 12, 32, 46, 28]

// [1, 4, 3, 2, 0]

var anagramMappings = function(A, B) {
  return A.map(a => B.indexOf(a));
};

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));
