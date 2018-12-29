// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Input: J = "z", S = "ZZ"
// Output: 0

var numJewelsInStones = function(J, S) {
  var results = {};
  var count = 0;
  var jSplit = J.split("");
  var sSplit = S.split("");

  jSplit.forEach(item => (results[item] = 0));

  sSplit.forEach(item => {
    if (results[item] !== undefined) {
      results[item]++;
    } else {
      results[item] === 0;
    }
  });

  for (var item in results) {
    count = count + results[item];
  }
  return count;
};

numJewelsInStones((J = "aA"), (S = "aAAbbbb"));
// numJewelsInStones(J = "z", S = "ZZ");
