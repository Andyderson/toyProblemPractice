// Given a dictionary, each element of the dictionary is found, in order.

// var dict = ['a', 'b', 'c', 'd'];

// Examples:
// var string = 'abaeeecefdeaebced' // returns 'aebced'
// var string = 'abc' // returns false

var shortestPanalphabeticWindow = function(array, string) {
  if (string.length < array.length) {
    return false;
  }

  var pointer = 0;
  var subString = "";
  var answer;
  var index;
  var newString;
  var useString;
  var length = string.length;

  for (var i = 0; i < length; i++) {
    if (string[i] === array[pointer]) {
      pointer++;
      subString = subString + string[i];
    } else {
      subString = subString + string[i];
    }

    if (pointer === array.length) {
      if (!answer || answer.length > sublength) {
        answer = subString;
      }

      index = string.indexOf(array[0]);

      if (index !== undefined) {
        pointer = 0;
        subString = "";
        newString = string.slice(index + 1);

        indexNew = newString.indexOf(array[0]);

        useString = newString.slice(indexNew);
        string = useString;
        length = useString.length;
        i = -1;
      }
    }
  }
  return answer;
};

shortestPanalphabeticWindow(["a", "b", "c", "d"], "abaeeecefdeaebced"); //'aebced'
shortestPanalphabeticWindow(["a", "b", "c", "d"], "abc"); //false
shortestPanalphabeticWindow(["a", "b", "a", "a"], "abaeeecefdeaebcaaba"); //'aebcaa'
