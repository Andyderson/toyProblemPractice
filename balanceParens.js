// And given a string of parens return the balanced version while removing the least
// number of items

var balance = function(string) {
  var map = {};
  var output = "";

  for (var i = 0; i < string.length; i++) {
    if (!map[string[i]]) {
      map[string[i]] = 1;
    } else {
      map[string[i]]++;
    }
  }

  var pairs = Math.min(map["("], map[")"]);
  var i = 0;

  while (i < pairs) {
    output += "(" + ")";
    i++;
  }

  return output;
};

balance("(())())"); //'()()()' , ')'
