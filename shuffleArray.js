class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  reset() {
    return this.nums;
  }

  shuffle() {
    var result = [...this.nums];
    var n = this.nums.length;
    for (let i = 0; i < n; i++) {
      var index = Math.floor(n * Math.random());
      var temp = result[i];
      result[i] = result[index];
      result[index] = temp;
    }
    return result;
  }
}
