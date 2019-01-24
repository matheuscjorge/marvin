function primo (num) {
    if (num < 0){
    num = num* -1}
    
    arr = [];
    
    var i = 0;
    while (i <= num){
        i++;
        if (Number.isInteger(num/i))
        arr.push(i);
    }
    if (arr.length == 2)
    return "Sim";
    else
    return "Não";
}