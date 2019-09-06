var fairCandySwap = function (A, B) {
    var aTotal = 0,
    var bTotal = 0;

    A.forEach(ele => {
        aTotal = aTotal + ele;
    });

    B.forEach(ele => {
        bTotal = bTotal + ele;
    });

    for (var i = 0; i < A.length; i++) {
        var res = A[i] + (bTotal - aTotal) / 2;

        for (var j = 0; j < B.length; j++) {
            if (B[j] === res) {
                return ([A[i], B[j]]);
            }
        }
    }
};