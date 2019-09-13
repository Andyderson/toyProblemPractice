// Create a timebased key-value store class TimeMap, that supports two operations.

// 1. set(string key, string value, int timestamp)

// Stores the key and value, along with the given timestamp.
// 2. get(string key, int timestamp)

// Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
// If there are multiple such values, it returns the one with the largest timestamp_prev.
// If there are no values, it returns the empty string ("").

// Input: inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
// Output: [null,null,"bar","bar",null,"bar2","bar2"]

// Explanation:   
// TimeMap kv;   
// kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1   
// kv.get("foo", 1);  // output "bar"   
// kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"   
// kv.set("foo", "bar2", 4);   
// kv.get("foo", 4); // output "bar2"   
// kv.get("foo", 5); //output "bar2"

/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
    this.storage = {};
    this.flag;
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    this.storage[key] = this.storage[key] || [];
    this.storage[key][timestamp] = value;
    console.log(this.storage);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (timestamp > this.storage[key].length - 1) {
        return this.storage[key][this.storage[key].length - 1];
    } else {
        var flag;

        for (var i = 0; i < this.storage[key].length; i++) {
            if (this.storage[key][i]) {
                flag = this.storage[key][i];
            }

            if (i === timestamp && !this.storage[key][timestamp]) {
                if (flag === undefined) {
                    return '';
                } else {
                    return flag;
                }
            }
        }
    }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

var kv = new TimeMap();

kv.set("foo", "bar", 2); // store the key "foo" and value "bar" along with timestamp = 1   
kv.get("foo", 1);
kv.set("foo", "chacha", 10);
kv.get("foo", 8);