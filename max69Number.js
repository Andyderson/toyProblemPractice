var maximum69Number = (num) => {
    var values = [];
    numString = JSON.stringify(num).split('');

    if (!numString.includes('6')) {
        return num;
    }

    for (var i = 0; i < numString.length; i++) {
        if (numString[i] === '6') {
            numString[i] = '9'
            numValue = (Number(numString.join('')))
            values.push(numValue);
            numString = JSON.stringify(num).split('');
        }
    }

    return values.sort((a, b) => b - a)[0];
};

console.log(maximum69Number(9669)); //9969
console.log(maximum69Number(9999)); //9999