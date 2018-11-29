// Input: nums = [3,5,2,1,6,4]
// Output: One possible answer is [3,5,1,6,2,4]

var wiggleSort = function(nums) {
  var temp;

  for (var i = 0; i < nums.length; i++) {
    if (i % 2 === 0 && nums[i] <= nums[i + 1]) {
      continue;
    } else {
      //evaluate remaining values in array
      for (var j = i; j < nums.length; j++) {
        //swap a value with nums[i] that is greater than nums[i - 1]
        temp = nums[i];
        if (nums[j] >= temp) {
          nums[i] = nums[j];
          nums[j] = temp;
        }
      }
    }
    if (i % 2 !== 0 && nums[i] >= nums[i + 1]) {
      continue;
    } else {
      //evaluate remaining values in array
      for (var k = i; k < nums.length; k++) {
        //swap a value with nums[i] that is less than nums[i - 1]
        temp = nums[i];
        if (nums[k] <= temp) {
          nums[i] = nums[k];
          nums[k] = temp;
        }
      }
    }
  }
  return nums;
};

//Mapping to an object

var wiggleSort = function(array) {
  var map = {};
  var objKeys;

  for (var i = 0; i < array.length; i++) {
    map[array[i]] = map[array[i]] || 0;
    map[array[i]]++;
  }
  objKeys = Object.keys(obj);

  var currElem;
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      currElem = objKeys[0];
      if (map[currElem]) {
        array[i] = parseInt(currElem);
        map[currElem]--;
        if (obj[currElem] === 0) {
          objKeys.shift();
        }
      }
    } else if (i % 2 !== 0) {
      currElem = objKeys[objKeys.length - 1];
      if (map[currElem]) {
        array[i] = parseInt(currElem);
        map[currElem]--;
        if (map[currElem] === 0) {
          mapKeys.pop();
        }
      }
    }
  }
  return array;
};

//Sorting

var wiggleSortII = function(array) {
  array.sort((a, b) => a - b);
  var mid = Math.ceil(array.length / 2);
  var firstHalf = array.slice(0, mid);
  var secondHalf = array.slice(mid);

  for (var i = 0; i < array.length; i += 2) {
    array[i] = firstHalf.pop();
  }

  for (var j = 1; j < array.length; j += 2) {
    array[j] = secondHalf.pop();
  }

  return array;
};
