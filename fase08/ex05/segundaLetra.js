function segundaLetra (arr) {
    var i = 0;
    var ii = 0;
    var array = [];
    var arrayFinal = [];
    
    while (i < arr.length) {
        array.push(arr[i].slice(1).toLowerCase());
        array.sort();
        i++;
    }
    while (ii < arr.length) {
        arrayFinal[array.indexOf(arr[ii].slice(1).toLowerCase())] = arr[ii];
        ii++;
    }
    return arrayFinal;
}