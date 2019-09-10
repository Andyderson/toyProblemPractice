var combine = function (n, k) {
    var results = [];
    var combos = [];
    var temp = [1];

    while (temp.length) {
        for (let i = temp.pop(); i <= n; i++) {
            combos.push(i);
            if (i !== n) {
                temp.push(i + 1);
            }

            if (combos.length === k) {
                results.push([...combos]);
            }
        }
        combos.pop();
        combos.pop();
    }

    return results;
};