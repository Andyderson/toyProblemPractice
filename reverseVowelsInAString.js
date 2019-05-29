// Input: "hello"
// Output: "holle"

// Input: "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {
  var vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
    A: 6,
    E: 7,
    I: 8,
    O: 9,
    U: 10
  };
  var store = [];

  for (var i = 0; i < s.length; i++) {
    if (vowels[s[i]]) {
      store.push(s[i]);
    }
  }

  var count = 0;
  var reverse = store.reverse();
  var split = s.split("");

  for (var j = 0; j < s.length; j++) {
    if (vowels[s[j]]) {
      split[j] = reverse[count];
      count++;
    }
  }
  return split.join("");
};

// console.log(reverseVowels('leetcode')); //'leotcede'
// console.log(reverseVowels('aA')); //'Aa'
console.log(reverseVowels("Ui")); //'iU'
