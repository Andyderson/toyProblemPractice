const maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  const results = [];
  let count = 0;

  for (let i = 0; i < envelopes.length; i++) {
    results.push(1);
    for (let j = 0; j < i; j++) {
      if (
        envelopes[j][0] < envelopes[i][0] &&
        envelopes[j][1] < envelopes[i][1]
      ) {
        results[i] = Math.max(results[i], results[j] + 1);
      }
    }
    count = Math.max(count, results[i]);
  }

  return count;
};

maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]); //3
