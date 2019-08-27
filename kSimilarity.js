var kSimilarity = function(A, B) {
  var count = 0;

  var swap = (a, b) => {
    var temp = a;
    a = b;
    b = temp;
  };

  for (var i = 0; i < A.length; i++) {
    for (var j = i + 1; j < B.length; j++) {
      if (A[i] === B[j]) {
        swap(B[i], B[j]);
        count = count + j - i;
        break;
      }
    }
  }

  console.log(count);
  return count;
};

/* console.log(kSimilarity('ab', 'ba')); //1 */
/* console.log(kSimilarity('abc', 'bca')); //2 */
/* console.log(kSimilarity('abac', 'baca')); //2 */
console.log(kSimilarity("aabc", "abca")); //2
