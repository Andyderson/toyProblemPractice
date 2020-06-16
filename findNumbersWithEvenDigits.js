var findNumbers = function (nums) {
    var count = 0;

    nums.filter(ele => {
        if (ele.toString().length % 2 === 0) {
            count++
        }
    })

    return count;
};