var replaceWords = function (dict, sentence) {
    var split = sentence.split(" ");

    for (ele of dict) {
        for (i = 0; i < split.length; i++) {
            if (split[i].slice(0, ele.length) === ele) {
                split[i] = ele;
            }
        }
    }

    return split.join(" ");
};