var shuffle = function (nums, n) {
    var array1 = nums.slice(0, (nums.length / 2));
    var array2 = nums.slice((nums.length / 2));
    var results = [];

    for (var i = 0; i < array1.length; i++) {
        results.push(array1[i]);
        results.push(array2[i]);
    }

    return results;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); //[2, 3, 5, 4, 1, 7]