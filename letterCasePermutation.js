var letterCasePermutation = function(S) {
  let result = [];
  recurse("", 0);

  recurse = (current, i) => {
    if (current.length == S.length) {
      result.push(current);
      return;
    }
    if (S.charAt(i) >= "0" && S.charAt(i) <= "9") {
      current += S.charAt(i);
      recurse(current, i + 1);
    } else {
      recurse(current + S.charAt(i).toLowerCase(), i + 1);
      recurse(current + S.charAt(i).toUpperCase(), i + 1);
    }
  };

  return result;
};
