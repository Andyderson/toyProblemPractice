function alternatingArray(unsorted) {
  var sorted = unsorted.sort((a, b) => a - b);
  var halfLength = Math.floor(unsorted.length / 2);
  var firstHalf = sorted.slice(0, halfLength);
  var secondHalf = sorted.slice(halfLength);
  var secondRev = secondHalf.reverse();
  var length = Math.max(secondRev.length, firstHalf.length);
  var results = [];

  for (var i = 0; i < length; i++) {
    results.push(secondRev[i]);
    if (firstHalf[i] !== undefined) {
      results.push(firstHalf[i]);
    }
  }

  return results;
}

// console.log(alternatingArray([-1, 1, 2, 3, -5, 3, 5])); //[3, -5, 3, -1, 2, 1]
console.log(alternatingArray([5, 2, 7, 8, -2, 25, 25]));
