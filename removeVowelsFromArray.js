var vowelRemover = (string) => {
    var vowels = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u',
        A: 'A',
        E: 'E',
        I: 'I',
        O: 'O',
        U: 'U'
    };

    var result = '';

    for (var i = 0; i <= string.length; i++) {
        if (string[i] !== vowels[string[i]]) {
            result = result + string[i];
        } else {
            continue
        }
    }

    return result;
};

console.log(vowelRemover('Mississippi')); //Msssspp