var kSimilarity = function(A, B) {
  var count = 0;

  var swap = (a, b) => {
    var temp = a;
    a = b;
    b = temp;
  };

  for (var i = 0; i < A.length - 1; i++) {
    for (var j = i + 1; j < B.length; j++) {
      if (A[i] === B[j] && B[i] !== B[j]) {
        swap(B[i], B[j]);
        count = count + j - i;
        break;
      }
    }
  }

  console.log(count);
  return count;
};

var kSimilarity = function(A, B) {
  var a = Array.from(A);
  var b = Array.from(B);
  var N = Infinity;

  return dfs(0, a, b);

  function dfs(p, a, b) {
    if (p == a.length) return 0;

    if (a[p] == b[p]) return dfs(p + 1, a, b);

    var ans = N;

    for (var i = p + 1; i < a.length; i++)
      if (a[i] == b[p]) {
        [a[i], a[p]] = [a[p], a[i]];
        ans = Math.min(ans, dfs(p + 1, a, b) + 1);
        [a[i], a[p]] = [a[p], a[i]];
        if (b[i] == a[p]) break;
      }
    return ans;
  }
};

// console.log(kSimilarity('ab', 'ba')); //1
// console.log(kSimilarity('abc', 'bca')); //2
// console.log(kSimilarity('abac', 'baca')); //2
// console.log(kSimilarity('aabc', 'abca')); //2
console.log(kSimilarity("bccaba", "abacbc")); //3

// console.log(kSimilarity('ab', 'ba')); //1
// console.log(kSimilarity('abc', 'bca')); //2
// console.log(kSimilarity('abac', 'baca')); //2
console.log(kSimilarity("aabc", "abca")); //2
