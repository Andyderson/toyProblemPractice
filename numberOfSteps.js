var numberOfSteps = (num) => {
    var steps = 0;

    var divider = (n) => {
        if (n % 2 !== 0) {
            n = n - 1;
            steps = steps + 1;
        }

        if (n % 2 === 0) {
            n = n / 2;
            steps = steps + 1;
        }

        if (n === 0) {
            return steps;
        } else {
            divider(n);
        }
    }

    divider(num);
    return steps;
};

console.log(numberOfSteps(14));