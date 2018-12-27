/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

//Input: Roman Numeral
//Output: Cardinal Number
//Initial thoughts: iterate through roman numeral backwards
//Account for larger values over

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  let result = 0;

  for (var i = romanNumeral.length - 1; i >= 0; i--) {
    var value = romanNumeral[i];
    var prev = romanNumeral[i + 1];

    if (DIGIT_VALUES[value] < DIGIT_VALUES[prev]) {
      result -= DIGIT_VALUES[digit];
    } else {
      result += DIGIT_VALUES[value];
    }
  }
  return result;
};

translateRomanNumeral("LXI");
