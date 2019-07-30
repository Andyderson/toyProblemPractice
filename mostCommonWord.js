// Input:
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

var mostCommonWord = function(paragraph, banned) {
  var noPunct = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  var finalString = noPunct.replace(/\s{2,}/g, " ");
  var split = finalString.split(" ");
  var map = {};

  for (var i = 0; i < split.length; i++) {
    if (!banned.includes(split[i]) && !map[split[i].toLowerCase()]) {
      map[split[i].toLowerCase()] = 1;
    } else if (!banned.includes(split[i])) {
      map[split[i].toLowerCase()]++;
    }
  }

  return Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
};

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit"
  ])
); //ball
