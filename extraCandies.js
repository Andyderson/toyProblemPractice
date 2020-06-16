var kidsWithCandies = (candies, extraCandies) => {
    //     var copy = new Array(...candies);
    //     var highest = copy.sort((a, b) => b - a)[0];
    var highest = Math.max(...candies);
    var sum;
    var results = [];

    for (var i = 0; i < candies.length; i++) {
        sum = candies[i] + extraCandies;

        if (sum >= highest) {
            results.push('true')
        } else {
            results.push('false')
        }
    }

    return results;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); //[true, true, true, false, true]