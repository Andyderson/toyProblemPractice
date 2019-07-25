var findOcurrences = function(text, first, second) {
  var result = text.split(" ").filter((ele, i, a) => {
    return a[i - 2] === first && a[i - 1] === second;
  });

  return result;
};
