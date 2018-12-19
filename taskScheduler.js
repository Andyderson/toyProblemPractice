// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

// Insanely unoptimized. Intepreter does not like. At all. But works for low n values

function leastInterval(tasks, n) {
  var tuples = [];
  var results = [];
  var map = {};

  for (var i = 0; i < tasks.length; i++) {
    if (!map[tasks[i]]) {
      map[tasks[i]] = 1;
    } else {
      map[tasks[i]]++;
    }
  }

  for (var key in map) {
    tuples.push([key, map[key]]);
  }

  while (tuples.length > 0) {
    for (var i = 0; i < tuples.length; i++) {
      results.push(tuples[i][0]);
      tuples[i][1]--;

      if (tuples[i][1] === 0) {
        tuples.splice(i, 1);
        i--;
      }
    }
  }

  var len = results.length;
  for (var j = 0; j < len; j++) {
    for (var k = j + 1; k <= j + n; k++) {
      if (results[k] === results[j]) {
        results.splice(k, 0, 0);
        len = results.length;
      }
    }
  }

  return results.length;
}

leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C"], 3); //11
leastInterval(["A", "A", "A", "B", "B", "B"], 2); //8
