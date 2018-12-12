var phoneDigitsToLetters = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ"
};

var combinations = function(string) {
  var results = [];

  var recurse = function(combination, index) {
    //base case
    if (combination.length === string.length) {
      results.push(combination);
      return;
    }

    var letters = phoneDigitsToLetters[string[index]];

    //recursive case
    for (var i = 0; i < letters.length; i++) {
      recurse(combination + letters[i], index + 1);
    }
  };

  recurse("", 0);
  return results.map(a => a.toLowerCase());
};

combinations("23"); //["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
