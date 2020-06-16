var minFlipsMonoIncr = function (S) {
    var count = 0;
    var compare;

    for (var i = 0; i < S.length; i++) {
        if (S.charAt(i) === '0') {
            count++;
        }
    }

    compare = count;

    for (var j = 0; j < S.length; j++) {
        if (S.charAt(j) === '0') {
            count--;
        } else {
            count++;
        }
        compare = Math.min(count, compare);
    }

    return compare;
};

console.log(minFlipsMonoIncr('00110')); //1
//"010110"
//"00011000"