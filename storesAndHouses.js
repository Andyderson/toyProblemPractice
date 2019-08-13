// You are given 2 arrays representing integer locations of stores and houses (each location in this problem is one-dementional). For each house, find the store closest to it.
// Return an integer array result where result[i] should denote the location of the store closest to the i-th house. If many stores are equidistant from a particular house, choose the store with the smallest numerical location. Note that there may be multiple stores and houses at the same location.

// Input: houses = [5, 10, 17], stores = [1, 5, 20, 11, 16]
// Output: [5, 11, 16]
// Explanation:
// The closest store to the house at location 5 is the store at the same location.
// The closest store to the house at location 10 is the store at the location 11.
// The closest store to the house at location 17 is the store at the location 16.

// Input: houses = [2, 4, 2], stores = [5, 1, 2, 3]
// Output: [2, 3, 2]

// Input: houses = [4, 8, 1, 1], stores = [5, 3, 1, 2, 6]
// Output: [3, 6, 1, 1]

var storesAndHouses = (houses, stores) => {
  var results = [];

  stores.sort((a, b) => a - b);

  for (var i = 0; i < houses.length; i++) {
    var minDistance = Infinity;
    var tempDistance = 0;
    var storeNumber;

    for (var j = 0; j < stores.length; j++) {
      var difference = Math.abs(houses[i] - stores[j]);

      if (difference === 0) {
        storeNumber = stores[j];
        break;
      }

      tempDistance = difference;

      if (tempDistance < minDistance) {
        minDistance = tempDistance;
        storeNumber = stores[j];
      }
    }
    results.push(storeNumber);
  }

  return results;
};

console.log(storesAndHouses([5, 10, 17], [1, 5, 20, 11, 16])); //[5, 11, 16]
console.log(storesAndHouses([2, 4, 2], [5, 1, 2, 3])); //[2, 3, 2]
console.log(storesAndHouses([4, 8, 1, 1], [5, 3, 1, 2, 6])); //[3, 6, 1, 1]
