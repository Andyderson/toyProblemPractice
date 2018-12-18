var binarySearch = function(array, k, L, R) {
  if (L === undefined && R === undefined) {
    L = 0;
    R = array.length - 1;
  }

  if (R >= L) {
    var mid = L + (R - L) / 2;

    if (array[mid] === k) {
      return mid;
    } else if (array[mid] > k) {
      return binarySearch(array, k, L, mid - 1);
    } else {
      return binarySearch(array, k, mid + 1, R);
    }
  } else {
    return -1;
  }
};

binarySearch([1, 2, 3, 4, 10, 40, 44], 10);
