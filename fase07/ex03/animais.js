function animais (arr) {
    var i = 0;
    while (i < arr.length) {
        delete arr[i].altura;
        arr[i].idade = i + 1
        i++;
    }
    return arr
}