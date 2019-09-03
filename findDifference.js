var findTheDifference = function (s, t) {
    var length = s.length >= t.length ? s : t;
    var length2 = length === t ? s : t

    for (var i = 0; i < length2.length; i++) {
        var char = length2.charAt(i);

        if (length.includes(char)) {
            length = length.replace(char, '');
        }
    }
    return length;
};