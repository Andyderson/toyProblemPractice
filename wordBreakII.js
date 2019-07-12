var wordBreak = function(s, wordDict) {
  var mem = {};
  var recurse = function(i = 0, prefixes = [""]) {
    if (i === s.length) {
      return prefixes;
    } else if (!mem[i]) {
      var suffixes = [];
      wordDict.forEach(w => {
        if (s.startsWith(w, i)) {
          var wSuffixes = recurse(i + w.length, [w]);
          suffixes.push(...wSuffixes);
        }
      });
      mem[i] = suffixes;
    }

    var ret = [];
    prefixes.forEach(p => {
      mem[i].forEach(m => {
        ret.push(`${p === "" ? p : p + " "}${m}`);
      });
    });
    return ret;
  };

  return recurse();
};
