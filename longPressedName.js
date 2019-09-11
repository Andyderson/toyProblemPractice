var isLongPressedName = function (name, typed) {
    var split = typed.split('');

    for (var i = 0; i < split.length; i++) {
        if (split[i] === name[i]) {
            continue;
        }
        if (split[i - 1] && split[i] === split[i - 1]) {
            split.splice(i, 1);
            i--;
        }
    }
    return name === typed.join('');
};