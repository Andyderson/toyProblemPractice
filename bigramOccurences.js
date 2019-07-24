var findOcurrences = function(text, first, second) {
  var result = text.split(" ").filter((i, a) => {
    return a[i - 2] === first && a[i - 1] === second;
  });

  return result;
};
