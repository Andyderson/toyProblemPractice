var floodFill = function (image, sr, sc, newColor) {
    var startingColor = image[sc][sr];

    if (newColor === startingColor) {
        return image;
    }

    var recurse = function (x, y) {
        image[x][y] = newColor;

        if (x > 0 && image[x - 1][y] === startingColor) {
            recurse(x - 1, y);
        }

        if (y > 0 && image[x][y - 1] === startingColor) {
            recurse(x, y - 1);
        }

        if (x < image.length - 1 && image[x + 1][y] === startingColor) {
            recurse(x + 1, y);
        }

        if (y < image[0].length - 1 && image[x][y + 1] === startingColor) {
            recurse(x, y + 1);
        }
    };

    recurse(sr, sc);
    return image;
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)); // Output: [[2,2,2],[2,2,0],[2,0,1]]
console.log(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1))
console.log(floodFill([[0, 0, 0], [1, 0, 0]], 1, 0, 2)); //[[0,0,0],[2,0,0]]