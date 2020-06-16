var createTargetArray = function (nums, index) {
    var results = [];

    for (var i = 0; i < nums.length; i++) {
        results.splice(index[i], 0, nums[i]);
    }

    return results;
};