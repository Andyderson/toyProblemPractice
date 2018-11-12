// p => physics
// c => chemistry
// m => math
// b => biology
// z => zoology

// A team consists of a group of 5
// Each student is skill in a diff subject
// A student can only be on one team

// sample input: pcmpcmbbbzz //2 teams

var matchMaking = function(string) {
  var map = {
    p: 0,
    c: 0,
    m: 0,
    b: 0,
    z: 0
  };

  for (var i = 0; i < string.length; i++) {
    map[string[i]]++;
  }

  var results = Object.values(map);
  return Math.min(...results);
};

matchMaking("pcmpcmbbbzz"); //2
