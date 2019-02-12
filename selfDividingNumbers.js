// Input:
// left = 1, right = 22
// Inclusive

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

var isSelfDividing = int => {
  var splitString = JSON.stringify(int).split("");

  for (var i = 0; i < splitString.length; i++) {
    if (int % Number(splitString[i]) !== 0) {
      return false;
    }
  }
  return true;
};

var selfDividingNumbers = function(left, right) {
  var results = [];

  for (var i = left; i <= right; i++) {
    if (isSelfDividing(i) === true) {
      results.push(i);
    }
  }
  return results;
};

//----

var selfDivide = function(int1, int2) {
  var results = [];

  for (var i = int1; i <= int2; i++) {
    if (
      i
        .toString()
        .split("")
        .every(value => i % parseInt(value) === 0)
    ) {
      results.push(i);
    }
  }

  return results;
};

selfDivide(1, 22); //true

// isSelfDividing(22);
selfDividingNumbers(1, 22);
