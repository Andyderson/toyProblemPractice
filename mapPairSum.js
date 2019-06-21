/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.map = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.map[key] = val;
  return null;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  var reg = new RegExp(`^${prefix}`);
  return Object.keys(this.map)
    .filter(key => reg.test(key))
    .map(key => this.map[key])
    .reduce((acc, curr) => curr + acc, 0);
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
