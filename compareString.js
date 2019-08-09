var compareString = (stringA, stringB) => {
  var arrayA = helper(stringA);
  var arrayB = helper(stringB);
  var results = [];

  for (var i = 0; i < arrayB.length; i++) {
    var counter = 0;
    for (var j = 0; j < arrayA.length; j++) {
      if (arrayB[i][0] <= arrayA[j][0] && arrayB[i][1] > arrayA[j][1]) {
        counter++;
      }
    }
    results.push(counter);
  }

  return results; //[3, 2]
};

var helper = string => {
  var split = string.split(" ");

  for (var i = 0; i < split.length; i++) {
    var smallestAscii = Infinity;
    var smallestLetter;

    for (var j = 0; j < split[i].length; j++) {
      var tempAscii = split[i].charCodeAt(j);

      if (tempAscii < smallestAscii) {
        smallestAscii = tempAscii;
        smallestLetter = split[i][j];
      }
    }

    var frequency = 0;
    for (var k = 0; k < split[i].length; k++) {
      if (split[i][k] === smallestLetter) {
        frequency++;
      }
    }

    split[i] = [smallestAscii, frequency];
  }

  return split;
};

console.log(compareString("abcd aabc bd", "aaa aa")); //[3, 2]
