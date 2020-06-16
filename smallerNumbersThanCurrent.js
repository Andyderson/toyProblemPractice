var smallerNumbersThanCurrent = (nums) => {
    var results = [];
    var counter = 0;

    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                counter++
            }
        }
        results.push(counter);
        counter = 0;
    }

    return results;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); //[4, 0, 1, 1, 3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); 