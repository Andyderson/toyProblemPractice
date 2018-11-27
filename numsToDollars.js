//Implemented with no space between words in output

var numbersToWords = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety"
};

var numbersToPlace = {
  10: "Ten",
  100: "Hundred",
  1000: "Thousand",
  1000000: "Million",
  1000000000: "Billion",
  1000000000000: "Trillion",
  1000000000000000: "Quadrillion",
  1000000000000000000: "Quintillion"
};

function textDollar(number) {
  var string = "" + number;
  var answer = [];
  var first = string.substring(0, string.length % 3);
  var remain = string.substring(string.length % 3);
  var array = remain.match(/.{1,3}/g) || [];
  var count = 1;

  if (number === 1) {
    return numbersToWords[string].concat("Dollar");
  }

  if (numbersToWords[string]) {
    return numbersToWords[string].concat("Dollars");
  }

  if (first.length) {
    array.unshift(first);
  }

  for (var i = array.length - 1; i >= 0; i--) {
    var tri = array[i];
    var temp = "";

    while (tri.length < 3) {
      tri = "x" + tri;
    }

    if (numbersToWords[tri[1] + tri[2]]) {
      temp += numbersToWords[tri[1] + tri[2]];
    } else if (tri[1] === "0") {
      if (tri[2] !== "0") {
        temp += numbersToWords[tri[2]];
      }
    } else if (numbersToWords[tri[1] + "0"]) {
      temp = temp + numbersToWords[tri[1] + "0"] + numbersToWords[tri[2]];
    } else {
      temp += numbersToWords[tri[2]];
    }

    if (numbersToWords[tri[0]] && tri[0] !== "0") {
      temp = numbersToWords[tri[0]] + "Hundred" + temp;
    }

    if (numbersToPlace[count]) {
      if (
        numbersToPlace[count / 1000] &&
        numbersToPlace[count / 1000] === answer[0]
      ) {
        answer.shift();
      }
      answer.unshift(numbersToPlace[count]);
    }

    if (temp) {
      answer.unshift(temp);
    }

    count *= 1000;
  }
  var results = answer.join("").concat("Dollars");
  return results;
}

textDollar(1);
textDollar(3);
textDollar(466);
textDollar(1234);
textDollar(10);
textDollar(21);
