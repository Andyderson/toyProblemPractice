var numOfSubarrays = function (arr, k, threshold) {
    var count = 0;
    var subCount = 0;
    var subArray = [];
    var subAverage;

    for (var i = 0; i < arr.length; i++) {
        subArray.push(arr[i]);
        if (subArray.length === k) {
            subAverage = subArray.reduce((a, b) => a + b) / k;
            if (subAverage >= threshold) {
                count++;
            }
            subArray.shift();
        }
    }

    return count;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); //3


