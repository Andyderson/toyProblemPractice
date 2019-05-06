var hammingDistance = function(x, y) {
  let diff = x ^ y;
  let result = 0;

  while (diff > 0) {
    if (diff & (1 === 1)) result += 1;
    diff >>= 1;
  }

  return result;
};
