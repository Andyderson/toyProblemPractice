var countSmaller = function (nums) {
    var results = [];
    var counter = 0;

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                counter++
            }
        }
        results.push(counter);
        counter = 0;
    }

    return results;
};