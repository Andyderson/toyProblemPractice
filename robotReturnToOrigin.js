var judgeCircle = function(moves) {
  var count = {
    L: 0,
    R: 0,
    U: 0,
    D: 0
  };

  var len = moves.length;

  for (let i = 0; i < len; i++) {
    count[moves[i]]++;
  }

  return count["L"] === count["R"] && count["U"] === count["D"];
};
