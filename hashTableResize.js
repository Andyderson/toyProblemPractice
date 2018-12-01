/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];

    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        storage[index][i][1] = value;
      }
    }

    storage[index].push([key, value]);

    if (storage.length >= 0.75 * storageLimit) {
      storageLimit = 2 * storageLimit;
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);

    for (var j = 0; j < storage[index].length; j++) {
      if (storage[index][j][0] === key) {
        return storage[index][j][1];
      }
    }
    return undefined;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];

    for (var k = 0; k < storage[index].length; k++) {
      if (storage[index][k][0] === key) {
        return storage[index].splice(k, 1);
      }
    }

    if (storage.length <= 0.25 * storageLimit && storageLimit !== 4) {
      storageLimit = 0.5 * storageLimit;
    }
    return undefined;
  };
  return result;
};

var result = makeHashTable();
result.insert(0, "hello");
result.insert(1, "wow");
result.insert(2, "weeeeee");
result.insert(3, "test");
result.remove(0);
result.retrieve(0);
result.remove(2);
result.retrieve(2);
result.retrieve(3);
