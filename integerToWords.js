var ones = {
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
  19: "Nineteen"
};

var tens = {
  2: "Twenty",
  3: "Thirty",
  4: "Forty",
  5: "Fifty",
  6: "Sixty",
  7: "Seventy",
  8: "Eighty",
  9: "Ninety"
};

var places = ["Hundred", "Thousand", "Million", "Billion"];

var numberToWords = function(num) {
  var numSplit = num.toString().split("");

  if (numSplit.length <= 2) {
    return twoDigits(num);
  }

  if (numSplit.length === 3) {
    return threeDigits(num);
  }

  if (numSplit.length >= 4 && numSplit.length <= 6) {
    return thousandsDigits(num);
  }

  if (numSplit.length >= 7 && numSplit.length <= 9) {
    return millionsDigits(num);
  }

  if (numSplit.length >= 10 && numSplit.length <= 13) {
    return billionsDigits(num);
  }
};

var twoDigits = function(num) {
  var result = "";
  var divide;
  var difference;

  if (num < 20) {
    result = ones[num];
    return result;
  }

  divide = Math.floor(num / 10);
  difference = num % 10;

  for (var key in tens) {
    if (tens[divide]) {
      result = tens[divide];
    }
  }

  if (difference > 0) {
    result = result + " " + ones[difference];
  }

  return result;
};

var threeDigits = function(num) {
  var result = "";
  var divide;
  var difference;

  divide = Math.floor(num / 100);
  difference = num % 100;

  if (difference === 0) {
    result = ones[divide] + " " + places[0];
    return result;
  }

  result = ones[divide] + " " + places[0] + " " + twoDigits(difference);
  return result;
};

var thousandsDigits = function(num) {
  var result = "";
  var divide;
  var difference;

  divide = Math.floor(num / 1000);
  difference = num % 1000;

  if (divide < 20) {
    result = ones[divide];
  }

  if (divide >= 20 && divide < 100) {
    result = twoDigits(divide);
  }

  if (divide >= 100) {
    result = threeDigits(divide);
  }

  var diffSplit = difference.toString().split("");

  if (diffSplit.length === 1) {
    if (difference === 0) {
      result = result + " " + places[1];
      return result;
    }

    result = result + " " + places[1] + " " + ones[difference];
  } else if (diffSplit.length === 2) {
    result = result + " " + places[1] + " " + twoDigits(difference);
  } else if (diffSplit.length === 3) {
    result = result + " " + places[1] + " " + threeDigits(difference);
  }

  return result;
};

var millionsDigits = function(num) {
  var result = "";
  var divide;
  var difference;

  divide = Math.floor(num / 1000000);
  difference = num % 1000000;

  if (divide < 20) {
    result = ones[divide];
  }

  if (divide >= 20 && divide < 100) {
    result = twoDigits(divide);
  }

  if (divide >= 100) {
    result = threeDigits(divide);
  }

  var diffSplit = difference.toString().split("");
  console.log(divide, difference);

  if (diffSplit.length === 1) {
    if (difference === 0) {
      result = result + " " + places[2];
      return result;
    }

    result = result + " " + places[2] + " " + ones[difference];
  }

  if (diffSplit.length === 2) {
    result = result + " " + places[2] + " " + twoDigits(difference);
  }

  if (diffSplit.length === 3) {
    result = result + " " + places[2] + " " + threeDigits(difference);
  }

  if (diffSplit.length >= 4 && diffSplit.length <= 6) {
    result = result + " " + places[2] + " " + thousandsDigits(difference);
  }

  return result;
};

var billionsDigits = function(num) {
  var result = "";
  var divide;
  var difference;

  divide = Math.floor(num / 1000000000);
  difference = num % 1000000000;

  if (divide < 20) {
    result = ones[divide];
  }

  if (divide >= 20 && divide < 100) {
    result = twoDigits(divide);
  }

  if (divide >= 100) {
    result = threeDigits(divide);
  }

  var diffSplit = difference.toString().split("");

  if (diffSplit.length === 1) {
    if (difference === 0) {
      result = result + " " + places[3];
      return result;
    }

    result = result + " " + places[3] + " " + ones[difference];
  }

  if (diffSplit.length === 2) {
    result = result + " " + places[3] + " " + twoDigits(difference);
  }

  if (diffSplit.length === 3) {
    result = result + " " + places[3] + " " + threeDigits(difference);
  }

  if (diffSplit.length >= 4 && diffSplit.length <= 6) {
    result = result + " " + places[3] + " " + thousandsDigits(difference);
  }

  if (diffSplit.length >= 7) {
    result = result + " " + places[3] + " " + millionsDigits(difference);
  }

  return result;
};

//Recursion
var numberToWords = function(num) {
  const to19 = `One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen`.split(
      " "
    ),
    tens = `Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety`.split(" "),
    toBil = `Thousand Million Billion`.split(" ");
  let words = word(num);
  words = words.split(/\s+/).join(" ");
  return words ? words.trim() : "Zero";
  function word(n) {
    if (n < 20) return to19.slice(n - 1, n)[0] || "";
    if (n < 100) return tens[Math.trunc(n / 10) - 2] + " " + word(n % 10);
    if (n < 1000)
      return to19[Math.trunc(n / 100) - 1] + " Hundred " + word(n % 100);
    for (let i = 0, p = 1; i < toBil.length; p++, i++) {
      if (n < 1000 ** (p + 1)) {
        return word(n / 1000 ** p) + " " + toBil[i] + " " + word(n % 1000 ** p);
      }
    }
  }
};

// numberToWords(0); //"Zero"
// numberToWords(12); //"Twelve"
// numberToWords(123); //"One Hundred Twenty Three"
// numberToWords(4567); //"Four Thousand Five Hundred Sixty Seven"
// numberToWords(12345);
// numberToWords(198765);
// numberToWords(12334567);
numberToWords(1000010001);
