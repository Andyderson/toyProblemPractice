var convertIPtoBinary = function(string) {
  var split = string.split(".");
  var results = [];

  for (var i = 0; i < split.length; i++) {
    // var binary = parseInt(split[i]).toString(2);
    // results.push(binary);
    var bin = (+split[i]).toString(2);
    results.push(bin);
  }

  return results.join(".");
};

convertIPtoBinary("128.177.113.106"); //10000000.10110001.01110001.01101010
