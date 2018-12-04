function getMinimumDifference(a, b) {
  let count = 0;
  let alphabetArray = Array(26).fill(0);

  for (var i = 0; i < a.length; i++) {
    alphabetArray[a.charAt(i)]++;
  }

  for (var j = 0; j < b.length; j++) {
    if (alphabetArray[b.charAt(i)]-- <= 0) {
      count++;
    }
  }

  return count;
}

getMinimumDifference("abc", "abd"); //1
