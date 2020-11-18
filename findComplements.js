var findComplements = (num) => {
    var binaryNum = num.toString(2).split('').map(item => {
        if (item == 0) {
            return 1
        } else if (item == 1) {
            return 0
        }
    }).join('');

    return parseInt(binaryNum, 2);

};

console.log(findComplements(5));