var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.storage = {};
  this.temp = [];
};

LRUCache.prototype.get = function(key) {
  if (this.storage[key]) {
    return this.storage[key];
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function(key, value) {
  if (!this.storage[key]) {
    if (this.storage.size === this.capacity) {
      var remove = this.temp.shift();
      this.storage.delete(remove);
    } else {
      this.storage[key] = value;
      this.get(key);
    }
  }
};

cache = new LRUCache(5);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
// cache.get(4);       // returns 4
