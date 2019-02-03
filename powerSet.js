/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var results = [""];
  var split = str.split("").sort();

  var push = function(array, index) {
    if (index > split.length) {
      return;
    }

    for (var i = 0; i < split.length; i++) {
      for (var j = 0; j < split.length; j++) {
        index++;
        if (split[j + 1] !== undefined) {
          if (split[i] !== split[j + 1]) {
            results.push(split[i] + split[j + 1]);
          }
        }
      }
    }
    for (var k = 0; k < split.length; k++) {
      results.push(split[k]);
    }
    results.push(str);
  };
  push(results, 0);
  return results.sort((a, b) => a.length - b.length);
};

powerSet("abc");
// [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]

// powerSet("jump");
// ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
