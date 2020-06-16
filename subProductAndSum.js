var subtractProductAndSum = (n) => {
    var product = 1;
    var sum = 0;
    var split = JSON.stringify(n).split('');

    //     var numbers = split.map((ele) => {
    //         return Number(ele);
    //     })

    for (var i = 0; i < split.length; i++) {
        product = product * Number(split[i]);
        sum = sum + Number(split[i]);
    }

    return product - sum;
};

console.log(subtractProductAndSum(234)); //15
