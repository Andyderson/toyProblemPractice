var generate = function(numRows, currentPalTriangle) {
  //  var palTriangle = currentPalTriangle ? palTriangle = currentPalTriangle : [[1], [1,1]];
  var palTriangle = currentPalTriangle || [[1], [1, 1]];
  //console.log(palTriangle);
  var upperArray = palTriangle[palTriangle.length - 1];
  var currentArray = [1];
  var pushValue = 0;

  //Base Case
  if (numRows === 0) {
    return palTriangle;
  }

  //Recurse Case
  for (var i = 1; i < upperArray.length; i++) {
    pushValue = upperArray[i] + upperArray[i - 1];
    currentArray.push(pushValue);
  }
  currentArray.push(1);
  palTriangle.push(currentArray);
  return generate(numRows - 1, palTriangle);
};

generate(5);

// while loop with nonrecursive

var generate = function(numRows) {
  debugger;
  var result = [[1]]; // if numRows = 0 or undefined

  // loop numRows times to push currArr to results arr
  for (var i = 0; i < numRows - 1; i++) {
    // define currArr
    var currArr = [1];
    // loop through previous array to determine push value
    for (var j = 1; j < result.length; j++) {
      var pushValue = result[i][j] + result[i][j - 1];
      // push value into currArr
      currArr.push(pushValue);
      // close currArr with push 1
    }
    currArr.push(1);
    result.push(currArr);
  }
  return result;
};

generate(5);
