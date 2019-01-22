function soletrar (str) {
    var y = [];
    for (i = 0; i <= (str.length - 1); i++) {
     y[i] = str.substr(i,1);
    }
    return y;
}   