var commonChars = function(A) {
  var split = A[0].split("");

  for (var i = 0; i < split.length; i++) {
    var flag = true;

    for (var j = 0; j < A.length; j++) {
      if (A[j].indexOf(split[i]) === -1) {
        flag = false;
      } else {
        A[j] = A[j].replace(split[i], "");
      }
    }
    if (!flag) {
      split[i] = null;
    }
  }
  return split.filter(ele => ele !== null);
};
