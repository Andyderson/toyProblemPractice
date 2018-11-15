var exclusiveTime = function(n, logs) {
  var temp = [];
  var results = [...Array(n).fill(0)];

  for (var i = 0; i < logs.length; i++) {
    var log = logs[i].split(":");

    if (log.includes("start")) {
      temp.push([log[2], 0]);
    }

    if (log.includes("end")) {
      var start = temp.pop();
      var slots = log[2] - start[0] + 1;

      results[log[0]] += slots - start[1];

      if (temp.length > 0) {
        temp[temp.length - 1][1] += slots;
      }
    }
  }
  return results;
};

exclusiveTime(["0:start:0", "1:start:2", "1:end:5", "0:end:6"], 2); //[3, 4]
