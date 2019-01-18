var rockPaperScissors = function() {
  var list = ["rock", "paper", "scissors"];
  var result = [];

  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length; j++) {
      for (var k = 0; k < list.length; k++) {
        result.push([list[i], list[j], list[k]]);
      }
    }
  }
  return result;
};

rockPaperScissors(3);

var rockPaperScissors = function(value) {
  var list = ["rock", "paper", "scissors"];
  var result = [];
  var count = value;

  var forLoops = function(count, outcome) {
    var array = [];

    if (count === 0) {
      result.push(array);
      return;
    }

    list.forEach(function(outcome) {
      forLoops(count--, array.concat(outcome));
    });
  };
  forLoops(count, []);
  return result;
};

rockPaperScissors(5);
