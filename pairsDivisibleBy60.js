var numPairsDivisibleBy60 = function (time) {
    var count = 0;
    var sum = 0;
    var div;

    for (var i = 0; i < time.length; i++) {
        for (var j = i + 1; j < time.length; j++) {
            sum = time[i] + time[j];
            div = sum / 60;
            if (Number.isInteger(div)) {
                count++;
            }
        }
    }

    return count;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40])); //3