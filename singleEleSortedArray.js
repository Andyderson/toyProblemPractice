var singleNonDuplicate = function (nums) {
    return nums.reduce((ele, a) => ele ^= a);
};